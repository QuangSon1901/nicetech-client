import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, 
  Filter, 
  ExternalLink, 
  Calendar, 
  Tag, 
  Search,
  Globe
} from "lucide-react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);

  const categories = [
    "Tất cả",
    "Nhà hàng",
    "Du lịch",
    "Giáo dục",
    "Doanh nghiệp",
    "E-commerce",
    "Portfolio",
    "Blog"
  ];

  const projects = [
    {
      id: 1,
      name: "AISUKI - Nhà hàng Châu Á",
      category: "Nhà hàng",
      year: "2023",
      image: "/uploads/projects/aisuki.webp",
      description: "Website đặt món online cho nhà hàng món ăn Châu Á với thiết kế hiện đại, hệ thống đặt bàn và giao hàng tận nơi.",
      link: "https://aisuki.nicetech.vn",
      featured: true,
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      name: "NextGen Chess - Chương trình giảng dạy cờ vua Song ngữ",
      category: "Giáo dục",
      year: "2023",
      image: "/uploads/projects/nextgenchess.webp",
      description: "Website giáo dục cờ vua với khả năng đăng ký khóa học trực tuyến, theo dõi tiến độ học tập và thanh toán học phí.",
      link: "https://nextgen-chess-academy.nicetech.vn",
      featured: true,
      technologies: ["React", "Express.js", "PostgreSQL"]
    },
    {
      id: 3,
      name: "TT Plywood - Nhà phân phối ván ép hàng đầu",
      category: "Doanh nghiệp",
      year: "2022",
      image: "/uploads/projects/ttplywood.webp",
      description: "Website doanh nghiệp cho nhà sản xuất ván ép với danh mục sản phẩm chi tiết, thông tin kỹ thuật và hệ thống liên hệ báo giá.",
      link: "https://ttplywood.vn",
      featured: true,
      technologies: ["WordPress", "WooCommerce", "PHP"]
    },
    {
      id: 4,
      name: "Du thuyền - Trải nghiệm Du lịch",
      category: "Du lịch",
      year: "2023",
      image: "/uploads/projects/duthuyen.webp",
      description: "Website đặt tour du thuyền với thiết kế sang trọng, trình diễn hình ảnh 360° và hệ thống thanh toán trực tuyến đa cổng.",
      link: "https://template.nicetech.vn/demo/duthuyen/demo1.html",
      featured: false,
      technologies: ["HTML5", "CSS3", "JavaScript"]
    },
    {
      id: 5,
      name: "Nguyen Sinh Bistro – Ẩm thực Việt - Pháp",
      category: "Nhà hàng",
      year: "2023",
      image: "/uploads/projects/nguyensinh.webp",
      description: "Website nhà hàng với thiết kế tối giản, menu trực tuyến và hệ thống đặt bàn tích hợp. Giao diện đa ngôn ngữ Việt-Anh-Pháp.",
      link: "https://template.nicetech.vn/demo/nguyensinh/",
      featured: false,
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"]
    },
    {
      id: 6,
      name: "Xuất khẩu cà phê chất lượng cao",
      category: "Doanh nghiệp",
      year: "2022",
      image: "/uploads/projects/vietbeans-cf.webp",
      description: "Website giới thiệu sản phẩm cà phê xuất khẩu với thông tin chi tiết về nguồn gốc, chất lượng và quy trình sản xuất.",
      link: "https://template.nicetech.vn/demo/vietbeans-cf/demo1.html",
      featured: false,
      technologies: ["WordPress", "Elementor", "WooCommerce"]
    },
    {
      id: 7,
      name: "GreenHaven Garden - Dịch vụ sân vườn",
      category: "Doanh nghiệp",
      year: "2023",
      image: "/uploads/projects/greenhaven.webp",
      description: "Website dịch vụ chăm sóc sân vườn với đặt lịch tự động, báo giá trực tuyến và thư viện hình ảnh công trình thực tế.",
      link: "http://template.nicetech.vn/demo/greenhaven",
      featured: false,
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 8,
      name: "Nền tảng đặt homestay",
      category: "Du lịch",
      year: "2023",
      image: "/uploads/projects/homestay.webp",
      description: "Website đặt homestay với khả năng lọc theo khu vực, giá cả và tiện ích. Tích hợp đánh giá và bình luận từ người dùng thực.",
      link: "http://template.nicetech.vn/demo/homestay/demo1.html",
      featured: false,
      technologies: ["Next.js", "Prisma", "PostgreSQL"]
    },
    {
      id: 9,
      name: "Giới thiệu tác phẩm nghệ thuật",
      category: "Portfolio",
      year: "2022",
      image: "/uploads/projects/lisson-clone-canvas.webp",
      description: "Website portfolio nghệ thuật với hiệu ứng chuyển động mượt mà, thư viện tác phẩm phân loại theo chủ đề và nghệ sĩ.",
      link: "http://template.nicetech.vn/demo/lisson-clone-canvas",
      featured: false,
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"]
    },
    {
      id: 10,
      name: "Website thú cưng iMeo",
      category: "E-commerce",
      year: "2023",
      image: "/uploads/projects/imeo.webp",
      description: "Website thương mại điện tử chuyên về sản phẩm cho thú cưng với hệ thống thanh toán trực tuyến và giao hàng nhanh.",
      link: "https://template.nicetech.vn/demo/petshop/",
      featured: false,
      technologies: ["WordPress", "WooCommerce", "PayPal API"]
    },
    {
      id: 11,
      name: "Giới thiệu công ty Sunlogo",
      category: "Doanh nghiệp",
      year: "2022",
      image: "/uploads/projects/sunlogo.webp",
      description: "Website doanh nghiệp với thiết kế hiện đại, giới thiệu sản phẩm và dịch vụ một cách chuyên nghiệp, tối ưu SEO.",
      link: "https://template.nicetech.vn/demo/sunlogo/demo1.html",
      featured: false,
      technologies: ["React", "Gatsby", "Contentful"]
    },
    {
      id: 12,
      name: "Nền tảng luyện thi Tokuteigino",
      category: "Giáo dục",
      year: "2023",
      image: "/uploads/projects/tokutegino.webp",
      description: "Website học trực tuyến với hệ thống bài giảng video, bài tập tương tác và đánh giá tiến độ học tập tự động.",
      link: "https://template.nicetech.vn/demo/tokuteigino/demo1.html",
      featured: false,
      technologies: ["Angular", "Express.js", "MongoDB"]
    }
  ];

  useEffect(() => {
    // Filter projects based on category and search query
    const result = projects.filter(project => {
      const matchesCategory = activeCategory === "Tất cả" || project.category === activeCategory;
      const matchesQuery = project.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
    setFilteredProjects(result);
  }, [activeCategory, searchQuery]);

  // Get featured projects
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <>
      <Helmet>
        <title>Dự án | NiceTech - Công ty thiết kế website chuyên nghiệp</title>
        <meta name="description" content="Khám phá bộ sưu tập các dự án website đã thực hiện bởi NiceTech - từ website doanh nghiệp, thương mại điện tử đến portfolio cá nhân." />
        <link rel="canonical" href="https://nicetech.vn/du-an" />
      </Helmet>
      <div className="bg-white min-h-screen">
        <Navbar />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-white pt-28 pb-16">
            <div className="section-container">
              <div className="text-center max-w-4xl mx-auto mb-16 fade-in">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  Dự án <span className="text-black">tiêu biểu</span> của chúng tôi
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  Khám phá bộ sưu tập dự án website đa dạng đã thực hiện bởi NiceTech - từ website doanh nghiệp, nhà hàng đến thương mại điện tử
                </p>
              </div>

              {/* Featured Projects Carousel */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {featuredProjects.map((project) => (
                  <div key={project.id} className="bg-white rounded-sm overflow-hidden shadow-lg hover-scale fade-in">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">{project.category}</span>
                        <span className="text-xs text-gray-500 ml-2 flex items-center"><Calendar size={12} className="mr-1" /> {project.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-black font-medium flex items-center">
                        Xem dự án <ExternalLink size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Project Filter Section */}
          <section className="bg-gray-50 py-16">
            <div className="section-container">
              <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <h2 className="text-3xl font-bold mb-6 md:mb-0">Tất cả dự án</h2>
                
                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                  {/* Search */}
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Tìm kiếm dự án..." 
                      className="pl-10 pr-4 py-2 border border-gray-200 rounded-full w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-black/10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                  </div>
                  
                  {/* Filter by category */}
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm transition-colors ${
                          activeCategory === category
                            ? "bg-black text-white"
                            : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="bg-white rounded-sm overflow-hidden shadow-lg hover-scale fade-in">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">{project.category}</span>
                        <span className="text-xs text-gray-500 ml-2 flex items-center"><Calendar size={12} className="mr-1" /> {project.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-black font-medium flex items-center">
                        Xem dự án <ExternalLink size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredProjects.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-xl text-gray-500">Không tìm thấy dự án phù hợp</p>
                </div>
              )}
            </div>
          </section>

          {/* Services Overview */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Dịch vụ thiết kế website của chúng tôi</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  NiceTech cung cấp các giải pháp thiết kế website đa dạng phù hợp với mọi lĩnh vực kinh doanh
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 rounded-sm hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Globe size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Website Doanh nghiệp</h3>
                  <p className="text-gray-600 mb-6">
                    Thiết kế website doanh nghiệp chuyên nghiệp, thể hiện đẳng cấp thương hiệu và thu hút khách hàng tiềm năng.
                  </p>
                  <a href="/dich-vu/doanh-nghiep" className="text-black font-medium flex items-center">
                    Tìm hiểu thêm <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-sm hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Tag size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">E-Commerce</h3>
                  <p className="text-gray-600 mb-6">
                    Xây dựng cửa hàng trực tuyến với đầy đủ tính năng quản lý sản phẩm, thanh toán và vận chuyển.
                  </p>
                  <a href="/dich-vu/ecommerce" className="text-black font-medium flex items-center">
                    Tìm hiểu thêm <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-sm hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Filter size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Website ngành dịch vụ</h3>
                  <p className="text-gray-600 mb-6">
                    Thiết kế website chuyên biệt cho nhà hàng, spa, khách sạn với tính năng đặt lịch và quản lý đơn hàng.
                  </p>
                  <a href="/dich-vu/nganh-dich-vu" className="text-black font-medium flex items-center">
                    Tìm hiểu thêm <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Project Process */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Quy trình làm việc chuyên nghiệp</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Chúng tôi thực hiện dự án theo quy trình chuyên nghiệp, đảm bảo chất lượng và tiến độ
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "01", title: "Trao đổi yêu cầu", description: "Tìm hiểu mục tiêu, yêu cầu và tầm nhìn của dự án" },
                  { step: "02", title: "Thiết kế UI/UX", description: "Xây dựng giao diện và trải nghiệm người dùng tối ưu" },
                  { step: "03", title: "Phát triển", description: "Lập trình website với công nghệ hiện đại, tối ưu tốc độ" },
                  { step: "04", title: "Bàn giao & Hỗ trợ", description: "Kiểm thử, triển khai và hỗ trợ sau bàn giao" }
                ].map((process, index) => (
                  <div key={index} className="bg-white p-8 rounded-sm shadow-lg hover-scale fade-in">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
                        <span className="font-bold">{process.step}</span>
                      </div>
                      <div className="text-5xl font-bold text-gray-100">{process.step}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{process.title}</h3>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-black text-white py-24">
            <div className="section-container text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Bạn đã sẵn sàng cho dự án tiếp theo?
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

export default Projects;
