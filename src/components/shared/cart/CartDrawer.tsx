/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCartStore } from "@/lib/store";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import CartItemQuantityControl from "./CartItemQuantityControl";

export default function CartDrawer() {
  const { cart, isCartOpen, closeCart } = useCartStore();
  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : "auto";
  }, [isCartOpen]);

  return (
    <div
      className={` fixed inset-0 z-[999999] transition-opacity duration-300 ${
        isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer Panel */}
      <aside
        className={`w-full max-w-[480px] fixed right-0 top-0 h-full bg-white shadow-xl transition-all duration-500 ease-in-out will-change-transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className=" flex flex-col p-[16px] h-[100%] overflow-scroll">
            <div className="relative flex items-center justify-between mt-4 border-b border-gray-400">
              <h2 className="w-[100%] text-[25px] text-[#1c2e36]  font-[700] text-center">
                Your Cart
              </h2>
              <button
                className="absolute right-0 bottom-0 cursor-pointer"
                onClick={closeCart}
              >
                <X />
              </button>
            </div>

            <div className="flex-1">
              {cart?.lines?.edges?.length ? (
                cart.lines.edges.map(({ node }: any) => (
                  <div
                    key={node.id}
                    className="flex gap-4 py-[24px] border-b  border-gray-400"
                  >
                    <div className="flex relative sm:max-w-[149px] sm:w-[100%] sm:h-[149px] w-[100%] h-[116] max-w-[116px]">
                      <Image
                        src={
                          node?.merchandise?.image?.url
                            ? node?.merchandise?.image?.url
                            : node?.merchandise?.product?.images?.edges?.[0]
                                ?.node?.url
                            ? node?.merchandise?.product?.images?.edges?.[0]
                                ?.node?.url
                            : "/images/fallback.webp"
                        }
                        alt={node?.merchandise?.title || "Product"}
                        fill
                        className="w-[100%] h-[100%] object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-between">
                      <div className="w-[100%] flex items-start">
                        <div className="ps-[8px] pb-[16px] pe-[16px]">
                          <p className="text-[16px]  text-[#161515]">
                            {node.merchandise?.product?.title}
                          </p>
                          <p className="mt-[8px] text-[12px]  text-[#161515] ">
                            Size: {node?.merchandise?.title}
                          </p>
                        </div>
                        <p className="text-[16px]  text-[#161515]">
                          ${node?.cost?.totalAmount?.amount}
                        </p>
                      </div>
                      <CartItemQuantityControl item={node} />
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 mt-10">
                  Your cart is empty.
                </p>
              )}
            </div>
          </div>
          {cart?.lines?.edges?.length > 0 && (
            <div className="py-[24px] px-[15px] h-[186px]">
              <p className="text-[16px]  flex justify-between">
                <span className="font-bold">Subtotal</span>
                <span className="!font-semibold">
                  ${cart?.cost?.subtotalAmount?.amount}
                </span>
              </p>
              <Link
                href={cart.checkoutUrl || "#"}
                className="w-full h-[60px] flex items-center justify-center mt-[12px] bg-[#161515] text-white text-[20px] border border-[#161515] cursor-pointer uppercase hover:bg-[white] hover:text-[#161515] transition-all duration-300 ease-in-out"
              >
                Checkout
              </Link>
              <p className="mt-[4px] text-[14px] text-center flex w-[100%] items-center justify-center gap-[2px] flex-wrap">
                Pay in 4 interest free payments of{" "}
                <span className="font-bold">$17.50</span>
                <Image
                  src={
                    "https://www.rsvlts.com/cdn/shop/t/1092/assets/logo-afterpay-black.png?v=46154031822746708921750166995"
                  }
                  alt="AfterPay Logo"
                  width={75}
                  height={12}
                  className="h-[15px] w-[75px] ml-[2px]"
                />
              </p>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
