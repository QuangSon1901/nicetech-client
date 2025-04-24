import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="section-container text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto">
          Sẵn sàng để xây dựng sự hiện diện trực tuyến của bạn?
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-300">
          Tham gia cùng hàng triệu cá nhân và doanh nghiệp đang tin tưởng Squarespace để xây dựng sự hiện diện trực tuyến.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-white text-black px-8 py-4 font-medium hover:bg-gray-100 transition-colors duration-300">
            Bắt đầu ngay
          </button>
          <button className="border border-white text-white px-8 py-4 font-medium hover:bg-white/10 transition-colors duration-300 flex items-center justify-center">
            <span>Khám phá nhanh</span>
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
