import { Button } from "@/components/ui/button";

export default function NileHero() {
  return (
    <div>
      <div className="relative h-96 py-72">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/hero.jpg')`,
            opacity: 0.7,
          }}
        ></div>

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-extrabold text-center tracking-tight">
            Taste you will never forget.
          </h1>
          <p className="mt-4 text-lg text-center mb-10">
            Cafe with artisanal coffee, pastries, and inviting ambiance.
          </p>
          <Button variant="outline">Book a table now</Button>
        </div>
      </div>
    </div>
  );
}
