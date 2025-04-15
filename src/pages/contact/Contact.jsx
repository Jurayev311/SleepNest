import React, { useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const SendMessage = (e) => {
    e.preventDefault();
    setLoading(true);

    const token = "7749972902:AAH1K7jxCUEhh1ZLNSn-nDx4pgJLckawIxk";
    const chat_id = 6324560189; 

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const text = `
📩 Email: ${email}
📞 Telefon: ${phone}
✉️ Xabar: ${message}
    `;

    axios.post(url, {
      chat_id,
      text,
    })
      .then(() => {
        toast.success("Xabaringiz yuborildi!");
        document.getElementById("contact-form").reset();
      })
      .catch((err) => {
        toast.error("Xatolik yuz berdi!");
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="py-10 bg-gray-50">
      <Toaster position="top-center" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-6">ALOQA</h1>
            <form id="contact-form" onSubmit={SendMessage} className="space-y-4">
              <div>
                <input
                  id="email"
                  type="email"
                  placeholder="Sizning elektron pochtangiz"
                  className="w-full p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Telefon raqamingiz"
                  className="w-full p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <textarea
                  id="message"
                  placeholder="Sizning xabaringiz: Iltimos yozing"
                  className="w-full p-4 bg-gray-100 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition ${loading ? 'opacity-70' : ''}`}
              >
                {loading ? "Yuborilmoqda..." : "Yuborish"}
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.964199432123!2d69.27358231542663!3d41.30940817927199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0x9a3b5b8e7a0e1c!2sSharg%20Termir%20Beton%20Mahsulotlari%20XXK!5e0!3m2!1sen!2s!4v1698765432100!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-700">
            <MdEmail className="text-red-500 text-xl" />
            <a href="mailto:sleepnest@gmail.com">sleepnest@gmail.com</a>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <MdPhone className="text-red-500 text-xl" />
            <a href="tel:+998940833712">+998 94 083 37 12</a>
            <span className="ml-2">|</span>
            <a href="tel:+998917773768">+998 91 777 37 68</a>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <MdLocationOn className="text-red-500 text-xl" />
            <p>Buxoro, st. Alpomish BO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
