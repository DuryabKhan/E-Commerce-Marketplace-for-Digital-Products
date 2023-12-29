"use client";

import { PRODUCT_CATEGORY } from "@/config";
import React, { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const NavItems = () => {
  const [activeIndex, setActiveInex] = useState<null | number>(null);
  const isAnyOpen = activeIndex !== null;
  const navRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveInex(null)
      }
    }
      document.addEventListener("keydown", handler);
    return() => {
      document.removeEventListener("keydown", handler);
    }
  }, [])
  
  useOnClickOutside(navRef, ()=> setActiveInex(null));

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
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
