import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import localfont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

const textFont = localfont({
  src: "../../../public/fonts/Roboto-Bold.ttf",
});

const buttonFont = localfont({
  src: "../../../public/fonts/Roboto-Thin.ttf",
});

const infoFont = localfont({
  src: "../../../public/fonts/Roboto-Medium.ttf",
});

export const DisplayLearnMore = () => {
  return (
    <div className="w-full h-[20vh] p-4 gap-y-4 flex items-center flex-col">
      <div>
        <Image
          src="/images/bovine.jpg"
          alt="horn logo"
          width={100}
          height={100}
          className="object-cover rounded-md"
        />
      </div>
      <p className={cn("text-lg text-[#56362D]", textFont.className)}>
        Ready to be serve? Start browsing our available horn collection or learn
        more about our processes today.
      </p>
      <div className="flex items-center gap-x-1">
        <Button
          variant="ghost"
          size="sm"
          className={cn("border", buttonFont.className)}
          asChild
        >
          <Link href="/">Browse our horns</Link>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "bg-[#CAA78B] w-[9rem] hover:bg-[#56362D] hover:text-[#FEF9F5]",
            infoFont.className
          )}
          asChild
        >
          <Link href="/" className="text-[#FEF9F5]">
            More Info!
          </Link>
        </Button>
      </div>
    </div>
  );
};
