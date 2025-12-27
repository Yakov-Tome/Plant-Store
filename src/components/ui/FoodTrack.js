import Image from "next/image";
import React from "react";

function FoodTrack() {
  return (
    <div className="relative">
      <section className="relative min-h-[80vh] w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-[url('/nature-product-backdrop-green-backyard.jpg')] bg-cover bg-top bg-no-repeat">
        <div className="relative h-full w-full ">
          <img
            src="/foodtrack.png"
            alt="hero"
            className="hidden lg:block w-[80%] h-[80%] object-cover m-4"
          />

          <div className="flex items-center justify-center lg:absolute bottom-0 left-0 w-full p-10">
            <div className="bg-black/40 backdrop-blur-md p-8 rounded-3xl max-w-xl font-mono">
              <h5 className="text-3xl text-white font-semibold mb-2">
                משאית הפודטראק של המשתלה
              </h5>

              <span className="block text-sm text-white font-semibold mb-4">
                <p>ברוכים הבאים לפינה הטעימה של המשתלה.</p>
                <p>
                  בין הירוק והאווירה הרגועה מחכה לכם משאית האוכל שלנו עם טעמים
                  שתרצו לטעום שוב.
                </p>
                <p>מקום מושלם להפסקה קצרה במהלך הביקור.</p>
              </span>

              <p className="text-xl text-white leading-relaxed">מה מחכה לכם?</p>

              <p>
                קפה איכותי, נקניקיות טריות, משקאות קרים וחוויה בלב הצמחים.
                המשאית ממוקמת במרכז המשתלה ומזמינה אתכם ליהנות ממשהו קטן וטוב
                בכל רגע.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center p-10 font-mono">
          <Image
            src="/foodmenu.png"
            alt="Food Truck"
            width={500}
            height={500}
          />
        </div>
      </section>
    </div>
  );
}

export default FoodTrack;
