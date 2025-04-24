import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Users, Award, Clock, CheckCircle } from "lucide-react";

const About = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Giới thiệu - NiceTech | Công ty thiết kế web chuyên nghiệp</title>
        <meta name="description" content="NiceTech - Đội ngũ chuyên gia thiết kế website với hơn 5 năm kinh nghiệm, mang đến giải pháp toàn diện cho doanh nghiệp của bạn." />
        <link rel="canonical" href="https://nicetech.vn/gioi-thieu" />
      </Helmet>
      <div className="bg-white min-h-screen">
        <Navbar />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-white pt-20 md:pt-28">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 fade-in">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Chúng tôi thiết kế trải nghiệm số <span className="text-black">đầy cảm hứng</span>
                  </h1>
                  <p className="text-lg text-gray-600 mb-8">
                    NiceTech là đơn vị tiên phong trong lĩnh vực thiết kế website và giải pháp số tại Việt Nam. Với đội ngũ chuyên gia nhiều kinh nghiệm, chúng tôi cam kết mang đến những sản phẩm chất lượng cao, hiệu quả và khác biệt.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="btn-primary">Liên hệ ngay</button>
                    <button className="btn-secondary flex items-center">
                      Xem dự án <ArrowRight size={18} className="ml-2" />
                    </button>
                  </div>
                </div>
                <div className="order-1 md:order-2 fade-in">
                  <div className="relative">
                    <img 
                      src="/uploads/aboutus.jpg" 
                      alt="NiceTech team" 
                      className="w-full h-auto rounded-lg shadow-xl"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-black text-white p-4 rounded-lg shadow-lg">
                      <p className="text-3xl font-bold">5+</p>
                      <p className="text-sm">Năm kinh nghiệm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="bg-gray-50 py-24">
            <div className="section-container">
              <div className="max-w-3xl mx-auto text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Sứ mệnh & Tầm nhìn</h2>
                <p className="text-lg text-gray-600">
                  Chúng tôi tin rằng mỗi doanh nghiệp đều xứng đáng có một hiện diện trực tuyến chuyên nghiệp và hiệu quả.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-lg shadow-md hover-scale fade-in">
                  <h3 className="text-2xl font-bold mb-4">Sứ mệnh</h3>
                  <p className="text-gray-600 mb-6">
                    Đem đến cho khách hàng những giải pháp số toàn diện, giúp doanh nghiệp phát triển mạnh mẽ trong thời đại công nghệ số. Chúng tôi cam kết xây dựng sản phẩm chất lượng cao, tối ưu hiệu suất và thân thiện với người dùng.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle size={20} className="mr-2 mt-1 text-black" />
                      <span>Thiết kế website chuẩn UI/UX</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="mr-2 mt-1 text-black" />
                      <span>Tối ưu hóa trải nghiệm người dùng</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="mr-2 mt-1 text-black" />
                      <span>Phát triển giải pháp kinh doanh hiệu quả</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md hover-scale fade-in">
                  <h3 className="text-2xl font-bold mb-4">Tầm nhìn</h3>
                  <p className="text-gray-600 mb-6">
                    Trở thành đơn vị hàng đầu trong lĩnh vực thiết kế website và cung cấp giải pháp số tại Việt Nam. Chúng tôi không ngừng đổi mới, áp dụng công nghệ tiên tiến để mang lại giá trị tốt nhất cho khách hàng.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle size={20} className="mr-2 mt-1 text-black" />
                      <span>Tiên phong trong xu hướng thiết kế</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="mr-2 mt-1 text-black" />
                      <span>Áp dụng công nghệ mới nhất</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="mr-2 mt-1 text-black" />
                      <span>Xây dựng mối quan hệ bền vững với khách hàng</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="bg-white py-24">
            <div className="section-container">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Giá trị cốt lõi</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Những giá trị định hướng mọi hoạt động của chúng tôi và cam kết với khách hàng.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 rounded-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Award size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Chất lượng</h3>
                  <p className="text-gray-600">
                    Chúng tôi luôn đặt chất lượng lên hàng đầu, từ thiết kế đến code, từ trải nghiệm người dùng đến hiệu suất website.
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Users size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Khách hàng</h3>
                  <p className="text-gray-600">
                    Lấy khách hàng làm trung tâm, lắng nghe và thấu hiểu nhu cầu để mang đến giải pháp phù hợp nhất.
                  </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg hover-scale fade-in">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                    <Clock size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Đúng tiến độ</h3>
                  <p className="text-gray-600">
                    Cam kết hoàn thành dự án đúng thời hạn, đảm bảo kế hoạch kinh doanh của khách hàng không bị gián đoạn.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-black text-white py-20">
            <div className="section-container text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto">
                Sẵn sàng để bắt đầu dự án cùng chúng tôi?
              </h2>
              <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-300">
                Kết nối với NiceTech ngay hôm nay để nhận tư vấn miễn phí cho dự án của bạn.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <button className="bg-white text-black px-8 py-4 font-medium hover:bg-gray-100 transition-colors duration-300">
                  Liên hệ ngay
                </button>
                <button className="border border-white text-white px-8 py-4 font-medium hover:bg-white/10 transition-colors duration-300 flex items-center justify-center">
                  <span>Đặt lịch hẹn</span>
                  <ArrowRight size={18} className="ml-2" />
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

export default About;