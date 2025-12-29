import React from "react";

function Hero() {
  return (
    <div>
      <div
        className="hero min-h-100 lg:min-h-150 bg-center bg-cover"
        style={{
          backgroundImage: "url(/mixed-cacti-succulents-tiny-pots.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center bg-white/10 backdrop-blur-xl p-10 rounded-2xl m-4 lg:m-0">
          <div className="max-w-md lg:min-w-3xl">
            <h1 className="mb-5 text-4xl lg:text-5xl font-bold font-mono">
              הטבע מתחיל כאן
            </h1>
            <p className="mb-5 font-sans text-2xl">
              צמחים, עצים וירק לכל בית וגינה באיכות גבוהה, עם ליווי מקצועי ואהבה
              לאדמה.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
