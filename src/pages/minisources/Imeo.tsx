import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, ArrowRight, Heart, Check } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Imeo() {
  const [downloadClicked, setDownloadClicked] = useState(false);

  // Hàm gửi thông báo đến Telegram
  const sendTelegramNotification = async () => {
    try {
      const userAgent = navigator.userAgent;
      const currentDate = new Date().toLocaleString('vi-VN');
      const message = `🔔 Có người tải dự án Letter Animation!\n📅 Thời gian: ${currentDate}\n🖥️ Thiết bị: ${userAgent}`;
      
      // Mã hóa tin nhắn cho URL
      const encodedMessage = encodeURIComponent(message);
      
      // Gửi thông báo đến Telegram
      const response = await fetch(
        `https://api.telegram.org/bot7774604924:AAFsZAJENgY1kffkhBuA-2Xve5H0gOPrRfA/sendMessage?chat_id=-1002402819759&text=${encodedMessage}`,
        { method: 'GET' }
      );
      
      // Ghi log kết quả (chỉ để debug)
      console.log('Telegram notification sent:', await response.json());
    } catch (error) {
      console.error('Error sending Telegram notification:', error);
    }
  };

  // Xử lý sự kiện tải xuống
  const handleDownload = () => {
    sendTelegramNotification();
    setDownloadClicked(true);
    
    // Sau 3 giây, reset trạng thái
    setTimeout(() => {
      setDownloadClicked(false);
    }, 3000);
  };

  return (
    <>
      <Helmet>
        <title>Tải xuống mẫu dự án | NiceTech - Thiết kế Website chuyên nghiệp</title>
        <meta name="description" content="Tải xuống mẫu dự án letter animation miễn phí từ NiceTech - nhà phát triển website chuyên nghiệp tại Việt Nam." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Preview Section */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-lg relative overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img 
                  src="/uploads/projects/imeopng.png" 
                  alt="Preview Letter Animation" 
                  className="rounded-md object-cover w-full h-64"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/600x400/f0f0f0/969696?text=Letter+Animation";
                  }}
                />
              </div>
              <div className="absolute top-4 right-4 bg-black text-white text-xs px-3 py-1 rounded-full">
                Free
              </div>
              <h2 className="text-2xl font-bold mb-3">Letter Animation Project</h2>
              <p className="text-gray-600 mb-3">
                Đây là dự án tương tác chúc mừng dễ thương với hiệu ứng phong bì và thư. 
                Dự án sử dụng GSAP và TailwindCSS, phù hợp cho các trang landing chúc mừng, 
                quà tặng trực tuyến.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span className="mr-4">
                  <span className="font-medium">Công nghệ:</span> HTML, CSS, JavaScript
                </span>
                <span>
                  <span className="font-medium">Kích thước:</span> ~58KB
                </span>
              </div>
            </div>
            
            {/* Download Section */}
            <div className="flex flex-col space-y-6">
              <div className="bg-white p-6 border rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4">Tải xuống ngay</h1>
                <p className="text-gray-600 mb-6">
                  Bạn đang tải miễn phí dự án Letter Animation - một mẫu tương tác độc đáo 
                  được phát triển bởi team NiceTech.
                </p>
                
                <a 
                  href="https://quangson.nicetech.vn/projects/patemeo/patemeo.zip"
                  download
                  onClick={handleDownload}
                  className={`flex items-center justify-center gap-2 px-6 py-4 rounded-md transition-colors w-full font-medium mb-4 ${
                    downloadClicked 
                    ? "bg-green-600 text-white hover:bg-green-700" 
                    : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  {downloadClicked ? (
                    <>
                      <Check size={20} />
                      Đang tải xuống...
                    </>
                  ) : (
                    <>
                      <Download size={20} />
                      Tải xuống miễn phí
                    </>
                  )}
                </a>
                
                <p className="text-sm text-gray-500 italic text-center">
                  Dự án hoàn toàn miễn phí cho cả mục đích cá nhân và thương mại
                </p>
              </div>
              
              {/* Promotional Section */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                <div className="flex items-start gap-4">
                  <Heart className="text-red-500 w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Bạn cần một dự án tùy chỉnh?</h3>
                    <p className="text-gray-600 mb-4">
                      NiceTech là đơn vị thiết kế website chuyên nghiệp với nhiều năm kinh nghiệm. 
                      Chúng tôi cung cấp dịch vụ phát triển website, ecommerce và ứng dụng web 
                      theo yêu cầu với chất lượng cao.
                    </p>
                    <a 
                      href="https://nicetech.vn/lien-he" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-black font-medium flex items-center gap-1 hover:underline"
                    >
                      Liên hệ tư vấn <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sẵn sàng xây dựng website của bạn?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Hãy liên hệ với chúng tôi để được tư vấn miễn phí về giải pháp website phù hợp 
            nhất cho doanh nghiệp của bạn.
          </p>
          <a 
            href="https://nicetech.vn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-4 font-medium hover:bg-gray-100 transition-colors inline-block"
          >
            Truy cập nicetech.vn
          </a>
        </div>
      </section>
      
      <Footer />
    </>
  );
}