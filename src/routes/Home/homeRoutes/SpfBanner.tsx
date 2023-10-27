import React from "react";
import { spfBanner } from "../../../assets/img";

const SpfBanner = () => {
  return (
    <div
      className="banner"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backgroundImage: `url(${spfBanner})`,
      }}
    >
      <div className="container">
        <div className="banner__wrapper grid place-items-center pt-32 pl-96">
          <h2 className="font-medium text-4xl max-w-xs">
            Встречайте весну вместе с нами
          </h2>
          <p className="text-xl max-w-xs mt-8">
            Попробуйте новую коллекцию ухаживающих средств для лица с SPF
            защитой
          </p>
          <button className="text-sm py-3 px-7 border-solid mt-10">Наша история</button>
        </div>
      </div>
    </div>
  );
};

export default SpfBanner;
