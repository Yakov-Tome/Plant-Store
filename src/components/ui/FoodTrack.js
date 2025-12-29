"use client";

import Image from "next/image";
import React, { useState } from "react";

function FoodTrack() {
  return (
    <div className="relative">
      <section className="relative min-h-[80vh] w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-[url('/nature-product-backdrop-green-backyard.jpg')] bg-fixed bg-cover bg-top bg-no-repeat">
        <div className="relative h-full w-full">
          <img
            src="/foodtrack.png"
            alt="Food Truck"
            className="hidden lg:block w-[80%] h-[80%] object-cover m-4"
          />

          <div className="flex items-center justify-center lg:absolute bottom-0 left-0 w-full p-10">
            <div className="bg-black/40 backdrop-blur-md p-8 rounded-3xl max-w-xl font-mono text-white">
              <h5 className="text-3xl font-semibold mb-3">
                קפה בסמטה
              </h5>

              <p className="text-sm font-semibold mb-5">
                הפודטראק של המשתלה בנווה צדק
              </p>

              <p className="text-base leading-relaxed mb-4">
                זה המקום לעצור בו לרגע, לקחת נשימה,  
                וליהנות מקפה איכותי, נקניקיות חמות ומשקאות קרים,
                בלב אחת הפינות הכי רגועות בעיר.
              </p>

              <p className="text-base leading-relaxed mb-4">
                קפה בסמטה נולד מתוך אהבה לפשטות,  
                לטעמים טובים ולאווירה נעימה
                חוויה קלילה שמשתלבת באופן טבעי עם הביקור במשתלה.
              </p>

              <p className="text-base leading-relaxed">
                בין אם הגעתם לקנות צמחים, להסתובב קצת או סתם לעבור בדרך
                מחכה לכם כאן עצירה קטנה שעושה טוב.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center font-mono">
                <div className="rounded-2xl p-8 max-w-xl w-full">
                  <div className="bg-white/30 p-4 backdrop-blur-2xl">
                    <Image
                        src="/cafebasimta.png"
                        alt="Cafe Basimta"
                        width={900}
                        height={900}
                        className="rounded-3xl object-cover shadow-lg hover:scale-102 transition-transform duration-300"
                  />
                  </div>
              </div>
        </div>
      </section>
    </div>
  );
}

export default FoodTrack;
