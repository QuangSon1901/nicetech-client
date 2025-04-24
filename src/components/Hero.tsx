
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-white pt-16 md:pt-20">
      <div className="section-container flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-5xl leading-tight">
          Khởi đầu vững chắc cho mọi ý tưởng kinh doanh
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl">
          Sở hữu website chuyên nghiệp để xây dựng thương hiệu và phát triển bền vững.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-16">
          <button className="btn-primary">Bắt đầu ngay</button>
          <button className="btn-secondary flex items-center justify-center">
            <span>Xem giao diện mẫu</span>
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
        <div className="w-full h-[500px] md:h-[600px] bg-gray-100 relative overflow-hidden rounded-sm">
          <img 
            src="/uploads/hero.jpg" 
            alt="Website mẫu" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8 text-white text-left">
            <h3 className="text-xl font-medium mb-2">Giao diện website</h3>
            <p className="text-sm text-gray-200">Thiết kế phù hợp với mọi lĩnh vực kinh doanh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
