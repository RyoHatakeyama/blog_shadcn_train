"use client";

import Link from "next/link";
import { NavItem } from "@/types";
import MobileNav from "./mobile-nav";
import { useState } from "react";

interface MainNavProps {
  items: NavItem[];
  children?: React.ReactNode;
}

export default function MainNav({ items }: MainNavProps) {
  const [shoMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="flex items-center md:gap-10">
      <Link href={"/"} className="hidden md:flex items-center space-x-2">
        <span className="font-bold hidden sm:inline-block">Post Writer</span>
      </Link>
      <nav className="md:flex gap-6 hidden">
        {items?.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.href}
              className="text-lg sm:text-sm font-medium hover:text-foreground/80"
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
      <button
        className="md:hidden"
        onClick={() => setShowMobileMenu(!shoMobileMenu)}
      >
        <span>メニュー</span>
      </button>
      {shoMobileMenu && <MobileNav items={items} />}
    </div>
  );
}
