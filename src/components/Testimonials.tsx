import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

// Logos của khách hàng
const clientLogos = [
  { name: "Juva Media", logo: "/uploads/clients/juva.webp" },
  { name: "Aisuki", logo: "/uploads/clients/aisuki.png" },
  { name: "Nextgen Chess", logo: "/uploads/clients/nextgenchess.png" },
  { name: "imeo", logo: "/uploads/clients/imeo.png" },
  { name: "Nguyên Sinh Bistro", logo: "/uploads/clients/nguyensinh.png" },
  { name: "TTPly Wood", logo: "/uploads/clients/ttplywood.png" },
  { name: "Luyện thi Tokuteigino", logo: "/uploads/clients/thanhmaiyokohama.png" },
  { name: "Tổng Kho Mạnh Hưng", logo: "/uploads/clients/manhhung.jpg" },
  { name: "Gadget Pro", logo: "/uploads/clients/gadgetpro.png" },
];

// Phản hồi từ khách hàng
const testimonialData = [
  {
    id: 1,
    content: "Sự am hiểu sâu sắc về SEO và khả năng tối ưu website của đội ngũ NiceTech đã giúp chúng tôi tăng 200% lượng truy cập hữu cơ sau 6 tháng. Dịch vụ hỗ trợ 24/7 tuyệt vời!",
    author: "Khánh Linh",
    position: "Quản lý Nextgen Chess Academy",
    avatar: "/uploads/clients/khanhlinh.png",
    logo: "/uploads/clients/nextgenchess2.jpg",
    rating: 5
  },
  {
    id: 2,
    content: "Hệ thống ERP mà NiceTech triển khai đã giúp chúng tôi tối ưu hoá quy trình vận hành, giảm thời gian xử lý đơn hàng từ 2 ngày xuống còn 4 giờ. Đội ngũ hỗ trợ luôn nhiệt tình và chuyên nghiệp!",
    author: "Nguyễn Trung Hiếu",
    position: "CEO, Juva Media",
    avatar: "/uploads/clients/trunghieu.jpg",
    logo: "/uploads/clients/juva.webp",
    rating: 5
  },
  {
    id: 3,
    content: "NiceTech đã giúp chúng tôi xây dựng website tối ưu tốc độ và trải nghiệm người dùng. Kể từ khi ra mắt, tỷ lệ chuyển đổi tăng 35% và thời gian người dùng ở lại trang tăng đáng kể.",
    author: "Nhut Pham",
    position: "CEO, TTPLy Wood",
    avatar: "/uploads/clients/nhutpham.png",
    logo: "/uploads/clients/ttplywood.png",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonialData.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  // Chuyển đến testimonial tiếp theo
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonialData.length);
  };

  // Chuyển đến testimonial trước đó
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Tiêu đề */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">Được tin cậy bởi các doanh nghiệp hàng đầu</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Nhiều khách hàng đã tin cậy và lựa chọn NiceTech để đồng hành cùng sự thành công
          </p>
        </div>
        
        {/* Logo marquee */}
        <div className="relative mb-20 py-8 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="flex gap-8 logos-slide">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div key={index} className="h-12 min-w-[120px] flex items-center justify-center px-6 transition-all duration-300">
                {client.logo ? (
                  <img src={client.logo} alt={client.name} className="h-20 object-contain" />
                ) : (
                  <span className="text-gray-400 font-medium hover:text-gray-800">{client.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonial section */}
        <div className="relative mb-20">
          {/* Testimonial Display */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden relative">
            <div className="md:grid md:grid-cols-2">
              {/* Left column - visual */}
              <div className="hidden md:block bg-black relative h-full">
                <div className="absolute inset-0 opacity-20 bg-[url('/uploads/testimonials/pattern.svg')]"></div>
                <div className="relative h-full p-12 flex flex-col justify-between text-white z-10">
                  <div className="mb-8">
                    <div className="inline-block">
                      {/* Hiển thị rating */}
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-400">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    
                    {/* Logo của khách hàng hiện tại nếu có */}
                    {testimonialData[activeTestimonial].logo && (
                      <img 
                        src={testimonialData[activeTestimonial].logo} 
                        alt={testimonialData[activeTestimonial].author + "'s company"} 
                        className="h-8 mb-6"
                      />
                    )}
                    
                    {/* Quote symbol */}
                    <svg className="w-12 h-12 text-white mb-6" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  
                  {/* Thông tin và avatar của người đánh giá */}
                  <div className="flex items-center mt-auto">
                    <div className="mr-4 w-16 h-16 rounded-full overflow-hidden border-2 border-white">
                      <img 
                        src={testimonialData[activeTestimonial].avatar} 
                        alt={testimonialData[activeTestimonial].author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{testimonialData[activeTestimonial].author}</h4>
                      <p className="text-white/80">{testimonialData[activeTestimonial].position}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right column - testimonial content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                {/* Mobile avatar - hiển thị chỉ trên mobile */}
                <div className="flex items-center mb-6 md:hidden">
                  <div className="mr-4 w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={testimonialData[activeTestimonial].avatar} 
                      alt={testimonialData[activeTestimonial].author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonialData[activeTestimonial].author}</h4>
                    <p className="text-sm text-gray-600">{testimonialData[activeTestimonial].position}</p>
                  </div>
                </div>
                
                <blockquote>
                  <p className="text-xl md:text-2xl leading-relaxed font-medium text-gray-800 italic">
                    "{testimonialData[activeTestimonial].content}"
                  </p>
                </blockquote>
                
                {/* Mobile rating */}
                <div className="flex mt-6 mb-8 md:hidden">
                  {[...Array(testimonialData[activeTestimonial].rating)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                
                {/* Navigation controls */}
                <div className="flex justify-between items-center mt-8">
                  <div className="flex space-x-2">
                    {testimonialData.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          activeTestimonial === index 
                            ? 'bg-black scale-125' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`View testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <button 
                      onClick={prevTestimonial}
                      className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={nextTestimonial}
                      className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Bạn đã sẵn sàng sở hữu một website chuyên nghiệp?</h3>
          <p className="text-lg text-gray-600 mb-8">Hãy bắt đầu hành trình chuyển đổi số cùng đội ngũ chuyên gia của chúng tôi – nơi ý tưởng của bạn được hiện thực hóa thành những trải nghiệm số ấn tượng và hiệu quả.</p>
          <a href="/lien-he">
            <button className="btn-primary text-lg py-4 px-8 shadow-lg hover:shadow-xl transform transition hover:-translate-y-1">
              Liên hệ ngay hôm nay
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;