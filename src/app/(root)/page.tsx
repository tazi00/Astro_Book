import React from "react";

function HomePage() {
  return (
    <div className="lg:overflow-y-scroll">
      <div className="h-[40px] w-full bg-primary my-5"></div>
      <div className="space-y-4 md:overflow-y-scroll h-screen">
        <div className="h-[300px] w-full bg-primary grid place-content-center">
          POST
        </div>
        <div className="h-[300px] w-full bg-primary grid place-content-center">
          POST
        </div>
        <div className="h-[300px] w-full bg-primary grid place-content-center">
          POST
        </div>
        <div className="h-[300px] w-full bg-primary grid place-content-center">
          POST
        </div>
      </div>
    </div>
  );
}

export default HomePage;
