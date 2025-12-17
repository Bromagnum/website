"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const menuItems = [
  {
    title: "Products",
    href: "/products",
    description: "Browse all products",
  },
  {
    title: "Categories",
    href: "/categories",
    description: "Product categories",
  },
  {
    title: "Orders",
    href: "/orders",
    description: "Your orders",
  },
]

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="font-bold">
          MyShop
        </Link>

        {/* Navigation */}
        <NavigationMenu>
          <NavigationMenuList>
            {/* Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-300px gap-3 p-4">
                  {menuItems.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link href={item.href}>
                          <div className="font-medium">{item.title}</div>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Normal link */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/cart">Cart</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/login">Login</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}
