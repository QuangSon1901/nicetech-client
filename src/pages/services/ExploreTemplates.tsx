import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Filter } from "lucide-react";

const ExploreTemplates = () => {
  const categories = [
    "Tất cả",
    "Nhà hàng",
    "Du lịch",
    "Giáo dục",
    "Doanh nghiệp",
    "E-commerce",
    "Giải trí",
    "Thư viện ảnh",
  ];

  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const templates = [
    {
      name: "AISUKI - Nhà hàng Châu Á - Đặt món Online",
      category: "Nhà hàng",
      image: "/uploads/projects/aisuki.webp",
      link: "https://aisuki.nicetech.vn",
    },
    {
      name: "Xuất khẩu cà phê chất lượng cao",
      category: "Nhà hàng",
      image: "/uploads/projects/vietbeans-cf.webp",
      link: "https://template.nicetech.vn/demo/vietbeans-cf/demo1.html",
    },
    {
      name: "Chương trình giảng dạy cờ vua Song ngữ",
      category: "Giáo dục",
      image: "/uploads/projects/nextgenchess.webp",
      link: "https://nextgen-chess-academy.nicetech.vn",
    },
    {
      name: "Nguyen Sinh Bistro – Ẩm thực Việt - Pháp",
      category: "Nhà hàng",
      image: "/uploads/projects/nguyensinh.webp",
      link: "https://template.nicetech.vn/demo/nguyensinh/",
    },
    {
      name: "Du lịch - Trải nghiệm Du thuyền",
      category: "Du lịch",
      image: "/uploads/projects/duthuyen.webp",
      link: "https://template.nicetech.vn/demo/duthuyen/demo1.html",
    },
    {
      name: "Dịch vụ sân vườn",
      category: "Doanh nghiệp",
      image: "/uploads/projects/greenhaven.webp",
      link: "http://template.nicetech.vn/demo/greenhaven",
    },
    {
      name: "Nền tảng đặt homestay",
      category: "Du lịch",
      image: "/uploads/projects/homestay.webp",
      link: "http://template.nicetech.vn/demo/homestay/demo1.html",
    },
    {
      name: "Giới thiệu tác phẩm nghệ thuật",
      category: "Thư viện ảnh",
      image: "/uploads/projects/lisson-clone-canvas.webp",
      link: "http://template.nicetech.vn/demo/lisson-clone-canvas",
    },
    {
      name: "Website thú cưng",
      category: "E-commerce",
      image: "/uploads/projects/imeo.webp",
      link: "https://template.nicetech.vn/demo/petshop/",
    },
    {
      name: "Giới thiệu công ty Sunlogo",
      category: "Doanh nghiệp",
      image: "/uploads/projects/sunlogo.webp",
      link: "https://template.nicetech.vn/demo/sunlogo/demo1.html",
    },
    {
      name: "Nhà phân phối ván ép hàng đầu",
      category: "Doanh nghiệp",
      image: "/uploads/projects/ttplywood.webp",
      link: "https://ttplywood.vn/gioi-thieu",
    },
    {
      name: "Nền tảng luyện thi Tokuteigino",
      category: "Giáo dục",
      image: "/uploads/projects/tokutegino.webp",
      link: "https://template.nicetech.vn/demo/tokuteigino/demo1.html",
    },
  ];

  const filteredTemplates =
    activeCategory === "Tất cả"
      ? templates
      : templates.filter((template) => template.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Khám phá mẫu Website | NiceTech</title>
        <meta name="description" content="Khám phá bộ sưu tập mẫu website chuyên nghiệp cho mọi lĩnh vực kinh doanh từ NiceTech. Tìm cảm hứng cho dự án của bạn." />
        <link rel="canonical" href="https://nicetech.vn/kham-pha-mau" />
      </Helmet>
      <div className="bg-white min-h-screen">
        <Navbar />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-white pt-20">
            <div className="section-container py-16">
              <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Khám phá mẫu website <span className="text-black">đa dạng</span>
                </h1>
                <p className="text-lg text-gray-600">
                  Tìm kiếm cảm hứng cho dự án website của bạn qua bộ sưu tập mẫu thiết kế đa dạng và đẹp mắt từ NiceTech
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mb-12 fade-in">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm ${
                      activeCategory === category
                        ? "bg-black text-white"
                        : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTemplates.map((template, index) => (
                  <a
                    href={template.link}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale fade-in"
                  >
                    <div className="h-64 overflow-hidden">
                      <img
                        src={template.image}
                        alt={template.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full mb-3">
                        {template.category}
                      </span>
                      <h3 className="text-lg font-bold mb-2">{template.name}</h3>
                      <div className="flex items-center text-black font-medium">
                        <span>Xem demo</span>
                        <ArrowRight size={16} className="ml-2" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-gray-50 py-20">
            <div className="section-container">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center">Câu hỏi thường gặp</h2>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-3">Tôi có thể tùy chỉnh mẫu website này không?</h3>
                    <p className="text-gray-600">
                      Tất cả mẫu website của NiceTech đều có thể tùy chỉnh để phù hợp với thương hiệu và nhu cầu kinh doanh của bạn.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-3">Chi phí để sử dụng mẫu website này là bao nhiêu?</h3>
                    <p className="text-gray-600">
                      Chi phí sẽ phụ thuộc vào mức độ tùy chỉnh và các tính năng bổ sung mà bạn cần. Vui lòng liên hệ với chúng tôi để nhận báo giá chi tiết.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-3">Thời gian hoàn thiện một website như thế nào?</h3>
                    <p className="text-gray-600">
                      Thông thường, thời gian hoàn thiện một website dựa trên mẫu là từ 7-15 ngày tùy theo quy mô và yêu cầu cụ thể.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-3">Tôi cần chuẩn bị nội dung gì cho website?</h3>
                    <p className="text-gray-600">
                      Bạn cần chuẩn bị nội dung văn bản, hình ảnh và các thông tin liên quan đến doanh nghiệp. NiceTech cũng có thể hỗ trợ bạn trong việc tạo nội dung nếu cần.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-black text-white py-20">
            <div className="section-container text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Đã tìm thấy mẫu website ưng ý?
              </h2>
              <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-300">
                Hãy liên hệ với chúng tôi để bắt đầu dự án thiết kế website chuyên nghiệp cho doanh nghiệp của bạn
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <button className="bg-white text-black px-8 py-4 font-medium hover:bg-gray-100 transition-colors duration-300">
                  Liên hệ ngay
                </button>
                <button className="border border-white text-white px-8 py-4 font-medium hover:bg-white/10 transition-colors duration-300">
                  Nhận tư vấn miễn phí
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ExploreTemplates;
