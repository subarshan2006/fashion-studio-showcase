import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import g7 from "@/assets/g7.jpg";
import g8 from "@/assets/g8.jpg";
import g9 from "@/assets/g9.jpg";
import g10 from "@/assets/g10.jpg";

const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10];

export function Marquee() {
  // duplicate for seamless loop
  const loop = [...images, ...images];
  return (
    <div className="relative overflow-hidden no-scrollbar w-full py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex gap-5 marquee-track w-max">
        {loop.map((src, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-[220px] sm:w-[260px] md:w-[300px] aspect-[3/4] overflow-hidden rounded-2xl group"
          >
            <img
              src={src}
              alt={`Achievement ${(i % 10) + 1}`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
          </div>
        ))}
      </div>
    </div>
  );
}
