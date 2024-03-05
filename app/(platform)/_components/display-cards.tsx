import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import localfont from "next/font/local";
import { cn } from "@/lib/utils";

const titleFont = localfont({
  src: "../../../public/fonts/Roboto-Medium.ttf",
});
const bodyFont = localfont({
  src: "../../../public/fonts/Roboto-Light.ttf",
});
export const DisplayCards = () => {
  return (
    <div className="flex items-center justify-around pt-8">
      <Card className="w-[300px]">
        <CardContent className="p-4">
          <div className="mb-3">
            <Image
              src="/images/horn1.jpg"
              width={300}
              height={350}
              className="object-cover shadow-md rounded-md"
              alt="horn"
            />
          </div>
          <h3 className={cn("text-xl text-center mb-2", titleFont.className)}>
            Well prepared horns.
          </h3>
          <p className={cn("text-sm text-center ", bodyFont.className)}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            velit, eum id aut laboriosam earum.
          </p>
        </CardContent>
      </Card>

      <Card className="w-[300px]">
        <CardContent className="p-4">
          <div className="mb-3">
            <Image
              src="/images/horn1.jpg"
              width={300}
              height={350}
              className="object-cover shadow-md rounded-md"
              alt="horn"
            />
          </div>
          <h3 className={cn("text-xl text-center mb-2", titleFont.className)}>
            Bull horns for homes.
          </h3>
          <p className={cn("text-sm text-center ", bodyFont.className)}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            velit, eum id aut laboriosam earum.
          </p>
        </CardContent>
      </Card>

      <Card className="w-[300px]">
        <CardContent className="p-4">
          <div className="mb-3">
            <Image
              src="/images/horn1.jpg"
              width={300}
              height={350}
              className="object-cover shadow-md rounded-md"
              alt="horn"
            />
          </div>
          <h3 className={cn("text-xl text-center mb-2", titleFont.className)}>
            Customised horns.
          </h3>
          <p className={cn("text-sm text-center ", bodyFont.className)}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            velit, eum id aut laboriosam earum.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
