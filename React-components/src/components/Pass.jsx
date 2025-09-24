import React, { useState } from "react";

const TicketSelectorCard = ({
  name,
  description,
  price,
  discountPercent,
  validity,
}) => {
  const [quantity, setQuantity] = useState(1);
  const finalPrice = (price * (1 - discountPercent / 100)).toFixed(0);

  return (
    <div className="w-[95vw] sm:w-[80vw] md:w-[60vw] max-w-3xl mx-auto border border-black rounded-2xl bg-white/70 shadow-md p-6 transition-all">
      {/* Upper Part */}
      <div>
        <h2 className="text-3xl font-semibold text-gray-800">{name}</h2>
        <div className="text-base text-gray-600 mt-1">
          {description} on {validity}
        </div>
      </div>
      {/* Lower Part */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-300 mt-6 flex-col sm:flex-row gap-4 sm:gap-0">
        {/* Left: Price and Discount */}
        <div>
          <div className="flex items-center gap-3 text-xl mb-2">
            <span className="line-through text-gray-500">&#8377;{price}</span>
            <span className="bg-green-200 text-green-900 rounded-md px-2 py-0.5 text-base font-medium border border-green-500">
              {discountPercent}% OFF
            </span>
          </div>
          <div className="text-lg text-gray-700 font-normal">
            Final Price - <span className="font-semibold">&#8377;{finalPrice}/-</span>
          </div>
        </div>
        {/* Right: Quantity Selector */}
        <div className="border border-black rounded-xl px-4 py-2 flex items-center bg-white">
          <button
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            className="text-2xl px-2 focus:outline-none"
          >-</button>
          <span className="mx-3 text-2xl">{quantity}</span>
          <button
            onClick={() => setQuantity(q => q + 1)}
            className="text-2xl px-2 focus:outline-none"
          >+</button>
        </div>
      </div>
    </div>
  );
};

// Usage Example
export default function Pass() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-2">
      <TicketSelectorCard
        name="Stag Male"
        description="Valid for single male entry"
        price={800}
        discountPercent={20}
        validity="28 Sep 2025"
      />
    </div>
  );
}
