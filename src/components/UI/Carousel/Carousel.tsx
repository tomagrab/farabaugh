import Image from "next/image";

type CarouselProps = {
  images: string[];
};

export default function Carousel({ images }: CarouselProps) {
  return (
    <div className="flex flex-col items-center my-4">
      <div className="h-96 carousel carousel-vertical rounded-box">
        {images.map((image, index) => (
          <div key={index} className="carousel-item h-full">
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              height={640}
              width={360}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
