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
    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 grid grid-cols-[2fr_1.5fr] gap-6">
      {/* Left section */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex items-start gap-4 pt-8">
          {/* Avatar */}
          <div className="w-50 h-50 rounded-full bg-purple-200 flex items-center justify-center">
            <div className="w-50 h-50 rounded-full bg-primary" />
          </div>

          {/* Info */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-secondary">
              Suprio Karmakar
            </h2>
            <p className="text-lg text-secondary mb-1.5">Vedic</p>
            <p className="text-sm text-secondary">Bengali, English, Hindi</p>
            <p className="text-sm text-secondary">Exp: 15 Years</p>

            {/* Rating */}
            <div className="flex flex-col items-start gap-0 mt-1">
              <div className="text-purple-600 text-sm">★★★★★</div>
              <span className="text-[10px] text-primary font-semibold">
                1031 reviews
              </span>
            </div>

            {/* Buttons */}
            <div className="flex items-center">
              <button className="px-4 py-2 text-sm rounded-full border border-purple-500 text-purple-600 hover:bg-purple-50 transition">
                ₹199
              </button>
              <button className="px-5 py-2 text-sm rounded-full bg-purple-600 text-white hover:bg-purple-700 transition">
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Follow */}
        <button className="w-fit text-purple-600 text-sm font-medium hover:underline">
          Follow+
        </button>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">
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
      <div className="w-full rounded-xl overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
        <img
          src="/astro-banner.jpg"
          alt="Astro Book"
          className="w-full h-full object-cover opacity-90"
        />
      </div>
    </div>
  );
}
