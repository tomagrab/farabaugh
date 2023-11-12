import Carousel from "@/components/UI/Carousel/Carousel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
            <Carousel
              images={[`/images/driveway-1.jpg`, `/images/driveway-2.jpg`]}
            />
          </div>
          <Link href="/book">
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
