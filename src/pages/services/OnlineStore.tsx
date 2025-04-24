import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, ShoppingBag, CreditCard, Truck, BarChart2, 
  Package, ShoppingCart, Smartphone, Star, Clock, 
  Tag, Gift, Layout, Server, ChevronDown, Code, Database, Shield,
  CheckCircle
} from "lucide-react";

const OnlineStore = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const projectExamples = [
    {
      name: "BeautyStore.vn",
      image: "/uploads/onlinestore/project1.jpg",
      description: "Website bán mỹ phẩm cao cấp với tính năng tư vấn trực tuyến"
    },
    {
      name: "GadgetWorld",
      image: "/uploads/onlinestore/project2.jpg",
      description: "Hệ thống bán thiết bị công nghệ với filter sản phẩm thông minh"
    },
    {
      name: "FashionHub",
      image: "/uploads/onlinestore/project3.jpg",
      description: "Website thời trang với AR thử đồ và tích hợp Instagram"
    },
    {
      name: "OrganicMarket",
      image: "/uploads/onlinestore/project4.jpg",
      description: "Website bán thực phẩm hữu cơ với đặt hàng định kỳ"
    }
  ];
  
  const faqs = [
    {
      question: "Quy trình thiết kế website bán hàng của NiceTech diễn ra như thế nào?",
      answer: "Quy trình thiết kế website bán hàng của NiceTech bao gồm 6 bước: (1) Tư vấn và phân tích nhu cầu kinh doanh, (2) Thiết kế giao diện người dùng và trải nghiệm mua sắm, (3) Phát triển các tính năng bán hàng theo yêu cầu, (4) Tích hợp các hệ thống thanh toán và vận chuyển, (5) Kiểm thử toàn diện trên đa nền tảng, (6) Đào tạo sử dụng và bàn giao. Mỗi dự án được theo dõi bởi quản lý dự án chuyên nghiệp, đảm bảo website bán hàng đáp ứng đầy đủ mục tiêu kinh doanh và thời hạn đã cam kết."
    },
    {
      question: "Chi phí để xây dựng một website bán hàng là bao nhiêu?",
      answer: "Chi phí xây dựng website bán hàng với NiceTech dao động từ 20 triệu đến 100 triệu đồng, tùy thuộc vào quy mô và yêu cầu cụ thể. Chúng tôi cung cấp ba gói dịch vụ chính: Gói Cơ bản (20-30 triệu) phù hợp cho doanh nghiệp nhỏ với các tính năng thiết yếu, Gói Chuyên nghiệp (35-60 triệu) với đầy đủ tính năng bán hàng và tích hợp, và Gói Cao cấp (70-100 triệu) cho các doanh nghiệp lớn với yêu cầu đặc biệt như đa ngôn ngữ, tích hợp ERP/CRM. Mỗi báo giá đều được cá nhân hóa sau khi tìm hiểu kỹ nhu cầu của doanh nghiệp."
    },
    {
      question: "NiceTech có thể xây dựng những loại tính năng nào cho website bán hàng?",
      answer: "NiceTech có thể phát triển đầy đủ tính năng cho website bán hàng chuyên nghiệp, bao gồm: quản lý sản phẩm đa cấp với biến thể phức tạp, hệ thống giỏ hàng và checkout tối ưu, tích hợp đa cổng thanh toán (VNPay, MoMo, ZaloPay, thẻ quốc tế), kết nối với đơn vị vận chuyển (GHN, GHTK, J&T), hệ thống khuyến mãi và mã giảm giá linh hoạt, quản lý đơn hàng và khách hàng, thống kê và báo cáo doanh số, tích hợp Google Analytics và công cụ marketing, đánh giá sản phẩm, SEO tối ưu và nhiều tính năng tùy chỉnh khác theo yêu cầu cụ thể của doanh nghiệp."
    },
    {
      question: "Thời gian để hoàn thành một website bán hàng là bao lâu?",
      answer: "Thời gian phát triển một website bán hàng trung bình từ 4-12 tuần tùy thuộc vào quy mô và độ phức tạp. Các dự án cơ bản có thể hoàn thành trong 4-6 tuần, dự án với nhiều tính năng tùy chỉnh cần 7-10 tuần, và các dự án phức tạp với tích hợp nhiều hệ thống có thể cần 10-12 tuần. NiceTech làm việc theo phương pháp Agile, cho phép khách hàng theo dõi tiến độ và đóng góp ý kiến thường xuyên trong suốt quá trình phát triển, đảm bảo kết quả cuối cùng đáp ứng đúng yêu cầu kinh doanh."
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Thiết Kế Website Bán Hàng | Xây Dựng Cửa Hàng Online | NiceTech</title>
        <meta name="description" content="Dịch vụ thiết kế website bán hàng chuyên nghiệp tùy chỉnh theo nhu cầu doanh nghiệp. Giải pháp toàn diện với tính năng đa dạng, từ quản lý sản phẩm đến thanh toán và báo cáo doanh số." />
        <link rel="canonical" href="https://nicetech.vn/dich-vu/website-ban-hang" />
      </Helmet>
      <div className="bg-white min-h-screen">
        <Navbar />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-white pt-28 pb-16">
            <div className="section-container">
              <div className="text-center max-w-4xl mx-auto mb-16 fade-in">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  Xây dựng <span className="text-black">website bán hàng</span> thu hút khách hàng
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  Thiết kế website bán hàng chuyên nghiệp, tùy chỉnh theo nhu cầu doanh nghiệp của bạn. Giải pháp toàn diện từ giao diện đến tính năng, giúp doanh nghiệp nổi bật và phát triển.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="btn-primary text-lg py-4 px-8">Nhận tư vấn miễn phí</button>
                  <button className="btn-secondary text-lg py-4 px-8 flex items-center justify-center">
                    Xem dự án tiêu biểu <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {projectExamples.map((project, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover-scale fade-in"
                  >
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <a href="#" className="text-black font-medium flex items-center">
                        Xem chi tiết <ArrowRight size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <a href="#portfolio" className="text-black font-medium flex items-center justify-center">
                  Xem thêm dự án <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </section>

          {/* Brand Value Section */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Website bán hàng xứng tầm với thương hiệu của bạn</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Chúng tôi thiết kế và phát triển website bán hàng đẳng cấp, tập trung vào trải nghiệm người dùng và tối ưu tỷ lệ chuyển đổi.
                </p>
                <a href="#solutions" className="btn-primary mt-8 inline-flex items-center">
                  Khám phá giải pháp <ArrowRight size={18} className="ml-2" />
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="fade-in">
                  <div className="relative">
                    <img 
                      src="/uploads/onlinestore/product-showcase.jpg" 
                      alt="Product Showcase" 
                      className="w-full h-auto rounded-xl shadow-xl"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg max-w-xs">
                      <img 
                        src="/uploads/onlinestore/product-variant.jpg" 
                        alt="Product Variants" 
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-10 fade-in">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Thiết kế sản phẩm tối ưu chuyển đổi</h3>
                    <p className="text-gray-600">
                      Chúng tôi phát triển trang sản phẩm được thiết kế kỹ lưỡng để tăng tỷ lệ chuyển đổi, với tính năng sản phẩm liên quan, cross-selling, và mô tả sản phẩm hấp dẫn có thể được tối ưu với AI.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Trải nghiệm mua sắm đa thiết bị</h3>
                    <p className="text-gray-600">
                      Website bán hàng được tối ưu hoàn hảo trên mọi thiết bị, từ desktop đến smartphone, đảm bảo trải nghiệm mua sắm liền mạch và chuyên nghiệp.
                    </p>
                    <div className="mt-4">
                      <img 
                        src="/uploads/onlinestore/mobile-shopping.jpg" 
                        alt="Mobile Shopping" 
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-24">
                <div className="space-y-10 fade-in order-2 md:order-1">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Hệ thống đánh giá sản phẩm</h3>
                    <p className="text-gray-600">
                      Xây dựng niềm tin với người mua thông qua hệ thống đánh giá sản phẩm minh bạch và chuyên nghiệp, với xác thực người mua thực.
                    </p>
                    <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            size={18}
                            className={`${star <= 4.5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} mr-1`}
                          />
                        ))}
                        <span className="ml-2 text-gray-700">4.5</span>
                      </div>
                      <p className="text-gray-700 italic">"Sản phẩm chất lượng cao, đóng gói cẩn thận và giao hàng nhanh chóng. Tôi rất hài lòng!"</p>
                      <p className="text-sm text-gray-500 mt-2">- Nguyễn Thị Hương, Khách hàng đã xác thực</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Quản lý sản phẩm đa cấp</h3>
                    <p className="text-gray-600">
                      Phát triển hệ thống quản lý sản phẩm đa cấp với biến thể không giới hạn, thuộc tính tùy chỉnh và quản lý kho chuyên nghiệp.
                    </p>
                  </div>
                </div>
                
                <div className="fade-in order-1 md:order-2">
                  <div className="relative">
                    <img 
                      src="/uploads/onlinestore/inventory-dashboard.jpg" 
                      alt="Inventory Dashboard" 
                      className="w-full h-auto rounded-xl shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Features */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Tính năng chính của website bán hàng</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Chúng tôi phát triển đầy đủ tính năng thiết yếu cho một website bán hàng chuyên nghiệp, tùy chỉnh theo nhu cầu cụ thể của doanh nghiệp.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <div className="grid grid-cols-1 gap-8 fade-in">
                  <div className="bg-gray-50 p-8 rounded-xl shadow-md hover-scale">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Truck size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">Tích hợp vận chuyển đa đơn vị</h3>
                        <p className="text-gray-600">
                          Phát triển hệ thống kết nối với đa đơn vị vận chuyển (GHN, GHTK, Viettel Post, J&T), tự động tính phí vận chuyển theo khu vực và theo dõi đơn hàng.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <img 
                        src="/uploads/onlinestore/shipping-methods.jpg" 
                        alt="Shipping Methods" 
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-xl shadow-md hover-scale">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Package size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">Hệ thống quản lý đơn hàng</h3>
                        <p className="text-gray-600">
                          Xây dựng bảng điều khiển quản lý đơn hàng trực quan, với lọc thông minh, quản lý trạng thái, và cập nhật tự động cho khách hàng.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-8 fade-in">
                  <div className="bg-gray-50 p-8 rounded-xl shadow-md hover-scale">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <CreditCard size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">Đa dạng phương thức thanh toán</h3>
                        <p className="text-gray-600">
                          Tích hợp đầy đủ các cổng thanh toán phổ biến tại Việt Nam và quốc tế, đảm bảo an toàn và trải nghiệm thanh toán liền mạch.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-4 justify-center">
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <span className="font-bold">VNPay</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <span className="font-bold">MoMo</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <span className="font-bold">ZaloPay</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <span className="font-bold">Visa/Master</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-8 rounded-xl shadow-md hover-scale">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <BarChart2 size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">Thống kê và báo cáo doanh số</h3>
                        <p className="text-gray-600">
                          Phát triển hệ thống thống kê và báo cáo chi tiết, với phân tích doanh số theo thời gian, sản phẩm, địa lý và các chiến dịch marketing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Custom Features */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="fade-in">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Tính năng tùy chỉnh theo nhu cầu
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Ngoài các tính năng cơ bản, chúng tôi phát triển thêm nhiều tính năng chuyên biệt theo yêu cầu cụ thể của từng doanh nghiệp.
                  </p>
                  
                  <a href="#custom-features" className="btn-primary inline-flex items-center">
                    Tư vấn tính năng tùy chỉnh <ArrowRight size={18} className="ml-2" />
                  </a>
                  
                  <div className="mt-10 space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Server size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">In theo yêu cầu & Dropshipping</h3>
                        <p className="text-gray-600">
                          Tích hợp dịch vụ in theo yêu cầu hoặc dropshipping, cho phép bạn mở rộng danh mục sản phẩm mà không cần đầu tư kho hàng.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Tag size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Hệ thống khuyến mãi thông minh</h3>
                        <p className="text-gray-600">
                          Phát triển tính năng khuyến mãi đa điều kiện, flash sale có thời hạn, và chương trình khách hàng thân thiết với tích điểm tự động.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="fade-in">
                  <img 
                    src="/uploads/onlinestore/custom-features.jpg" 
                    alt="Custom Features" 
                    className="w-full h-auto rounded-xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Technology & Integration */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Công nghệ & Tích hợp</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Chúng tôi sử dụng công nghệ hiện đại và tích hợp với các nền tảng phổ biến để tạo ra website bán hàng hoàn chỉnh.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="fade-in">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Code size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Công nghệ tiên tiến</h3>
                        <p className="text-gray-600">
                          Phát triển trên nền tảng công nghệ hiện đại (Laravel, React, Vue.js, .NET Core) với kiến trúc linh hoạt và hiệu suất cao.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Database size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Tích hợp đa nền tảng</h3>
                        <p className="text-gray-600">
                          Kết nối với các hệ thống và nền tảng bên thứ ba như Google Analytics, Facebook Shop, TikTok Shop, phần mềm kế toán và CRM.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Shield size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Bảo mật cao cấp</h3>
                        <p className="text-gray-600">
                          Áp dụng các biện pháp bảo mật tiên tiến với SSL, bảo vệ thông tin thanh toán, và tuân thủ quy định bảo vệ dữ liệu.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="fade-in">
                  <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold mb-6">Tích hợp marketing & bán hàng</h3>
                    <p className="text-gray-600 mb-8">
                      Kết nối với các công cụ và nền tảng marketing hàng đầu để tăng trưởng doanh số.
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        "Google Analytics", "Facebook Shop", "TikTok Shop", 
                        "MailChimp", "Lazada", "Shopee", "Sendo", "Tiki"
                      ].map((integration, index) => (
                        <div key={index} className="bg-white p-3 rounded-lg shadow-sm hover-scale text-center">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="font-bold text-sm">{integration.substring(0, 2)}</span>
                          </div>
                          <p className="font-medium text-sm">{integration}</p>
                        </div>
                      ))}
                    </div>
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

          {/* Additional Solutions */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Giải pháp mở rộng</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Ngoài website bán hàng cơ bản, chúng tôi còn cung cấp các giải pháp mở rộng giúp doanh nghiệp phát triển toàn diện.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Gift size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Tính năng thành viên & thẻ quà tặng</h3>
                  <p className="text-gray-600 mb-6">
                    Phát triển hệ thống thành viên với nhiều cấp độ và đặc quyền, cùng tính năng thẻ quà tặng điện tử với thiết kế tùy chỉnh.
                  </p>
                  <a href="#" className="text-black font-medium flex items-center">
                    Tìm hiểu thêm <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Clock size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Bán sản phẩm theo đăng ký</h3>
                  <p className="text-gray-600 mb-6">
                    Thiết kế hệ thống đăng ký định kỳ cho sản phẩm (subscription box), với chu kỳ và thanh toán tự động.
                  </p>
                  <a href="#" className="text-black font-medium flex items-center">
                    Tìm hiểu thêm <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <ShoppingCart size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Hệ thống POS tích hợp</h3>
                  <p className="text-gray-600 mb-6">
                    Phát triển hệ thống bán hàng tại cửa hàng (POS) đồng bộ với website bán hàng, giúp quản lý thống nhất kho hàng và khách hàng.
                  </p>
                  <a href="#" className="text-black font-medium flex items-center">
                    Tìm hiểu thêm <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Service Packages */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Gói dịch vụ thiết kế website bán hàng</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Chúng tôi cung cấp các gói dịch vụ phù hợp với quy mô và nhu cầu của doanh nghiệp.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover-scale fade-in">
                  <h3 className="text-2xl font-bold mb-2">Cơ bản</h3>
                  <p className="text-gray-600 mb-6">Cho doanh nghiệp nhỏ và vừa</p>
                  <div className="text-4xl font-bold mb-6">20-30 triệu</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Thiết kế giao diện chuyên nghiệp</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Quản lý sản phẩm cơ bản (đến 500 sản phẩm)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Tích hợp 2 cổng thanh toán</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Tích hợp 1 đơn vị vận chuyển</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Hỗ trợ kỹ thuật 3 tháng</span>
                    </li>
                  </ul>
                  <button className="w-full bg-black text-white py-3 font-medium hover:bg-gray-800 transition-colors">
                    Nhận tư vấn
                  </button>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover-scale fade-in relative border-2 border-black transform scale-105 z-10">
                  <div className="absolute -top-4 right-8 bg-black text-white px-4 py-1 text-sm">
                    Phổ biến nhất
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Chuyên nghiệp</h3>
                  <p className="text-gray-600 mb-6">Cho doanh nghiệp đang phát triển</p>
                  <div className="text-4xl font-bold mb-6">35-60 triệu</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Tất cả tính năng của gói Cơ bản</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Quản lý sản phẩm nâng cao (không giới hạn)</span>
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
                    Nhận tư vấn
                  </button>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover-scale fade-in">
                  <h3 className="text-2xl font-bold mb-2">Cao cấp</h3>
                  <p className="text-gray-600 mb-6">Cho doanh nghiệp lớn</p>
                  <div className="text-4xl font-bold mb-6">70-100+ triệu</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Tất cả tính năng của gói Chuyên nghiệp</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Thiết kế UI/UX cao cấp theo yêu cầu</span>
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
                      <span>Hỗ trợ đa ngôn ngữ và đa tiền tệ</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Phân tích dữ liệu nâng cao, AI dự đoán</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Hỗ trợ kỹ thuật 12 tháng, SLA cao cấp</span>
                    </li>
                  </ul>
                  <button className="w-full bg-black text-white py-3 font-medium hover:bg-gray-800 transition-colors">
                    Nhận tư vấn
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
          {/* Support Section */}
          <section className="bg-gray-50 py-20">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-xl shadow-lg fade-in">
                  <h3 className="text-2xl font-bold mb-4">Hỗ trợ 24/7</h3>
                  <p className="text-gray-600 mb-6">
                    Đội ngũ hỗ trợ kỹ thuật chuyên nghiệp sẵn sàng giải quyết mọi vấn đề về website bán hàng của bạn.
                  </p>
                  <a href="#" className="btn-primary inline-flex items-center">
                    Liên hệ hỗ trợ <ArrowRight size={18} className="ml-2" />
                  </a>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg fade-in">
                  <h3 className="text-2xl font-bold mb-4">Bảo trì & Nâng cấp</h3>
                  <p className="text-gray-600 mb-6">
                    Dịch vụ bảo trì và nâng cấp website liên tục, đảm bảo hệ thống luôn hoạt động tốt nhất và cập nhật với xu hướng mới.
                  </p>
                  <a href="#" className="btn-primary inline-flex items-center">
                    Tìm hiểu gói bảo trì <ArrowRight size={18} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-black text-white py-24">
            <div className="section-container text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Sẵn sàng phát triển doanh nghiệp với website bán hàng chuyên nghiệp?
              </h2>
              <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-300">
                Liên hệ với NiceTech ngay hôm nay để được tư vấn miễn phí về giải pháp website bán hàng phù hợp nhất cho doanh nghiệp bạn.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <button className="bg-white text-black px-8 py-4 font-medium hover:bg-gray-100 transition-colors duration-300 text-lg">
                  Liên hệ ngay
                </button>
                <button className="border border-white text-white px-8 py-4 font-medium hover:bg-white/10 transition-colors duration-300 text-lg">
                  Nhận báo giá
                </button>
              </div>
              
              <div className="mt-16">
                <img 
                  src="/uploads/onlinestore/store-showcase.jpg" 
                  alt="Website Bán Hàng Chuyên Nghiệp" 
                  className="w-full max-w-4xl h-auto mx-auto rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default OnlineStore;