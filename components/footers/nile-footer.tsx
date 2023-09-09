import { FacebookIcon, TwitterIcon, PhoneIcon, InstagramIcon, LocationIcon } from "@/lib/icons";
import Link from "next/link";

export default function NileFooter() {
  return (
    <footer className=" bg-zinc-900 text-white">
    <div>
        <div className="p-4 flex flex-col sm:flex-row justify-between max-w-7xl mx-auto overflow-hidden">
          <div className="w-full sm:w-1/3 pb-5 pt-5">
            <h3 className="font-bold">Menu</h3>
            <ul className="text-sm leading-7">
              <li className="pt-2 text-zinc-400">
                <a href="#">Takeaway Menu</a>
              </li>
              <li className=" text-zinc-400">
                <a href="#">Dine In Menu</a>
              </li>
              <li className=" text-zinc-400">
                <a href="#">Dessert</a>
              </li>
              <li className=" text-zinc-400">
                <a href="#">Special</a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3 pb-5 pt-5">
            <h3 className="font-bold">Find us</h3>
            <ul className="text-sm leading-7">
              <li className="pt-2 text-zinc-400  flex items-start gap-2">
                <LocationIcon  fill="rgb(161 161 170 / var(--tw-text-opacity))" height={18} width={18} className="mt-1"/>
                <a href="#">
                  213 Sansbury Road, <br />
                  North Bridge, WA 2333
                </a>
              </li>
              <li className="text-zinc-400 flex items-center gap-2">
              <PhoneIcon fill="rgb(161 161 170 / var(--tw-text-opacity))" height={18} width={18}/> <a href="#" className="">044 9793 934</a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3 pb-5 pt-5">
            <h3 className="font-bold">More Information</h3>
            <ul className="text-sm leading-7">
              <li className="pt-2 text-zinc-400">Sun: 12PM - 4PM</li>
              <li className="text-zinc-400">Sat: 8AM - 8PM</li>
              <li className="text-zinc-400">Weekdays: 11AM - 5PM</li>
            </ul>
          </div>
        </div>
        <div className="h-px bg-zinc-400 w-full"></div>
        <div className="flex justify-between max-w-7xl mx-auto p-4 text-sm">
            <h3>&copy; 2023 Speed Cafe & Restaurant</h3>
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


