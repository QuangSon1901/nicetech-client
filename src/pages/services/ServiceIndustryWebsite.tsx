import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Star,
  Utensils,
  Home,
  Plane,
  Scissors,
  Coffee,
  BookOpen,
  MessageSquare,
  ChevronDown,
  CheckCircle,
  Image,
  Code,
  Server,
  Layout,
  Smartphone,
  Shield,
} from "lucide-react";

const ServiceIndustryWebsite = () => {
  const [activeTab, setActiveTab] = useState(0);

  const projectExamples = [
    {
      name: "The Luxury Spa",
      image: "/uploads/services/project-spa.jpg",
      description:
        "Website đặt lịch trải nghiệm spa cao cấp với thanh toán trực tuyến",
    },
    {
      name: "Nguyen Sinh Restaurant",
      image: "/uploads/projects/nguyensinh.webp",
      description: "Hệ thống đặt bàn và giao hàng tận nơi cho nhà hàng",
    },
    {
      name: "Elegant Hotel",
      image: "/uploads/services/project-hotel.jpg",
      description: "Website khách sạn với quản lý đặt phòng và đa ngôn ngữ",
    },
    {
      name: "GreenHaven Garden",
      image: "/uploads/projects/greenhaven.webp",
      description: "Website dịch vụ chăm sóc sân vườn với đặt lịch tự động",
    },
  ];

  const industryTypes = [
    {
      icon: <Utensils size={32} />,
      name: "Nhà hàng & Café",
      features: [
        "Đặt bàn trực tuyến",
        "Menu điện tử",
        "Đặt món trực tuyến",
        "Đánh giá và review",
      ],
    },
    {
      icon: <Home size={32} />,
      name: "Khách sạn & Homestay",
      features: [
        "Hệ thống đặt phòng",
        "Bảng giá động",
        "Quản lý phòng",
        "Phương thức thanh toán đa dạng",
      ],
    },
    {
      icon: <Scissors size={32} />,
      name: "Spa & Salon",
      features: [
        "Đặt lịch dịch vụ",
        "Hồ sơ chuyên gia",
        "Tích hợp khuyến mãi",
        "Quản lý dịch vụ",
      ],
    },
    {
      icon: <Plane size={32} />,
      name: "Du lịch & Lữ hành",
      features: [
        "Đặt tour",
        "Hệ thống thanh toán",
        "Quản lý lịch trình",
        "Đa ngôn ngữ",
      ],
    },
    {
      icon: <BookOpen size={32} />,
      name: "Giáo dục & Đào tạo",
      features: [
        "Đăng ký khóa học",
        "Học trực tuyến",
        "Quản lý học viên",
        "Thanh toán học phí",
      ],
    },
    {
      icon: <Coffee size={32} />,
      name: "Các ngành dịch vụ khác",
      features: [
        "Thiết kế tùy chỉnh",
        "Tích hợp đặt lịch",
        "Quản lý khách hàng",
        "Báo cáo hiệu suất",
      ],
    },
  ];

  const faqs = [
    {
      question:
        "Tại sao ngành dịch vụ cần có website được thiết kế chuyên biệt?",
      answer:
        "Ngành dịch vụ có nhu cầu đặc thù khác với các ngành khác, đòi hỏi website phải có các tính năng như hệ thống đặt lịch/đặt bàn/đặt phòng trực tuyến, thanh toán trước/sau dịch vụ, hiển thị thời gian khả dụng và quản lý booking. Một website được thiết kế chuyên biệt sẽ đáp ứng đúng quy trình kinh doanh của doanh nghiệp dịch vụ, tăng hiệu quả vận hành, giảm chi phí nhân sự quản lý và nâng cao trải nghiệm khách hàng.",
    },
    {
      question:
        "Hệ thống đặt lịch/đặt bàn/đặt phòng online hoạt động như thế nào?",
      answer:
        "Hệ thống đặt lịch của NiceTech cho phép khách hàng chọn dịch vụ, ngày giờ, và nhân viên/phòng/bàn mong muốn một cách trực quan. Khách hàng có thể nhận xác nhận tự động qua email/SMS và thanh toán trước qua nhiều phương thức. Về phía doanh nghiệp, hệ thống cung cấp bảng điều khiển quản lý đặt lịch toàn diện, với thông báo đặt lịch mới, lịch biểu nhân viên, và báo cáo thống kê. Hệ thống đồng bộ hóa tự động để tránh trùng lịch và có thể điều chỉnh thời gian đặt lịch dựa trên tính khả dụng thực tế.",
    },
    {
      question: "Chi phí thiết kế website cho ngành dịch vụ là bao nhiêu?",
      answer:
        "Chi phí thiết kế website cho ngành dịch vụ tại NiceTech dao động từ 25-80 triệu đồng tùy thuộc vào quy mô và tính năng cụ thể. Gói Cơ bản (25-35 triệu) bao gồm thiết kế responsive và hệ thống đặt lịch cơ bản. Gói Chuyên nghiệp (40-55 triệu) thêm tính năng thanh toán trực tuyến, tích hợp SMS/email marketing và app di động. Gói Doanh nghiệp (60-80 triệu) bổ sung tính năng tùy chỉnh cao cấp như tích hợp POS, hệ thống khách hàng thân thiết và phân tích dữ liệu nâng cao. Mỗi dự án sẽ được báo giá cụ thể sau khi phân tích nhu cầu chi tiết.",
    },
    {
      question: "Thời gian để hoàn thành một website ngành dịch vụ là bao lâu?",
      answer:
        "Thời gian phát triển một website ngành dịch vụ thường dao động từ 6-12 tuần tùy thuộc vào độ phức tạp. Dự án cơ bản mất khoảng 6-8 tuần, bao gồm 1-2 tuần phân tích và thiết kế, 3-4 tuần phát triển, và 2 tuần kiểm thử và triển khai. Dự án phức tạp với nhiều tính năng tùy chỉnh như đồng bộ hóa với phần mềm quản lý hiện có, tích hợp POS, hoặc app di động có thể kéo dài 10-12 tuần. NiceTech làm việc theo phương pháp Agile, cho phép khách hàng theo dõi tiến độ và đóng góp ý kiến thường xuyên trong suốt quá trình phát triển.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Thiết Kế Website Ngành Dịch Vụ | NiceTech</title>
        <meta
          name="description"
          content="Dịch vụ thiết kế website chuyên biệt cho ngành dịch vụ: nhà hàng, khách sạn, spa, salon, du lịch. Tích hợp hệ thống đặt lịch, đặt bàn, đặt phòng và thanh toán trực tuyến."
        />
        <link
          rel="canonical"
          href="https://nicetech.vn/dich-vu/website-nganh-dich-vu"
        />
      </Helmet>
      <div className="bg-white min-h-screen">
        <Navbar />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-white pt-28 pb-16">
            <div className="section-container">
              <div className="text-center max-w-4xl mx-auto mb-16 fade-in">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  Thiết kế website{" "}
                  <span className="text-black">ngành dịch vụ</span> chuyên
                  nghiệp
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  Giải pháp website đặc thù cho các doanh nghiệp dịch vụ với
                  tính năng đặt lịch, đặt bàn, đặt phòng và thanh toán trực
                  tuyến. Nâng cao trải nghiệm khách hàng và tối ưu hóa quy trình
                  kinh doanh.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="btn-primary text-lg py-4 px-8">
                    Nhận tư vấn miễn phí
                  </button>
                  <button className="btn-secondary text-lg py-4 px-8 flex items-center justify-center">
                    Xem dự án tiêu biểu{" "}
                    <ArrowRight size={18} className="ml-2" />
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
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>
                      <a
                        href="#"
                        className="text-black font-medium flex items-center"
                      >
                        Xem chi tiết <ArrowRight size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <a
                  href="#portfolio"
                  className="text-black font-medium flex items-center justify-center"
                >
                  Xem thêm dự án <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </section>

          {/* Service Industry Section */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Giải pháp cho mọi ngành dịch vụ
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Chúng tôi cung cấp giải pháp thiết kế website tùy chỉnh cho
                  nhiều lĩnh vực dịch vụ khác nhau, với các tính năng đặc thù
                  phù hợp với từng ngành.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industryTypes.map((industry, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover-scale fade-in"
                  >
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                      {industry.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{industry.name}</h3>
                    <ul className="space-y-3">
                      {industry.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="text-black mr-3 mt-0.5">
                            <CheckCircle size={16} />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Booking System Feature */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="fade-in">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Hệ thống đặt lịch thông minh
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Chúng tôi phát triển hệ thống đặt lịch, đặt bàn, đặt phòng
                    chuyên nghiệp, tối ưu hóa quy trình vận hành và nâng cao
                    trải nghiệm khách hàng.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Calendar size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Lịch trực quan dễ sử dụng
                        </h3>
                        <p className="text-gray-600">
                          Giao diện đặt lịch thân thiện, cho phép khách hàng dễ
                          dàng xem tình trạng khả dụng và đặt lịch chỉ với vài
                          thao tác.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <MessageSquare size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Thông báo tự động
                        </h3>
                        <p className="text-gray-600">
                          Hệ thống gửi email/SMS xác nhận đặt lịch, nhắc nhở
                          trước cuộc hẹn, và cập nhật khi có thay đổi.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Clock size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Quản lý thời gian hiệu quả
                        </h3>
                        <p className="text-gray-600">
                          Bảng điều khiển quản lý dành cho doanh nghiệp, với
                          lịch biểu trực quan và công cụ phân bổ nguồn lực thông
                          minh.
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#booking-system"
                    className="btn-primary mt-8 inline-flex items-center"
                  >
                    Khám phá hệ thống đặt lịch{" "}
                    <ArrowRight size={18} className="ml-2" />
                  </a>
                </div>

                <div className="fade-in">
                  <div className="relative">
                    <img
                      src="/uploads/services/booking-system.jpg"
                      alt="Hệ thống đặt lịch"
                      className="w-full h-auto rounded-xl shadow-xl"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg max-w-xs">
                      <img
                        src="/uploads/services/booking-mobile.jpg"
                        alt="Đặt lịch trên di động"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Tính năng nổi bật cho ngành dịch vụ
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Chúng tôi phát triển các tính năng đặc thù giúp doanh nghiệp
                  dịch vụ tối ưu hóa vận hành và nâng cao trải nghiệm khách
                  hàng.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Calendar size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    Hệ thống đặt lịch/đặt bàn/đặt phòng
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Cho phép khách hàng dễ dàng đặt lịch sử dụng dịch vụ, đặt
                    bàn nhà hàng hoặc đặt phòng khách sạn trực tuyến với xác
                    nhận tự động.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>
                        Hiển thị tình trạng khả dụng theo thời gian thực
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Thông báo email/SMS tự động</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Quản lý đặt lịch và nguồn lực</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Star size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    Đánh giá và phản hồi
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Hệ thống thu thập đánh giá và phản hồi từ khách hàng sau khi
                    sử dụng dịch vụ, giúp doanh nghiệp cải thiện chất lượng.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Đánh giá sao và bình luận</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Khảo sát mức độ hài lòng</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Phân tích xu hướng và báo cáo</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Bản đồ và định vị</h3>
                  <p className="text-gray-600 mb-6">
                    Tích hợp bản đồ và hướng dẫn đường đi giúp khách hàng dễ
                    dàng tìm đến địa điểm cung cấp dịch vụ của bạn.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Bản đồ Google Maps tương tác</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Chỉ đường chi tiết</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Hiển thị chi nhánh gần nhất</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="bg-white p-8 rounded-xl shadow-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Image size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    Thư viện hình ảnh & Video
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Giới thiệu dịch vụ qua hình ảnh và video chất lượng cao,
                    giúp khách hàng hình dung rõ ràng về trải nghiệm dịch vụ.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Thư viện ảnh đẹp mắt</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Tour 360° và video</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Trình chiếu và hiệu ứng</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Layout size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Bảng giá và Menu</h3>
                  <p className="text-gray-600 mb-6">
                    Hiển thị bảng giá dịch vụ hoặc menu nhà hàng một cách rõ
                    ràng, trực quan, dễ cập nhật và tùy chỉnh.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Danh mục dịch vụ phân loại</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Mô tả chi tiết và hình ảnh</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Dễ dàng cập nhật thông tin và giá</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <MessageSquare size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    Chat và Tư vấn trực tuyến
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Kênh tương tác trực tiếp với khách hàng, giải đáp thắc mắc
                    và tư vấn dịch vụ phù hợp.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Chat trực tuyến 24/7</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Chatbot tự động trả lời</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Kết nối Zalo, Facebook Messenger</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Technology & Integration */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="fade-in order-2 md:order-1">
                  <img
                    src="/uploads/services/technology-stack.jpg"
                    alt="Công nghệ hiện đại"
                    className="w-full h-auto rounded-xl shadow-xl"
                  />
                </div>

                <div className="fade-in order-1 md:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Công nghệ hiện đại, hiệu suất vượt trội
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Chúng tôi sử dụng các công nghệ tiên tiến để phát triển
                    website ngành dịch vụ với hiệu suất cao, bảo mật và khả năng
                    mở rộng.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Code size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Framework hiện đại
                        </h3>
                        <p className="text-gray-600">
                          Phát triển trên các nền tảng Laravel, React, Vue.js,
                          .NET Core với kiến trúc tối ưu hiệu suất và khả năng
                          mở rộng.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Smartphone size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Tương thích đa thiết bị
                        </h3>
                        <p className="text-gray-600">
                          Website tối ưu trên mọi kích thước màn hình, từ
                          desktop đến mobile, mang lại trải nghiệm người dùng
                          liền mạch.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 mr-4">
                        <Shield size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Bảo mật dữ liệu
                        </h3>
                        <p className="text-gray-600">
                          Áp dụng các tiêu chuẩn bảo mật cao nhất cho dữ liệu
                          khách hàng và giao dịch thanh toán.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial */}
          <section className="bg-gray-50 py-20">
            <div className="section-container">
              <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg fade-in">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-3/4 mb-6 md:mb-0 md:pr-8">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-5 h-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-xl italic text-gray-700 mb-6">
                      "NiceTech đã giúp chuỗi nhà hàng của chúng tôi xây dựng
                      một website đẳng cấp với hệ thống đặt bàn và đặt món trực
                      tuyến rất chuyên nghiệp. Đặc biệt ấn tượng với tính năng
                      quản lý lịch đặt bàn và tích hợp thông báo qua SMS đã giúp
                      chúng tôi tiết kiệm rất nhiều thời gian. Kể từ khi triển
                      khai, lượng đặt bàn online tăng 150% và doanh thu tăng
                      35%."
                    </p>
                    <div>
                      <p className="font-bold">Nguyễn Đình Quân</p>
                      <p className="text-gray-600">
                        Giám đốc điều hành - Chuỗi nhà hàng Nguyên Sinh
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/4">
                    <img
                      src="/uploads/services/testimonial.jpg"
                      alt="Testimonial"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service Packages */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Gói dịch vụ thiết kế website ngành dịch vụ
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Chúng tôi cung cấp các gói dịch vụ phù hợp với quy mô và nhu
                  cầu cụ thể của doanh nghiệp.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover-scale fade-in">
                  <h3 className="text-2xl font-bold mb-2">Cơ bản</h3>
                  <p className="text-gray-600 mb-6">Cho doanh nghiệp nhỏ</p>
                  <div className="text-4xl font-bold mb-6">25-35 triệu</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Thiết kế responsive chuyên nghiệp</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Hệ thống đặt lịch/đặt bàn cơ bản</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Bảng giá/menu trực tuyến</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Tích hợp Google Maps</span>
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
                  <p className="text-gray-600 mb-6">Cho doanh nghiệp vừa</p>
                  <div className="text-4xl font-bold mb-6">40-55 triệu</div>
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
                      <span>Hệ thống đặt lịch nâng cao</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Thanh toán trực tuyến</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Tích hợp SMS & Email marketing</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Chat trực tuyến & Chatbot</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>App di động đơn giản</span>
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
                  <h3 className="text-2xl font-bold mb-2">Doanh nghiệp</h3>
                  <p className="text-gray-600 mb-6">Cho doanh nghiệp lớn</p>
                  <div className="text-4xl font-bold mb-6">60-80 triệu</div>
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
                      <span>Tích hợp với POS/ERP/CRM</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Hệ thống khách hàng thân thiết</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Quản lý nhiều chi nhánh</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>App di động cao cấp</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Phân tích dữ liệu nâng cao</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-black mr-3 mt-0.5">
                        <CheckCircle size={16} />
                      </div>
                      <span>Hỗ trợ kỹ thuật 12 tháng</span>
                    </li>
                  </ul>
                  <button className="w-full bg-black text-white py-3 font-medium hover:bg-gray-800 transition-colors">
                    Nhận tư vấn
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Development Process */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Quy trình phát triển chuyên nghiệp
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Phương pháp làm việc minh bạch và hiệu quả của chúng tôi đảm
                  bảo dự án của bạn được triển khai đúng thời hạn, đáp ứng mọi
                  yêu cầu.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8 fade-in">
                  <div className="flex items-start">
                    <div className="text-3xl font-bold text-black mr-6">
                      01.
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">
                        Tư vấn & Phân tích
                      </h3>
                      <p className="text-gray-600">
                        Chúng tôi tìm hiểu chi tiết về mô hình kinh doanh, mục
                        tiêu và đối tượng khách hàng để đề xuất giải pháp phù
                        hợp nhất.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-3xl font-bold text-black mr-6">
                      02.
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Thiết kế UX/UI</h3>
                      <p className="text-gray-600">
                        Thiết kế giao diện người dùng hấp dẫn với trải nghiệm
                        mua sắm trực tuyến mượt mà, tối ưu tỷ lệ chuyển đổi.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-3xl font-bold text-black mr-6">
                      03.
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">
                        Phát triển & Tích hợp
                      </h3>
                      <p className="text-gray-600">
                        Lập trình website với các tính năng đặc thù cho ngành
                        dịch vụ như đặt lịch, thanh toán, đánh giá...
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8 fade-in">
                    <div className="flex items-start">
                    <div className="text-3xl font-bold text-black mr-6">
                        04.
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-3">
                        Kiểm thử & Tối ưu
                        </h3>
                        <p className="text-gray-600">
                        Kiểm tra kỹ lưỡng mọi tính năng, tối ưu trải nghiệm
                        người dùng và hiệu suất hệ thống.
                        </p>
                    </div>
                    </div>
                  <div className="flex items-start">
                    <div className="text-3xl font-bold text-black mr-6">
                      05.
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">
                        Đào tạo & Bàn giao
                      </h3>
                      <p className="text-gray-600">
                        Hướng dẫn sử dụng hệ thống, đào tạo nhân viên và bàn
                        giao website hoàn chỉnh.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <a href="#process" className="btn-primary">
                  Tìm hiểu chi tiết quy trình
                </a>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Câu hỏi thường gặp
                </h2>
              </div>

              <div className="space-y-6 max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl shadow-md overflow-hidden fade-in"
                  >
                    <button
                      className="w-full text-left p-6 font-bold text-lg flex justify-between items-center"
                      onClick={() =>
                        setActiveTab(activeTab === index ? -1 : index)
                      }
                    >
                      {faq.question}
                      <span
                        className={`transform transition-transform ${
                          activeTab === index ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronDown size={20} />
                      </span>
                    </button>
                    <div
                      className={`px-6 pb-6 transition-all duration-300 ${
                        activeTab === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0 overflow-hidden"
                      }`}
                    >
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
                Sẵn sàng nâng tầm doanh nghiệp dịch vụ của bạn?
              </h2>
              <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-300">
                Liên hệ với NiceTech ngay hôm nay để được tư vấn miễn phí về
                giải pháp website phù hợp với doanh nghiệp dịch vụ của bạn.
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
                  src="/uploads/services/service-showcase.jpg"
                  alt="Website Ngành Dịch Vụ"
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

export default ServiceIndustryWebsite;
