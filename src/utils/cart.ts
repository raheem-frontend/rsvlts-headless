/* eslint-disable @typescript-eslint/no-explicit-any */
import { ADD_TO_CART, CREATE_CART, GET_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "@/lib/mutations/cart.mutations";
import { shopifyClient } from "../lib/shopify";


export async function getOrCreateCart() {
  let cartId = localStorage.getItem("shopify_cart_id");
  if (!cartId) {
    const response: any = await shopifyClient.request(CREATE_CART);
    cartId = response.cartCreate.cart.id;
    localStorage.setItem("shopify_cart_id", cartId);
  }
  return cartId;
}

export async function addToCart(variantId, quantity = 1) {
  let cartId = localStorage.getItem("shopify_cart_id");

  // Create a new cart if not exists
  if (!cartId) {
    const res:any = await shopifyClient.request(CREATE_CART);
    cartId = res.cartCreate.cart.id;
    localStorage.setItem("shopify_cart_id", cartId);
  }

  // Add the product variant to cart
  const res:any = await shopifyClient.request(ADD_TO_CART, {
    cartId,
    lines: [{ merchandiseId: variantId, quantity }],
  });

  console.log("🚀 ~ addToCart ~ res:", res)
  return res.cartLinesAdd.cart;
}

export async function removeFromCart(lineId) {
  const cartId = localStorage.getItem("shopify_cart_id");
  if (!cartId) return;
  const response:any = await shopifyClient.request(REMOVE_FROM_CART, {
    cartId,
    lineIds: [lineId],
  });
  return response.cartLinesRemove.cart;
}

export async function fetchCartById(cartId) {
  const response:any = await shopifyClient.request(GET_CART, { cartId });
  return response.cart;
}

export async function updateCartLineQuantity(cartId, lineId, quantity) {
  try {
    const variables = {
      cartId,
      lines: [{ id: lineId, quantity: parseInt(quantity) }],
    };

    const response: any = await shopifyClient.request(UPDATE_CART_QUANTITY, variables);
    console.log("🚀 ~ updateCartLineQuantity ~ response:", response)

    if (response.cartLinesUpdate.userErrors.length > 0) {
      console.error("Update failed:", response.cartLinesUpdate.userErrors);

      // Optional: Handle expired cart case
      if (
        response.cartLinesUpdate.userErrors.some((err) =>
          err.message.includes("does not exist")
        )
      ) {
        localStorage.removeItem("shopify_cart_id");
        console.warn("🛒 Cart expired. Forcing a new cart to be created.");
        // Optionally: re-initialize cart
      }

      return null;
    }

    return response.cartLinesUpdate.cart;
  } catch (err) {
    console.error("Update failed due to network or server issue", err);
    return null;
  }
}

