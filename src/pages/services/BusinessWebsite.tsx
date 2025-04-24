import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, Building, Globe, ShieldCheck, BarChart2, 
  Users, Lock, BookOpen, Layout, Code, Edit, Database,
  Server, Clock, CheckSquare,
  Search,
  ChevronDown
} from "lucide-react";

const BusinessWebsite = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const faqs = [
    {
      question: "Doanh nghiệp của tôi cần quản lý nhiều website. NiceTech có hỗ trợ công cụ quản lý hàng loạt không?",
      answer: "Có, NiceTech cung cấp giải pháp Doanh Nghiệp với công cụ quản lý hàng loạt, cho phép bạn cập nhật nhiều website cùng lúc từ một dashboard tập trung. Bạn có thể dễ dàng thay đổi nội dung, hình ảnh thương hiệu và thực hiện các cập nhật trên tất cả các trang web doanh nghiệp của bạn chỉ trong vài thao tác."
    },
    {
      question: "Sự khác biệt giữa gói Standard và gói Doanh Nghiệp của NiceTech là gì?",
      answer: "Gói Doanh Nghiệp của NiceTech mở rộng tất cả tính năng của gói Standard với các công cụ bổ sung được thiết kế đặc biệt cho doanh nghiệp lớn: quản lý nhiều website từ một dashboard, tính năng đăng nhập một lần (SSO), công cụ quản lý quyền truy cập nâng cao, hỗ trợ kỹ thuật ưu tiên, và dịch vụ tư vấn SEO chuyên sâu. Gói này lý tưởng cho các doanh nghiệp có nhiều chi nhánh hoặc cần quản lý nhiều trang web khách hàng."
    },
    {
      question: "Chi phí giải pháp Doanh Nghiệp là bao nhiêu?",
      answer: "Chi phí giải pháp Doanh Nghiệp của NiceTech được tùy chỉnh dựa trên nhu cầu cụ thể của doanh nghiệp bạn. Các yếu tố ảnh hưởng đến giá bao gồm số lượng website, quy mô doanh nghiệp, tính năng yêu cầu và mức độ hỗ trợ. Vui lòng liên hệ với đội ngũ bán hàng của chúng tôi để nhận báo giá chi tiết cho doanh nghiệp của bạn."
    },
    {
      question: "NiceTech có cung cấp kế hoạch mua hàng loạt không?",
      answer: "Có, chúng tôi cung cấp kế hoạch mua số lượng lớn cho doanh nghiệp có nhu cầu quản lý nhiều website. Kế hoạch này bao gồm giảm giá theo số lượng, quản lý tập trung và hỗ trợ ưu tiên. Đội ngũ tư vấn của chúng tôi sẽ làm việc với bạn để xây dựng giải pháp phù hợp nhất với nhu cầu và ngân sách doanh nghiệp."
    },
    {
      question: "Các mẫu website doanh nghiệp có thể tùy chỉnh không?",
      answer: "Tất cả mẫu website doanh nghiệp của NiceTech đều hoàn toàn có thể tùy chỉnh để phù hợp với thương hiệu và yêu cầu cụ thể của bạn. Chúng tôi cung cấp công cụ thiết kế trực quan không yêu cầu kiến thức lập trình, cũng như hỗ trợ mã tùy chỉnh cho những yêu cầu nâng cao. Đội ngũ thiết kế của chúng tôi cũng có thể tạo mẫu riêng hoàn toàn phù hợp với hướng dẫn thương hiệu của doanh nghiệp bạn."
    },
    {
      question: "Sự khác biệt giữa sử dụng NiceTech và làm việc với một đại lý bên ngoài là gì?",
      answer: "Sử dụng NiceTech mang lại nhiều lợi thế so với làm việc với đại lý bên ngoài: chi phí thấp hơn đáng kể, kiểm soát hoàn toàn nội dung và cập nhật, không có chi phí bảo trì ẩn, và khả năng thực hiện các thay đổi ngay lập tức mà không cần chờ đợi. Chúng tôi cung cấp nền tảng quản lý trực quan cùng với hỗ trợ kỹ thuật chuyên nghiệp, kết hợp tính linh hoạt của giải pháp tự quản lý với sự hỗ trợ của chuyên gia khi bạn cần."
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Giải Pháp Website Doanh Nghiệp | NiceTech</title>
        <meta name="description" content="Thiết kế và quản lý website doanh nghiệp chuyên nghiệp với NiceTech. Giải pháp website toàn diện cho doanh nghiệp, quản lý hàng loạt website, và công cụ thiết kế mạnh mẽ." />
        <link rel="canonical" href="https://nicetech.vn/dich-vu/doanh-nghiep" />
      </Helmet>
      <div className="bg-white min-h-screen">
        <Navbar />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-white pt-28 pb-16">
            <div className="section-container">
              <div className="text-center max-w-4xl mx-auto mb-16 fade-in">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  Giải pháp <span className="text-black">Website Doanh Nghiệp</span> chuyên nghiệp
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  Thiết kế và khả năng sử dụng hàng đầu của NiceTech, được tạo ra đặc biệt cho việc xây dựng và quản lý website doanh nghiệp ở quy mô lớn.
                </p>
                <button className="btn-primary text-lg py-4 px-8">Liên hệ tư vấn</button>
              </div>
              
              <div className="text-center mb-8">
                <p className="text-lg font-semibold">Giải pháp website doanh nghiệp được tin tưởng bởi các thương hiệu hàng đầu</p>
                <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
                  <div className="bg-gray-100 p-4 rounded-lg w-40 h-20 flex items-center justify-center">
                    <span className="text-gray-500 font-medium">Công ty A</span>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg w-40 h-20 flex items-center justify-center">
                    <span className="text-gray-500 font-medium">Công ty B</span>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg w-40 h-20 flex items-center justify-center">
                    <span className="text-gray-500 font-medium">Công ty C</span>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg w-40 h-20 flex items-center justify-center">
                    <span className="text-gray-500 font-medium">Công ty D</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Content Management Section */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="fade-in">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Quản lý nội dung trên mọi website cùng một lúc
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Tối ưu hóa quy trình cập nhật nội dung website và duy trì thương hiệu số của bạn - đồng thời tiết kiệm thời gian cho đội ngũ - với công cụ quản lý nội dung Design Library có khả năng mở rộng.
                  </p>
                  <a href="#learn-more" className="text-black font-semibold inline-flex items-center">
                    Tìm hiểu thêm <ArrowRight size={18} className="ml-2" />
                  </a>
                  
                  <div className="mt-10 space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Edit size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Cập nhật đồng bộ</h3>
                        <p className="text-gray-600">
                          Thay đổi văn bản, hình ảnh và mã trên nhiều website cùng lúc, đảm bảo sự nhất quán của thương hiệu.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Database size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Thư viện nội dung</h3>
                        <p className="text-gray-600">
                          Tạo và quản lý một thư viện các thành phần có thể tái sử dụng trên tất cả các website của doanh nghiệp.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="fade-in">
                  <img 
                    src="/uploads/business/content-management.jpg" 
                    alt="Content Management Dashboard" 
                    className="w-full h-auto rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Performance Monitoring */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 fade-in">
                  <img 
                    src="/uploads/business/performance-dashboard.jpg" 
                    alt="Performance Dashboard" 
                    className="w-full h-auto rounded-xl shadow-2xl"
                  />
                </div>
                
                <div className="order-1 md:order-2 fade-in">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Giám sát hiệu suất website từ một trung tâm
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Dễ dàng quản lý và phân tích tác động của tất cả các website doanh nghiệp từ một bảng điều khiển nhóm được chia sẻ.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <BarChart2 size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Phân tích thống nhất</h3>
                        <p className="text-gray-600">
                          Theo dõi hiệu suất trên tất cả các website của bạn với các báo cáo thống nhất và thông tin chi tiết.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Clock size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Báo cáo thời gian thực</h3>
                        <p className="text-gray-600">
                          Nhận thông tin chi tiết về hiệu suất website theo thời gian thực để đưa ra quyết định nhanh chóng và hiệu quả.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEO Optimization */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="fade-in">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Nâng cao thứ hạng SEO vượt trội so với đối thủ
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Tối đa hóa hiệu suất công cụ tìm kiếm trên toàn doanh nghiệp với các công cụ SEO trực quan, tích hợp sẵn và thông tin chi tiết từ các buổi tư vấn một-đối-một với các chuyên gia SEO của NiceTech.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Search size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Tối ưu hóa toàn diện</h3>
                        <p className="text-gray-600">
                          Công cụ tối ưu hóa SEO tích hợp sẵn giúp cải thiện thứ hạng tìm kiếm cho tất cả các website của bạn.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Users size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Tư vấn chuyên gia</h3>
                        <p className="text-gray-600">
                          Nhận tư vấn và hướng dẫn từ các chuyên gia SEO của NiceTech thông qua các buổi tư vấn riêng biệt.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <button className="btn-primary mt-8">Tìm hiểu dịch vụ SEO</button>
                </div>
                
                <div className="fade-in">
                  <img 
                    src="/uploads/business/seo-optimization.jpg" 
                    alt="SEO Optimization" 
                    className="w-full h-auto rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Collaboration and Security */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Users size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Tăng cường giao tiếp và làm việc nhóm</h3>
                  <p className="text-gray-600 mb-6">
                    Thúc đẩy sự hợp tác trong và giữa các nhóm bằng cách xây dựng intranet hoặc các trang nội bộ ở quy mô lớn. Nhanh chóng đưa các nhóm lên cùng một trang và triển khai tài liệu dễ dàng truy cập, cập nhật, tin tức từ lãnh đạo, danh bạ nội bộ, v.v.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="text-black mr-3">
                        <CheckSquare size={20} />
                      </div>
                      <p>Trang intranet nội bộ an toàn</p>
                    </div>
                    <div className="flex items-start">
                      <div className="text-black mr-3">
                        <CheckSquare size={20} />
                      </div>
                      <p>Chia sẻ tài liệu và thông tin dễ dàng</p>
                    </div>
                    <div className="flex items-start">
                      <div className="text-black mr-3">
                        <CheckSquare size={20} />
                      </div>
                      <p>Quản lý quyền truy cập chi tiết</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Lock size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Bảo vệ dữ liệu nội bộ với đăng nhập một lần (SSO)</h3>
                  <p className="text-gray-600 mb-6">
                    Kiểm soát ai có thể xem các website nội bộ. Độc quyền cho NiceTech Doanh Nghiệp, bảo vệ SSO cho các website và trang thêm một lớp bảo mật và đảm bảo mà doanh nghiệp cần.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="text-black mr-3">
                        <CheckSquare size={20} />
                      </div>
                      <p>Tích hợp với Google, Okta, Azure</p>
                    </div>
                    <div className="flex items-start">
                      <div className="text-black mr-3">
                        <CheckSquare size={20} />
                      </div>
                      <p>Xác thực an toàn</p>
                    </div>
                    <div className="flex items-start">
                      <div className="text-black mr-3">
                        <CheckSquare size={20} />
                      </div>
                      <p>Trải nghiệm đăng nhập liền mạch</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 text-center">
                <p className="text-lg text-gray-600 mb-6">
                  Liên hệ với đội ngũ bán hàng để thảo luận về những gì giải pháp website doanh nghiệp từ NiceTech có thể làm cho đội ngũ của bạn.
                </p>
                <a href="#contact" className="btn-primary inline-flex items-center">
                  Liên hệ ngay <ArrowRight size={18} className="ml-2" />
                </a>
              </div>
            </div>
          </section>

          {/* Content Security and Review */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Bảo mật nội dung website</h3>
                  <p className="text-gray-600 mb-6">
                    Loại bỏ truy cập trái phép vào các website NiceTech của bạn đồng thời tăng cường trải nghiệm đăng nhập cho nhân viên với tích hợp đăng nhập một lần từ các đối tác hàng đầu của chúng tôi.
                  </p>
                  <a href="#sso-options" className="text-black font-medium flex items-center">
                    Tìm hiểu về các tùy chọn SSO <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Edit size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Soạn thảo và xem trước trước khi xuất bản</h3>
                  <p className="text-gray-600 mb-6">
                    Chỉ phát hành các website chất lượng cao, sẵn sàng chuyển đổi nhất. Tối ưu hóa nội dung mới và cập nhật trước khi triển khai với tự do phát triển các trang chưa xuất bản và lặp lại trên các trang trực tiếp.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Users size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Phối hợp quyền website toàn đội</h3>
                  <p className="text-gray-600 mb-6">
                    Nhanh chóng phân quyền chỉnh sửa và xuất bản cho nhân viên từ bảng điều khiển tập trung, đảm bảo kiểm soát đúng người.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Video Section */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Khám phá cách các thương hiệu sử dụng NiceTech</h2>
                <a href="#watch-now" className="btn-primary">
                  Xem ngay
                </a>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-2xl fade-in">
                <div className="aspect-video bg-gray-100 relative">
                  <img 
                    src="/uploads/business/video-thumbnail.jpg" 
                    alt="NiceTech Enterprise Video" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-black bg-opacity-70 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-8 bg-gray-50 rounded-xl shadow-lg fade-in">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-3/4 mb-6 md:mb-0 md:pr-8">
                    <p className="text-xl italic text-gray-700">
                      "Thật dễ dàng, rất plug and play. Các mẫu thực sự quan trọng vì nó giúp chúng tôi tiết kiệm thời gian... và chúng tôi thực sự có thể quản lý và kiểm soát quyền [website]."
                    </p>
                    <p className="mt-4 font-bold">Nguyễn Thị Minh, CEO</p>
                    <p className="text-gray-600">nicemarket.vn</p>
                  </div>
                  <div className="md:w-1/4 flex justify-center">
                    <a href="#blog" className="bg-black text-white py-3 px-6 rounded-lg flex items-center">
                      Xem blog <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Design Features */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 fade-in">
                  <img 
                    src="/uploads/business/design-features.jpg" 
                    alt="Website Design Features" 
                    className="w-full h-auto rounded-xl shadow-2xl"
                  />
                </div>
                
                <div className="order-1 md:order-2 fade-in">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Tiềm năng thiết kế website vô song
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Dễ dàng triển khai và chỉnh sửa các website đẹp mắt, thu hút mà không cần bất kỳ mã nào bằng trình soạn thảo kéo và thả đơn giản và công cụ xây dựng website tự động được hỗ trợ bởi AI của NiceTech.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Code size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Tùy chỉnh nâng cao</h3>
                        <p className="text-gray-600">
                          Vượt ra ngoài các tính năng thiết kế cơ bản với hỗ trợ cho mã tùy chỉnh và tích hợp bên thứ ba.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Layout size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Mẫu thiết kế chuyên nghiệp</h3>
                        <p className="text-gray-600">
                          Bắt đầu với các mẫu thiết kế đoạt giải thưởng, được sáng tạo bởi chuyên gia hoặc tùy chỉnh các mẫu theo thương hiệu của bạn.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <BookOpen size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Tăng cường cộng tác</h3>
                        <p className="text-gray-600">
                          Nâng cao sự cộng tác, tổ chức và quy trình làm việc của doanh nghiệp với tag trang tùy chỉnh, ghim dự án và hơn thế nữa.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Security & Reliability */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Bảo mật & Độ tin cậy</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  NiceTech Doanh Nghiệp là một trong những giải pháp website doanh nghiệp đáng tin cậy và phản hồi nhanh nhất hiện có.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg text-center hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Server size={24} />
                  </div>
                  <h3 className="text-4xl font-bold mb-2">99.9%</h3>
                  <h4 className="text-xl font-bold mb-4">Uptime</h4>
                  <p className="text-gray-600">
                    Cloud hosting và uptime 99.9% nghĩa là lưu lượng truy cập và tương tác nhiều hơn cho website của bạn.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg text-center hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="text-4xl font-bold mb-2">SOC 2</h3>
                  <h4 className="text-xl font-bold mb-4">Chứng nhận</h4>
                  <p className="text-gray-600">
                    Chứng nhận SOC 2 Type II của chúng tôi xác nhận các biện pháp kiểm soát, quản lý rủi ro và tuân thủ các thực tiễn ngành.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg text-center hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lock size={24} />
                  </div>
                  <h3 className="text-4xl font-bold mb-2">Đánh giá</h3>
                  <h4 className="text-xl font-bold mb-4">Bảo mật</h4>
                  <p className="text-gray-600">
                    Đội ngũ chuyên gia của chúng tôi có thể hợp tác với thương hiệu của bạn, trả lời bất kỳ câu hỏi bảo mật NiceTech nào, và cung cấp cho bạn các chính sách và thực tiễn tốt nhất về rủi ro và an ninh mạng mới nhất của NiceTech.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Features List */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">NiceTech Doanh Nghiệp có thể làm gì cho thương hiệu của bạn?</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  NiceTech Doanh Nghiệp tập trung vào việc cung cấp cho đội ngũ của bạn những công cụ để bắt đầu và vận hành.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Thư viện thiết kế doanh nghiệp",
                  "Tích hợp đăng nhập một lần",
                  "Bảng điều khiển tài khoản doanh nghiệp",
                  "Chứng chỉ SSL",
                  "Lưu trữ không giới hạn",
                  "Người quản lý tài khoản chuyên trách",
                  "Đào tạo SEO",
                  "Tư vấn thiết kế",
                  "Hỗ trợ kỹ thuật và đào tạo sản phẩm tận tâm"
                ].map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover-scale fade-in">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center mr-3 shrink-0">
                        <CheckSquare size={12} />
                      </div>
                      <p className="font-medium">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold mb-6">Trò chuyện với đội ngũ của chúng tôi</h3>
                <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                  Trò chuyện với chúng tôi về cách NiceTech Doanh Nghiệp có thể hợp lý hóa quy trình sản xuất website cho công ty của bạn.
                </p>
                <button className="btn-primary text-lg py-4 px-8">Liên hệ ngay</button>
              </div>
            </div>
          </section>

          {/* Bulk Solution */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="fade-in">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Muốn quản lý hàng trăm website?
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Tìm hiểu thêm về giải pháp hàng loạt dành cho doanh nghiệp của NiceTech.
                  </p>
                  <a href="#learn-more" className="btn-primary inline-flex items-center">
                    Tìm hiểu thêm <ArrowRight size={18} className="ml-2" />
                  </a>
                </div>
                
                <div className="fade-in">
                  <img 
                    src="/uploads/business/bulk-management.jpg" 
                    alt="Bulk Website Management" 
                    className="w-full h-auto rounded-xl shadow-xl"
                  />
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
          <section className="bg-black text-white py-24">
            <div className="section-container text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Sẵn sàng nâng tầm hiện diện trực tuyến của bạn?
              </h2>
              <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-300">
                Liên hệ với NiceTech ngay hôm nay để được tư vấn miễn phí về
                giải pháp website phù hợp với doanh nghiệp của bạn.
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
                Website chuyên nghiệp - Nền tảng thành công trong thời đại số
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BusinessWebsite;