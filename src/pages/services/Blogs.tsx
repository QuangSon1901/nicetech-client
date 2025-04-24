import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  FileText,
  Share2,
  Search,
  BarChart2,
  Layout,
  PenTool,
  Calendar,
  Tag,
  Users,
  DollarSign,
  Mail,
  Newspaper,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";

const Blogs = () => {
  const [activeLayout, setActiveLayout] = useState("masonry");
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const blogLayouts = [
    {
      id: "masonry",
      name: "Masonry Blog",
      image: "/uploads/blogs/layout-masonry.jpg",
    },
    {
      id: "side-by-side",
      name: "Side by Side Blog",
      image: "/uploads/blogs/layout-side-by-side.jpg",
    },
    {
      id: "single-column",
      name: "Single Column Blog",
      image: "/uploads/blogs/layout-single-column.jpg",
    },
    {
      id: "basic-grid",
      name: "Basic Grid Blog",
      image: "/uploads/blogs/layout-basic-grid.jpg",
    },
    {
      id: "alternating",
      name: "Alternating Side By Side Blog",
      image: "/uploads/blogs/layout-alternating.jpg",
    },
  ];

  const testimonials = [
    {
      quote:
        "Tôi sử dụng NiceTech cho trang tạp chí và website nhiếp ảnh của mình bởi vì nó đẹp, dễ sử dụng và linh hoạt.",
      author: "Minh Tâm",
      title: "Nhà sáng lập",
      website: "artmagazine.vn/blog",
      image: "/uploads/testimonials/blog-testimonial1.jpg",
    },
    {
      quote:
        "Blog kết nối bạn với khách hàng và người truy cập trực tuyến theo cách cá nhân và hiệu quả.",
      author: "Hoàng Việt",
      title: "Nhà thiết kế",
      website: "vietnguyen.vn/journal",
      image: "/uploads/testimonials/blog-testimonial2.jpg",
    },
    {
      quote:
        "Công cụ phân tích, SEO và tích hợp mạng xã hội của NiceTech đã giúp chúng tôi phát triển từ một blog với lượng người theo dõi nhỏ thành một đối tượng toàn cầu đang phát triển.",
      author: "Thu Hà",
      title: "Đồng sáng lập & CEO",
      website: "beautyblog.vn/trends",
      image: "/uploads/testimonials/blog-testimonial3.jpg",
    },
  ];

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <>
      <Helmet>
        <title>Thiết Kế Blog Chuyên Nghiệp | NiceTech</title>
        <meta
          name="description"
          content="Chia sẻ câu chuyện của bạn với thế giới. Tạo blog đẹp mắt, cá nhân hóa phù hợp với thương hiệu của bạn. Phát triển khán giả với công cụ tiếp thị tích hợp hoặc biến đam mê thành doanh thu."
        />
        <link rel="canonical" href="https://nicetech.vn/dich-vu/blogs" />
      </Helmet>
      <div className="bg-white min-h-screen">
        <Navbar />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-white pt-28 pb-16">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="fade-in">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Tạo <span className="text-black">blog</span> ấn tượng
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Chia sẻ câu chuyện của bạn với thế giới. Tạo blog đẹp mắt,
                    cá nhân hóa phù hợp với thương hiệu của bạn. Phát triển khán
                    giả với công cụ tiếp thị tích hợp hoặc biến đam mê thành
                    doanh thu.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="btn-primary text-lg py-4 px-8">
                      Bắt đầu ngay
                    </button>
                    <button className="btn-secondary text-lg py-4 px-8 flex items-center">
                      Xem mẫu Blog <ArrowRight size={18} className="ml-2" />
                    </button>
                  </div>
                </div>

                <div className="fade-in">
                  <img
                    src="/uploads/blogs/blog-hero.jpg"
                    alt="Blog chuyên nghiệp"
                    className="w-full h-auto rounded-sm shadow-xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Browse Templates */}
          <section className="bg-gray-50 py-20">
            <div className="section-container">
              <div className="text-center mb-12 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Chọn điểm khởi đầu
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                  Khám phá các tùy chọn mẫu website để tạo blog thể hiện thương
                  hiệu của bạn tốt nhất. Mỗi mẫu có thể được tùy chỉnh để phù
                  hợp với phong cách kể chuyện của bạn.
                </p>
                <a
                  href="#templates"
                  className="text-black font-semibold inline-flex items-center"
                >
                  Xem các mẫu <ArrowRight size={18} className="ml-2" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-sm overflow-hidden shadow-lg hover-scale fade-in">
                  <div className="h-64 overflow-hidden">
                    <img
                      src="/uploads/blogs/template1.jpg"
                      alt="Blog Template"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Morning Tea</h3>
                    <p className="text-gray-600 mb-4">
                      Mẫu blog tối giản với trọng tâm vào nội dung và trải
                      nghiệm đọc.
                    </p>
                    <a
                      href="#"
                      className="text-black font-medium flex items-center"
                    >
                      Xem demo <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-sm overflow-hidden shadow-lg hover-scale fade-in">
                  <div className="h-64 overflow-hidden">
                    <img
                      src="/uploads/blogs/template2.jpg"
                      alt="Blog Template"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Urban Journal</h3>
                    <p className="text-gray-600 mb-4">
                      Thiết kế hiện đại với bố cục đa dạng cho blog cá nhân và
                      tạp chí.
                    </p>
                    <a
                      href="#"
                      className="text-black font-medium flex items-center"
                    >
                      Xem demo <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-sm overflow-hidden shadow-lg hover-scale fade-in">
                  <div className="h-64 overflow-hidden">
                    <img
                      src="/uploads/blogs/template3.jpg"
                      alt="Blog Template"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Culinary Stories</h3>
                    <p className="text-gray-600 mb-4">
                      Lý tưởng cho blog ẩm thực với không gian lớn cho hình ảnh
                      và công thức.
                    </p>
                    <a
                      href="#"
                      className="text-black font-medium flex items-center"
                    >
                      Xem demo <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Layout Options */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Khám phá vô số tùy chọn thiết kế
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Mang tầm nhìn của bạn vào cuộc sống với bố cục blog linh hoạt,
                  bảng màu tùy chỉnh, phông chữ đồng bộ, quyền truy cập vào hình
                  ảnh chất lượng cao và khả năng chỉnh sửa ảnh tích hợp.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <div className="md:col-span-3 fade-in">
                  <div className="bg-gray-50 p-6 rounded-sm shadow-lg">
                    <div className="aspect-video bg-white rounded-sm overflow-hidden mb-6">
                      <img
                        src={
                          blogLayouts.find(
                            (layout) => layout.id === activeLayout
                          )?.image
                        }
                        alt="Blog layout"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="bg-white p-5 rounded-sm">
                      <h3 className="text-2xl font-bold mb-3">Morning Tea</h3>
                      <p className="text-gray-600 mb-6">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore.
                      </p>

                      <div className="border-t border-gray-200 pt-6">
                        <h4 className="text-lg font-bold mb-3">
                          Milk Substitutions
                        </h4>
                        <p className="text-gray-600">
                          Lorem ipsum dolor sit amet consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 fade-in">
                  <div className="bg-gray-50 p-6 rounded-sm h-full flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-6">Bố cục</h3>
                    <div className="space-y-4">
                      {blogLayouts.map((layout) => (
                        <button
                          key={layout.id}
                          className={`w-full text-left py-3 px-4 rounded-sm flex items-center justify-between transition-colors ${
                            activeLayout === layout.id
                              ? "bg-black text-white"
                              : "bg-white hover:bg-gray-100"
                          }`}
                          onClick={() => setActiveLayout(layout.id)}
                        >
                          <span>{layout.name}</span>
                          {activeLayout === layout.id && (
                            <ArrowRight size={16} />
                          )}
                        </button>
                      ))}
                    </div>

                    <div className="mt-8">
                      <a
                        href="#"
                        className="btn-primary w-full flex items-center justify-center"
                      >
                        Bắt đầu ngay →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AI Content */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="fade-in">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Xuất bản nhanh hơn với NiceTech AI
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Mỗi bài đăng blog đều phải bắt đầu từ đâu đó. NiceTech AI là
                    đại lý sáng tạo cá nhân của bạn, cung cấp nội dung khởi đầu
                    ý tưởng để bạn đúc kết thành bài đăng hoàn hảo.
                  </p>

                  <div className="bg-white p-6 rounded-sm shadow-md mb-8">
                    <h3 className="text-lg font-bold mb-4">
                      Mẫu bài viết do AI tạo
                    </h3>
                    <p className="text-gray-600 italic mb-4">
                      "10 cách tối ưu hóa website thương mại điện tử của bạn để
                      tăng tỷ lệ chuyển đổi. Khám phá các chiến lược đã được
                      chứng minh từ việc cải thiện trải nghiệm người dùng đến
                      tối ưu hóa quy trình thanh toán có thể giúp doanh nghiệp
                      của bạn tăng doanh số bán hàng trực tuyến."
                    </p>
                    <div className="text-sm text-gray-500">
                      Được tạo bởi NiceTech AI cho blog thương mại điện tử
                    </div>
                  </div>

                  <button className="btn-primary">
                    Trải nghiệm NiceTech AI
                  </button>
                </div>

                <div className="fade-in">
                  <img
                    src="/uploads/blogs/ai-content.jpg"
                    alt="NiceTech AI Content Generation"
                    className="w-full h-auto rounded-sm shadow-xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Monetize Content */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Biến nội dung thành thu nhập
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                  Kiếm tiền từ blog của bạn bằng cách thêm tường trả phí và tính
                  tiền để truy cập. NiceTech cung cấp mọi thứ bạn cần để tạo,
                  quảng bá và bán nội dung số và gói thành viên.
                </p>
                <a
                  href="#"
                  className="text-black font-semibold inline-flex items-center"
                >
                  Tìm hiểu thêm <ArrowRight size={18} className="ml-2" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="fade-in">
                  <h3 className="text-2xl font-bold mb-6">
                    Bán nội dung cao cấp
                  </h3>
                  <p className="text-lg text-gray-600 mb-8">
                    Cho dù bạn là đầu bếp bán công thức nấu ăn và video nấu ăn,
                    hay nhà lập kế hoạch tài chính chia sẻ khóa học và bản tin,
                    NiceTech có các công cụ bạn cần để bán nội dung độc quyền
                    trên website của bạn.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <DollarSign size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">
                          Xây dựng gói thành viên
                        </h4>
                        <p className="text-gray-600">
                          Tạo các gói thành viên cao cấp với quyền truy cập vào
                          nội dung độc quyền.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Newspaper size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">
                          Tạo bản tin trả phí
                        </h4>
                        <p className="text-gray-600">
                          Sử dụng NiceTech để phát triển và quản lý danh sách
                          gửi thư, gửi bản tin và kết nối với người đọc của bạn.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fade-in">
                  <img
                    src="/uploads/blogs/premium-content.jpg"
                    alt="Premium content"
                    className="w-full h-auto rounded-sm shadow-xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Workflow Management */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Quản lý quy trình hàng ngày
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Sử dụng bảng điều khiển để quản lý tốc độ xuất bản và danh
                  mục, tùy chỉnh cài đặt người đóng góp và theo dõi phân tích.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-sm shadow-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <BarChart2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Theo dõi phân tích</h3>
                  <p className="text-gray-600">
                    Nhận thông tin chi tiết từ lưu lượng truy cập blog. Khám phá
                    những bài đăng nào phổ biến nhất với phân tích chuyên sâu.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-sm shadow-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Users size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    Quản lý quyền và lịch đăng
                  </h3>
                  <p className="text-gray-600">
                    Thêm người đóng góp với quyền riêng và đặt bài đăng để phát
                    trực tiếp vào một ngày cụ thể để biến blog của bạn thành ấn
                    phẩm.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-sm shadow-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Tag size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    Phân loại và gắn thẻ
                  </h3>
                  <p className="text-gray-600">
                    Tổ chức bài đăng để người đọc dễ dàng tìm thấy nội dung mới
                    và liên quan.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${activeTestimonial * 100}%)`,
                    }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                          <div className="fade-in">
                            <div className="flex mb-4">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-5 h-5 text-yellow-400 fill-yellow-400"
                                />
                              ))}
                            </div>
                            <p className="text-xl text-gray-700 italic mb-6">
                              {testimonial.quote}
                            </p>
                            <div>
                              <p className="font-bold">
                                {testimonial.author}, {testimonial.title}
                              </p>
                              <p className="text-gray-600">
                                {testimonial.website}
                              </p>
                            </div>
                          </div>
                          <div className="fade-in">
                            <div className="rounded-sm overflow-hidden shadow-xl">
                              <img
                                src={testimonial.image}
                                alt={testimonial.author}
                                className="w-full h-auto"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center mt-8 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all ${
                        activeTestimonial === index
                          ? "bg-black w-8"
                          : "bg-gray-300"
                      }`}
                      onClick={() => setActiveTestimonial(index)}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </section>

          {/* Promote Blog */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Quảng bá blog của bạn
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Tăng lưu lượng truy cập blog với SEO tích hợp, chiến dịch
                  email và tài khoản mạng xã hội được kết nối.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="fade-in order-2 md:order-1">
                  <img
                    src="/uploads/blogs/seo-tools.jpg"
                    alt="SEO Tools"
                    className="w-full h-auto rounded-sm shadow-xl"
                  />
                </div>

                <div className="fade-in order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-6">Nổi bật với SEO</h3>
                  <p className="text-lg text-gray-600 mb-8">
                    Cải thiện thứ hạng kết quả tìm kiếm bằng cách tối ưu hóa
                    tiêu đề và mô tả bài đăng blog của bạn với các công cụ SEO
                    tích hợp.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Search size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">
                          Tối ưu hóa từ khóa
                        </h4>
                        <p className="text-gray-600">
                          Tích hợp từ khóa phù hợp vào nội dung để tăng tầm nhìn
                          trong kết quả tìm kiếm.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">
                          Email marketing
                        </h4>
                        <p className="text-gray-600">
                          Tăng lưu lượng truy cập đến blog của bạn với NiceTech
                          Email Campaigns và tài khoản mạng xã hội được kết nối.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Share2 size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">
                          Chia sẻ mạng xã hội
                        </h4>
                        <p className="text-gray-600">
                          Tích hợp dễ dàng các nút chia sẻ mạng xã hội và quảng
                          bá tự động nội dung blog của bạn.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How to Create */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Quy trình thiết kế Blog
                </h2>
                <a href="#" className="btn-primary">
                  Bắt đầu ngay →
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16">
                <div className="space-y-8 fade-in">
                  {[
                    {
                      number: "01",
                      title: "Trao đổi mục tiêu và nội dung",
                      description:
                        "Bạn chia sẻ với chúng tôi về mục đích xây dựng blog, nội dung chính và phong cách mong muốn.",
                    },
                    {
                      number: "02",
                      title: "Phân tích và tư vấn giao diện",
                      description:
                        "Dựa vào nhu cầu của bạn, chúng tôi sẽ gợi ý cấu trúc blog và phong cách thiết kế phù hợp.",
                    },
                    {
                      number: "03",
                      title: "Thiết kế và phát triển",
                      description:
                        "Chúng tôi tiến hành thiết kế và lập trình giao diện blog chuyên nghiệp, chuẩn SEO và dễ sử dụng.",
                    },
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4 text-xl font-bold">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-8 fade-in">
                  {[
                    {
                      number: "04",
                      title: "Chỉnh sửa & hoàn thiện",
                      description:
                        "Bạn sẽ được xem trước và đưa ý kiến chỉnh sửa trước khi hoàn thiện và bàn giao.",
                    },
                    {
                      number: "05",
                      title: "Đăng nội dung & hướng dẫn sử dụng",
                      description:
                        "Chúng tôi hỗ trợ bạn đăng nội dung mẫu và hướng dẫn cách tự quản lý, viết bài trên blog.",
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4 text-xl font-bold">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
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

export default Blogs;
