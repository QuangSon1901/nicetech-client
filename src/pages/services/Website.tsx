import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, Monitor, Smartphone, ShieldCheck, Search, 
  Zap, Layers, Code, PaintBucket, Layout, FileText, Play,
  Sparkles, MousePointer, Maximize, MessageCircle, FileCheck, Cpu,
  BarChart2
} from "lucide-react";

const Website = () => {
  const [activeTemplate, setActiveTemplate] = useState(0);
  
  const templates = [
    {
      name: "AISUKI",
      description: "Dành cho nhà hàng, dịch vụ ăn uống",
      image: "/uploads/projects/aisuki.webp",
      category: "Nhà hàng"
    },
    {
      name: "NextGen Chess",
      description: "Dành cho trung tâm giáo dục, đào tạo",
      image: "/uploads/projects/nextgenchess.webp",
      category: "Giáo dục"
    },
    {
      name: "TT Plywood",
      description: "Dành cho doanh nghiệp sản xuất, xuất khẩu",
      image: "/uploads/projects/ttplywood.webp",
      category: "Doanh nghiệp"
    },
    {
      name: "Du thuyền",
      description: "Dành cho dịch vụ du lịch, trải nghiệm",
      image: "/uploads/projects/duthuyen.webp",
      category: "Du lịch"
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Thiết kế Website Chuyên nghiệp | NiceTech</title>
        <meta name="description" content="Dịch vụ thiết kế website chuyên nghiệp, chuẩn UX/UI, tương thích đa thiết bị và tối ưu SEO cho mọi lĩnh vực kinh doanh." />
        <link rel="canonical" href="https://nicetech.vn/dich-vu/website" />
      </Helmet>
      <div className="bg-white min-h-screen">
        <Navbar />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-white pt-28 pb-16">
            <div className="section-container">
              <div className="text-center max-w-4xl mx-auto mb-16 fade-in">
                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                  Đơn vị hàng đầu về <span className="text-black">thiết kế website</span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  Xây dựng website chuyên nghiệp, tối ưu SEO và hiệu suất - nâng tầm thương hiệu của bạn trong thế giới số
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="btn-primary text-lg py-4 px-8">Liên hệ tư vấn</button>
                  <button className="btn-secondary text-lg py-4 px-8">Xem dự án tiêu biểu</button>
                </div>
              </div>
              
              {/* Featured templates grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {templates.map((template, index) => (
                  <div 
                    key={index} 
                    className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${index === activeTemplate ? 'ring-2 ring-black' : ''}`}
                    onMouseEnter={() => setActiveTemplate(index)}
                  >
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={template.image} 
                        alt={template.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-semibold bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                        {template.category}
                      </span>
                      <h3 className="text-xl font-bold mt-3 mb-2">{template.name}</h3>
                      <p className="text-gray-600 mb-4">{template.description}</p>
                      <a href="#" className="text-black font-medium flex items-center">
                        Xem chi tiết <ArrowRight size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <a href="/kham-pha-mau" className="text-black font-medium flex items-center justify-center">
                  Xem thêm dự án tiêu biểu <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </section>

          {/* Professional Services Section */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="fade-in">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Dịch vụ thiết kế website chuyên nghiệp
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Chúng tôi cung cấp giải pháp thiết kế website toàn diện, từ phân tích nhu cầu đến triển khai và hỗ trợ sau bàn giao.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Sparkles size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Thiết kế đáp ứng nhu cầu</h3>
                        <p className="text-gray-600">
                          Tìm hiểu sâu về doanh nghiệp và thương hiệu của bạn để xây dựng website phù hợp với mục tiêu kinh doanh.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Cpu size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Công nghệ hiện đại</h3>
                        <p className="text-gray-600">
                          Áp dụng công nghệ tiên tiến nhất để xây dựng website có hiệu suất cao, tốc độ tải trang nhanh và trải nghiệm người dùng tối ưu.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Layout size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Bố cục và UX chuyên nghiệp</h3>
                        <p className="text-gray-600">
                          Thiết kế giao diện người dùng thuận tiện, dễ sử dụng, tối ưu tỷ lệ chuyển đổi và giữ chân khách hàng.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <button className="btn-primary mt-8">Nhận tư vấn miễn phí</button>
                </div>
                
                <div className="fade-in">
                  <img 
                    src="/uploads/services/professional-design.jpg" 
                    alt="Dịch vụ thiết kế website chuyên nghiệp" 
                    className="w-full h-auto rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Creative Tools Section */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Tính năng nổi bật</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Tạo ấn tượng mạnh mẽ và xây dựng uy tín với khách hàng thông qua thiết kế website chuyên nghiệp
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 rounded-xl p-8 hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Smartphone size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Tương thích mọi thiết bị</h3>
                  <p className="text-gray-600">
                    Mọi website của NiceTech đều tự động tối ưu cho máy tính, điện thoại và máy tính bảng.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-8 hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <FileText size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Hỗ trợ đa phương tiện</h3>
                  <p className="text-gray-600">
                    Thêm hình ảnh, video, âm thanh và hơn thế nữa với hệ thống quản lý dễ sử dụng.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-8 hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Play size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Hiệu ứng chuyển động</h3>
                  <p className="text-gray-600">
                    Thu hút khách hàng và tăng tương tác với các công cụ tạo chuyển động và hoạt ảnh.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-8 hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <PaintBucket size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Thiết kế ấn tượng</h3>
                  <p className="text-gray-600">
                    Thể hiện cá tính với bộ công cụ hiệu ứng thiết kế trực quan và độc đáo.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-8 hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Search size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Tích hợp SEO</h3>
                  <p className="text-gray-600">
                    Mở rộng phạm vi tiếp cận và xuất hiện nhiều hơn trong kết quả tìm kiếm với bộ tính năng SEO tích hợp.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-8 hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <BarChart2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Phân tích chuyên sâu</h3>
                  <p className="text-gray-600">
                    Truy cập dữ liệu lưu lượng truy cập và hiểu hành vi người dùng để định hướng chiến lược.
                  </p>
                </div>
              </div>
              
              <div className="mt-16 text-center">
                <button className="btn-primary">Khám phá các tính năng</button>
              </div>
            </div>
          </section>

          {/* Showcase Section */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 fade-in">
                  <img 
                    src="/uploads/services/responsive-showcase.jpg" 
                    alt="Website hiển thị trên nhiều thiết bị" 
                    className="w-full h-auto rounded-xl shadow-xl"
                  />
                </div>
                
                <div className="order-1 md:order-2 fade-in">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Hoàn hảo trên mọi thiết bị
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Mỗi website được thiết kế bởi NiceTech đều tự động tối ưu hóa cho tất cả kích thước màn hình, đảm bảo trải nghiệm người dùng nhất quán và chuyên nghiệp.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Maximize size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Thiết kế responsive</h3>
                        <p className="text-gray-600">
                          Tự động điều chỉnh để hiển thị hoàn hảo trên mọi thiết bị - từ màn hình lớn đến điện thoại di động.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Zap size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Tối ưu tốc độ</h3>
                        <p className="text-gray-600">
                          Website tải nhanh trên mọi thiết bị và kết nối internet, giảm tỷ lệ thoát và tăng chuyển đổi.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Code size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">Mã nguồn sạch</h3>
                        <p className="text-gray-600">
                          Được phát triển với mã nguồn sạch, tuân thủ các tiêu chuẩn web hiện đại và thân thiện với SEO.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process section */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Quy trình làm việc</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Quy trình chuyên nghiệp, rõ ràng và minh bạch từ NiceTech mang đến trải nghiệm dịch vụ tuyệt vời
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: "01",
                    title: "Trao đổi nhu cầu",
                    description: "Gặp gỡ trao đổi về mục tiêu, yêu cầu và mong muốn của bạn về website mới.",
                    icon: <MessageCircle size={24} />
                  },
                  {
                    step: "02",
                    title: "Báo giá chi tiết",
                    description: "Dựa trên nhu cầu của bạn, chúng tôi sẽ cung cấp bảng báo giá chi tiết và lộ trình thực hiện.",
                    icon: <FileCheck size={24} />
                  },
                  {
                    step: "03",
                    title: "Tiến hành thực hiện",
                    description: "Sau khi thống nhất, chúng tôi sẽ bắt đầu tiến hành thiết kế và phát triển website theo đúng yêu cầu.",
                    icon: <Cpu size={24} />
                  },
                  {
                    step: "04",
                    title: "Thiết kế giao diện",
                    description: "Chúng tôi sẽ thiết kế giao diện người dùng phù hợp với thương hiệu và yêu cầu của bạn.",
                    icon: <PaintBucket size={24} />
                  },
                  {
                    step: "05",
                    title: "Phát triển website",
                    description: "Tiến hành lập trình và xây dựng website với mã nguồn sạch và tối ưu hiệu suất.",
                    icon: <Code size={24} />
                  },
                  {
                    step: "06",
                    title: "Kiểm thử & Bàn giao",
                    description: "Kiểm tra kỹ lưỡng toàn bộ website và bàn giao sản phẩm hoàn thiện kèm hướng dẫn sử dụng.",
                    icon: <FileCheck size={24} />
                  }
                ].map((step, index) => (
                  <div key={index} className="bg-gray-50 p-8 rounded-xl hover-scale fade-in">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-6">
                      {step.icon}
                    </div>
                    <div className="text-4xl font-bold text-black/10 absolute top-6 right-6">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Packages */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Gói dịch vụ website</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Chúng tôi cung cấp các gói dịch vụ đa dạng, phù hợp với mọi nhu cầu và ngân sách
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-8 hover-scale fade-in">
                  <h3 className="text-2xl font-bold mb-2">Gói Cơ bản</h3>
                  <p className="text-gray-600 mb-6">Lý tưởng cho cá nhân và doanh nghiệp nhỏ</p>
                  <div className="text-4xl font-bold mb-6">3.999.000 ₫</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>Thiết kế responsive</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>Tối ưu SEO cơ bản</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>Hệ thống quản trị nội dung</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>Hỗ trợ kỹ thuật 3 tháng</span>
                    </li>
                  </ul>
                  <button className="w-full bg-black text-white py-3 font-medium hover:bg-gray-800 transition-colors">
                    Liên hệ tư vấn
                  </button>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-8 hover-scale fade-in relative border-2 border-black transform scale-105 z-10">
                  <div className="absolute -top-4 right-8 bg-black text-white px-4 py-1 text-sm">
                    Phổ biến nhất
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Gói Doanh nghiệp</h3>
                  <p className="text-gray-600 mb-6">Dành cho doanh nghiệp vừa và nhỏ</p>
                  <div className="text-4xl font-bold mb-6">6.999.000 ₫</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>Tất cả tính năng của gói Cơ bản</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>Thiết kế UX/UI cao cấp</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>Tối ưu SEO nâng cao</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>Tích hợp Google Analytics</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>Hỗ trợ kỹ thuật 6 tháng</span>
                    </li>
                  </ul>
                  <button className="w-full bg-black text-white py-3 font-medium hover:bg-gray-800 transition-colors">
                    Liên hệ tư vấn
                  </button>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-8 hover-scale fade-in">
                  <h3 className="text-2xl font-bold mb-2">Gói Doanh nghiệp lớn</h3>
                  <p className="text-gray-600 mb-6">Cho doanh nghiệp có yêu cầu cao</p>
                  <div className="text-4xl font-bold mb-6">Liên hệ</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>Tất cả tính năng của gói Doanh nghiệp</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>Thiết kế đặc biệt tùy chỉnh</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>Tích hợp hệ thống thanh toán</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>Tích hợp API bên thứ ba</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        <span className="text-xs">✓</span>
                      </div>
                      <span>Hỗ trợ kỹ thuật 12 tháng</span>
                    </li>
                  </ul>
                  <button className="w-full bg-black text-white py-3 font-medium hover:bg-gray-800 transition-colors">
                    Liên hệ tư vấn
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Support Section */}
          <section className="bg-white py-20">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg fade-in">
                  <h3 className="text-2xl font-bold mb-4">Hỗ trợ 24/7</h3>
                  <p className="text-gray-600 mb-6">
                    Nhận hỗ trợ từ đội ngũ chuyên gia của NiceTech bất kỳ lúc nào bạn cần.
                  </p>
                  <a href="#" className="text-black font-medium flex items-center">
                    Liên hệ hỗ trợ <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg fade-in">
                  <h3 className="text-2xl font-bold mb-4">Đào tạo sử dụng</h3>
                  <p className="text-gray-600 mb-6">
                    Chúng tôi cung cấp hướng dẫn chi tiết và đào tạo đội ngũ của bạn sử dụng website hiệu quả.
                  </p>
                  <a href="#" className="text-black font-medium flex items-center">
                    Tìm hiểu thêm <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
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
                Liên hệ với NiceTech ngay hôm nay để được tư vấn miễn phí về giải pháp website phù hợp với doanh nghiệp của bạn.
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

export default Website;