import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  User,
  Tag,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Copy,
  ChevronLeft,
  MessageSquare,
  ThumbsUp,
  Bookmark
} from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  
  // Giả lập dữ liệu bài viết
  const blogPosts = [
    {
      id: "1",
      title: "10 xu hướng thiết kế website hàng đầu năm 2025",
      image: "/uploads/blog/web-design-trends.jpg",
      date: "22/04/2025",
      category: "Web Design",
      author: "Nguyễn Minh",
      authorRole: "Lead Designer",
      authorAvatar: "/uploads/avatars/author1.jpg",
      readTime: "8 phút",
      excerpt: "Khám phá những xu hướng thiết kế website mới nhất và phổ biến nhất trong năm 2025, từ thiết kế tối giản đến trải nghiệm 3D tương tác.",
      content: `
      <p class="lead">Thiết kế website không ngừng phát triển, mỗi năm lại xuất hiện những xu hướng mới định hình cách chúng ta trải nghiệm web. Năm 2025 đánh dấu một bước tiến đáng kể với sự kết hợp giữa công nghệ tiên tiến và thẩm mỹ tinh tế.</p>
      
      <h2>1. Thiết kế tối giản nhưng đa chức năng</h2>
      <p>Trong thời đại thông tin quá tải, thiết kế tối giản không chỉ là xu hướng thẩm mỹ mà còn là giải pháp thực tế. Năm 2025, chúng ta thấy các website áp dụng nguyên tắc "less is more" nhưng vẫn đảm bảo đầy đủ tính năng.</p>
      <p>Các yếu tố thiết kế bao gồm:</p>
      <ul>
        <li>Sử dụng khoảng trắng thông minh</li>
        <li>Typography lớn và rõ ràng</li>
        <li>Bảng màu có chủ đích với 2-3 màu chính</li>
        <li>Loại bỏ các yếu tố trang trí không cần thiết</li>
      </ul>
      
      <h2>2. Trải nghiệm 3D và AR tương tác</h2>
      <p>Với sự phát triển của WebGL và WebXR, trải nghiệm 3D và thực tế tăng cường (AR) ngày càng trở nên phổ biến trên web. Khách hàng giờ đây có thể:</p>
      <ul>
        <li>Xem sản phẩm từ mọi góc độ với mô hình 3D</li>
        <li>"Thử" sản phẩm trong không gian thực thông qua AR</li>
        <li>Tương tác với các yếu tố 3D tạo trải nghiệm đắm chìm</li>
      </ul>
      <p>Các thương hiệu như IKEA và Nike đã áp dụng công nghệ này rất thành công, cho phép khách hàng xem trước sản phẩm trong không gian thực.</p>
      
      <figure>
        <img src="/uploads/blog/3d-experience.jpg" alt="Trải nghiệm 3D trên website" class="rounded-lg w-full" />
        <figcaption class="text-center text-gray-500 mt-2">Trải nghiệm 3D đang định nghĩa lại cách khách hàng tương tác với sản phẩm trực tuyến</figcaption>
      </figure>
      
      <h2>3. Thiết kế Dark Mode</h2>
      <p>Dark mode đã trở thành tính năng tiêu chuẩn trên hầu hết các hệ điều hành và ứng dụng. Năm 2025, chúng ta thấy các website không chỉ cung cấp tùy chọn này mà còn áp dụng nó một cách sáng tạo:</p>
      <ul>
        <li>Thiết kế dark mode có chủ đích, không chỉ đơn giản là đảo ngược màu sắc</li>
        <li>Sử dụng hiệu ứng neon và gradient tinh tế trên nền tối</li>
        <li>Tự động chuyển đổi theo thời gian trong ngày hoặc cài đặt của người dùng</li>
      </ul>
      
      <h2>4. Micro-interactions và animation có mục đích</h2>
      <p>Các tương tác nhỏ (micro-interactions) và hiệu ứng động có chủ đích không chỉ làm đẹp website mà còn cải thiện UX đáng kể. Xu hướng này bao gồm:</p>
      <ul>
        <li>Phản hồi trực quan khi người dùng tương tác với các phần tử</li>
        <li>Animation dẫn dắt sự chú ý đến các CTA quan trọng</li>
        <li>Các hiệu ứng chuyển tiếp mượt mà giữa các trang</li>
        <li>Animation theo cuộn (scroll-triggered animations)</li>
      </ul>
      
      <blockquote>
        "Thiết kế hiệu quả không chỉ đẹp mắt mà còn phải nâng cao trải nghiệm người dùng và đạt được mục tiêu kinh doanh."
      </blockquote>
      
      <h2>5. Glassmorphism và Neumorphism tiến hóa</h2>
      <p>Glassmorphism (hiệu ứng kính mờ) và Neumorphism (phong cách thiết kế 3D mềm mại) đang tiếp tục phát triển. Năm 2025, chúng ta thấy những phong cách này được áp dụng tinh tế hơn:</p>
      <ul>
        <li>Kết hợp hiệu ứng kính mờ với layer sâu tạo chiều sâu</li>
        <li>Sử dụng Neumorphism cho các thành phần tương tác cụ thể thay vì toàn bộ giao diện</li>
        <li>Kết hợp các phong cách này với animation tạo hiệu ứng đặc biệt</li>
      </ul>
      
      <h2>6. Trải nghiệm cá nhân hóa cao độ</h2>
      <p>AI và Machine Learning đang giúp websites cung cấp trải nghiệm cá nhân hóa cao độ, bao gồm:</p>
      <ul>
        <li>Nội dung và sản phẩm được đề xuất dựa trên hành vi người dùng</li>
        <li>Giao diện tự điều chỉnh theo sở thích và nhu cầu người dùng</li>
        <li>Trải nghiệm tương tác dựa trên dữ liệu người dùng trong thời gian thực</li>
      </ul>
      
      <h2>7. Thiết kế hướng mục tiêu (Goal-Driven Design)</h2>
      <p>Thiết kế không chỉ là về thẩm mỹ mà còn là công cụ để đạt được mục tiêu cụ thể:</p>
      <ul>
        <li>Thiết kế tập trung vào chuyển đổi (conversion-focused)</li>
        <li>Áp dụng các nguyên tắc tâm lý học trong thiết kế UX/UI</li>
        <li>Tối ưu hóa các luồng người dùng dựa trên phân tích hành vi</li>
      </ul>
      
      <h2>8. Tương thích đa thiết bị nâng cao</h2>
      <p>Với sự đa dạng của thiết bị, thiết kế responsive đang được nâng cấp lên một tầm cao mới:</p>
      <ul>
        <li>Thiết kế "mobile-first+" với trải nghiệm tùy chỉnh cho từng loại thiết bị</li>
        <li>Giao diện linh hoạt thích ứng với mọi kích thước màn hình</li>
        <li>Tối ưu hiệu suất cho thiết bị di động ở các thị trường mới nổi</li>
      </ul>
      
      <h2>9. Hình minh họa và đồ họa tùy chỉnh</h2>
      <p>Stock photos đang dần được thay thế bằng hình minh họa và đồ họa tùy chỉnh:</p>
      <ul>
        <li>Hình minh họa 3D kết hợp với hình ảnh 2D truyền thống</li>
        <li>Nghệ thuật kỹ thuật số tạo dấu ấn thương hiệu độc đáo</li>
        <li>Infographics tương tác giúp truyền tải thông tin phức tạp</li>
      </ul>
      
      <h2>10. Thiết kế bền vững (Sustainable Design)</h2>
      <p>Xu hướng cuối cùng nhưng không kém phần quan trọng là thiết kế bền vững:</p>
      <ul>
        <li>Tối ưu hóa hiệu suất để giảm tiêu thụ năng lượng</li>
        <li>Sử dụng CDN và caching thông minh</li>
        <li>Tối ưu hóa hình ảnh và media</li>
        <li>Theo dõi và giảm carbon footprint của website</li>
      </ul>
      
      <h2>Kết luận</h2>
      <p>Năm 2025 đánh dấu một sự chuyển dịch từ thiết kế đơn thuần "đẹp mắt" sang các trải nghiệm web có chức năng, cá nhân hóa và bền vững. Các xu hướng này không chỉ nâng cao trải nghiệm người dùng mà còn giúp doanh nghiệp đạt được mục tiêu kinh doanh trong kỷ nguyên số.</p>
      <p>Để website của bạn luôn dẫn đầu xu hướng, hãy cân nhắc áp dụng các thiết kế này một cách có chọn lọc, phù hợp với thương hiệu và đối tượng khách hàng của mình.</p>
      `,
      tags: ["Web Design", "UX/UI", "Trends", "2025", "Design Inspiration"],
      views: 1245,
      comments: 8,
      likes: 32,
      featured: true
    },
    {
      id: "2",
      title: "Làm thế nào để tăng tỷ lệ chuyển đổi cho website bán hàng",
      image: "/uploads/blog/conversion-rate.jpg",
      date: "18/04/2025",
      category: "E-commerce",
      author: "Trần Hà",
      authorRole: "E-commerce Specialist",
      authorAvatar: "/uploads/avatars/author2.jpg",
      readTime: "6 phút",
      excerpt: "Những chiến lược hiệu quả giúp cải thiện tỷ lệ chuyển đổi cho website thương mại điện tử và gia tăng doanh số bán hàng.",
      content: `<p>Nội dung chi tiết về cách tăng tỷ lệ chuyển đổi cho website bán hàng...</p>`,
      tags: ["E-commerce", "Conversion Rate", "Marketing", "Sales", "UX/UI"],
      views: 987,
      comments: 12,
      likes: 45,
      featured: true
    },
    {
      id: "3",
      title: "Thiết kế UX/UI hiệu quả: Những nguyên tắc cơ bản",
      image: "/uploads/blog/ux-ui-design.jpg",
      date: "15/04/2025",
      category: "UX/UI",
      author: "Lê Anh",
      authorRole: "UX Designer",
      authorAvatar: "/uploads/avatars/author3.jpg",
      readTime: "10 phút",
      excerpt: "Tìm hiểu về những nguyên tắc cơ bản trong thiết kế UX/UI giúp tạo ra trải nghiệm người dùng tốt nhất cho website của bạn.",
      content: `<p>Nội dung chi tiết về nguyên tắc thiết kế UX/UI...</p>`,
      tags: ["UX/UI", "Design Principles", "User Experience", "Web Design"],
      views: 1102,
      comments: 15,
      likes: 60,
      featured: true
    },
  ];
  
  useEffect(() => {
    // Giả lập việc tải bài viết theo ID
    const currentPost = blogPosts.find(post => post.id === id);
    if (currentPost) {
      setPost(currentPost);
      document.title = currentPost.title + " | NiceTech Blog";
      
      // Tìm các bài viết liên quan (cùng category hoặc có chung tags)
      const related = blogPosts
        .filter(p => p.id !== id && (p.category === currentPost.category || 
          p.tags.some(tag => currentPost.tags.includes(tag))))
        .slice(0, 3);
      setRelatedPosts(related);
    }
  }, [id]);
  
  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsLinkCopied(true);
    setTimeout(() => setIsLinkCopied(false), 2000);
  };
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl">Đang tải bài viết...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | NiceTech Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://nicetech.vn/blog/${post.id}`} />
      </Helmet>
      <div className="bg-white min-h-screen">
        <Navbar />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="bg-white pt-10">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
              <div className="mb-8">
                <Link to="/blog" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
                  <ChevronLeft size={16} className="mr-1" /> Quay lại Blog
                </Link>
              </div>
              
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full mb-3">
                  {post.category}
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center text-gray-500 gap-4 mb-6">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span>{post.readTime} đọc</span>
                  </div>
                  <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    <span>bởi {post.author}</span>
                  </div>
                </div>
                
                <div className="text-lg text-gray-700 mb-6">
                  {post.excerpt}
                </div>
              </div>
              
              {/* Featured Image */}
              <div className="mb-10">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </section>
          
          {/* Main Content */}
          <section className="bg-white py-8">
            <div className="max-w-4xl mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-10">
              {/* Sidebar */}
              <div className="md:w-16 flex md:flex-col items-center gap-4 md:sticky md:top-28 h-fit">
                <div className="flex md:flex-col gap-4">
                  <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <ThumbsUp size={18} />
                  </button>
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <span className="text-sm font-medium">{post.likes}</span>
                  </div>
                  <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <MessageSquare size={18} />
                  </button>
                  <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <Bookmark size={18} />
                  </button>
                </div>
                
                <div className="h-px w-full bg-gray-200 my-2"></div>
                
                <div className="flex md:flex-col gap-4">
                  <button 
                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={18} />
                  </button>
                  <button 
                    onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, '_blank')}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={18} />
                  </button>
                  <button 
                    onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={18} />
                  </button>
                  <button 
                    onClick={() => window.open(`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(window.location.href)}`, '_blank')}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors"
                    aria-label="Share via Email"
                  >
                    <Mail size={18} />
                  </button>
                  <button 
                    onClick={copyLinkToClipboard}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors relative"
                    aria-label="Copy link"
                  >
                    <Copy size={18} />
                    {isLinkCopied && (
                      <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                        Đã sao chép!
                      </span>
                    )}
                  </button>
                </div>
              </div>
              
              {/* Article Content */}
              <article className="flex-1">
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                
                {/* Author Bio */}
                <div className="mt-16 p-6 bg-gray-50 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img 
                        src={post.authorAvatar} 
                        alt={post.author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{post.author}</h3>
                      <p className="text-gray-600">{post.authorRole}</p>
                    </div>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="mt-10">
                  <h3 className="text-lg font-bold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Link 
                        key={index} 
                        to={`/blog?tag=${tag}`} 
                        className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Comments Section */}
                <div className="mt-16">
                  <h3 className="text-2xl font-bold mb-6">Bình luận ({post.comments})</h3>
                  
                  {/* Comment Form */}
                  <div className="mb-10">
                    <div className="flex items-start mb-4">
                      <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                      <textarea 
                        className="flex-1 border border-gray-200 rounded-lg p-4 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-black/10" 
                        placeholder="Viết bình luận của bạn..."
                      ></textarea>
                    </div>
                    <div className="text-right">
                      <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                        Gửi bình luận
                      </button>
                    </div>
                  </div>
                  
                  {/* Sample Comments */}
                  {[
                    {
                      author: "Thanh Hương",
                      avatar: "/uploads/avatars/comment1.jpg",
                      date: "2 ngày trước",
                      content: "Bài viết rất hữu ích, giúp tôi nắm bắt được xu hướng web design mới nhất. Đặc biệt là phần về trải nghiệm 3D và AR tương tác, rất đáng để thử nghiệm cho dự án tiếp theo của tôi."
                    },
                    {
                      author: "Minh Tuấn",
                      avatar: "/uploads/avatars/comment2.jpg",
                      date: "1 ngày trước",
                      content: "Theo kinh nghiệm của tôi, thiết kế tối giản đang thực sự hiệu quả trong việc tăng tỷ lệ chuyển đổi. Khách hàng dễ tập trung vào nội dung quan trọng hơn khi không bị phân tâm bởi các yếu tố thiết kế phức tạp."
                    }
                  ].map((comment, index) => (
                    <div key={index} className="mb-8 pb-8 border-b border-gray-100">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
                          <img 
                            src={comment.avatar} 
                            alt={comment.author} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h4 className="font-bold mr-2">{comment.author}</h4>
                            <span className="text-sm text-gray-500">{comment.date}</span>
                          </div>
                          <p className="text-gray-700">{comment.content}</p>
                          <div className="mt-3 flex items-center gap-4">
                            <button className="text-sm text-gray-500 hover:text-black transition-colors flex items-center">
                              <ThumbsUp size={14} className="mr-1" /> Thích
                            </button>
                            <button className="text-sm text-gray-500 hover:text-black transition-colors">
                              Trả lời
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="text-center">
                    <button className="text-black font-medium border border-gray-200 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      Xem thêm bình luận
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </section>
          
          {/* Related Posts */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
              <h2 className="text-2xl font-bold mb-10">Bài viết liên quan</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((post) => (
                  <Link 
                    key={post.id} 
                    to={`/blog/${post.id}`}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover-scale fade-in group"
                  >
                    <div className="h-48 overflow-hidden relative">
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
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
          
          {/* Newsletter & CTA */}
          <section className="bg-black text-white py-16">
            <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Đăng ký nhận bài viết mới</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Đừng bỏ lỡ các bài viết mới về xu hướng thiết kế website, công nghệ mới và các mẹo hữu ích cho doanh nghiệp của bạn
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-10">
                <input 
                  type="email" 
                  placeholder="Email của bạn" 
                  className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white flex-grow focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors whitespace-nowrap">
                  Đăng ký ngay
                </button>
              </div>
              
              <div className="mt-12 pt-12 border-t border-white/20">
                <h3 className="text-xl font-bold mb-6">Bạn cần tư vấn về giải pháp website?</h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  NiceTech cung cấp các giải pháp thiết kế website chuyên nghiệp, tối ưu SEO và hiệu suất cho mọi lĩnh vực kinh doanh
                </p>
                <Link to="/lien-he" className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Liên hệ tư vấn
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
