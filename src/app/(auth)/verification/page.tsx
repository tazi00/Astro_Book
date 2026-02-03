import Link from "next/link";

function LoginSlider() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-8">
      {/* Card 1 */}
      <div className="w-[420px] rounded-xl overflow-hidden shadow-lg border-4 border-white">
        <img
          src="/login_img.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card 2 */}
      <div className="w-[420px] rounded-xl overflow-hidden shadow-lg border-4 border-white">
        <img
          src="/login_img.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* dots */}
      <div className="flex gap-2 mt-3">
        <span className="w-2 h-2 bg-purple-500 rounded-full" />
        <span className="w-2 h-2 bg-gray-300 rounded-full" />
        <span className="w-2 h-2 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex items-center justify-center bg-[#F6E6F5]">
        <LoginSlider />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center  bg-[url('/themebg.png')] bg-cover bg-center bg-no-repeat h-screen flex-col relative">
        <div className="w-138.25 max-w-138.25 h-[648px] bg-white rounded-2xl shadow-2xl px-[70px] pt-[100px]">
          {/* Logo */}
          <div className="flex justify-center">
            <img src="/logo.svg" alt="" className="w-full mb-3" />
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="+91 90000 80000"
            className="w-full border border-[#9D0399] rounded-md px-[26px] py-[17px]  text-[22px] focus:outline-none focus:ring-2 focus:ring-[#9D0399] text-[#000] placeholder:text-black mb-[12px]"
          />

          <div className="grid grid-cols-6 gap-[12px]">
            <input
              type="text"
              placeholder="0"
              className="w-full border border-[#9D0399] rounded-md px-[10px] py-[10px] text-center text-[22px] focus:outline-none focus:ring-2 focus:ring-[#9D0399] text-[#000] placeholder:text-black h-[56px]"
            />
            <input
              type="text"
              placeholder="0"
              className="w-full border border-[#9D0399] rounded-md px-[10px] py-[10px] text-center  text-[22px] focus:outline-none focus:ring-2 focus:ring-[#9D0399] text-[#000] placeholder:text-black h-[56px]"
            />
            <input
              type="text"
              placeholder="0"
              className="w-full border border-[#9D0399] rounded-md px-[10px] py-[10px] text-center  text-[22px] focus:outline-none focus:ring-2 focus:ring-[#9D0399] text-[#000] placeholder:text-black h-[56px]"
            />
            <input
              type="text"
              placeholder="0"
              className="w-full border border-[#9D0399] rounded-md px-[10px] py-[10px] text-center  text-[22px] focus:outline-none focus:ring-2 focus:ring-[#9D0399] text-[#000] placeholder:text-black h-[56px]"
            />
            <input
              type="text"
              placeholder="0"
              className="w-full border border-[#9D0399] rounded-md px-[10px] py-[10px] text-center  text-[22px] focus:outline-none focus:ring-2 focus:ring-[#9D0399] text-[#000] placeholder:text-black h-[56px]"
            />
            <input
              type="text"
              placeholder="0"
              className="w-full border border-[#9D0399] rounded-md px-[10px] py-[10px] text-center  text-[22px] focus:outline-none focus:ring-2 focus:ring-[#9D0399] text-[#000] placeholder:text-black h-[56px]"
            />
          </div>

          {/* Button */}
          <Link
            href={"/about"}
            className="w-full mt-[16px] mb-[32px] py-3 rounded-md bg-[#9D0399] text-white font-semibold hover:bg-[#9D0399] transition cursor-pointer block flex items-center justify-center"
          >
            Submit
          </Link>

          {/* Remember */}
          <div className="flex items-center mb-[22px] text-[22px] text-gray-600 max-w-max mx-auto">
            <input type="checkbox" className="mr-2 accent-[#9D0399]" />
            Remember Me
          </div>

          {/* Google */}
          <button className="w-full flex justify-center cursor-pointer ">
            <img src="/g_login.svg" className="w-unset" />
          </button>

          {/* Footer links */}
        </div>

        <div className="text-center text-[22px] text-white mt-6  absolute bottom-10 ">
          <a href="#" className="mx-2">
            About Us
          </a>{" "}
          |
          <a href="#" className="mx-2">
            Contact Us
          </a>{" "}
          |
          <a href="#" className="mx-2">
            Policy
          </a>{" "}
          |
          <a href="#" className="mx-2">
            Blog
          </a>
          |
          <a href="#" className="mx-2">
            Help
          </a>
        </div>
      </div>
    </div>
  );
}
