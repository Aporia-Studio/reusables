import { FacebookIcon, TwitterIcon, PhoneIcon, InstagramIcon, LocationIcon } from "@/lib/icons";
import Link from "next/link";

export default function AmazonFooter() {
  return (
    <footer className=" bg-zinc-900 text-white">
    <div>
        <div className="h-px bg-zinc-400 w-full"></div>
        <div className="flex justify-between max-w-7xl mx-auto p-4 text-sm">
            <h3>&copy; 2023 💯 <span className="text-white font-semibold">RESUABLES</span> </h3>
            <ul className="flex gap-4">
                <li><Link href="#"><FacebookIcon fill="#fff" stroke=""/></Link></li>
                <li><Link href="#"><InstagramIcon strokeWidth={0.1} stroke="#fff" fill="#fff" /></Link></li>
                <li><Link href="#"><TwitterIcon strokeWidth={1.8}  stroke="#fff"/></Link></li>
            </ul>
        </div>
      </div>
    </footer>
  );
}


