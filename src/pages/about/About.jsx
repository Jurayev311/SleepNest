import React from 'react';
import about from '../../assets/about.png';

const About = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 ">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black">Ekologik Toza Uyqu Mahsulotlari</h2>
          <p className="mb-3.5 text-sm text-gray-700">
            Matolarimiz va ekologik sumkalar ishlab chiqaruvchi korxonamiz uzoq yillardan beri paxta matolarini global bozorda yetkazib berib kelmoqda.
          </p>
          <p className="mb-3.5 text-sm text-gray-700">
            Korxonamiz o‘z faoliyatini 17 yil avval boshlagan va shu vaqt ichida mijozlarimiz ishonchini qozonib kelmoqda.
          </p>
          <p className="mb-3.5 text-sm text-gray-700">
            Kompaniyamizning bosh maqsadi — sifatli, bardoshli va ekologik xavfsiz mahsulotlarni yaratishdir.
          </p>
          <p className="mb-3.5 text-sm text-gray-700">
            Ishlab chiqarish jarayonlari butunlay ekologik standartlarga mos bo‘lib, atrof-muhitga zarar yetkazmaslikka qaratilgan.
          </p>
          <p className="mb-3.5 text-sm text-gray-700">
            Zamonaviy texnologiyalardan foydalanib, turli xil paxta mahsulotlarini yuqori darajada ishlab chiqarish imkoniyatiga egamiz.
          </p>
          <p className="mb-3.5 text-sm text-gray-700">
            Shuningdek, biz DongJu to‘quv uskunalarining O‘zbekistondagi rasmiy vakili sifatida faoliyat yuritamiz.
          </p>
          <p className="mb-3.5 text-sm text-gray-700">
            Har yil fabrikamizda 80 dan ortiq mahsulot turlari ishlab chiqarilib, buning natijasida kompaniya yuqori sifat va barqaror ishlab chiqarishni taminlaydi.
          </p>
          <p className="mb-3.5 text-sm text-gray-700">
            Korxonamizda zamonaviy texnologiyalar asosida 50 dan ortiq to‘quv dastgohlari faoliyat ko‘rsatmoqda.
          </p>
          <p className="mb-3.5 text-sm text-gray-700">
            Bizning ishlab chiqarish jarayonlarimizda faqat sifatli va ekologik xavfsiz mahsulotlar ishlab chiqarishni maqsad qilganmiz.
          </p>
          <p className="mb-3.5 text-sm text-gray-700">
            Mijozlarimiz talablariga javob beruvchi, ekologik xavfsiz va zamonaviy dizaynli sumkalar ishlab chiqarish yo‘lga qo‘yilgan.
          </p>
          <p className="text-sm text-gray-700">
            Kompaniyamiz har doim mijozlariga sifatli mahsulot va yuqori darajadagi xizmat ko‘rsatishdan mamnun.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/mb-3.5">
          <img src={about} alt="About" className="rounded-xl shadow-lg w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default About;