import React from "react";

function ConsultantPage() {
  return (
    <div>
      <AstroCard />
    </div>
  );
}

export default ConsultantPage;

export function AstroCard() {
  return (
    <div className=" bg-white rounded-2xl shadow-lg md:p-[40px] p-[20px] grid lg:grid-cols-[2fr_1.5fr] md:grid-cols-1 grid-cols-1 gap-6  lg:mx-[44px] md:mx-[34px] md:my-[16px] mt-[70px] mx-[20px]">
      {/* Left section */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex items-start gap-4 ">
          {/* Avatar */}
          <div className="flex flex-col items-center gap-2">
            <div className="lg:w-[232px] lg:h-[232px]  md:w-[150px] md:h-[150px]   w-[120px] h-[120px] rounded-full bg-[#EEC2FF] flex items-center justify-center">
              <div className="lg:w-[232px] lg:h-[232px] md:w-[150px] md:h-[150px] w-[120px] h-[120px] rounded-full bg-primary" />
            </div>
            <button className=" text-primary text-lg font-normal hover:underline mt-1">
              Follow+
            </button>
          </div>

          {/* Info */}
          <div className="flex-1">
            <h2 className="md:text-3xl text-xl font-medium text-secondary">
              Suprio Karmakar
            </h2>
            <p className="md:text-xl text-lg text-secondary mb-1">Vedic</p>
            <p className=" text-sm text-secondary">Bengali, English, Hindi</p>
            <p className="text-sm text-secondary">Exp: 15 Years</p>

            {/* Rating */}
            <div className="flex flex-col items-start  mt-2.5">
              <div className="text-primary text-xl leading-none">★★★★★</div>
              <span className="text-xs text-primary font-normal">
                1031 reviews
              </span>
            </div>

            {/* Buttons */}
            <div className="flex items-center mt-4">
              <button className=" text-xs  text-primary bg-primary/30 transitio max-w-[76px] font-semibold w-full h-[30px] min-h-[30px] flex items-center justify-center">
                ₹199
              </button>
              <button className=" text-xs  bg-primary text-white hover:bg-primary/80 transition max-w-[76px] w-full h-[30px] min-h-[30px] flex items-center justify-center">
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Follow */}

        {/* Description */}
        <p className="text-sm text-black text-justify">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </p>
      </div>

      {/* Right image section */}
      <div className="w-full  overflow-hidden bg-linear-to-br from-indigo-900 to-purple-900 flex items-center justify-center h-[300px] ">
        <img
          src="/astro-banner.jpg"
          alt="Astro Book"
          className="w-full h-full object-cover opacity-90"
        />
      </div>
    </div>
  );
}
