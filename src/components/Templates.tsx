import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  "Tất cả",
  "Nhà hàng",
  "Du lịch",
  "Giáo dục",
  "Doanh nghiệp",
  "E-commerce",
  "Giải trí",
  "Thư viện ảnh",
];

const templates = [
  {
    name: "AISUKI - Nhà hàng Châu Á - Đặt món Online",
    category: "Nhà hàng",
    image: "/uploads/projects/aisuki.webp",
    link: "https://aisuki.nicetech.vn",
  },
  {
    name: "Xuất khẩu cà phê chất lượng cao",
    category: "Nhà hàng",
    image: "/uploads/projects/vietbeans-cf.webp",
    link: "https://template.nicetech.vn/demo/vietbeans-cf/demo1.html",
  },
  {
    name: "Chương trình giảng dạy cờ vua Song ngữ",
    category: "Giáo dục",
    image: "/uploads/projects/nextgenchess.webp",
    link: "https://nextgen-chess-academy.nicetech.vn",
  },
  {
    name: "Nguyen Sinh Bistro – Ẩm thực Việt - Pháp",
    category: "Nhà hàng",
    image: "/uploads/projects/nguyensinh.webp",
    link: "https://template.nicetech.vn/demo/nguyensinh/",
  },
  {
    name: "Du lịch - Trải nghiệm Du thuyền",
    category: "Du lịch",
    image: "/uploads/projects/duthuyen.webp",
    link: "https://template.nicetech.vn/demo/duthuyen/demo1.html",
  },
  {
    name: "Dịch vụ sân vườn",
    category: "Doanh nghiệp",
    image: "/uploads/projects/greenhaven.webp",
    link: "http://template.nicetech.vn/demo/greenhaven",
  },
  {
    name: "Nền tảng đặt homestay",
    category: "Du lịch",
    image: "/uploads/projects/homestay.webp",
    link: "http://template.nicetech.vn/demo/homestay/demo1.html",
  },
  {
    name: "Giới thiệu tác phẩm nghệ thuật",
    category: "Thư viện ảnh",
    image: "/uploads/projects/lisson-clone-canvas.webp",
    link: "http://template.nicetech.vn/demo/lisson-clone-canvas",
  },
  {
    name: "Website thú cưng",
    category: "E-commerce",
    image: "/uploads/projects/imeo.webp",
    link: "https://template.nicetech.vn/demo/petshop/",
  },
  {
    name: "Giới thiệu công ty Sunlogo",
    category: "Doanh nghiệp",
    image: "/uploads/projects/sunlogo.webp",
    link: "https://template.nicetech.vn/demo/sunlogo/demo1.html",
  },
  {
    name: "Nhà phân phối ván ép hàng đầu",
    category: "Doanh nghiệp",
    image: "/uploads/projects/ttplywood.webp",
    link: "https://ttplywood.vn/gioi-thieu",
  },
  {
    name: "Nền tảng luyện thi Tokuteigino",
    category: "Giáo dục",
    image: "/uploads/projects/tokutegino.webp",
    link: "https://template.nicetech.vn/demo/tokuteigino/demo1.html",
  },
  {
    name: "Trưng bày nghệ thuật đương đại",
    category: "Thư viện ảnh",
    image: "/uploads/projects/mariangoodman-gallery.webp",
    link: "https://mariangoodman-fr.nicetech.vn/",
  },
  {
    name: "Nền tảng phát nhạc trực tuyến",
    category: "Giải trí",
    image: "/uploads/projects/audio-zone.webp",
    link: "https://template.nicetech.vn/demo/audio-zone",
  },
  {
    name: "Ethereal – Áo cưới cao cấp",
    category: "E-commerce",
    image: "/uploads/projects/ethereal-bridal.webp",
    link: "https://template.nicetech.vn/demo/elegance/",
  },
  {
    name: "Tổng kho Nhựa Nano",
    category: "Doanh nghiệp",
    image: "/uploads/projects/nice-nano.webp",
    link: "https://template.nicetech.vn/demo/nice-nano",
  },
  {
    name: "Cửa hàng điện tử cao cấp",
    category: "E-commerce",
    image: "/uploads/projects/gadget-pro.webp",
    link: "https://template.nicetech.vn/demo/techzone/",
  },
  {
    name: "Trung tâm Anh ngữ TEC",
    category: "Giáo dục",
    image: "/uploads/projects/tec-english-center.webp",
    link: "https://template.nicetech.vn/demo/trungtamanhngu/",
  },
];

const Templates = () => {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filteredTemplates =
    activeCategory === "Tất cả"
      ? templates
      : templates.filter((template) => template.category === activeCategory);

  return (
    <section className="bg-gray-50 py-20" id="templates">
      <div className="section-container">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Giao diện mẫu
            </h2>
            <p className="text-lg text-gray-600 max-w-lg">
              Tham khảo các dự án thực tế được triển khai bởi team Nicetech.
            </p>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center text-black hover:underline"
          >
            Xem tất cả <ArrowRight size={16} className="ml-2" />
          </a>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template, index) => (
            <a
              href={template.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <span className="inline-block w-max px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-medium mb-2">
                  {template.category}
                </span>
                <h3 className="text-lg font-semibold mb-0 transition-colors group-hover:text-indigo-600">
                  {template.name}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="btn-primary">Xem tất cả mẫu</button>
        </div>
      </div>
    </section>
  );
};

export default Templates;
