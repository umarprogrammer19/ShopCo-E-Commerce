"use client";

import React from "react";
import { Product } from "@/types/product.types";

const AddToCartBtn = ({ data }: { data: Product & { quantity: number } }) => {
  return (
    <button
      type="button"
      className="bg-black w-full ml-3 sm:ml-5 rounded-full h-11 md:h-[52px] text-sm sm:text-base text-white hover:bg-black/80 transition-all"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;
