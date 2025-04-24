import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, ShoppingBag, CreditCard, Truck, BarChart2, 
  Calendar, FileText, Gift, ShoppingCart, Search, Mail,
  Package, Globe, Smartphone, CheckCircle, Code, Settings, 
  Shield, Database, Server, Layout,
  ChevronDown
} from "lucide-react";

const ECommerce = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const faqs = [
    {
      question: "Quá trình xây dựng hệ thống thương mại điện tử với NiceTech diễn ra như thế nào?",
      answer: "Quy trình xây dựng hệ thống E-commerce với NiceTech bao gồm 6 bước chính: (1) Tư vấn & phân tích nhu cầu kinh doanh, (2) Thiết kế giao diện và trải nghiệm người dùng, (3) Phát triển hệ thống backend và frontend, (4) Tích hợp với các hệ thống bên thứ ba (thanh toán, vận chuyển, kế toán), (5) Kiểm thử toàn diện, và (6) Triển khai & hỗ trợ sau triển khai. Mỗi dự án được quản lý bởi một trưởng nhóm dự án chuyên nghiệp, đảm bảo tiến độ và chất lượng."
    },
    {
      question: "NiceTech cung cấp những tính năng gì cho hệ thống thương mại điện tử?",
      answer: "NiceTech phát triển các hệ thống E-commerce với đầy đủ tính năng như: quản lý sản phẩm đa cấp, biến thể sản phẩm không giới hạn, quản lý kho thông minh, tích hợp đa cổng thanh toán (VNPay, MoMo, ZaloPay, thẻ tín dụng), tối ưu hóa quy trình checkout, hệ thống khuyến mãi linh hoạt, quản lý đơn hàng theo thời gian thực, tích hợp với đơn vị vận chuyển (GHN, GHTK, J&T), báo cáo phân tích kinh doanh, quản lý khách hàng và CRM, đa ngôn ngữ và đa tiền tệ. Tất cả được phát triển theo yêu cầu cụ thể của từng doanh nghiệp."
    },
    {
      question: "Chi phí xây dựng hệ thống thương mại điện tử là bao nhiêu?",
      answer: "Chi phí xây dựng hệ thống E-commerce phụ thuộc vào quy mô và yêu cầu cụ thể của dự án. NiceTech cung cấp các gói dịch vụ từ cơ bản (80-150 triệu VNĐ) cho các doanh nghiệp vừa và nhỏ đến các giải pháp cao cấp (200-500 triệu VNĐ) cho các doanh nghiệp lớn với nhu cầu phức tạp. Chúng tôi sẽ tư vấn giải pháp phù hợp nhất với ngân sách và mục tiêu kinh doanh của bạn. Mỗi báo giá đều chi tiết và minh bạch, không có chi phí ẩn."
    },
    {
      question: "Thời gian hoàn thành một dự án thương mại điện tử là bao lâu?",
      answer: "Thời gian phát triển một hệ thống E-commerce dao động từ 2-4 tháng cho các dự án cơ bản và 4-8 tháng cho các dự án phức tạp. Lịch trình cụ thể sẽ được xác định sau khi phân tích yêu cầu chi tiết. NiceTech làm việc theo phương pháp Agile, cho phép khách hàng xem và góp ý về sản phẩm thường xuyên trong quá trình phát triển, đảm bảo kết quả cuối cùng đáp ứng đúng mong đợi và có thể điều chỉnh linh hoạt nếu có thay đổi về yêu cầu."
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Xây Dựng Hệ Thống Thương Mại Điện Tử | Giải Pháp E-Commerce | NiceTech</title>
        <meta name="description" content="Dịch vụ xây dựng hệ thống thương mại điện tử tùy chỉnh, phù hợp với nhu cầu đặc thù của doanh nghiệp. Giải pháp toàn diện từ tư vấn, thiết kế đến triển khai." />
        <link rel="canonical" href="https://nicetech.vn/dich-vu/e-commerce" />
      </Helmet>
      <div className="bg-white min-h-screen">
        <Navbar />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-white pt-28 pb-16">
            <div className="section-container">
              <div className="text-center max-w-4xl mx-auto mb-16 fade-in">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  Xây dựng <span className="text-black">hệ thống thương mại điện tử</span> theo yêu cầu
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  Giải pháp E-commerce tùy chỉnh, được thiết kế đặc biệt cho doanh nghiệp của bạn. Từ tư vấn, thiết kế đến phát triển và triển khai, chúng tôi kiến tạo hệ thống thương mại điện tử giúp doanh nghiệp phát triển.
                </p>
                <button className="btn-primary text-lg py-4 px-8">Nhận tư vấn miễn phí</button>
              </div>
              
              <div className="relative rounded-sm overflow-hidden shadow-2xl fade-in">
                <img 
                  src="/uploads/ecommerce/hero-ecommerce.jpg" 
                  alt="Hệ thống thương mại điện tử" 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-white">
                  <p className="text-lg font-bold">Xây dựng hệ thống E-commerce đẳng cấp với NiceTech</p>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio Section */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Dự án thương mại điện tử nổi bật</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                  Những hệ thống E-commerce chúng tôi đã xây dựng cho khách hàng - được thiết kế đặc biệt để đáp ứng nhu cầu kinh doanh cụ thể và mang lại trải nghiệm người dùng vượt trội.
                </p>
                <a href="#case-studies" className="text-black font-semibold inline-flex items-center">
                  Xem các dự án <ArrowRight size={18} className="ml-2" />
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-sm overflow-hidden shadow-lg hover-scale fade-in">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src="/uploads/ecommerce/case-study1.jpg" 
                      alt="Fashion E-commerce" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">LUXE Fashion</h3>
                    <p className="text-gray-600 mb-4">Hệ thống bán lẻ thời trang cao cấp với tính năng đặt may đo và tư vấn stylist trực tuyến.</p>
                    <a href="#" className="text-black font-medium flex items-center">
                      Xem chi tiết <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
                
                <div className="bg-white rounded-sm overflow-hidden shadow-lg hover-scale fade-in">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src="/uploads/ecommerce/case-study2.jpg" 
                      alt="Craft Marketplace" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">ArtCraft Market</h3>
                    <p className="text-gray-600 mb-4">Sàn giao dịch cho nghệ nhân thủ công với hệ thống quản lý đa người bán và thanh toán phân chia.</p>
                    <a href="#" className="text-black font-medium flex items-center">
                      Xem chi tiết <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
                
                <div className="bg-white rounded-sm overflow-hidden shadow-lg hover-scale fade-in">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src="/uploads/ecommerce/case-study3.jpg" 
                      alt="Tech E-commerce" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">TechZone</h3>
                    <p className="text-gray-600 mb-4">Hệ thống bán thiết bị công nghệ với tích hợp so sánh sản phẩm và hỗ trợ kỹ thuật trực tuyến.</p>
                    <a href="#" className="text-black font-medium flex items-center">
                      Xem chi tiết <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <a href="#learn-more" className="btn-primary">Xem tất cả dự án</a>
              </div>
            </div>
          </section>

          {/* Our Services Section */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="fade-in">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Dịch vụ xây dựng E-commerce toàn diện
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Chúng tôi cung cấp dịch vụ phát triển hệ thống thương mại điện tử từ A-Z, giúp doanh nghiệp của bạn tỏa sáng trong không gian trực tuyến với giải pháp E-commerce đẳng cấp.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <ShoppingBag size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Quản lý sản phẩm nâng cao</h3>
                        <p className="text-gray-600">
                          Xây dựng hệ thống quản lý sản phẩm đa cấp với biến thể không giới hạn, thuộc tính tùy chỉnh và quản lý kho thông minh.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <CreditCard size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Tích hợp thanh toán đa dạng</h3>
                        <p className="text-gray-600">
                          Tích hợp các cổng thanh toán phổ biến tại Việt Nam như VNPay, MoMo, ZaloPay, cùng hệ thống thẻ quốc tế Visa, Mastercard và thanh toán khi nhận hàng.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Truck size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Hệ thống vận chuyển linh hoạt</h3>
                        <p className="text-gray-600">
                          Kết nối đa đơn vị vận chuyển (GHN, GHTK, Viettel Post, J&T) với tính toán phí real-time và theo dõi đơn hàng tự động.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <a href="#services" className="btn-primary mt-8 inline-flex items-center">
                    Khám phá dịch vụ <ArrowRight size={18} className="ml-2" />
                  </a>
                </div>
                
                <div className="fade-in">
                  <div className="relative">
                    <img 
                      src="/uploads/ecommerce/services-showcase.jpg" 
                      alt="E-commerce Services" 
                      className="w-full h-auto rounded-sm shadow-xl"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-sm shadow-lg max-w-xs">
                      <img 
                        src="/uploads/ecommerce/admin-dashboard.jpg" 
                        alt="Admin Dashboard" 
                        className="w-full h-auto rounded-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 fade-in">
                  <img 
                    src="/uploads/ecommerce/tech-stack.jpg" 
                    alt="Technology Stack" 
                    className="w-full h-auto rounded-sm shadow-xl"
                  />
                </div>
                
                <div className="order-1 md:order-2 fade-in">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Công nghệ hiện đại, hiệu suất vượt trội
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Chúng tôi sử dụng các công nghệ tiên tiến và kiến trúc hiện đại để xây dựng hệ thống E-commerce mạnh mẽ, an toàn và dễ mở rộng cho doanh nghiệp của bạn.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Code size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Nền tảng phát triển hiện đại</h3>
                        <p className="text-gray-600">
                          Xây dựng trên các framework mạnh mẽ như Laravel, React, Vue.js, hoặc .NET Core tùy theo nhu cầu dự án. Kiến trúc microservices cho hệ thống lớn.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Shield size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Bảo mật hàng đầu</h3>
                        <p className="text-gray-600">
                          Tuân thủ các tiêu chuẩn bảo mật PCI DSS cho thanh toán, mã hóa dữ liệu, và các biện pháp bảo vệ chống tấn công OWASP Top 10.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Server size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Hạ tầng đám mây</h3>
                        <p className="text-gray-600">
                          Triển khai trên nền tảng đám mây như AWS, Google Cloud, hoặc Microsoft Azure với cấu hình tự động mở rộng theo tải.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <button className="btn-primary mt-8">Tìm hiểu công nghệ của chúng tôi</button>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial */}
          <section className="bg-white py-20">
            <div className="section-container">
              <div className="bg-gray-50 p-8 md:p-12 rounded-sm shadow-lg fade-in">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-3/4 mb-6 md:mb-0 md:pr-8">
                    <p className="text-xl italic text-gray-700 mb-6">
                      "NiceTech đã giúp chúng tôi xây dựng một hệ thống thương mại điện tử vượt xa mong đợi. Không chỉ giao diện đẹp mắt, toàn bộ hệ thống vận hành mượt mà, tích hợp hoàn hảo với phần mềm kế toán và kho hiện có của chúng tôi. Sau 6 tháng triển khai, doanh số online tăng gấp 3 lần."
                    </p>
                    <div>
                      <p className="font-bold">Nguyễn Thành Đạt</p>
                      <p className="text-gray-600">Giám đốc điều hành - LUXE Fashion</p>
                    </div>
                  </div>
                  <div className="md:w-1/4">
                    <img 
                      src="/uploads/ecommerce/testimonial.jpg" 
                      alt="Testimonial" 
                      className="w-full h-auto rounded-sm shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Development Process */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Quy trình phát triển chuyên nghiệp</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Phương pháp làm việc minh bạch và hiệu quả của chúng tôi đảm bảo dự án của bạn được triển khai đúng thời hạn, đáp ứng mọi yêu cầu.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 fade-in">
                  <div className="flex items-start">
                    <div className="text-3xl font-bold text-black mr-6">01.</div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Tư vấn & Phân tích</h3>
                      <p className="text-gray-600">
                        Chúng tôi tìm hiểu chi tiết về mô hình kinh doanh, mục tiêu và đối tượng khách hàng để đề xuất giải pháp phù hợp nhất.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-3xl font-bold text-black mr-6">02.</div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Thiết kế UX/UI</h3>
                      <p className="text-gray-600">
                        Thiết kế giao diện người dùng hấp dẫn với trải nghiệm mua sắm trực tuyến mượt mà, tối ưu tỷ lệ chuyển đổi.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-3xl font-bold text-black mr-6">03.</div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Phát triển hệ thống</h3>
                      <p className="text-gray-600">
                        Lập trình frontend và backend với các công nghệ hiện đại, đảm bảo hiệu suất, bảo mật và khả năng mở rộng.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-3xl font-bold text-black mr-6">04.</div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Tích hợp dịch vụ</h3>
                      <p className="text-gray-600">
                        Kết nối với các hệ thống thanh toán, vận chuyển, ERP, CRM và các dịch vụ bên thứ ba khác theo yêu cầu.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8 fade-in">
                  <div className="flex items-start">
                    <div className="text-3xl font-bold text-black mr-6">05.</div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Kiểm thử toàn diện</h3>
                      <p className="text-gray-600">
                        Thực hiện kiểm thử kỹ lưỡng về chức năng, hiệu suất, trải nghiệm người dùng và bảo mật.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-3xl font-bold text-black mr-6">06.</div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Triển khai & Đào tạo</h3>
                      <p className="text-gray-600">
                        Đưa hệ thống vào hoạt động trên máy chủ sản xuất và đào tạo nhân viên sử dụng hiệu quả.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-3xl font-bold text-black mr-6">07.</div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Tối ưu SEO & Marketing</h3>
                      <p className="text-gray-600">
                        Thiết lập các công cụ phân tích và tối ưu cho công cụ tìm kiếm, sẵn sàng cho chiến dịch marketing.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-3xl font-bold text-black mr-6">08.</div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Hỗ trợ & Bảo trì</h3>
                      <p className="text-gray-600">
                        Cung cấp dịch vụ hỗ trợ kỹ thuật, bảo trì và cập nhật liên tục để đảm bảo hệ thống luôn hoạt động tốt nhất.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 text-center">
                <a href="#process" className="btn-primary">Tìm hiểu chi tiết quy trình</a>
              </div>
            </div>
          </section>

          {/* E-commerce Features */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Tính năng E-commerce nổi bật</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Hệ thống thương mại điện tử của chúng tôi được trang bị đầy đủ tính năng hiện đại để đáp ứng mọi nhu cầu kinh doanh.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-sm shadow-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Settings size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Quản lý sản phẩm</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <span>Danh mục sản phẩm đa cấp không giới hạn</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <span>Biến thể sản phẩm linh hoạt (màu, kích cỡ, chất liệu...)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <span>Nhập/xuất sản phẩm hàng loạt qua Excel</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <span>Hệ thống đánh giá và bình luận sản phẩm</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-8 rounded-sm shadow-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Package size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Quản lý đơn hàng & Vận chuyển</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <span>Quản lý trạng thái đơn hàng theo thời gian thực</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <span>Tích hợp đa đơn vị vận chuyển (GHN, GHTK, J&T)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <span>Tính phí vận chuyển thời gian thực</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <span>Theo dõi lộ trình đơn hàng tự động</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-8 rounded-sm shadow-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <CreditCard size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Thanh toán & Giảm giá</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <span>Tích hợp đa cổng thanh toán (VNPay, MoMo, ZaloPay)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <span>Hệ thống mã giảm giá đa dạng điều kiện</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <span>Chương trình khuyến mãi, flash sale tự động</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <span>Chương trình khách hàng thân thiết, tích điểm</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-8 rounded-sm shadow-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Database size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Quản lý kho & Báo cáo</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <span>Quản lý kho đa chi nhánh</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <span>Lịch sử nhập xuất, kiểm kho chi tiết</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <span>Báo cáo doanh thu, lợi nhuận theo nhiều tiêu chí</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <span>Xuất báo cáo Excel và PDF</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-8 rounded-sm shadow-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Search size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">SEO & Marketing</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <span>Tối ưu SEO cho từng trang và sản phẩm</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <span>Tích hợp Google Analytics và Google Tag Manager</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <span>Tích hợp chiến dịch Email Marketing</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <span>Kết nối Facebook, Google Shopping</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-8 rounded-sm shadow-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Layout size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Giao diện & Trải nghiệm</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <span>Giao diện tương thích đa thiết bị</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <span>Tải trang nhanh, trải nghiệm mượt mà</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <span>Hỗ trợ đa ngôn ngữ, đa tiền tệ</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-1">
                        <CheckCircle size={16} />
                      </div>
                      <span>Tính năng tìm kiếm thông minh, lọc nâng cao</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Service Packages */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Gói dịch vụ E-commerce</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Chúng tôi cung cấp các gói dịch vụ phù hợp với quy mô và nhu cầu của doanh nghiệp bạn.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 rounded-sm shadow-lg hover-scale fade-in">
                  <h3 className="text-2xl font-bold mb-2">Standard</h3>
                  <p className="text-gray-600 mb-6">Cho doanh nghiệp nhỏ và vừa</p>
                  <div className="text-4xl font-bold mb-6">80-150 triệu</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Website thương mại điện tử đầy đủ tính năng cơ bản</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Giao diện tương thích mobile</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Tích hợp 3 cổng thanh toán</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Quản lý kho đơn giản</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Hỗ trợ kỹ thuật 3 tháng</span>
                    </li>
                  </ul>
                  <button className="w-full bg-black text-white py-3 font-medium hover:bg-gray-800 transition-colors">
                    Liên hệ tư vấn
                  </button>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-sm shadow-lg hover-scale fade-in relative border-2 border-black transform scale-105 z-10">
                  <div className="absolute -top-4 right-8 bg-black text-white px-4 py-1 text-sm">
                    Phổ biến nhất
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Advanced</h3>
                  <p className="text-gray-600 mb-6">Cho doanh nghiệp đang phát triển</p>
                  <div className="text-4xl font-bold mb-6">150-250 triệu</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Tất cả tính năng của gói Standard</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Thiết kế UX/UI cao cấp</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Tích hợp đa cổng thanh toán và vận chuyển</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Hệ thống khuyến mãi, tích điểm nâng cao</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Tích hợp phân tích dữ liệu và báo cáo</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Hỗ trợ kỹ thuật 6 tháng</span>
                    </li>
                  </ul>
                  <button className="w-full bg-black text-white py-3 font-medium hover:bg-gray-800 transition-colors">
                    Liên hệ tư vấn
                  </button>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-sm shadow-lg hover-scale fade-in">
                  <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                  <p className="text-gray-600 mb-6">Cho doanh nghiệp lớn</p>
                  <div className="text-4xl font-bold mb-6">250-500+ triệu</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Tất cả tính năng của gói Advanced</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Kiến trúc microservices mở rộng</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Tích hợp ERP, CRM và các hệ thống khác</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Hỗ trợ multi-store, multi-vendor</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Phân tích dữ liệu lớn, AI dự đoán</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Hỗ trợ kỹ thuật 12 tháng, SLA cao cấp</span>
                    </li>
                  </ul>
                  <button className="w-full bg-black text-white py-3 font-medium hover:bg-gray-800 transition-colors">
                    Liên hệ tư vấn
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Câu hỏi thường gặp</h2>
              </div>
              
              <div className="space-y-6 max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-sm shadow-md overflow-hidden fade-in">
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
          <section className="bg-black text-white py-24">
            <div className="section-container text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Sẵn sàng xây dựng hệ thống thương mại điện tử cho doanh nghiệp của bạn?
              </h2>
              <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-300">
                Liên hệ với NiceTech ngay hôm nay để được tư vấn miễn phí về giải pháp E-commerce phù hợp với yêu cầu riêng của doanh nghiệp bạn.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <button className="bg-white text-black px-8 py-4 font-medium hover:bg-gray-100 transition-colors duration-300 text-lg">
                  Liên hệ ngay
                </button>
                <button className="border border-white text-white px-8 py-4 font-medium hover:bg-white/10 transition-colors duration-300 text-lg">
                  Nhận báo giá
                </button>
              </div>
              
              <p className="text-gray-400 mt-12">
                NiceTech - Đối tác tin cậy cho hành trình chuyển đổi số của doanh nghiệp bạn
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ECommerce;