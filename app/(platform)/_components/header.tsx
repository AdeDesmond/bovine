import { cn } from "@/lib/utils";
import { NavBar } from "./nav-bar";
import { Logo } from "@/components/logo";
import localfont from "next/font/local";

const headerFont = localfont({
  src: "../../../public/fonts/Roboto-Regular.ttf",
});
export const Header = () => {
  return (
    <header
      className={cn(
        "h-14 bg-[#CAA78B] flex items-center justify-between px-2",
        headerFont.className
      )}
    >
      <Logo />
      <NavBar />
    </header>
  );
};
