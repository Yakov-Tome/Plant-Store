import React from "react";

const Header = ({ title, text }) => {
  return (
    <section className="relative bg-[url('/bg/2.png')] bg-bottom bg-no-repeat bg-cover bg-white/30 backdrop-blur-lg text-(--leaf-new) font-mono">
      <div className="relative pt-14 pb-10 sm:pt-10 sm:pb-12 lg:pt-22 lg:pb-14">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="font-heading tracking-tight text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              {title}
            </h1>

            <p className="text-lg max-w-xl mx-auto text-(--leaf-new) opacity-90">
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
