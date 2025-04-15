import React from 'react';
import footer from '../../assets/footer.png';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 mt-[120px]">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Chap taraf logo va tavsif */}
        <div>
          <img src={footer} alt="Sleepnest Logo" className="w-[300px] h-[91px] mb-5" />
          <p className="text-sm leading-relaxed">
            “Ekologik Toza Uyqu Mahsulotlari” ko‘p yillardan buyon butun dunyoda
            foydalanish uchun paxta matolari ishlab chiqaradigan kompaniya hisoblanadi.
          </p>
        </div>

        {/* Menyu */}
        <div>
          <h3 className="font-semibold text-base mb-3">Menyu</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline transition">Bosh sahifa</a></li>
            <li><a href="#" className="hover:underline transition">To‘plam</a></li>
            <li><a href="#" className="hover:underline transition">Biz haqimizda</a></li>
            <li><a href="#" className="hover:underline transition">Kontaktlar</a></li>
          </ul>
        </div>

        {/* Kontaktlar */}
        <div>
          <h3 className="font-semibold text-base mb-3">Kontaktlar</h3>
          <ul className="text-sm space-y-1">
            <li>Buxoro, st. Alpomish 80</li>
            <li>Email: sleepnest@gmail.com</li>
            <li>Telegram: @sleepnest</li>
            <li>Tel: +998 94 033 72 12</li>
          </ul>
        </div>

        {/* Obuna formasi */}
        <div>
          <h3 className="font-semibold text-base mb-3">Elektron pochtamizga obuna bo‘ling</h3>
          <form className="relative w-full">
            <input
              type="email"
              required
              placeholder="Elektron pochtangiz"
              aria-label="Elektron pochta"
              className="w-full border px-4 py-3 pr-[130px] rounded-[20px] outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 bg-red-600 text-white px-4 rounded-[20px] hover:bg-red-700 transition"
            >
              Obuna
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-2">Kamida bitta ro‘yxatni tanlang.</p>
        </div>
      </div>

      <div className="bg-black text-white text-center text-sm py-4">
        © 2024 MChJ Ekologik Toza Uyqu Mahsulotlari. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
};

export default Footer;
