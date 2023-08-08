import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import Image from "next/image";
import logo from "/public/Logo.webp";
import Fotter from "./Fotter";

const Footer = () => {
  return (
    <main>
    <div className="wrapper lg:mx-auto md:mx-10 mx-3 gap-y-6 my-28 ml-5 flex lg:flex-row flex-col">
      <section className="flex flex-col flex-1 mr-20">
        
        <div>
          <Image src={logo} alt="logo" width={200} height={200}/>
        </div>

        <p className="text-lg text-gray-600 font-normal w-80 mt-5">
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>

        <div className="flex gap-x-5 mt-6">
          <div className="bg-gray-200 p-4 rounded-xl">
          <Facebook />
          </div>
          <div className="bg-gray-200 p-4 rounded-xl">
          <Twitter />
          </div>
          <div className="bg-gray-200 p-4 rounded-xl">
          <Linkedin />
          </div>
          <div className="bg-gray-200 p-4 rounded-xl">
          <Github />
          </div>
        </div>
      </section>


      <section className="flex-1">
       <h1 className="text-2xl font-bold text-gray-700">Company</h1>
       <p className="text-lg mt-4 text-gray-600 font-normal">Abouts</p>
       <p className="text-lg mt-2 text-gray-600 font-normal">Terms of Use</p>
       <p className="text-lg mt-2 text-gray-600 font-normal">Privacy Policy</p>
       <p className="text-lg mt-2 text-gray-600 font-normal">How it Works</p>
       <p className="text-lg mt-2 text-gray-600 font-normal">Contact Us</p>
      </section>

      <section className="flex-1">
       <h1 className="text-2xl font-bold text-gray-700">Support</h1>
       <p className="text-lg mt-4 text-gray-600 font-normal">Support Carrer</p>
       <p className="text-lg mt-2 text-gray-600 font-normal">24h Service</p>
       <p className="text-lg mt-2 text-gray-600 font-normal">Quick Chat</p>
      </section>
      
      <section className="flex-1">
       <h1 className="text-2xl font-bold text-gray-700">Contact</h1>
       <p className="text-lg mt-4 text-gray-600 font-normal">Whatsapp</p>
       <p className="text-lg mt-2 text-gray-600 font-normal">Support 24h</p>
      </section>

    </div>
     <Fotter/>
    </main>
  );
};

export default Footer;
