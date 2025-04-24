import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, ShoppingBag, CreditCard, Truck, BarChart2, 
  Package, ShoppingCart, Smartphone, Star, Clock, 
  Tag, Gift, Layout, Server, ChevronDown, Rotate3D
} from "lucide-react";

const OnlineStore = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const storeTemplates = [
    {
      name: "Artisan",
      image: "/uploads/onlinestore/template1.jpg",
      description: "Lý tưởng cho cửa hàng thủ công mỹ nghệ"
    },
    {
      name: "TechZone",
      image: "/uploads/onlinestore/template2.jpg",
      description: "Hoàn hảo cho cửa hàng điện tử, công nghệ"
    },
    {
      name: "FashionPro",
      image: "/uploads/onlinestore/template3.jpg",
      description: "Thiết kế dành cho cửa hàng thời trang"
    },
    {
      name: "GourmetShop",
      image: "/uploads/onlinestore/template4.jpg",
      description: "Chuyên biệt cho cửa hàng thực phẩm, đồ uống"
    }
  ];
  
  const faqs = [
    {
      question: "Tôi cần những gì để bắt đầu cửa hàng trực tuyến?",
      answer: "Để bắt đầu cửa hàng trực tuyến với NiceTech, bạn cần: (1) Thông tin doanh nghiệp và giấy phép kinh doanh, (2) Danh sách sản phẩm với hình ảnh và mô tả, (3) Logo và tài liệu thương hiệu (nếu có), (4) Phương thức thanh toán dự định sử dụng. Sau khi cung cấp những thông tin này, đội ngũ NiceTech sẽ thiết lập cửa hàng trực tuyến cho bạn từ A-Z, từ đăng ký tên miền đến thiết kế giao diện và cấu hình hệ thống."
    },
    {
      question: "Chi phí để thiết lập cửa hàng trực tuyến là bao nhiêu?",
      answer: "NiceTech cung cấp nhiều gói dịch vụ cửa hàng trực tuyến phù hợp với mọi ngân sách. Gói Cơ bản có giá từ 15 triệu đồng, gói Chuyên nghiệp từ 25 triệu đồng và gói Cao cấp từ 40 triệu đồng. Ngoài ra còn có chi phí duy trì hàng tháng từ 500.000đ bao gồm hosting, bảo mật và hỗ trợ kỹ thuật. Chúng tôi luôn sẵn sàng tư vấn để bạn chọn gói dịch vụ phù hợp nhất với nhu cầu và ngân sách."
    },
    {
      question: "Tôi có thể bán những sản phẩm gì trên cửa hàng trực tuyến?",
      answer: "Với hệ thống cửa hàng trực tuyến của NiceTech, bạn có thể bán hầu hết các loại sản phẩm: hàng hóa vật lý (quần áo, đồ điện tử, thực phẩm), sản phẩm số (sách điện tử, phần mềm), sản phẩm theo đăng ký (box hàng tháng), dịch vụ, và thậm chí sản phẩm tùy chỉnh. Hệ thống hỗ trợ đầy đủ cho các loại sản phẩm có nhiều biến thể (kích cỡ, màu sắc), và bạn có thể quản lý kho hàng một cách hiệu quả."
    },
    {
      question: "NiceTech có hỗ trợ vận chuyển và thanh toán không?",
      answer: "Có, NiceTech hỗ trợ đầy đủ các nhu cầu vận chuyển và thanh toán cho cửa hàng trực tuyến của bạn. Chúng tôi tích hợp với đa dạng cổng thanh toán như VNPay, MoMo, ZaloPay, thanh toán thẻ quốc tế và COD. Về vận chuyển, cửa hàng của bạn sẽ kết nối trực tiếp với các đơn vị vận chuyển lớn như GHN, GHTK, J&T Express và Viettel Post, cho phép tính phí vận chuyển theo thời gian thực và theo dõi đơn hàng."
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Dịch Vụ Bán Hàng Online - Cửa Hàng Trực Tuyến | NiceTech</title>
        <meta name="description" content="Thiết kế cửa hàng trực tuyến chuyên nghiệp, bán hàng online hiệu quả với giải pháp tích hợp đầy đủ từ NiceTech: từ thiết kế web, quản lý sản phẩm đến vận chuyển và thanh toán." />
        <link rel="canonical" href="https://nicetech.vn/dich-vu/online-store" />
      </Helmet>
      <div className="bg-white min-h-screen">
        <Navbar />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-white pt-28 pb-16">
            <div className="section-container">
              <div className="text-center max-w-4xl mx-auto mb-16 fade-in">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  Cửa hàng trực tuyến <span className="text-black">thu hút khách hàng</span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  Bắt đầu bán hàng online với website chuyên nghiệp. Giải pháp bán hàng trực tuyến toàn diện giúp doanh nghiệp của bạn nổi bật và phát triển.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="btn-primary text-lg py-4 px-8">Bắt đầu ngay</button>
                  <button className="btn-secondary text-lg py-4 px-8 flex items-center justify-center">
                    Xem mẫu cửa hàng <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {storeTemplates.map((template, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover-scale fade-in"
                  >
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={template.image} 
                        alt={template.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{template.name}</h3>
                      <p className="text-gray-600 mb-4">{template.description}</p>
                      <a href="#" className="text-black font-medium flex items-center">
                        Xem demo <ArrowRight size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <a href="#templates" className="text-black font-medium flex items-center justify-center">
                  Xem thêm mẫu cửa hàng <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </section>

          {/* Store Worth Your Brand */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Cửa hàng xứng đáng với sản phẩm và thương hiệu của bạn</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Tận dụng chuyên môn thiết kế hàng đầu của NiceTech để tạo một cửa hàng trực tuyến nổi bật, giúp phát triển doanh nghiệp của bạn.
                </p>
                <a href="#ecommerce-tools" className="btn-primary mt-8 inline-flex items-center">
                  Khám phá công cụ bán hàng <ArrowRight size={18} className="ml-2" />
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
                    <h3 className="text-2xl font-bold mb-4">Trang sản phẩm tùy chỉnh</h3>
                    <p className="text-gray-600">
                      Nổi bật sản phẩm liên quan, bán thêm sản phẩm phụ khi thanh toán để tăng doanh số, và sử dụng AI hỗ trợ viết mô tả sản phẩm hấp dẫn.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Mua sắm tương thích di động</h3>
                    <p className="text-gray-600">
                      Mang đến trải nghiệm mua sắm tốt nhất và tăng doanh số với giao diện cửa hàng được tối ưu hóa cho thiết bị di động.
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
                    <h3 className="text-2xl font-bold mb-4">Đánh giá sản phẩm</h3>
                    <p className="text-gray-600">
                      Thu thập và hiển thị đánh giá của khách hàng cho sản phẩm của bạn để xây dựng niềm tin với người mua hàng.
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
                      <p className="text-sm text-gray-500 mt-2">- Nguyễn Thị Hương, Khách hàng</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Không giới hạn sản phẩm</h3>
                    <p className="text-gray-600">
                      Quản lý kho sản phẩm dễ dàng và thiết kế bố cục cửa hàng để sắp xếp sản phẩm trong cửa hàng trực tuyến của bạn.
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

          {/* Store Management */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Quản lý cửa hàng trực tuyến dễ dàng</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Không cần cài đặt thêm, NiceTech cung cấp đầy đủ công cụ bạn cần để quản lý và phát triển cửa hàng trực tuyến.
                </p>
                <a href="#store-management" className="btn-primary mt-8 inline-flex items-center">
                  Khám phá quản lý cửa hàng <ArrowRight size={18} className="ml-2" />
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <div className="grid grid-cols-1 gap-8 fade-in">
                  <div className="bg-gray-50 p-8 rounded-xl shadow-md hover-scale">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Truck size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">Vận chuyển và giao hàng</h3>
                        <p className="text-gray-600">
                          Với NiceTech, bạn có thể cung cấp giao hàng nội địa, nhận tại cửa hàng, hoặc các tùy chọn vận chuyển tiêu chuẩn, in nhãn vận chuyển và nhiều hơn nữa.
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
                        <h3 className="text-xl font-bold mb-3">Quản lý đơn hàng</h3>
                        <p className="text-gray-600">
                          Xem chi tiết đơn hàng, quản lý hồ sơ khách hàng để tiếp cận trong tương lai và gửi thông báo đơn hàng được gắn thương hiệu.
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
                        <h3 className="text-xl font-bold mb-3">Thanh toán và thanh toán</h3>
                        <p className="text-gray-600">
                          Chấp nhận nhiều tùy chọn thanh toán trực tuyến, bán trực tiếp với POS và tùy chỉnh trải nghiệm thanh toán của bạn.
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
                        <h3 className="text-xl font-bold mb-3">Quản lý thuế</h3>
                        <p className="text-gray-600">
                          Giá bao gồm thuế, tính toán thuế bán hàng tự động và truy cập nộp thuế và báo cáo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Custom Products */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="fade-in">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Thiết kế và bán sản phẩm tùy chỉnh
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    NiceTech hợp tác với các đơn vị in ấn hàng đầu để cung cấp dịch vụ in theo yêu cầu, giúp bạn mở rộng danh mục sản phẩm mà không cần đầu tư kho hàng.
                  </p>
                  
                  <a href="#custom-products" className="btn-primary inline-flex items-center">
                    Khám phá hàng tùy chỉnh <ArrowRight size={18} className="ml-2" />
                  </a>
                  
                  <div className="mt-10 space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Server size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Dịch vụ in theo yêu cầu</h3>
                        <p className="text-gray-600">
                          Chúng tôi hợp tác với các đơn vị in ấn để xử lý tất cả sản xuất, giao hàng và hậu cần vận chuyển cho bạn.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Tag size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Không có chi phí trước</h3>
                        <p className="text-gray-600">
                          Khám phá các thiết kế và sản phẩm mới mà không cần quản lý kho hàng, và tạo thu nhập khi bạn bắt đầu bán hàng.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="fade-in">
                  <img 
                    src="/uploads/onlinestore/custom-products.jpg" 
                    alt="Custom Products" 
                    className="w-full h-auto rounded-xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Connected Store */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Kết nối cửa hàng với các công cụ bạn sử dụng</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Tích hợp với các công cụ bán hàng và marketing hàng đầu để tối ưu hóa hoạt động kinh doanh của bạn.
                </p>
                <a href="#extensions" className="btn-primary mt-8 inline-flex items-center">
                  Khám phá tích hợp <ArrowRight size={18} className="ml-2" />
                </a>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg fade-in">
                <h3 className="text-2xl font-bold mb-6">Tiện ích mở rộng thương mại bên thứ ba</h3>
                <p className="text-gray-600 mb-8">
                  Kết nối với các tích hợp tốt nhất để quản lý, tối ưu hóa và mở rộng cửa hàng trực tuyến của bạn.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    "Google Analytics", "Facebook Shop", "TikTok Shop", 
                    "MailChimp", "Lazada", "Shopee", "Sendo", "Tiki"
                  ].map((integration, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover-scale text-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="font-bold text-sm">{integration.substring(0, 2)}</span>
                      </div>
                      <p className="font-medium">{integration}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* More Ways to Sell */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Nhiều cách để bán hàng</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Mở rộng phạm vi bán hàng và tăng doanh thu với nhiều lựa chọn bán hàng đa dạng.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Gift size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Thẻ quà tặng</h3>
                  <p className="text-gray-600 mb-6">
                    Mở rộng phạm vi sản phẩm với thẻ quà tặng mà khách hàng của bạn có thể chia sẻ với bạn bè và gia đình.
                  </p>
                  <a href="#" className="text-black font-medium flex items-center">
                    Tìm hiểu thêm <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Clock size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Đăng ký</h3>
                  <p className="text-gray-600 mb-6">
                    Tạo doanh thu định kỳ bằng cách bán đăng ký hàng tuần hoặc hàng tháng cho sản phẩm của bạn.
                  </p>
                  <a href="#" className="text-black font-medium flex items-center">
                    Tìm hiểu thêm <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <ShoppingCart size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Bán trực tiếp</h3>
                  <p className="text-gray-600 mb-6">
                    Đồng bộ hóa kho hàng và dữ liệu khách hàng giữa cửa hàng trực tuyến và trực tiếp của bạn với Điểm bán hàng.
                  </p>
                  <a href="#" className="text-black font-medium flex items-center">
                    Tìm hiểu thêm <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Tools */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Với công cụ để bán thêm sản phẩm</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Tận dụng các công cụ marketing và phân tích để tăng doanh số và mở rộng kinh doanh.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover-scale fade-in">
                  <h3 className="text-xl font-bold mb-4">Công cụ marketing</h3>
                  <p className="text-gray-600 mb-6">
                    Tất cả những gì bạn cần để phát triển khán giả của mình.
                  </p>
                  <div className="h-64 overflow-hidden rounded-lg mb-6">
                    <img 
                      src="/uploads/onlinestore/email-marketing.jpg" 
                      alt="Email Marketing" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <a href="#" className="text-black font-medium flex items-center">
                    Tìm hiểu thêm <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover-scale fade-in">
                  <h3 className="text-xl font-bold mb-4">Nội dung & Thành viên</h3>
                  <p className="text-gray-600 mb-6">
                    Kiếm tiền từ nội dung trực tuyến của bạn.
                  </p>
                  <div className="h-64 overflow-hidden rounded-lg mb-6">
                    <img 
                      src="/uploads/onlinestore/content-membership.jpg" 
                      alt="Content Membership" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <a href="#" className="text-black font-medium flex items-center">
                    Tìm hiểu thêm <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover-scale fade-in">
                  <h3 className="text-xl font-bold mb-4">Thanh toán NiceTech</h3>
                  <p className="text-gray-600 mb-6">
                    Nhận thanh toán và tiền gửi.
                  </p>
                  <div className="h-64 overflow-hidden rounded-lg mb-6">
                    <img 
                      src="/uploads/onlinestore/payment-processing.jpg" 
                      alt="Payment Processing" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <a href="#" className="text-black font-medium flex items-center">
                    Tìm hiểu thêm <ArrowRight size={16} className="ml-2" />
                  </a>
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
          <section className="bg-white py-20">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg fade-in">
                  <h3 className="text-2xl font-bold mb-4">Hỗ trợ 24/7</h3>
                  <p className="text-gray-600 mb-6">
                    Nhận hỗ trợ từ đội ngũ Hỗ trợ Khách hàng được khen thưởng của chúng tôi.
                  </p>
                  <a href="#" className="btn-primary inline-flex items-center">
                    Trung tâm hỗ trợ <ArrowRight size={18} className="ml-2" />
                  </a>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg fade-in">
                  <h3 className="text-2xl font-bold mb-4">Hội thảo trực tuyến</h3>
                  <p className="text-gray-600 mb-6">
                    Các buổi học trực tuyến miễn phí để học những điều cơ bản và nâng cao kỹ năng của bạn.
                  </p>
                  <a href="#" className="btn-primary inline-flex items-center">
                    Đăng ký hội thảo <ArrowRight size={18} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-black text-white py-24">
            <div className="section-container text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Bắt đầu dùng thử cửa hàng trực tuyến miễn phí ngay hôm nay
              </h2>
              <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-300">
                Không cần thẻ tín dụng. Hủy bất cứ lúc nào.
              </p>
              <button className="bg-white text-black px-8 py-4 font-medium hover:bg-gray-100 transition-colors duration-300 text-lg">
                Bắt đầu ngay
              </button>
              
              <div className="mt-16">
                <img 
                  src="/uploads/onlinestore/store-showcase.jpg" 
                  alt="Store Showcase" 
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