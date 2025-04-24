import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  User,
  Paintbrush,
  Layers,
  Code,
  MousePointer,
  Grid,
  LayoutGrid,
  Maximize2,
  Image,
  FileText,
  Play,
  Share2,
  Mail,
  Package,
} from "lucide-react";

const Portfolios = () => {
  const [activeLayout, setActiveLayout] = useState("grid-overlay");

  const portfolioExamples = [
    {
      title: "Portfolio Nhiếp ảnh",
      image: "/uploads/portfolios/photography.jpg",
      category: "Nghệ thuật",
    },
    {
      title: "Portfolio Thiết kế",
      image: "/uploads/portfolios/design.jpg",
      category: "Thiết kế",
    },
    {
      title: "Portfolio Kiến trúc",
      image: "/uploads/portfolios/architecture.jpg",
      category: "Kiến trúc",
    },
    {
      title: "Portfolio Freelancer",
      image: "/uploads/portfolios/freelancer.jpg",
      category: "Công nghệ",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Thiết kế Portfolio Chuyên nghiệp | NiceTech</title>
        <meta
          name="description"
          content="Tạo portfolio cá nhân ấn tượng để giới thiệu tác phẩm của bạn trực tuyến. Bắt đầu với các mẫu được thiết kế chuyên nghiệp và tùy chỉnh theo thương hiệu cá nhân."
        />
        <link rel="canonical" href="https://nicetech.vn/dich-vu/portfolios" />
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
                    Tạo <span className="text-black">portfolio</span> website ấn
                    tượng
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Giới thiệu tác phẩm của bạn trực tuyến với portfolio chuyên
                    nghiệp. Bắt đầu với mẫu được thiết kế tỉ mỉ và tùy chỉnh phù
                    hợp với phong cách cá nhân.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="btn-primary text-lg py-4 px-8">
                      Bắt đầu ngay
                    </button>
                    <button className="btn-secondary text-lg py-4 px-8 flex items-center">
                      Xem mẫu Portfolio{" "}
                      <ArrowRight size={18} className="ml-2" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 fade-in">
                  <div className="overflow-hidden rounded-sm shadow-lg">
                    <img
                      src="/uploads/portfolios/example1.jpg"
                      alt="Portfolio example"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-sm shadow-lg">
                    <img
                      src="/uploads/portfolios/example2.jpg"
                      alt="Portfolio example"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-sm shadow-lg">
                    <img
                      src="/uploads/portfolios/example3.jpg"
                      alt="Portfolio example"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-sm shadow-lg">
                    <img
                      src="/uploads/portfolios/example4.jpg"
                      alt="Portfolio example"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Browse Templates Section */}
          <section className="bg-gray-50 py-20">
            <div className="section-container">
              <div className="text-center mb-12 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Chọn điểm khởi đầu
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                  Thêm trang hoặc phần portfolio vào mẫu website của bạn. Hoặc
                  tìm cảm hứng bằng cách duyệt qua các mẫu portfolio phổ biến
                  nhất.
                </p>
                <a
                  href="#templates"
                  className="text-black font-semibold inline-flex items-center"
                >
                  Xem các mẫu <ArrowRight size={18} className="ml-2" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {portfolioExamples.map((example, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-sm overflow-hidden shadow-lg hover-scale fade-in"
                  >
                    <div className="h-64 overflow-hidden">
                      <img
                        src={example.image}
                        alt={example.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full mb-2">
                        {example.category}
                      </span>
                      <h3 className="text-lg font-bold">{example.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Layout Options Section */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="fade-in">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Tạo portfolio nổi bật
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Chọn từ nhiều bố cục độc đáo để xây dựng portfolio online
                    thể hiện tác phẩm của bạn một cách tốt nhất. Thêm các dự án
                    riêng lẻ để giữ cho website có tổ chức và dễ điều hướng.
                  </p>

                  <div className="bg-gray-100 p-6 rounded-sm mb-8">
                    <h3 className="text-lg font-bold mb-4">Lựa chọn bố cục</h3>
                    <div className="flex flex-wrap gap-3">
                      <button
                        className={`px-4 py-2 rounded-sm text-sm flex items-center ${
                          activeLayout === "grid-overlay"
                            ? "bg-black text-white"
                            : "bg-white"
                        }`}
                        onClick={() => setActiveLayout("grid-overlay")}
                      >
                        <Grid size={16} className="mr-2" /> Grid: Overlay
                      </button>
                      <button
                        className={`px-4 py-2 rounded-sm text-sm flex items-center ${
                          activeLayout === "grid-simple"
                            ? "bg-black text-white"
                            : "bg-white"
                        }`}
                        onClick={() => setActiveLayout("grid-simple")}
                      >
                        <LayoutGrid size={16} className="mr-2" /> Grid: Simple
                      </button>
                      <button
                        className={`px-4 py-2 rounded-sm text-sm flex items-center ${
                          activeLayout === "hover-cursor"
                            ? "bg-black text-white"
                            : "bg-white"
                        }`}
                        onClick={() => setActiveLayout("hover-cursor")}
                      >
                        <MousePointer size={16} className="mr-2" /> Hover:
                        Follow Cursor
                      </button>
                      <button
                        className={`px-4 py-2 rounded-sm text-sm flex items-center ${
                          activeLayout === "hover-bg"
                            ? "bg-black text-white"
                            : "bg-white"
                        }`}
                        onClick={() => setActiveLayout("hover-bg")}
                      >
                        <Maximize2 size={16} className="mr-2" /> Hover:
                        Background
                      </button>
                    </div>
                  </div>

                  <a
                    href="#templates"
                    className="btn-primary inline-flex items-center"
                  >
                    Khám phá các bố cục{" "}
                    <ArrowRight size={18} className="ml-2" />
                  </a>
                </div>

                <div className="fade-in relative">
                  <div className="bg-gray-100 p-4 rounded-sm">
                    <div className="border-b border-gray-300 pb-3 mb-4 flex items-center justify-between">
                      <div className="text-sm font-medium">
                        Trang chủ (Bản nháp)
                      </div>
                      <div className="flex space-x-2">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                    </div>

                    <div className="aspect-video bg-white rounded-sm overflow-hidden relative">
                      {activeLayout === "grid-overlay" && (
                        <img
                          src="/uploads/portfolios/layout-grid-overlay.jpg"
                          alt="Grid Overlay Layout"
                          className="w-full h-full object-cover"
                        />
                      )}
                      {activeLayout === "grid-simple" && (
                        <img
                          src="/uploads/portfolios/layout-grid-simple.jpg"
                          alt="Grid Simple Layout"
                          className="w-full h-full object-cover"
                        />
                      )}
                      {activeLayout === "hover-cursor" && (
                        <img
                          src="/uploads/portfolios/layout-hover-cursor.jpg"
                          alt="Hover Cursor Layout"
                          className="w-full h-full object-cover"
                        />
                      )}
                      {activeLayout === "hover-bg" && (
                        <img
                          src="/uploads/portfolios/layout-hover-bg.jpg"
                          alt="Hover Background Layout"
                          className="w-full h-full object-cover"
                        />
                      )}

                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                        <p className="text-white text-sm">
                          Nhấp để xem cách dễ dàng thay đổi bố cục
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 text-sm text-gray-500">
                      Bố cục:{" "}
                      {activeLayout === "grid-overlay"
                        ? "Grid Overlay"
                        : activeLayout === "grid-simple"
                        ? "Grid Simple"
                        : activeLayout === "hover-cursor"
                        ? "Hover Follow Cursor"
                        : "Hover Background"}
                    </div>
                  </div>

                  <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-sm shadow-lg">
                    <a
                      href="#view-template"
                      className="text-black font-medium flex items-center"
                    >
                      Xem mẫu đầy đủ <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project Management Section */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Portfolio tùy chỉnh cho tác phẩm của bạn
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Tạo portfolio mạch lạc cho toàn bộ tác phẩm của bạn, bất kể
                  bạn làm gì. Tải lên và quản lý tất cả file của bạn từ một
                  trung tâm, sau đó sử dụng văn bản, hình ảnh hoặc video để làm
                  nổi bật từng dự án.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="fade-in order-2 md:order-1">
                  <div className="bg-white rounded-sm shadow-lg overflow-hidden">
                    <img
                      src="/uploads/portfolios/project-management.jpg"
                      alt="Portfolio project management"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <div className="fade-in order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-6">
                    Quản lý dự án dễ dàng
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Image size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">
                          Quản lý hình ảnh
                        </h4>
                        <p className="text-gray-600">
                          Tải lên và tổ chức hình ảnh chất lượng cao trong thư
                          viện trung tâm.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Play size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">
                          Tích hợp video
                        </h4>
                        <p className="text-gray-600">
                          Thêm video từ YouTube, Vimeo hoặc tải lên video của
                          riêng bạn.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <FileText size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">Mô tả dự án</h4>
                        <p className="text-gray-600">
                          Thêm văn bản chi tiết giải thích quá trình và kết quả
                          dự án.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sell Services Section */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Bán sản phẩm và dịch vụ của bạn
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Bán tác phẩm nghệ thuật, hình ảnh, bản in và thậm chí cả dịch
                  vụ với các tính năng bán hàng và đặt lịch tích hợp.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 rounded-sm p-8 hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Package size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Bán sản phẩm</h3>
                  <p className="text-gray-600 mb-6">
                    Cho phép khách truy cập duyệt qua sản phẩm của bạn, thêm vào
                    giỏ hàng và thanh toán đơn giản và hiệu quả.
                  </p>
                  <a
                    href="#"
                    className="text-black font-medium flex items-center"
                  >
                    Tìm hiểu thêm <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>

                <div className="bg-gray-50 rounded-sm p-8 hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Mail size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Bán dịch vụ</h3>
                  <p className="text-gray-600 mb-6">
                    Thu thập email khách hàng và xây dựng danh sách gửi thư định
                    kỳ thông báo về dịch vụ của bạn.
                  </p>
                  <a
                    href="#"
                    className="text-black font-medium flex items-center"
                  >
                    Tìm hiểu thêm <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>

                <div className="bg-gray-50 rounded-sm p-8 hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <FileText size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Đặt lịch hẹn</h3>
                  <p className="text-gray-600 mb-6">
                    Tạo website giúp thu hút khách hàng mới và cho phép họ đặt
                    lịch dịch vụ của bạn.
                  </p>
                  <a
                    href="#"
                    className="text-black font-medium flex items-center"
                  >
                    Tìm hiểu thêm <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* AI Content Section */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="fade-in">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Tạo nội dung dễ dàng với NiceTech AI
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Trong khi bạn tập trung vào việc trưng bày portfolio kỹ
                    thuật số, NiceTech AI có thể đóng vai trò là đại lý sáng tạo
                    cá nhân của bạn và cung cấp nội dung phù hợp với thương hiệu
                    để giới thiệu hoàn hảo tác phẩm của bạn.
                  </p>

                  <div className="bg-white p-6 rounded-sm shadow-md mb-8">
                    <h3 className="text-lg font-bold mb-4">
                      Mẫu nội dung do AI tạo
                    </h3>
                    <p className="text-gray-600 italic mb-4">
                      "Với hơn 5 năm kinh nghiệm trong lĩnh vực thiết kế UX/UI,
                      tôi đã tạo ra các giải pháp trực quan cho nhiều thương
                      hiệu và doanh nghiệp. Portfolio này trình bày các dự án
                      tiêu biểu thể hiện phương pháp tiếp cận lấy người dùng làm
                      trung tâm và sự chú ý đến từng chi tiết của tôi."
                    </p>
                    <div className="text-sm text-gray-500">
                      Được tạo bởi NiceTech AI cho portfolio thiết kế
                    </div>
                  </div>

                  <button className="btn-primary">
                    Trải nghiệm NiceTech AI
                  </button>
                </div>

                <div className="fade-in">
                  <img
                    src="/uploads/services/ai-content.jpg"
                    alt="NiceTech AI Content Generation"
                    className="w-full h-auto rounded-sm shadow-xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Expand Your Network */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Mở rộng mạng lưới của bạn
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Kết nối với khách hàng và đối tác tiềm năng thông qua các tính
                  năng tương tác tích hợp.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 rounded-sm hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <User size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    Kể câu chuyện của bạn
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Thêm trang "Về tôi" vào website portfolio của bạn để chia sẻ
                    tiểu sử và kể câu chuyện của bạn. Bạn thậm chí có thể hiển
                    thị sơ yếu lý lịch hoặc CV.
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-sm hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Mail size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    Trang liên hệ dễ dàng
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Giúp khách hàng, nhà tuyển dụng và cộng tác viên tiềm năng
                    dễ dàng liên hệ bằng cách thêm địa chỉ email hoặc tạo biểu
                    mẫu để điền trực tiếp trên trang web của bạn.
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-sm hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Share2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    Kết nối mạng xã hội
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Chia sẻ tác phẩm mới trực tiếp với khán giả của bạn bằng
                    cách sử dụng tích hợp email và mạng xã hội. Định dạng bài
                    đăng với công cụ tối ưu hình ảnh để chia sẻ tác phẩm của
                    bạn.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How to Create Section */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Quy trình tạo Portfolio
                </h2>
                <a href="#" className="btn-primary">
                  Bắt đầu ngay →
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="space-y-8 fade-in">
                  {[
                    {
                      number: "01",
                      title: "Trao đổi nội dung",
                      description:
                        "Hãy chia sẻ với chúng tôi về bản thân bạn, lĩnh vực bạn hoạt động và mục tiêu sử dụng portfolio.",
                    },
                    {
                      number: "02",
                      title: "Đề xuất ý tưởng",
                      description:
                        "Dựa trên nội dung bạn cung cấp, chúng tôi sẽ gợi ý bố cục và thiết kế phù hợp. Bạn cũng có thể chọn từ các mẫu sẵn có.",
                    },
                    {
                      number: "03",
                      title: "Bắt đầu thực hiện",
                      description:
                        "Chúng tôi sẽ tiến hành thiết kế và xây dựng portfolio một cách chuyên nghiệp và chỉnh chu nhất.",
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
                      title: "Hiệu chỉnh & hoàn thiện",
                      description:
                        "Bạn sẽ được xem trước và đề xuất chỉnh sửa nếu cần. Chúng tôi đảm bảo bạn hài lòng trước khi hoàn thiện.",
                    },
                    {
                      number: "05",
                      title: "Quảng bá portfolio",
                      description:
                        "Khi đã sẵn sàng, bạn có thể dùng portfolio để giới thiệu bản thân trên các nền tảng mạng xã hội và chuyên nghiệp.",
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

export default Portfolios;
