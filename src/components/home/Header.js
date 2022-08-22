import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from 'react-toastify'
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../../context/TransactionContext";
import  Loader  from "../Loader";
import { shortenAddress } from "../../utils/shortenAddress";
import React from "react";
import { BsShieldShaded } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";


const commonsStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-indigo-900 text-sm font-light text-teal-200 ";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);


function Header() {
  
  const { connectWallet, currentAccount, formData, handleChange, sendTransaction, isLoading } = useContext(TransactionContext);
  

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };
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
            title={"Sicherheit garantiert"}
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
  
    return (
      <main className="mt-8 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-24">
        <div className="flex w-full justify-center items-center">
          <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
            <div className="flex flex-1 justify-start flex-col mf:mr-10">
              <h1 className="text-3xl sm:text-5xl font-bold text-lime text-gradient-2 py-1">
                Senden Sie Crypto <br /> in die ganze Welt
              </h1>
              <p className="text-lime-400 text-left m-5 font-light md:w-9/12 w-11/12 text-base">
                Entdecken Sie die Welt der Kryptowährungen und senden Sie
                Kryptowährungen an jeden und überall,
              </p>
              {!currentAccount && (
                <button
                  type="button"
                  onClick={connectWallet}
                  className=" flex flex-row justify-center items-center my-5 p-3 rounded-full cursor-pointer   transition ease-in-out delay-150 bg-[#26caaa] transform hover:-translate-y-1  hover:bg-white duration-300 animate-pulse">
                  <AiFillPlayCircle className="text-white mr-2" />
                  <p className="text-[#4537e3] text-base">
                    Mit der Brieftasche verbinden
                  </p>
                </button>
              )}
              <div className="grid sm:grid-cols-3 grid-cols-2 w-full margin-top-10">
                <div
                  className={`rounded-tl-2xl bg-zinc-600 hover:-translate-y-1 ${commonsStyles}`}>
                  Realisierbarkeit
                </div>
                <div className={`hover:-translate-y-1 ${commonsStyles}`}>
                  Sicherheit
                </div>
                <div
                  className={`sm:rounded-tr-2xl  bg-amber-400  hover:-translate-y-1 text-violet-900 text-semibold ${commonsStyles}`}>
                  Ethereum
                </div>
                <div
                  className={`sm:rounded-bl-2xl  bg-amber-400 hover:translate-y-1 text-violet-900 text-semibold ${commonsStyles}`}>
                  Web 3.0
                </div>
                <div className={`hover:translate-y-1 ${commonsStyles}`}>
                  Niedrige Gebühren
                </div>
                <div
                  className={`rounded-br-2xl   bg-zinc-600 transform hover:translate-y-1 ${commonsStyles}`}>
                  Blockchain
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
              <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism">
                <div className="flex justify-between flex-col w-full h-full">
                  <div className="flex justify-between items-start">
                    <div className=" w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                      <SiEthereum fontSize={25} color="white" />
                    </div>
                    <BsInfoCircle fontSize={17} color="white" />
                  </div>
                  <div>
                    <p className="text-white font-light text-sm">
                      {shortenAddress(currentAccount)}
                    </p>
                    <p className="text-white font-semibold text-lg mt-1">
                      Ethereum
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                <Input
                  placeholder="senden zu"
                  name="addressTo"
                  type="text"
                  handleChange={handleChange}
                />
                <Input
                  placeholder="Betrag (ETH)"
                  name="amount"
                  type="number"
                  handleChange={handleChange}
                />
                <Input
                  placeholder="Schlüsselwort (Gif)"
                  name="keyword"
                  type="text"
                  handleChange={handleChange}
                />
                <Input
                  placeholder="Nachricht schreiben"
                  name="message"
                  type="text"
                  handleChange={handleChange}
                />
                <div className="h-[1px] w-full bg-gray-400 my-2" />

                {isLoading ? (
                  <Loader />
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer">
                    Senden
                  </button>
                )}
              </div>
            </div>
          </div>
          
        </div><Services />
      </main>
    );
}

export default Header