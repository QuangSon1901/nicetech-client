import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Facebook,
  Linkedin,
  Youtube,
  MessageSquare,
  ChevronDown
} from "lucide-react";

const Contact = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    agree: false
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Vui lòng nhập họ tên";
    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }
    if (!formData.service) newErrors.service = "Vui lòng chọn dịch vụ";
    if (!formData.message.trim()) newErrors.message = "Vui lòng nhập nội dung";
    if (!formData.agree) newErrors.agree = "Vui lòng đồng ý với điều khoản";
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        agree: false
      });
    }, 1000);
  };
  
  const faqs = [
    {
      question: "Quy trình làm việc với NiceTech như thế nào?",
      answer: "Quy trình làm việc với NiceTech bao gồm 5 bước chính: (1) Tư vấn và phân tích nhu cầu, (2) Báo giá chi tiết, (3) Thiết kế giao diện, (4) Phát triển website, (5) Kiểm thử và bàn giao. Trong suốt quá trình này, chúng tôi luôn giữ liên lạc chặt chẽ và cập nhật tiến độ thường xuyên để đảm bảo dự án đáp ứng đúng yêu cầu và tiến độ đã cam kết."
    },
    {
      question: "Chi phí thiết kế website tại NiceTech là bao nhiêu?",
      answer: "Chi phí thiết kế website tại NiceTech dao động từ 3,9 triệu đến hơn 50 triệu đồng tùy thuộc vào quy mô, tính năng và yêu cầu cụ thể của dự án. Chúng tôi cung cấp nhiều gói dịch vụ từ cơ bản đến cao cấp để phù hợp với ngân sách của mọi doanh nghiệp. Để có báo giá chính xác nhất, vui lòng liên hệ với chúng tôi để được tư vấn chi tiết."
    },
    {
      question: "NiceTech có hỗ trợ bảo trì website sau khi hoàn thành không?",
      answer: "Có, NiceTech cung cấp dịch vụ bảo trì và hỗ trợ kỹ thuật sau khi bàn giao website. Chúng tôi có các gói bảo trì hàng tháng hoặc hàng năm với nhiều mức dịch vụ khác nhau, từ cơ bản (cập nhật bảo mật, sao lưu dữ liệu) đến nâng cao (cập nhật nội dung, tối ưu hóa, phân tích hiệu suất). Ngoài ra, chúng tôi cũng cung cấp hỗ trợ kỹ thuật nhanh chóng khi có sự cố phát sinh."
    },
    {
      question: "Thời gian hoàn thành một website mất bao lâu?",
      answer: "Thời gian hoàn thành một website thông thường từ 2-8 tuần tùy thuộc vào quy mô và độ phức tạp của dự án. Website cơ bản có thể hoàn thành trong 2-3 tuần, website doanh nghiệp với tính năng nâng cao cần khoảng 4-6 tuần, và các hệ thống thương mại điện tử phức tạp có thể mất 6-8 tuần hoặc hơn. Chúng tôi luôn cố gắng đảm bảo tiến độ đã cam kết và thông báo kịp thời nếu có bất kỳ thay đổi nào."
    },
    {
      question: "Có cần phải có kiến thức kỹ thuật để quản lý website sau khi hoàn thành không?",
      answer: "Không, bạn không cần phải có kiến thức kỹ thuật chuyên sâu để quản lý website sau khi hoàn thành. Chúng tôi phát triển website với hệ thống quản trị nội dung (CMS) trực quan, dễ sử dụng. Sau khi bàn giao, chúng tôi sẽ hướng dẫn chi tiết cách sử dụng và cung cấp tài liệu hướng dẫn. Ngoài ra, đội ngũ hỗ trợ kỹ thuật của chúng tôi luôn sẵn sàng giúp đỡ nếu bạn gặp bất kỳ khó khăn nào."
    }
  ];

  const services = [
    "Website Doanh nghiệp",
    "Website Thương mại điện tử",
    "Website Ngành dịch vụ",
    "Portfolio & Blog",
    "Thiết kế UI/UX",
    "Khác"
  ];

  return (
    <>
      <Helmet>
        <title>Liên Hệ | NiceTech - Công ty thiết kế website chuyên nghiệp</title>
        <meta name="description" content="Liên hệ với NiceTech để nhận tư vấn miễn phí về giải pháp website phù hợp với doanh nghiệp của bạn. Chúng tôi luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc." />
        <link rel="canonical" href="https://nicetech.vn/lien-he" />
      </Helmet>
      <div className="bg-white min-h-screen">
        <Navbar />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-white pt-28 pb-16">
            <div className="section-container">
              <div className="text-center max-w-4xl mx-auto mb-16 fade-in">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  Liên hệ <span className="text-black">NiceTech</span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  Hãy chia sẻ nhu cầu và mục tiêu của bạn, chúng tôi sẽ liên hệ lại ngay để tư vấn giải pháp phù hợp nhất
                </p>
              </div>
              
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-gray-50 p-8 rounded-xl text-center hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Email</h3>
                  <p className="text-gray-600 mb-4">Gửi email cho chúng tôi</p>
                  <a href="mailto:info@nicetech.vn" className="text-black font-medium">info@nicetech.vn</a>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl text-center hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Điện thoại</h3>
                  <p className="text-gray-600 mb-4">Gọi trực tiếp cho chúng tôi</p>
                  <a href="tel:+84394062185" className="text-black font-medium">0394 062 185</a>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl text-center hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Địa chỉ</h3>
                  <p className="text-gray-600 mb-4">Đến thăm văn phòng của chúng tôi</p>
                  <address className="not-italic text-black font-medium">
                    Tp. Hồ Chí Minh, Việt Nam
                  </address>
                </div>
              </div>
            </div>
          </section>
          
          {/* Contact Form Section */}
          <section className="bg-gray-50 py-20">
            <div className="section-container">
              <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                  {/* Contact Info */}
                  <div className="lg:col-span-2">
                    <h2 className="text-3xl font-bold mb-6">Gửi yêu cầu tư vấn</h2>
                    <p className="text-gray-600 mb-8">
                      Điền thông tin vào form bên dưới, chúng tôi sẽ liên hệ lại trong vòng 24 giờ để tư vấn giải pháp phù hợp nhất với nhu cầu của bạn.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mr-4">
                          <Clock size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-1">Giờ làm việc</h3>
                          <p className="text-gray-600">Thứ 2 - Thứ 6: 8:30 - 17:30</p>
                          <p className="text-gray-600">Thứ 7: 8:30 - 12:00</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center shrink-0 mr-4">
                          <MessageSquare size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-1">Hỗ trợ trực tuyến</h3>
                          <p className="text-gray-600">Chat trực tiếp trên website</p>
                          <p className="text-gray-600">Zalo: 0394 062 185</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-10">
                      <h3 className="text-lg font-bold mb-4">Kết nối với chúng tôi</h3>
                      <div className="flex space-x-4">
                        <a 
                          href="https://www.facebook.com/nicetechvietnam" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                          <Facebook size={20} />
                        </a>
                        <a 
                          href="https://www.linkedin.com/company/nicetech" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                          <Linkedin size={20} />
                        </a>
                        <a 
                          href="https://www.youtube.com/@nicetechvn" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                          <Youtube size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contact Form */}
                  <div className="lg:col-span-3">
                    {submitted ? (
                      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                        <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                          <Send size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-green-800 mb-3">Gửi yêu cầu thành công!</h3>
                        <p className="text-green-700 mb-4">
                          Cảm ơn bạn đã liên hệ với NiceTech. Chúng tôi sẽ phản hồi yêu cầu của bạn trong thời gian sớm nhất.
                        </p>
                        <button 
                          onClick={() => setSubmitted(false)}
                          className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                        >
                          Gửi yêu cầu khác
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block font-medium mb-2">Họ và tên *</label>
                            <input 
                              type="text" 
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10`}
                              placeholder="Nhập họ và tên"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block font-medium mb-2">Email *</label>
                            <input 
                              type="email" 
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10`}
                              placeholder="Nhập địa chỉ email"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="phone" className="block font-medium mb-2">Số điện thoại *</label>
                            <input 
                              type="tel" 
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10`}
                              placeholder="Nhập số điện thoại"
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                          </div>
                          
                          <div>
                            <label htmlFor="service" className="block font-medium mb-2">Dịch vụ quan tâm *</label>
                            <select 
                              id="service"
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 border ${errors.service ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10 bg-white`}
                            >
                              <option value="">Chọn dịch vụ</option>
                              {services.map((service, index) => (
                                <option key={index} value={service}>{service}</option>
                              ))}
                            </select>
                            {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block font-medium mb-2">Nội dung *</label>
                          <textarea 
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-black/10 min-h-[150px]`}
                            placeholder="Mô tả yêu cầu của bạn"
                          ></textarea>
                          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>
                        
                        <div>
                          <div className="flex items-start">
                            <input 
                              type="checkbox" 
                              id="agree"
                              name="agree"
                              checked={formData.agree}
                              onChange={handleChange}
                              className="mt-1 mr-3"
                            />
                            <label htmlFor="agree" className="text-gray-600">
                              Tôi đồng ý với <a href="/privacy-policy" className="text-black underline">chính sách bảo mật</a> và cho phép NiceTech liên hệ với tôi về yêu cầu này.
                            </label>
                          </div>
                          {errors.agree && <p className="text-red-500 text-sm mt-1">{errors.agree}</p>}
                        </div>
                        
                        <button 
                          type="submit"
                          className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors w-full md:w-auto"
                        >
                          Gửi yêu cầu
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Map Section */}
          <section className="bg-white py-20">
            <div className="section-container">
              <div className="text-center mb-12 fade-in">
                <h2 className="text-3xl font-bold mb-6">Vị trí của chúng tôi</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Ghé thăm văn phòng NiceTech tại Thành phố Hồ Chí Minh
                </p>
              </div>
              
              <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg fade-in">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241570222866!2d106.69176287460449!3d10.779668389387924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4670702e31%3A0xa5777fb3de4bb1!2zQ-G7lW5nIEhvw6AgUGjGsOG7nW5nLCBIbyBDaGkgTWluaCBDaXR5LCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1713947826048!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </section>
          
          {/* FAQ Section */}
          <section className="bg-gray-50 py-20">
            <div className="section-container">
              <div className="text-center mb-12 fade-in">
                <h2 className="text-3xl font-bold mb-6">Câu hỏi thường gặp</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Những câu hỏi phổ biến về dịch vụ của NiceTech
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden fade-in">
                    <button 
                      className="w-full text-left p-6 font-bold text-lg flex justify-between items-center"
                      onClick={() => setActiveTab(activeTab === index ? -1 : index)}
                    >
                      {faq.question}
                      <span className={`transform transition-transform ${activeTab === index ? 'rotate-180' : ''}`}>
                        <ChevronDown size={20} />
                      </span>
                    </button>
                    <div className={`px-6 pb-6 transition-all duration-300 ${activeTab === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* CTA */}
          <section className="bg-black text-white py-20">
            <div className="section-container text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Bắt đầu dự án cùng NiceTech ngay hôm nay
              </h2>
              <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-300">
                Chúng tôi sẵn sàng hỗ trợ bạn xây dựng hiện diện trực tuyến chuyên nghiệp và hiệu quả
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <a href="tel:+84394062185" className="bg-white text-black px-8 py-4 font-medium hover:bg-gray-100 transition-colors duration-300 text-lg inline-flex items-center justify-center">
                  <Phone size={20} className="mr-2" /> 0394 062 185
                </a>
                <a href="mailto:info@nicetech.vn" className="border border-white text-white px-8 py-4 font-medium hover:bg-white/10 transition-colors duration-300 text-lg inline-flex items-center justify-center">
                  <Mail size={20} className="mr-2" /> info@nicetech.vn
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;