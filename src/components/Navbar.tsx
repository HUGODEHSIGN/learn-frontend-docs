"use client";

import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Sidebar from "./Sidebar";

import pageData from "../app/pageData.json" assert { type: 'json'};

export default function Navbar() {
    const categories = pageData.categories;

    const renderMenu: () => any = () => {
        return categories.map(({ category, pages }) => (
            <NavigationMenuItem key={ category }>
                <NavigationMenuTrigger>{ category }</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 w-[487px]">
                        { pages.map(({ page, description, link }) => (
                            <ListItem href={ link } key={ page } title={ page }>{ description }</ListItem>
                        ))}
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
        ))
    }

  return (
    <nav className="p-2 flex flex-row">
        <Sidebar/>
        <h1 className='py-2 px-3 font-bold'><Link href='/'>HUGO DEHSIGN</Link></h1>
      <NavigationMenu className='hidden sm:block'>
        <NavigationMenuList>
            {renderMenu()}
          
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
