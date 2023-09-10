"use client";
import {
  FacebookIcon,
  TwitterIcon,
  PhoneIcon,
  InstagramIcon,
  LocationIcon,
} from "@/lib/icons";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function YangtzeFooter() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(
      "Your message has been sent successfully. We will get back to you as soon as possible."
    );
  };
  return (
    <footer className=" bg-zinc-900 text-white">
      <div>
        <div className="p-4 flex flex-col sm:flex-row justify-between max-w-7xl mx-auto overflow-hidden">
          <div className="max-w-xs sm:w-1/3 pb-5 pt-5">
            <div>
              <h3 className="font-bold">Find us</h3>
              <ul className="text-sm leading-7">
                <li className="pt-2 text-zinc-400  flex items-start gap-2">
                  <LocationIcon
                    fill="rgb(161 161 170 / var(--tw-text-opacity))"
                    height={18}
                    width={18}
                    className="mt-1"
                  />
                  <a href="#">
                    213 Sansbury Road, <br />
                    North Bridge, WA 2333
                  </a>
                </li>
                <li className="text-zinc-400 flex items-center gap-2">
                  <PhoneIcon
                    fill="rgb(161 161 170 / var(--tw-text-opacity))"
                    height={18}
                    width={18}
                  />{" "}
                  <a href="#" className="">
                    044 9793 934
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold pt-6">Opening Hours</h3>
              <ul className="text-sm leading-7">
                <li className="pt-2 text-zinc-400">Sun: 12PM - 4PM</li>
                <li className="text-zinc-400">Sat: 8AM - 8PM</li>
                <li className="text-zinc-400">Weekdays: 11AM - 5PM</li>
              </ul>
            </div>
            <div className="flex py-5">
              <ul className="flex gap-4">
                <li>
                  <Link href="#">
                    <FacebookIcon fill="#fff" stroke="" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <InstagramIcon
                      strokeWidth={0.1}
                      stroke="#fff"
                      fill="#fff"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <TwitterIcon strokeWidth={1.8} stroke="#fff" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-1/3 pb-5 pt-5">
            <h3 className="font-bold mb-3">Location</h3>
            <Link href="#">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5534.777217846567!2d115.88576450809684!3d-31.922541461414895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32bb6d7c249d2d%3A0xc6611db3c3214959!2sALDI!5e0!3m2!1sen!2sau!4v1694266143742!5m2!1sen!2sau"
                style={{ width: 300, border: 0, height: 270, borderRadius: 10 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Link>
          </div>
          <div className="w-full sm:w-1/3 pb-5 pt-5">
            <h3 className="font-bold mb-3">Quick book</h3>
            <div>
              <form onSubmit={handleSubmit}>
                <Input
                  type="Full name"
                  placeholder="Your name*"
                  className="mb-2 bg-white text-black"
                  required
                />
                <Input
                  type="email"
                  placeholder="Email*"
                  className="mb-2 bg-white text-black"
                  required
                />
                <Input
                  type="phone"
                  placeholder="0449 895 925"
                  className="mb-2 bg-white text-black"
                  required
                />
                <Textarea
                  placeholder="Number of people, Time of Arribal*"
                  className="mb-2 bg-white text-black"
                  required
                />
                <Button variant="secondary">Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
