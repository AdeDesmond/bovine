import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav>
      <ul className="flex items-center text-[#FEF9F5]">
        <Button size="sm" variant="ghost">
          <Link href="/">Home</Link>
        </Button>
        <Button size="sm" variant="ghost">
          <Link href="/">About Us</Link>
        </Button>
        <Button size="sm" variant="ghost">
          <Link href="/">Products</Link>
        </Button>
        <Button size="sm" variant="ghost">
          <Link href="/">Services</Link>
        </Button>
        <Button size="sm" variant="ghost">
          <Link href="/">Contact Us</Link>
        </Button>
      </ul>
    </nav>
  );
};
