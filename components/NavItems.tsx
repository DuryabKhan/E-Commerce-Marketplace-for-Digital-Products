"use client";

import { PRODUCT_CATEGORY } from "@/config";
import React, { useState } from "react";
import NavItem from "./NavItem";

const NavItems = () => {
  const [activeIndex, setActiveInex] = useState<null | number>(null);
  const isAnyOpen = activeIndex !== null;
  return (
    <div className="flex gap-4 h-full">
      {PRODUCT_CATEGORY.map((category, index) => {
        const handleOpen = () => {
          if (activeIndex === index) {
            setActiveInex(null);
          } else {
            setActiveInex(index);
          }
        };
        const isOpen = index === activeIndex;
        return (
          <NavItem
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
            key={category.value}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
