import Carousel from "@/components/UI/Carousel/Carousel";
import Link from "next/link";
import driveway1 from "../../public/images/driveway-1.jpg";
import driveway2 from "../../public/images/driveway-2.jpg";
import driveway3 from "../../public/images/driveway-3.jpg";
import driveway4 from "../../public/images/driveway-4.jpg";

export default function Home() {
  const images = [driveway1, driveway2, driveway3, driveway4];
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <div className=" text-center p-10">
          <h2 className="text-3xl font-bold mb-4">
            Ready for a Sparkling Clean Home?
          </h2>
          <p className="mb-6">
            Book our pressure washing services today and enjoy a pristine clean!
          </p>
          <div>
            <Carousel images={images} />
          </div>
          <Link href="/book">
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
