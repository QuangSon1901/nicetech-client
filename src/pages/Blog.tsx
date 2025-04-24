import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, 
  Search, 
  Calendar, 
  Clock, 
  User,
  Tag,
  ChevronRight,
  ArrowUpRight,
  Mail
} from "lucide-react";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  
  const categories = [
    "Tất cả",
    "Web Design",
    "UX/UI",
    "E-commerce",
    "SEO",
    "Công nghệ",
    "Kinh doanh"
  ];
  
  const featuredPosts = [
    {
      id: 1,
      title: "10 xu hướng thiết kế website hàng đầu năm 2025",
      image: "/uploads/blog/web-design-trends.jpg",
      date: "22/04/2025",
      category: "Web Design",
      author: "Nguyễn Minh",
      readTime: "8 phút",
      excerpt: "Khám phá những xu hướng thiết kế website mới nhất và phổ biến nhất trong năm 2025, từ thiết kế tối giản đến trải nghiệm 3D tương tác.",
      featured: true
    },
    {
      id: 2,
      title: "Làm thế nào để tăng tỷ lệ chuyển đổi cho website bán hàng",
      image: "/uploads/blog/conversion-rate.jpg",
      date: "18/04/2025",
      category: "E-commerce",
      author: "Trần Hà",
      readTime: "6 phút",
      excerpt: "Những chiến lược hiệu quả giúp cải thiện tỷ lệ chuyển đổi cho website thương mại điện tử và gia tăng doanh số bán hàng.",
      featured: true
    },
    {
      id: 3,
      title: "Thiết kế UX/UI hiệu quả: Những nguyên tắc cơ bản",
      image: "/uploads/blog/ux-ui-design.jpg",
      date: "15/04/2025",
      category: "UX/UI",
      author: "Lê Anh",
      readTime: "10 phút",
      excerpt: "Tìm hiểu về những nguyên tắc cơ bản trong thiết kế UX/UI giúp tạo ra trải nghiệm người dùng tốt nhất cho website của bạn.",
      featured: true
    }
  ];
  
  const blogPosts = [
    // Featured posts đã được định nghĩa trước đó
    ...featuredPosts,
    // Thêm các bài viết khác
    {
      id: 4,
      title: "Mobile-first: Chiến lược thiết kế website cho thời đại di động",
      image: "/uploads/blog/mobile-first.jpg",
      date: "10/04/2025",
      category: "Web Design",
      author: "Hoàng Minh",
      readTime: "7 phút",
      excerpt: "Tại sao chiến lược thiết kế mobile-first lại quan trọng trong thời đại số hiện nay và cách áp dụng hiệu quả.",
      featured: false
    },
    {
      id: 5,
      title: "5 cách tối ưu tốc độ tải trang website",
      image: "/uploads/blog/page-speed.jpg",
      date: "05/04/2025",
      category: "SEO",
      author: "Nguyễn Minh",
      readTime: "5 phút",
      excerpt: "Những phương pháp hiệu quả để cải thiện tốc độ tải trang website, cải thiện trải nghiệm người dùng và điểm số SEO.",
      featured: false
    },
    {
      id: 6,
      title: "Thiết kế website cho doanh nghiệp nhỏ: Chi phí và lợi ích",
      image: "/uploads/blog/small-business-website.jpg",
      date: "01/04/2025",
      category: "Kinh doanh",
      author: "Trần Hà",
      readTime: "9 phút",
      excerpt: "Phân tích chi tiết về chi phí và lợi ích khi đầu tư vào một website chuyên nghiệp cho doanh nghiệp nhỏ.",
      featured: false
    },
    {
      id: 7,
      title: "Headless CMS: Tương lai của quản lý nội dung website",
      image: "/uploads/blog/headless-cms.jpg",
      date: "28/03/2025",
      category: "Công nghệ",
      author: "Lê Anh",
      readTime: "8 phút",
      excerpt: "Tìm hiểu về headless CMS và cách nó đang thay đổi cách các doanh nghiệp quản lý nội dung website.",
      featured: false
    },
    {
      id: 8,
      title: "Xây dựng website chuẩn SEO từ đầu",
      image: "/uploads/blog/seo-friendly-website.jpg",
      date: "25/03/2025",
      category: "SEO",
      author: "Hoàng Minh",
      readTime: "11 phút",
      excerpt: "Hướng dẫn từng bước về cách xây dựng website thân thiện với SEO, giúp tăng thứ hạng trên công cụ tìm kiếm.",
      featured: false
    },
    {
      id: 9,
      title: "Thiết kế web app: Những điều cần biết",
      image: "/uploads/blog/web-app-design.jpg",
      date: "20/03/2025",
      category: "Web Design",
      author: "Nguyễn Minh",
      readTime: "6 phút",
      excerpt: "Khám phá những yếu tố quan trọng cần cân nhắc khi thiết kế web application cho doanh nghiệp của bạn.",
      featured: false
    },
    {
      id: 10,
      title: "7 chiến lược marketing cho website thương mại điện tử",
      image: "/uploads/blog/ecommerce-marketing.jpg",
      date: "18/03/2025",
      category: "E-commerce",
      author: "Trần Hà",
      readTime: "8 phút",
      excerpt: "Các chiến lược marketing hiệu quả để thu hút khách hàng tiềm năng và tăng doanh số cho website thương mại điện tử.",
      featured: false
    },
    {
      id: 11,
      title: "Thiết kế dark mode: Xu hướng và lợi ích",
      image: "/uploads/blog/dark-mode.jpg",
      date: "15/03/2025",
      category: "UX/UI",
      author: "Lê Anh",
      readTime: "7 phút",
      excerpt: "Tại sao dark mode đang trở thành xu hướng thiết kế phổ biến và những lợi ích nó mang lại cho người dùng.",
      featured: false
    },
    {
      id: 12,
      title: "Next.js vs. React: Khi nào nên chọn cái nào?",
      image: "/uploads/blog/nextjs-vs-react.jpg",
      date: "10/03/2025",
      category: "Công nghệ",
      author: "Hoàng Minh",
      readTime: "9 phút",
      excerpt: "So sánh Next.js và React, phân tích ưu nhược điểm và hướng dẫn chọn công nghệ phù hợp cho dự án của bạn.",
      featured: false
    }
  ];
  
  useEffect(() => {
    // Filter blog posts based on category and search query
    const result = blogPosts.filter(post => {
      const matchesCategory = activeCategory === "Tất cả" || post.category === activeCategory;
      const matchesQuery = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
    setFilteredPosts(result);
  }, [activeCategory, searchQuery]);

  return (
    <>
      <Helmet>
        <title>Blog | NiceTech - Chia sẻ kiến thức về thiết kế và phát triển website</title>
        <meta name="description" content="Cập nhật những kiến thức mới nhất về thiết kế website, UX/UI, SEO, thương mại điện tử và xu hướng công nghệ mới." />
        <link rel="canonical" href="https://nicetech.vn/blog" />
      </Helmet>
      <div className="bg-white min-h-screen">
        <Navbar />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-white pt-28 pb-16">
            <div className="section-container">
              <div className="text-center max-w-4xl mx-auto mb-16 fade-in">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  Blog <span className="text-black">NiceTech</span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                  Cập nhật những kiến thức mới nhất về thiết kế website, UX/UI, SEO, thương mại điện tử và xu hướng công nghệ mới
                </p>
                
                {/* Search bar */}
                <div className="max-w-xl mx-auto relative">
                  <input 
                    type="text" 
                    placeholder="Tìm kiếm bài viết..." 
                    className="w-full px-6 py-4 pr-12 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-black/10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute right-4 top-4 text-gray-400" size={24} />
                </div>
              </div>
              
              {/* Featured Posts */}
              <div className="mb-20">
                <h2 className="text-2xl font-bold mb-8">Bài viết nổi bật</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {featuredPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover-scale fade-in group">
                      <div className="h-60 overflow-hidden relative">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-white text-black rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <div className="flex items-center mr-4">
                            <Calendar size={14} className="mr-1" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-2">
                              <User size={16} />
                            </div>
                            <span className="text-sm font-medium">{post.author}</span>
                          </div>
                          <a href={`/blog/${post.id}`} className="text-black font-medium flex items-center">
                            Đọc tiếp <ArrowRight size={16} className="ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          
          {/* All Blog Posts */}
          <section className="bg-gray-50 py-16">
            <div className="section-container">
              <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <h2 className="text-3xl font-bold mb-6 md:mb-0">Tất cả bài viết</h2>
                
                {/* Category filter */}
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
              
              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover-scale fade-in group">
                    <div className="h-60 overflow-hidden relative">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-white text-black rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <div className="flex items-center mr-4">
                          <Calendar size={14} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <a href={`/blog/${post.id}`} className="text-black font-medium flex items-center">
                        Đọc tiếp <ArrowRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredPosts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-xl text-gray-500">Không tìm thấy bài viết phù hợp</p>
                </div>
              )}
              
              {/* Pagination */}
              {filteredPosts.length > 0 && (
                <div className="flex justify-center mt-12">
                  <div className="inline-flex items-center space-x-2">
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                      <ChevronRight className="rotate-180" size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">1</a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">2</a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">3</a>
                    <span className="mx-2">...</span>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">10</a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                      <ChevronRight size={20} />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </section>
          
          {/* Popular Tags */}
          <section className="bg-white py-16">
            <div className="section-container">
              <h2 className="text-2xl font-bold mb-8">Chủ đề phổ biến</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Website Design", "UX/UI", "E-commerce", "SEO", "Digital Marketing", 
                  "Web Development", "WordPress", "React", "Mobile App", "Responsive Design",
                  "Performance", "Accessibility", "UI Design", "Branding", "Landing Page"
                ].map((tag, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="px-4 py-2 border border-gray-200 rounded-full text-sm hover:bg-gray-50 transition-colors flex items-center"
                  >
                    <Tag size={14} className="mr-2" /> {tag}
                  </a>
                ))}
              </div>
            </div>
          </section>
          
          {/* Newsletter Signup */}
          <section className="bg-gray-900 text-white py-24">
            <div className="section-container">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Đăng ký nhận bài viết mới</h2>
                <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
                  Nhận thông báo khi có bài viết mới cùng với những mẹo hữu ích về thiết kế website và các xu hướng công nghệ mới nhất
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                  <div className="relative flex-grow">
                    <Mail className="absolute left-4 top-4 text-gray-400" size={20} />
                    <input 
                      type="email" 
                      placeholder="Email của bạn" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg py-4 px-12 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                  <button className="bg-white text-black py-4 px-8 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Đăng ký
                  </button>
                </div>
                
                <p className="text-sm text-gray-400 mt-4">
                  Chúng tôi tôn trọng quyền riêng tư của bạn. Bạn có thể hủy đăng ký bất cứ lúc nào.
                </p>
              </div>
            </div>
          </section>
          
          {/* Related Resources */}
          <section className="bg-gray-50 py-16">
            <div className="section-container">
              <h2 className="text-2xl font-bold mb-8">Tài nguyên liên quan</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Ebook: Hướng dẫn toàn diện về thiết kế website",
                    type: "Ebook",
                    link: "#"
                  },
                  {
                    title: "Webinar: Xu hướng thiết kế UX/UI 2025",
                    type: "Webinar",
                    link: "#"
                  },
                  {
                    title: "Khóa học: Tối ưu hóa website cho SEO",
                    type: "Course",
                    link: "#"
                  }
                ].map((resource, index) => (
                  <a 
                    key={index}
                    href={resource.link}
                    className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow hover-scale flex items-center group"
                  >
                    <div className="flex-grow">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full mb-3">
                        {resource.type}
                      </span>
                      <h3 className="text-lg font-bold">{resource.title}</h3>
                    </div>
                    <div className="ml-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
          
          {/* CTA */}
          <section className="bg-black text-white py-24">
            <div className="section-container text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Cần tư vấn về giải pháp website cho doanh nghiệp?
              </h2>
              <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-300">
                Liên hệ với NiceTech ngay hôm nay để được tư vấn miễn phí về giải pháp website phù hợp với doanh nghiệp của bạn.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <button className="bg-white text-black px-8 py-4 font-medium hover:bg-gray-100 transition-colors duration-300 text-lg">
                  Liên hệ ngay
                </button>
                <button className="border border-white text-white px-8 py-4 font-medium hover:bg-white/10 transition-colors duration-300 text-lg">
                  Xem dịch vụ
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

export default Blog;