import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import localfont from "next/font/local";
import {
  CallIncoming,
  Facebook,
  Instagram,
  Send,
  Twitch,
  Whatsapp,
} from "iconsax-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const textFont = localfont({
  src: "../../../public/fonts/Roboto-Bold.ttf",
});

const buttonFont = localfont({
  src: "../../../public/fonts/Roboto-Thin.ttf",
});

const infoFont = localfont({
  src: "../../../public/fonts/Roboto-Medium.ttf",
});

export const Footer = () => {
  return (
    <footer className="w-full h-[24vh] bg-[#56362D]  p-4">
      <div className="w-full flex justify-between">
        <div className="flex flex-col gap-y-2 ">
          <Logo />
          <Separator className="text-[#CAA78B]" color="#CAA78B" />
          <p className={cn("text-[#CAA78B]", buttonFont.className)}>
            This will be the address
          </p>
          <p className={cn("text-[#CAA78B]", buttonFont.className)}>
            Francistown
          </p>
          <p className={cn("text-[#CAA78B]", buttonFont.className)}>Botswana</p>
          <p
            className={cn(
              "flex items-center text-[#CAA78B] gap-x-1",
              buttonFont.className
            )}
          >
            <CallIncoming size="20" />
            <span className={cn(infoFont.className)}>1800-000-0000</span>
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h3 className={cn("text-xl text-[#CAA78B]", textFont.className)}>
            Useful links
          </h3>
          <Separator className="text-[#CAA78B]" color="#CAA78B" />
          <ul
            className={cn("flex flex-col text-[#CAA78B]", buttonFont.className)}
          >
            <Button variant="ghost" size="sm" className="" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" size="sm" className="" asChild>
              <Link href="/">About Us</Link>
            </Button>
            <Button variant="ghost" size="sm" className="" asChild>
              <Link href="/">Contact Us</Link>
            </Button>
            <Button variant="ghost" size="sm" className="" asChild>
              <Link href="/">Services</Link>
            </Button>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-y-2 ">
          <h3 className={cn("text-xl text-[#CAA78B]", textFont.className)}>
            Newsletter
          </h3>
          <Separator className="text-[#CAA78B]" color="#CAA78B" />
          <p className={cn("text-sm text-[#CAA78B]", buttonFont.className)}>
            Get the latest offers and updates
          </p>
          <div className="flex items-center">
            <input type="text" name="" id="" className="h-8 rounded-l-md" />
            <Button
              className="bg-[#CAA78B] rounded-l-none h-8"
              variant="ghost"
              size="sm"
            >
              <Send />
            </Button>
          </div>
          <div className="flex items-center">
            <Button className="hover:bg-transparent" variant="ghost" asChild>
              <Link href="/" className="">
                <Facebook
                  size="20"
                  className=" text-[#CAA78B] hover:text-white hover:scale-105 transition"
                />
              </Link>
            </Button>
            <Button className="hover:bg-transparent" variant="ghost" asChild>
              <Link href="/">
                <Twitch
                  size="20"
                  className=" text-[#CAA78B] hover:text-white hover:scale-105 transition"
                />
              </Link>
            </Button>
            <Button className="hover:bg-transparent" variant="ghost" asChild>
              <Link href="/">
                <Instagram
                  size="20"
                  className=" text-[#CAA78B] hover:text-white hover:scale-105 transition"
                />
              </Link>
            </Button>
            <Button className="hover:bg-transparent" variant="ghost" asChild>
              <Link href="/">
                <Whatsapp
                  size="20"
                  className=" text-[#CAA78B] hover:text-white hover:scale-105 transition"
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4 ">
        <p className={cn("text-[#FEF9F5]", buttonFont.className)}>
          <span className="text-xs">@</span>
          Copywrite Bovine Commodities All rights Reserved.
        </p>
      </div>
    </footer>
  );
};
