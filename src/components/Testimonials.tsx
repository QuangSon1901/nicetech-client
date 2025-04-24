import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Quote } from 'lucide-react';

const logos = [
  { name: "Netflix", width: "w-32" },
  { name: "Airbnb", width: "w-28" },
  { name: "Spotify", width: "w-24" },
  { name: "Google", width: "w-24" },
  { name: "Amazon", width: "w-28" },
  { name: "Microsoft", width: "w-32" },
];

const testimonials = [
  {
    quote: "Tỷ lệ bounce rate giảm đáng kể nhờ hình ảnh đẹp và trải nghiệm website tuyệt vời.",
    author: "Ms. Thu Hằng",
    position: "Quản lý cửa hàng thời trang",
    avatar: "/uploads/testimonials/avatar1.webp"
  },
  {
    quote: "Hệ thống ERP mà NiceTech triển khai đã giúp chúng tôi tối ưu hoá quy trình vận hành, giảm thời gian xử lý đơn hàng từ 2 ngày xuống còn 4 giờ. Đội ngũ hỗ trợ nhiệt tình và chuyên nghiệp!",
    author: "Trần Thanh Hà",
    position: "Quản lý vận hành, TechCorp",
    avatar: "/uploads/testimonials/avatar2.webp"
  },
  {
    quote: "Sự am hiểu sâu sắc về SEO và khả năng tối ưu website của đội ngũ NiceTech đã giúp chúng tôi tăng 200% lượng truy cập hữu cơ sau 6 tháng. Dịch vụ hỗ trợ 24/7 tuyệt vời!",
    author: "Lê Hoàng Nam",
    position: "Marketing Director, GreenLife",
    avatar: "/uploads/testimonials/avatar3.webp"
  }
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    // Auto rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="section-container">
        <div className="opacity-0 translate-y-4 animate-[fadeIn_0.5s_ease_forwards]" style={{ animationDelay: '100ms' }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Khách hàng tin tưởng</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tham gia cùng các thương hiệu và doanh nghiệp hàng đầu đang sử dụng dịch vụ của Nicetech để xây dựng hiện diện trực tuyến.
            </p>
          </div>
        </div>
        
        {/* Client logos */}
        <div className="relative mb-24 overflow-hidden py-10 before:absolute before:left-0 before:top-0 before:h-full before:w-24 before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:h-full after:w-24 after:bg-gradient-to-l after:from-white after:to-transparent after:z-10">
          <div className="animate-marquee flex items-center justify-around space-x-16">
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={index} 
                className={`${logo.width} h-16 bg-white rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 px-6 opacity-90 hover:opacity-100`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-gray-500 font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials slider */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${
                  activeTestimonial === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8 absolute top-0 left-0 w-full'
                }`}
              >
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl relative border border-gray-100">
                  <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
                    <Quote size={24} className="transform rotate-180" />
                  </div>
                  
                  <div className="pt-4">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          size={20} 
                          className="text-yellow-400 fill-yellow-400 mr-1" 
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-xl md:text-xl font-medium mb-8 leading-relaxed text-gray-800">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div>
                        <p className="font-bold text-md">{testimonial.author}</p>
                        <p className="text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Testimonial navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index 
                    ? 'bg-black w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-24 text-center opacity-0 translate-y-4 animate-[fadeIn_0.5s_ease_forwards]" style={{ animationDelay: '300ms' }}>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Sẵn sàng tạo website chuyên nghiệp cho doanh nghiệp của bạn?</h3>
          <button className="btn-primary">Liên hệ ngay hôm nay</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;