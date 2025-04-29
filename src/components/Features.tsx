import React from 'react';
import { ArrowRight } from 'lucide-react';

const features = [
  {
    title: "Website thương hiệu chuyên nghiệp & chuẩn SEO",
    description: "Chúng tôi tạo ra website ấn tượng, chuẩn SEO và tối ưu trải nghiệm người dùng - giúp thương hiệu của bạn nổi bật và thu hút đúng khách hàng tiềm năng.",
    image: "uploads/features/website.png",
    link: "#"
  },
  {
    title: "Nền tảng bán hàng trực tuyến hiệu quả - Ecommerce",
    description: "Sở hữu ngay cửa hàng online với đầy đủ tính năng quản lý sản phẩm, đơn hàng và thanh toán bảo mật - giúp cửa hàng của bạn mở rộng thị trường không giới hạn.",
    image: "uploads/features/ecommerce.png",
    link: "#"
  },
  {
    title: "ERP - Giải pháp quản lý doanh nghiệp toàn diện",
    description: "Hệ thống ERP thông minh giúp bạn kiểm soát chặt chẽ mọi hoạt động từ bán hàng, kho vận, tài chính đến nhân sự - tối ưu vận hành và thúc đẩy tăng trưởng.",
    image: "uploads/features/erp.jpg",
    link: "#"
  }
];

const Features = () => {
  return (
    <section className="bg-white" id="products">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Doanh nghiệp của bạn đang cần gì?</h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Bạn đang tìm kiếm một website thương hiệu ấn tượng, một cửa hàng trực tuyến bán hàng hiệu quả, hay một hệ thống quản lý toàn diện cho doanh nghiệp?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group border rounded-md pb-4 overflow-hidden">
              <div className="h-64 mb-4 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </div>
              <div className='px-4'>
                <h3 className="text-xl font-bold mb-2"><a href={feature.link}>{feature.title}</a></h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <a href={feature.link} className="inline-flex items-center font-medium text-black hover:underline">
                  Tìm hiểu thêm <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
