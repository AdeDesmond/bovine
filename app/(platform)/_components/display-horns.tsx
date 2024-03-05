import Image from "next/image";
import localfont from "next/font/local";
import { cn } from "@/lib/utils";

const titleFont = localfont({
  src: "../../../public/fonts/Roboto-Medium.ttf",
});
const bodyFont = localfont({
  src: "../../../public/fonts/Roboto-Light.ttf",
});

export const DisplayHorns = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 mt-[5rem] bg-white p-10 gap-10">
      <div className=" col-span-2 row-span-2 relative h-[30rem] ">
        <Image
          src="/images/horn3.jpg"
          alt="horn"
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="w-[250px]">
        <h3 className={cn("text-xl text-center", titleFont.className)}>
          Our Horns.
        </h3>
        <p className={cn("text-sm text-center mt-2 ", bodyFont.className)}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          beatae voluptate tempora? Voluptatibus, voluptatum perspiciatis
          laudantium debitis rem commodi beatae, ab, dolore repellat numquam
          itaque veritatis. Fugit eligendi inventore maxime.
        </p>
      </div>
      <div className="w-[250px]">
        <h3 className={cn("text-xl text-center", titleFont.className)}>
          Our Sourcing process.
        </h3>
        <p className={cn("text-sm text-center mt-2 ", bodyFont.className)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          doloremque facere, optio modi, ad assumenda at hic labore qui
          molestias eveniet atque adipisci? Tenetur molestiae corporis repellat
          ipsam sed amet.
        </p>
      </div>
      <div className="w-[250px]">
        <h3 className={cn("text-xl text-center", titleFont.className)}>
          Who we are.
        </h3>
        <p className={cn("text-sm text-center mt-2 ", bodyFont.className)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit
          ducimus nisi quibusdam officiis cum, magni provident incidunt
          praesentium voluptatem id ab excepturi itaque, saepe voluptatum
          exercitationem inventore labore sed?
        </p>
      </div>
      <div className="w-[250px]">
        <h3 className={cn("text-xl text-center", titleFont.className)}>
          Our Home.
        </h3>
        <p className={cn("text-sm text-center mt-2 ", bodyFont.className)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deserunt
          corporis, harum recusandae pariatur ducimus assumenda magni porro!
          Nobis molestias tempore recusandae vero, quam amet omnis totam
          distinctio pariatur assumenda?
        </p>
      </div>
    </div>
  );
};
