import React from 'react';
import { ArrowRight } from 'lucide-react';

const features = [
  {
    title: "Thiết kế Website",
    description: "Tạo dựng hình ảnh thương hiệu với website chuyên nghiệp, chuẩn UX/UI, tối ưu SEO.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    link: "#"
  },
  {
    title: "Thương mại điện tử",
    description: "Xây dựng nền tảng bán hàng trực tuyến mạnh mẽ, linh hoạt và dễ quản lý.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    link: "#"
  },
  {
    title: "Hệ thống ERP",
    description: "Tối ưu quy trình quản lý doanh nghiệp với hệ thống ERP tích hợp – từ bán hàng, kho đến tài chính.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    link: "#"
  }
];

const Features = () => {
  return (
    <section className="bg-white" id="products">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Tất cả công cụ bạn cần</h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Giải pháp toàn diện để xây dựng thương hiệu, vận hành kinh doanh và phát triển khách hàng.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="hover-scale group">
              <div className="h-64 mb-4 overflow-hidden rounded-lg">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <a href={feature.link} className="inline-flex items-center font-medium text-black hover:underline">
                Tìm hiểu thêm <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
