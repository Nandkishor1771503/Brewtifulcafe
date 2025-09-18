import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#063d52] text-[#d68b0c] py-10 px-6 md:mt-10 mt-4 sm:px-12 lg:px-24">
      {/* Map Section */}
      <section className="w-full max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-[#d68b0c] text-2xl sm:text-3xl md:text-4xl font-thin mb-6 text-center">
          Find Us Here
        </h2>

        <div className="flex gap-10 items-center justify-center w-full aspect-video rounded-xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15227.767414260952!2d78.40292148715818!3d17.414577900000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97d9ae034189%3A0xe7b233351b516095!2sBrewtiful%20Coffee!5e0!3m2!1sen!2sin!4v1758206734933!5m2!1sen!2sin"
            className="w-full h-full border-0 rounded-xl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Brewtiful"

          ></iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0399458880493!2d78.36627057493641!3d17.457802083441447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d4cd5b4d8f%3A0xf6d1b5fa3ad0a26d!2sBrewtiful%20Coffee!5e0!3m2!1sen!2sin!4v1758207036313!5m2!1sen!2sin"
            className="w-full h-full border-0 rounded-xl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Brewtiful"
          ></iframe>
          
          {/* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}


        </div>
      </section>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0 text-[#cc9f78]">
        {/* Brand / Logo */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold font-serif mb-2">Brewtiful Cafe</h2>
          <p className="text-sm sm:text-base">
            Bringing you the finest coffee experience.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <a href="#menu" className="hover:text-white transition-colors">
            Menu
          </a>
          <a href="#reviews" className="hover:text-white transition-colors">
            Reviews
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
        </div>

        {/* Social / Contact */}
        <div className="flex flex-col gap-2">
          <p className="text-sm sm:text-base">Follow us:</p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/brewtifulcoffeeindia/"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Book Table Button */}
      <div className="mt-8 flex justify-center md:justify-end">
        <a
          href="https://wa.me/9642028266?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20a%20table%20at%20Brewtiful%20Cafe."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#d68b0c] text-black px-6 py-3 rounded-full bg-gradient-to-r from-[#7d5a0a] via-[#a87c1f] to-[#92720a] cursor-pointer font-semibold shadow-xl hover:bg-[#b6730a] hover:scale-105 transition-all duration-300"
        >
          Book a Table
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-[#d68b0c]/40 pt-4 text-sm sm:text-base text-center">
        © 2025 Bottega Cafe. All rights reserved.
      </div>
    </footer>
  );
}
