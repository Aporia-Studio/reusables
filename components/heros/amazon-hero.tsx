import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/lib/icons";
export default function AmazonHero() {
    return (
      <div>
        <div className="flex max-w-7xl justify-between items-center p-10 m-auto">
          {/* Left Column */}
          <div className="w-1/2">
            <h1 className="text-5xl font-bold tracking-tighter">Welcome to Our Cafe</h1>
            <p className="mt-4 text-lg mb-10">Discover the finest coffee and pastries in a cozy, welcoming atmosphere.</p>
            <Button>EXPLORE SERVICES </Button>
          </div>
  
          {/* Right Column */}
          <div className="w-1/2 p-20 hidden sm:block md:block">
            <Image
                src="/hero3.jpg"
                alt="Cafe Interior"
                width={600}
                height={600}    
                className="rounded-lg"
            />
          </div>
        </div>
      </div>
    );
  }