import { FacebookIcon, TwitterIcon, PhoneIcon, InstagramIcon } from "@/lib/icons";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
    <div>
        <div className="flex justify-between max-w-5xl mx-auto py-12 overflow-hidden sm:px-6 lg:px-0">
          <div>
            <h3 className="font-bold">Menu</h3>
            <ul className="text-sm">
              <li className="pt-2 pb-2 text-zinc-400">
                <a href="#">Takeaway Menu</a>
              </li>
              <li className="pt-2 pb-2 text-zinc-400">
                <a href="#">Dine In Menu</a>
              </li>
              <li className="pt-2 pb-2 text-zinc-400">
                <a href="#">Dessert</a>
              </li>
              <li className="pt-2 pb-2 text-zinc-400">
                <a href="#">Special</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Find us</h3>
            <ul className="text-sm">
              <li className="pt-2 pb-2 text-zinc-400">
                <a href="#">
                  213 Sansbury Road, <br />
                  North Bridge, WA 2333
                </a>
              </li>
              <li className="pt-2 pb-2 text-zinc-400">
                <a href="#">Phone: 044 9793 934</a>
              </li>
              {/* <li className="pt-2 pb-2 text-zinc-400">
                <a href="#"><FacebookIcon fill="#fff" stroke="#fff"/></a> - <a href="#"> <InstagramIcon fill="#fff" stroke="#fff"/></a> -{" "}
                <a href="#"><TwitterIcon stroke="#fff"/></a>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="font-bold">More Information</h3>
            <ul className="text-sm">
              <li className="pt-2 pb-2 text-zinc-400">Sun: 12PM - 4PM</li>
              <li className="pt-2 pb-2 text-zinc-400">Sat: 8AM - 8PM</li>
              <li className="pt-2 pb-2 text-zinc-400">Weekdays: 11AM - 5PM</li>
            </ul>
          </div>
        </div>
        <div className="h-1 bg-zinc-400 w-full max-w-5xl mx-auto"></div>
        <div className="flex justify-between max-w-5xl mx-auto pt-5 pb-5 sm:px-6 lg:px-0">
            <h3>&copy; 2023 Speed Cafe & Restaurant</h3>
            <ul className="flex gap-4">
                <li><FacebookIcon fill="#fff" stroke="#fff"/></li>
                <li><InstagramIcon fill="#fff" stroke="#fff"/></li> 
                <li><TwitterIcon stroke="#fff"/></li>
            </ul>
        </div>
      </div>
    </footer>
  );
}


