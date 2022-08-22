import React from "react";
import { BsShieldShaded } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient-2 ">
          Dienstleistungen
          <br />
          für Sie die wir immer weiter verbessern
        </h1>
        <p className="text-left my-2 text-gradient-3  md:w-9/12 w-11/12 text-semibold">
          Die beste Wahl für den Kauf und Verkauf Ihrer Kryptowährungen, mit den
          verschiedenen sicher, schnell und freundlichen Dienstleistungen, die
          wir anbieten.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title={"Sicherheit garantiert" }
          icon={<BsShieldShaded fontSize={21} className="text-white" />}
          subtitle="Die Sicherheit ist garantiert. Wir bewahren immer die Privatsphäre und die Qualität unserer Produkte"
        />
        <ServiceCard
          color="bg-[#A0Cf3e]"
          title="Beste Wechselkurse"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Durch unsere Weltweite dezentralisierte Netzwerkverbindungen, können wir Ihnen den besten Wechselkurs für Ihre Produkte bereitstellen"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Ultra schnelle Transaktionen"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="so schnell wie möglich, ohne dass Sie Ihre Geldmünzen verlieren"
        />
      </div>
    </div>
  </div>
);

export default Services;
