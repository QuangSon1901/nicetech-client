import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, 
  Star, 
  Quote, 
  Building, 
  Award, 
  ChevronLeft, 
  ChevronRight,
  Search,
  ExternalLink
} from "lucide-react";

const Clients = () => {
  const [activeTab, setActiveTab] = useState("Tất cả");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const industries = [
    "Tất cả",
    "Nhà hàng & F&B",
    "Du lịch & Khách sạn",
    "Giáo dục & Đào tạo",
    "Thương mại điện tử",
    "Bất động sản",
    "Công nghiệp & Sản xuất"
  ];
  
  const featuredClients = [
    {
      id: 1,
      name: "TT Plywood",
      industry: "Công nghiệp & Sản xuất",
      logo: "/uploads/clients/ttplywood-logo.png",
      image: "/uploads/projects/ttplywood.webp",
      website: "https://ttplywood.vn",
      description: "Nhà phân phối ván ép hàng đầu tại Việt Nam"
    },
    {
      id: 2,
      name: "NextGen Chess Academy",
      industry: "Giáo dục & Đào tạo",
      logo: "/uploads/clients/nextgenchess-logo.png",
      image: "/uploads/projects/nextgenchess.webp",
      website: "https://nextgen-chess-academy.nicetech.vn",
      description: "Trung tâm đào tạo cờ vua Song ngữ"
    },
    {
      id: 3,
      name: "AISUKI Restaurant",
      industry: "Nhà hàng & F&B",
      logo: "/uploads/clients/aisuki-logo.png",
      image: "/uploads/projects/aisuki.webp",
      website: "https://aisuki.nicetech.vn",
      description: "Chuỗi nhà hàng ẩm thực Châu Á"
    },
    {
      id: 4,
      name: "Nguyen Sinh Bistro",
      industry: "Nhà hàng & F&B",
      logo: "/uploads/clients/nguyensinh-logo.png",
      image: "/uploads/projects/nguyensinh.webp",
      website: "https://template.nicetech.vn/demo/nguyensinh/",
      description: "Nhà hàng ẩm thực Việt - Pháp"
    }
  ];
  
  const clients = [
    // Featured clients already included
    ...featuredClients,
    // Additional clients
    {
      id: 5,
      name: "GreenHaven Garden",
      industry: "Dịch vụ",
      logo: "/uploads/clients/greenhaven-logo.png",
      website: "http://template.nicetech.vn/demo/greenhaven",
      description: "Dịch vụ thiết kế và chăm sóc sân vườn"
    },
    {
      id: 6,
      name: "VietBeans Coffee",
      industry: "Nhà hàng & F&B",
      logo: "/uploads/clients/vietbeans-logo.png",
      website: "https://template.nicetech.vn/demo/vietbeans-cf/demo1.html",
      description: "Xuất khẩu cà phê chất lượng cao"
    },
    {
      id: 7,
      name: "Paradise Cruises",
      industry: "Du lịch & Khách sạn",
      logo: "/uploads/clients/paradise-logo.png",
      website: "https://template.nicetech.vn/demo/duthuyen/demo1.html",
      description: "Dịch vụ du thuyền cao cấp Hạ Long"
    },
    {
      id: 8,
      name: "Sunlogo Corp",
      industry: "Công nghiệp & Sản xuất",
      logo: "/uploads/clients/sunlogo-logo.png",
      website: "https://template.nicetech.vn/demo/sunlogo/demo1.html",
      description: "Công ty thiết kế và sản xuất bao bì"
    },
    {
      id: 9,
      name: "iMeo Petshop",
      industry: "Thương mại điện tử",
      logo: "/uploads/clients/imeo-logo.png",
      website: "https://template.nicetech.vn/demo/petshop/",
      description: "Cửa hàng trực tuyến sản phẩm thú cưng"
    },
    {
      id: 10,
      name: "Lisson Gallery",
      industry: "Nghệ thuật & Giải trí",
      logo: "/uploads/clients/lisson-logo.png",
      website: "http://template.nicetech.vn/demo/lisson-clone-canvas",
      description: "Phòng trưng bày nghệ thuật đương đại"
    },
    {
      id: 11,
      name: "Homefy",
      industry: "Du lịch & Khách sạn",
      logo: "/uploads/clients/homefy-logo.png",
      website: "http://template.nicetech.vn/demo/homestay/demo1.html",
      description: "Nền tảng đặt phòng homestay trực tuyến"
    },
    {
      id: 12,
      name: "Tokuteigino",
      industry: "Giáo dục & Đào tạo",
      logo: "/uploads/clients/tokuteigino-logo.png",
      website: "https://template.nicetech.vn/demo/tokuteigino/demo1.html",
      description: "Nền tảng luyện thi trực tuyến"
    }
  ];
  
  const testimonials = [
    {
      id: 1,
      name: "Nguyễn Đình Quân",
      title: "Giám đốc điều hành",
      company: "Nguyen Sinh Bistro",
      quote: "NiceTech đã giúp chuỗi nhà hàng của chúng tôi xây dựng một website đẳng cấp với hệ thống đặt bàn và đặt món trực tuyến rất chuyên nghiệp. Đặc biệt ấn tượng với tính năng quản lý lịch đặt bàn và tích hợp thông báo qua SMS đã giúp chúng tôi tiết kiệm rất nhiều thời gian. Kể từ khi triển khai, lượng đặt bàn online tăng 150% và doanh thu tăng 35%.",
      image: "/uploads/testimonials/testimonial1.jpg"
    },
    {
      id: 2,
      name: "Trần Minh Hải",
      title: "Trưởng phòng Marketing",
      company: "TT Plywood",
      quote: "Sau khi hợp tác với NiceTech, website của chúng tôi đã có một diện mạo hoàn toàn mới, chuyên nghiệp và hiện đại. Nhờ tối ưu SEO, lưu lượng truy cập đã tăng 200% và số lượng khách hàng tiềm năng tăng 75% chỉ trong 3 tháng. Đội ngũ hỗ trợ kỹ thuật luôn sẵn sàng giải đáp thắc mắc và hướng dẫn chúng tôi sử dụng hệ thống một cách hiệu quả.",
      image: "/uploads/testimonials/testimonial2.jpg"
    },
    {
      id: 3,
      name: "Lê Anh Tuấn",
      title: "Giám đốc",
      company: "NextGen Chess Academy",
      quote: "NiceTech đã hiểu rõ nhu cầu độc đáo của trung tâm đào tạo cờ vua và xây dựng cho chúng tôi một website không chỉ đẹp mắt mà còn đầy đủ các tính năng quản lý học viên, lịch học và thanh toán học phí. Giao diện trực quan, dễ sử dụng giúp phụ huynh dễ dàng đăng ký khóa học và theo dõi tiến độ của con em mình. Số lượng học viên đăng ký mới tăng 50% kể từ khi ra mắt website.",
      image: "/uploads/testimonials/testimonial3.jpg"
    }
  ];
  
  const caseStudies = [
    {
      id: 1,
      client: "AISUKI Restaurant",
      title: "Tăng 120% doanh số đặt hàng online",
      image: "/uploads/case-studies/aisuki-case.jpg",
      description: "Chiến lược xây dựng website đặt món và marketing online giúp tăng doanh số đáng kể."
    },
    {
      id: 2,
      client: "TT Plywood",
      title: "Mở rộng thị trường xuất khẩu quốc tế",
      image: "/uploads/case-studies/ttplywood-case.jpg",
      description: "Website đa ngôn ngữ giúp tiếp cận khách hàng quốc tế, tăng 45% đơn hàng xuất khẩu."
    },
    {
      id: 3,
      client: "NextGen Chess Academy",
      title: "Xây dựng hệ thống đào tạo trực tuyến",
      image: "/uploads/case-studies/chess-case.jpg",
      description: "Nền tảng học trực tuyến giúp trung tâm mở rộng phạm vi đào tạo toàn quốc."
    }
  ];
  
  // Filter clients based on selected industry
  const filteredClients = activeTab === "Tất cả" 
    ? clients 
    : clients.filter(client => client.industry === activeTab);
  
  const prevTestimonial = () => {
    setActiveTestimonial(prev => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  
  const nextTestimonial = () => {
    setActiveTestimonial(prev => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <Helmet>
        <title>Khách hàng | NiceTech - Đối tác tin cậy của doanh nghiệp</title>
        <meta name="description" content="Khám phá danh sách các khách hàng đã tin tưởng và hợp tác với NiceTech. Lời chứng thực và case studies từ những dự án thành công." />
        <link rel="canonical" href="https://nicetech.vn/khach-hang" />
      </Helmet>
      <div className="bg-white min-h-screen">
        <Navbar />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-white pt-28 pb-16">
            <div className="section-container">
              <div className="text-center max-w-4xl mx-auto mb-16 fade-in">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  Được tin tưởng bởi <span className="text-black">các thương hiệu hàng đầu</span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  NiceTech tự hào là đối tác tin cậy của các doanh nghiệp trong nhiều lĩnh vực - từ nhà hàng, du lịch đến giáo dục và sản xuất
                </p>
              </div>
              
              {/* Client Logos */}
              <div className="py-12 bg-gray-50 rounded-sm">
                <div className="text-center mb-8">
                  <h2 className="text-xl font-bold">Đối tác của chúng tôi</h2>
                </div>
                <div className="overflow-hidden">
                  <div className="flex animate-marquee">
                    {clients.map((client, index) => (
                      <div key={index} className="mx-8 flex-shrink-0 w-32 h-32 flex items-center justify-center">
                        <img 
                          src={client.logo} 
                          alt={client.name} 
                          className="max-w-full max-h-full"
                        />
                      </div>
                    ))}
                    {/* Repeat logos for continuous scrolling */}
                    {clients.map((client, index) => (
                      <div key={`repeat-${index}`} className="mx-8 flex-shrink-0 w-32 h-32 flex items-center justify-center">
                        <img 
                          src={client.logo} 
                          alt={client.name} 
                          className="max-w-full max-h-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Featured Clients */}
              <div className="mt-20">
                <h2 className="text-3xl font-bold mb-12 text-center">Khách hàng tiêu biểu</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {featuredClients.map((client) => (
                    <div key={client.id} className="bg-white rounded-sm overflow-hidden shadow-lg hover-scale fade-in">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={client.image} 
                          alt={client.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gray-100 p-2 rounded-full overflow-hidden mr-4">
                            <img 
                              src={client.logo} 
                              alt={client.name} 
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">{client.name}</h3>
                            <p className="text-sm text-gray-500">{client.industry}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{client.description}</p>
                        <a 
                          href={client.website} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-black font-medium flex items-center"
                        >
                          Xem website <ExternalLink size={16} className="ml-2" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          
          {/* Testimonials Section */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Khách hàng nói gì về chúng tôi</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Những chia sẻ chân thực từ khách hàng đã hợp tác với NiceTech
                </p>
              </div>
              
              <div className="relative">
                <div className="mx-auto max-w-4xl bg-white p-8 md:p-12 rounded-sm shadow-lg fade-in">
                  <div className="absolute top-4 left-8 text-gray-200">
                    <Quote size={64} />
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-6 md:mb-0">
                      <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img 
                          src={testimonials[activeTestimonial].image}
                          alt={testimonials[activeTestimonial].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 md:pl-8">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      
                      <p className="text-lg text-gray-700 italic mb-6 relative z-10">
                        {testimonials[activeTestimonial].quote}
                      </p>
                      
                      <div>
                        <p className="font-bold text-lg">{testimonials[activeTestimonial].name}</p>
                        <p className="text-gray-600">
                          {testimonials[activeTestimonial].title}, {testimonials[activeTestimonial].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center mt-8 space-x-4">
                  <button 
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  
                  <button 
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          </section>
          
          {/* All Clients Section */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Khách hàng theo ngành</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Khám phá danh sách khách hàng đa dạng của chúng tôi trong nhiều lĩnh vực
                </p>
              </div>
              
              {/* Industry Filter */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => setActiveTab(industry)}
                    className={`px-4 py-2 rounded-full text-sm ${
                      activeTab === industry
                        ? "bg-black text-white"
                        : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
              
              {/* Clients Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {filteredClients.map((client) => (
                  <div key={client.id} className="bg-white rounded-sm border border-gray-100 p-4 hover:shadow-md transition-shadow hover-scale fade-in">
                    <div className="h-20 flex items-center justify-center mb-4">
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="max-h-full max-w-full"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-medium text-sm">{client.name}</h3>
                      <p className="text-xs text-gray-500">{client.industry}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredClients.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-xl text-gray-500">Không tìm thấy khách hàng phù hợp</p>
                </div>
              )}
            </div>
          </section>
          
          {/* Case Studies */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Câu chuyện thành công</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Khám phá các case studies về cách NiceTech giúp khách hàng đạt được mục tiêu kinh doanh
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {caseStudies.map((caseStudy) => (
                  <div key={caseStudy.id} className="bg-white rounded-sm overflow-hidden shadow-lg hover-scale fade-in">
                    <div className="h-56 overflow-hidden">
                      <img 
                        src={caseStudy.image} 
                        alt={caseStudy.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full mb-3">
                        {caseStudy.client}
                      </span>
                      <h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
                      <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                      <a href="#" className="text-black font-medium flex items-center">
                        Xem chi tiết <ArrowRight size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <a href="#" className="btn-primary inline-flex items-center">
                  Xem tất cả case studies <ArrowRight size={18} className="ml-2" />
                </a>
              </div>
            </div>
          </section>
          
          {/* Trust Badges */}
          <section className="bg-white py-20">
            <div className="section-container">
              <div className="text-center mb-12 fade-in">
                <h2 className="text-3xl font-bold mb-6">Tại sao khách hàng tin tưởng chúng tôi</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    icon: <Award size={32} />,
                    title: "5+ năm kinh nghiệm",
                    description: "Nhiều năm kinh nghiệm trong lĩnh vực thiết kế website chuyên nghiệp"
                  },
                  {
                    icon: <Building size={32} />,
                    title: "100+ khách hàng",
                    description: "Đã hợp tác với hơn 100 doanh nghiệp trong nhiều lĩnh vực"
                  },
                  {
                    icon: <Star size={32} />,
                    title: "4.9/5 đánh giá",
                    description: "Điểm đánh giá trung bình từ khách hàng về chất lượng dịch vụ"
                  },
                  {
                    icon: <Search size={32} />,
                    title: "Top Google",
                    description: "Giúp khách hàng đạt thứ hạng cao trên công cụ tìm kiếm"
                  }
                ].map((badge, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-sm text-center hover-scale fade-in">
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      {badge.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{badge.title}</h3>
                    <p className="text-gray-600">{badge.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* CTA */}
          <section className="bg-black text-white py-24">
            <div className="section-container text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Sẵn sàng trở thành khách hàng tiếp theo của chúng tôi?
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
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Clients;
