import React from "react";
import LOGO from "../../assets/logo.png";
export const AuthInfoSection = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1 items-center">
        <img src={LOGO} alt="ZenGram" className="w-24" />
        <h1 className="text-4xl text-lightBlue font-black">Zengram</h1>
      </div>
      <p className="text-2xl text-lightBlue text-opacity-95 text-bold">
        ZenGram - Connect and share with music enthusiasts
      </p>
    </div>
  );
};
