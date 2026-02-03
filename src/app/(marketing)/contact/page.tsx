import Footer from "@/components/footer";
import Header from "@/components/header";

export default function ContactPage() {
  return (
    <div className="w-full bg-[#0b1b3f] text-white">
      <Header />

      {/* HERO (same as About) */}
      <section className="relative h-[500px] bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/about-bg.png')] bg-cover opacity-40" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-[100px] font-bold tracking-wide">Contact Us</h1>
        </div>
      </section>

      {/* CONTACT INFO BAR */}
      <section className="bg-white py-10 px-[86px] text-[#0B1D5B]">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-[22px] ">
          <div className="flex items-center gap-3">
            <img src="/phone.svg" alt="" />
            <span className="text-[64px] ">
              +91 <strong>90463 20803</strong>{" "}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <img src="/message.svg" alt="" />{" "}
            <span className="text-[64px] ">team@astrobook.in</span>
          </div>
          <div className="flex items-center gap-3 col-span-3 border-t border-[#0B1D5B]">
            <img src="/gps.svg" alt="" />
            <span className="text-[50px]">
              Barasat, Champadali More, North 24 Parganas, Barasat, India
              700124, West Bengal
            </span>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="bg-[#eef0f6] py-[80px] px-[86px]">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* LEFT IMAGE */}
          <img
            src="/contact-img.jpg"
            alt=""
            className="rounded-[25px] shadow-xl"
          />

          {/* FORM */}
          <div>
            <h2 className="text-[#9D0399] text-[42px] font-normal mb-8 flex items-center gap-3">
              <img src="/msg.svg" alt="" /> Send Us A Message
            </h2>

            <div className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-white text-black border border-gray-400 px-5 py-4 text-[20px]"
              />

              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="w-1/2 bg-white text-black border border-gray-400 px-5 py-4 text-[20px]"
                />
                <input
                  type="date"
                  className="w-1/2 bg-white text-black border border-gray-400 px-5 py-4 text-[20px]"
                />
              </div>

              <textarea
                placeholder="Message"
                rows={5}
                className="w-full bg-white text-black border border-gray-400 px-5 py-4 text-[20px]"
              />

              <button className="bg-[#9D0399] text-white text-[22px] px-16 py-3 max-w-max mx-auto block cursor-pointer">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER same as About */}
      <Footer />
    </div>
  );
}
