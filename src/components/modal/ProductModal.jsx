import React from 'react';
import { FaStar, FaTag, FaDollarSign, FaTimes } from "react-icons/fa";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const handleBackdropClick = () => {
    onClose();
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-[#fdfdfd60] bg-opacity-40 flex items-center justify-center z-50 px-4"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white p-4 sm:p-6 rounded-xl w-full max-w-md relative shadow-xl overflow-y-auto max-h-[90vh]"
        onClick={handleModalClick}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
        >
          <FaTimes />
        </button>

        <img
          src={product.image}
          alt={product.title}
          className="rounded-xl mb-4 w-full h-auto max-h-[250px] object-cover"
        />

        <h2 className="text-xl sm:text-2xl font-bold mb-3">{product.title}</h2>

        <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
          Bu mahsulot sovuq kunlar uchun mo‘ljallangan. Yengil, ammo juda issiq tutadi. Har qanday kiyim bilan mos keladi.
        </p>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FaDollarSign className="text-green-600" />
            <span className="font-medium">Narxi:</span> $89.99
          </div>

          <div className="flex items-center gap-2">
            <FaTag className="text-blue-500" />
            <span className="font-medium">Kategoriya:</span> Qishki kiyimlar
          </div>

          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span className="font-medium">Reyting:</span> 4.7 / 5
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
