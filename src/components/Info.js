import React from "react";

function Info() {
  const text = [
    {
      id: "1",
      title: "החנות",
      text: "משתלה עירונית במרכז תל אביב, משלבת טבע עם קצב עירוני. אצלנו תמצאו צמחים, אדניות וייעוץ מקצועי—במרחק הליכה מהבית.",
    },
    {
      id: "2",
      title: "הצמחים",
      text: "אוסף צמחים מותאם לאקלים החם ולמרפסות קטנות. כל שתיל נבחר בקפידה כדי לשגשג בעיר ולדרוש פחות תחזוקה.",
    },
    {
      id: "3",
      title: "למה משתלה בעיר?",
      text: "מרחב ירוק בין בניינים, עם כל מה שצריך לגינון ביתי—מהדרכה ועד מוצרים מקצועיים. הטבע מגיע אל העיר, לא להפך.",
    },
    {
      id: "4",
      title: "המוצרים",
      text: "אוסף צמחים מותאם לאקלים החם ולמרפסות קטנות. כל שתיל נבחר בקפידה כדי לשגשג בעיר ולדרוש פחות תחזוקה.",
    },
  ];

  return (
    <section className="py-20 bg-[url('/green-wall-empty-room-with-wooden-floor.jpg')] bg-cover bg-center bg-fixed">
      <div className="container px-4 mx-auto bg-white/10 p-8 rounded-3xl bg-opacity-10 backdrop-blur-md border border-white border-opacity-10">
        <div className="flex flex-wrap -mx-8 text-white">
          <div className="w-full lg:w-1/2 px-8">
            <div className="max-w-xl lg:mx-auto">
              <h2 className="font-mono mb-12 text-3xl md:text-4xl md:leading-tight lg:text-5xl font-medium text-transparent bg-clip-text bg-linear-to-r from-gray-100 via-gray-200 to-gray-300">
                המשתלה במבט מהיר
              </h2>

              <div className="flex flex-wrap -mx-4 -mb-10 lg:-mb-12">
                {text.map((item, index) => (
                  <div
                    key={item.id}
                    className="w-full md:w-1/2 px-4 mb-10 lg:mb-12"
                  >
                    <span className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-white text-(--leaf-new) font-medium text-2xl leading-loose transition-all duration-200 hover:shadow-lg font-sans">
                      {index + 1}
                    </span>

                    <p className="text-lg leading-relaxed font-sans text-white">
                      <strong className="block mb-1">{item.title}</strong>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-8 mb-12 lg:mb-0">
            <div className="h-96 lg:h-full relative">
              <div className="absolute inset-0 opacity-20 bg-linear-to-r from-green-950 via-green-800 to-green-950 rounded-2xl filter blur-3xl"></div>
              <div className="h-full p-1 border border-white border-opacity-20 rounded-2xl">
                <img
                  className="relative w-full h-full object-cover rounded-xl border border-neutral-800"
                  src="/man-examining-plants-sunlit-greenhouse.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
