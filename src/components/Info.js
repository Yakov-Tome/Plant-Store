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
    <main className="w-full overflow-x-hidden font-mono">
      {/* Section */}
      <section className="py-4 lg:py-20 bg-[url('/green-wall-empty-room-with-wooden-floor.jpg')] bg-cover bg-center bg-fixed">
        <div className="container mx-auto px-4">
          {/* Glass card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8">
            <div className="flex flex-wrap text-white">
              
              {/* Left */}
              <div className="w-full lg:w-1/2 px-2">
                <div className="max-w-xl lg:mx-auto">
                  <h2 className="mb-12 text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-linear-to-r from-gray-100 via-gray-200 to-gray-300">
                    המשתלה במבט מהיר
                  </h2>

                  <div className="flex flex-wrap -mb-10 lg:-mb-12">
                    {text.map((item, index) => (
                      <div
                        key={item.id}
                        className="w-full md:w-1/2 px-4 mb-10 lg:mb-12"
                      >
                        <div className="inline-flex items-center gap-2">
                          <span className="mb-2 flex items-center justify-center w-12 h-12 rounded-full bg-white text-(--leaf-new) text-2xl font-medium">
                          {index + 1}
                          </span>
                          <strong className="block mb-1 text-2xl lg:text-3xl">
                            {item.title}
                          </strong>
                        </div>

                        <p className="text-lg leading-relaxed">

                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="w-full lg:w-1/2 px-8 mt-12 lg:mt-0">
                <div className="relative h-96 lg:h-full">
                  <div className="absolute inset-0 bg-linear-to-r from-green-950 via-green-800 to-green-950 opacity-20 blur-3xl rounded-2xl" />
                  
                  <div className="relative h-full p-1 border border-white/20 rounded-2xl">
                    <img
                      src="/man-examining-plants-sunlit-greenhouse.jpg"
                      alt="Greenhouse"
                      className="w-full h-full object-cover rounded-xl border border-neutral-800"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Info;
