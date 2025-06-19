/* eslint-disable @typescript-eslint/no-explicit-any */
// cartStore.js
import { create } from "zustand";
import { REMOVE_FROM_CART } from "./mutations/cart.mutations";
import {
  getOrCreateCart,
  addToCart as addToShopifyCart,
  fetchCartById,
  updateCartLineQuantity,
} from "@/utils/cart";
import { shopifyClient } from "./shopify";

type CartState = {
  cart: any;
  cartId: string | null;
  loading: boolean;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  initializeCart: () => Promise<void>;
  fetchCart: () => Promise<void>;
  addToCart: (variantId: string, quantity?: number) => Promise<void>;
  removeFromCart: (lineId: string) => Promise<void>;
  updateQuantity: (lineId: string, quantity: number) => Promise<void>;
};

export const useCartStore = create<CartState>((set, get) => ({
  cart: null,
  cartId: null,
  loading: false,
  isCartOpen: false,
  openCart: () => {
    console.log("first", get().isCartOpen);
    set({ isCartOpen: true });
  },
  closeCart: () => set({ isCartOpen: false }),

  initializeCart: async () => {
    const cartId = await getOrCreateCart();
    set({ cartId });
    const cart = await fetchCartById(cartId);
    set({ cart });
  },

  fetchCart: async () => {
    const { cartId } = get();
    if (!cartId) return;
    const cart = await fetchCartById(cartId);
    set({ cart });
  },

  addToCart: async (variantId, quantity = 1) => {
    const { cartId } = get();
    if (!cartId) return;
    set({ loading: true });
    try {
      const updatedCart = await addToShopifyCart(variantId, quantity);
      set({ cart: updatedCart });
    } finally {
      set({ loading: false });
    }
  },

  removeFromCart: async (lineId) => {
    const cartId = get().cart?.id;
    if (!cartId || !lineId) return;

    set({ loading: true });

    try {
      const response: any = await shopifyClient.request(REMOVE_FROM_CART, {
        cartId,
        lineIds: [lineId],
      });

      set({ cart: response.cartLinesRemove.cart, loading: false });
    } catch (error) {
      console.error("Remove from cart failed", error);
      set({ loading: false });
    }
  },
  updateQuantity: async (lineId, quantity) => {
    const { cartId } = get();
    if (!cartId || !lineId) return;
    const updatedCart = await updateCartLineQuantity(cartId, lineId, quantity);
    if (updatedCart) {
      set({ cart: updatedCart });
    }
  },
}));
