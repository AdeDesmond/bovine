import { cn } from "@/lib/utils";
import { CallIncoming } from "iconsax-react";
import localfont from "next/font/local";

const AboveHeaderFont = localfont({
  src: "../../../public/fonts/Roboto-Thin.ttf",
});

export const AboveHeader = () => {
  return (
    <div
      className={cn(
        "flex items-center justify-between bg-[#56362D] h-8 px-2 ",
        AboveHeaderFont.className
      )}
    >
      <p className="text-sm text-stone-300/85">
        We are serving internationally.
      </p>
      <div className="flex items-center gap-x-4">
        <p className="flex items-center gap-x-1 text-stone-300/85 text-sm ">
          <CallIncoming size="20" />
          <span>+(8399)-(389239232)</span>
        </p>

        <p className="text-stone-300/85 text-sm">info@email.com</p>
      </div>
    </div>
  );
};
