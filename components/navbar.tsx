"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="flex items-center h-14 px-4 md:px-6 w-full">
      <Link href="#" className="mr-6 flex items-center" prefetch={false}>
        <span>Videothèque</span>
      </Link>
      <nav className="flex-1 hidden md:flex justify-center">
        <Link
          href="#"
          className="mx-2.5 inline-flex items-center rounded-md text-sm font-medium [&:hover]:bg-gray-100 [&:hover]:text-gray-900 transition-colors"
          prefetch={false}
        >
          Films
        </Link>
        <Link
          href="#"
          className="mx-2.5 inline-flex items-center rounded-md text-sm font-medium [&:hover]:bg-gray-100 [&:hover]:text-gray-900 transition-colors"
          prefetch={false}
        >
          Séries
        </Link>
        <Link
          href="#"
          className="mx-2.5 inline-flex items-center rounded-md text-sm font-medium [&:hover]:bg-gray-100 [&:hover]:text-gray-900 transition-colors"
          prefetch={false}
        >
          Streaming
        </Link>
      </nav>
      <div className="ml-auto flex items-center space-x-4">
        <Button variant="outline" size="sm">
          Action
        </Button>
      </div>
    </header>
  );
}
