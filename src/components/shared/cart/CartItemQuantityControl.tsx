/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCartStore } from "@/lib/store";
import { useState } from "react";

export default function CartItemQuantityControl({ item }: { item: any }) {
  const { removeFromCart, updateQuantity } = useCartStore();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      updateQuantity(item.id, newQty);
    }
  };

  const handleIncrease = () => {
    const newQty = quantity + 1;
    setQuantity(newQty);
    updateQuantity(item.id, newQty);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="w-[100%]  flex items-center justify-between">
      <div className="w-[100px] h-[31px] flex gap-[4px] border border-black p-[4px] items-center">
        <button onClick={handleDecrease} className="text-lg font-medium cursor-pointer">−</button>
        <span className="w-[100%] text-center text-lg">{quantity}</span>
        <button onClick={handleIncrease} className="text-lg font-medium cursor-pointer">+</button>
      </div>

      <button
        onClick={handleRemove}
        className="text-[14px] text-[#161515] underline hover:text-red-600 ml-4 cursor-pointer"
      >
        Remove
      </button>
    </div>
  );
}
