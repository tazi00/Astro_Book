function CattegoryPage() {
  return (
    <section className="pt-5">
      <div className=" bg-white overflow-hidden flex flex-col md:flex-row border-b border-secondary pb-12">
        {/* Image Section */}
        <div className="md:w-[35%] bg-purple-500 rounded-xl ms-10 overflow-hidden">
          <img
            src="/numerology.jpg" // yahan apna image path daalna
            alt="Numerology"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="ps-7 pe-[100px] md:w-[65%]">
          <h1 className="text-[36px] font-bold text-primary leading-[36px] ">
            NUMEROLOGY
          </h1>
          <p className="font-medium leading-[15px] mb-4 text-[15px]">
            For the concept in Ismailism, see Numerology (Ismailism). For the
            wireless communication term, see Numerology (wireless).
          </p>
          <p className="tertiary-text mb-4">
            Number symbolism is an ancient and pervasive aspect of human
            thought, deeply intertwined with religion, philosophy, mysticism,
            and mathematics. Different cultures and traditions have assigned
            specific meanings to numbers, often linking them to divine
            principles, cosmic forces, or natural patterns.[3]
          </p>

          <p className="tertiary-text mb-4">
            The practice of gematria, assigning numerical values to words and
            names and imputing those values with religious meaning, dates back
            to antiquity. An Assyrian inscription from the 8th century BC,
            commissioned by Sargon II declares "the king built the wall of
            Khorsabad 16,283 cubits long to correspond with the numerical value
            of his name".[7] Rabbinic literature used gematria to interpret
            passages in the Hebrew Bible.
          </p>

          <p className="tertiary-text mb-4">
            The practice of using alphabetic letters to represent numbers
            developed in the Greek city of Miletus, and is thus known as the
            Milesian system.[8] Early examples include vase graffiti dating back
            to the 6th century BCE.[9] common use by the reign of Alexander the
            Great (336–323 BCE) and was adopted by other cultures during the
            subsequent Hellenistic period.[8] It was officially adopted in Egypt
            during the reign of Ptolemy II Philadelphus (284–246 BCE).[8]
          </p>
        </div>
      </div>
    </section>
  );
}

export default CattegoryPage;
