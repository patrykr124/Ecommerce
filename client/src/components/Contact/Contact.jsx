import React from "react";
import MaxWithWrapper from "../MaxWithWrapper";
import { Facebook, Instagram, Twitch, Youtube } from "lucide-react";

function Contact() {
  return (
    <MaxWithWrapper>
      <div className="contact border-t border-black py-10 flex flex-row">
        <div className="left flex flex-row gap-10 flex-1">
          <h3 className="font-thin">Dołącz do naszego newslettera:</h3>
        </div>
        <div className="center flex flex-1 justify-center">
          <form className="flex gap-4">
            <input className="border-b border-black outline-none" type="text" placeholder="Twój adres email" />
            <button className="border border-black px-2 py-1">  
              Zapisz się!
            </button>
          </form>
        </div>
        <div className="right flex-1">
          <div className="icons flex gap-4 justify-end items-center">
            <Facebook className="cursor-pointer" />
            <Instagram className="cursor-pointer" />
            <Twitch className="cursor-pointer" />
            <Youtube className="cursor-pointer" size={30} strokeWidth={1.6} />
          </div>
        </div>
      </div>
    </MaxWithWrapper>
  );
}

export default Contact;
