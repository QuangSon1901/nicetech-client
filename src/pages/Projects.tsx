// src/pages/Projects.tsx
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
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
import { getProjects, getProjectCategories } from "../services/api";

const Projects = () => {
  // Use search params for URL-based state
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Initialize state from URL parameters
  const [activeCategory, setActiveCategory] = useState(searchParams.get("category") || "Tất cả");
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [actualSearchQuery, setActualSearchQuery] = useState(searchParams.get("search") || "");
  const [page, setPage] = useState(parseInt(searchParams.get("page") || "1", 10));
  
  const [projects, setProjects] = useState([]);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  // Update URL when filters or pagination change
  const updateUrlParams = (params: Record<string, string | null>) => {
    const newParams = new URLSearchParams(searchParams);
    
    // Update each parameter
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });
    
    // Apply the new URL params
    setSearchParams(newParams);
  };

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch categories
        const categoriesResponse = await getProjectCategories();
        const categoriesData = [{ name: "Tất cả", id: null, slug: null }].concat(
          categoriesResponse.data
        );
        setCategories(categoriesData);
        
        // Fetch featured projects
        const featuredResponse = await getProjects({ 
          featured: true,
          limit: 3
        });
        setFeaturedProjects(featuredResponse.data);
        
        // Initial projects fetch will happen in the dependency-based useEffect
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load projects");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fetch projects based on current filters
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        
        const categoryId = activeCategory !== "Tất cả" 
          ? categories.find(c => c.name === activeCategory)?.id 
          : undefined;
          
        const response = await getProjects({
          categoryId,
          search: actualSearchQuery || undefined,
          page,
          limit: 12
        });
        
        setProjects(response.data);
        setTotalPages(response.totalPages || 1);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects");
        setLoading(false);
      }
    };

    if (categories.length > 0) {
      fetchProjects();
    }
  }, [page, activeCategory, actualSearchQuery, categories]);

  // Handle category change
  const handleCategoryChange = (categoryName) => {
    setActiveCategory(categoryName);
    updateUrlParams({
      category: categoryName !== "Tất cả" ? categoryName : null,
      page: "1" // Reset to page 1 when changing category
    });
    setPage(1);
  };

  // Handle search typing - update URL but don't trigger search
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    updateUrlParams({
      search: e.target.value || null
    });
  };

  // Handle search submit - actually perform the search
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActualSearchQuery(searchQuery);
    updateUrlParams({
      search: searchQuery || null,
      page: "1" // Reset to page 1 when searching
    });
    setPage(1);
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    setPage(newPage);
    updateUrlParams({ page: newPage.toString() });
    
    // Scroll to projects grid
    document.getElementById('projects-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading && !projects.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl">Đang tải dự án...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Dự án | NiceTech - Công ty thiết kế website chuyên nghiệp</title>
        <meta name="description" content="Khám phá bộ sưu tập các dự án website đã thực hiện bởi NiceTech - từ website doanh nghiệp, thương mại điện tử đến portfolio cá nhân." />
        <link rel="canonical" href={`https://nicetech.vn/du-an${searchParams.toString() ? `?${searchParams.toString()}` : ''}`} />
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

              {/* Featured Projects */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {featuredProjects.map((project) => (
                  <div key={project.id} className="bg-white rounded-sm overflow-hidden shadow-lg hover-scale fade-in">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={project.image.startsWith('/uploads') 
                          ? `${import.meta.env.VITE_API_URL}${project.image}` 
                          : project.image}
                        alt={project.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">{project.category.name}</span>
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
                  {/* Search - only search on form submit */}
                  <form onSubmit={handleSearchSubmit} className="relative">
                    <input 
                      type="text" 
                      placeholder="Tìm kiếm dự án..." 
                      className="pl-10 pr-4 py-2 border border-gray-200 rounded-full w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-black/10"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      aria-label="Nhập từ khóa tìm kiếm và nhấn Enter"
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                    <button type="submit" className="sr-only">Tìm kiếm</button>
                  </form>
                  
                  {/* Filter by category */}
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id || "all"}
                        onClick={() => handleCategoryChange(category.name)}
                        className={`px-4 py-2 rounded-full text-sm transition-colors ${
                          activeCategory === category.name
                            ? "bg-black text-white"
                            : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Projects Grid */}
              <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {loading ? (
                  // Loading skeletons
                  Array(6).fill(0).map((_, index) => (
                    <div key={index} className="bg-white rounded-sm overflow-hidden shadow-lg animate-pulse">
                      <div className="h-64 bg-gray-200"></div>
                      <div className="p-6">
                        <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
                        <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                        <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  ))
                ) : (
                  // Actual projects
                  projects.map((project) => (
                    <div key={project.id} className="bg-white rounded-sm overflow-hidden shadow-lg hover-scale fade-in">
                      <div className="h-64 overflow-hidden">
                        <img 
                          src={project.image.startsWith('/uploads') 
                            ? `${import.meta.env.VITE_API_URL}${project.image}` 
                            : project.image}
                          alt={project.name} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">{project.category.name}</span>
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
                  ))
                )}
              </div>
              
              {!loading && projects.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-xl text-gray-500">Không tìm thấy dự án phù hợp</p>
                </div>
              )}
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => handlePageChange(Math.max(1, page - 1))}
                      disabled={page === 1}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        page === 1 
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      } transition-colors`}
                      aria-label="Previous page"
                    >
                      <ArrowRight size={20} className="rotate-180" />
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => (
                      <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          page === i + 1
                            ? 'bg-black text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        } transition-colors`}
                      >
                        {i + 1}
                      </button>
                    ))}
                    
                    <button 
                      onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
                      disabled={page === totalPages}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        page === totalPages 
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      } transition-colors`}
                      aria-label="Next page"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </div>
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