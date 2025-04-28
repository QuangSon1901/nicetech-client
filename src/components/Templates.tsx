// src/components/Templates.tsx
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { getProjects, getProjectCategories } from "../services/api";

const Templates = () => {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [categories, setCategories] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [filteredTemplates, setFilteredTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch categories
        const categoriesResponse = await getProjectCategories();
        const categoriesData = [{ name: "Tất cả", id: null }].concat(
          categoriesResponse.data
        );
        setCategories(categoriesData);
        
        // Fetch projects with limit for homepage
        const projectsResponse = await getProjects({
          limit: 9 // Show fewer projects on homepage
        });
        setTemplates(projectsResponse.data);
        setFilteredTemplates(projectsResponse.data);
        
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load projects");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter templates when active category changes
  useEffect(() => {
    if (activeCategory === "Tất cả") {
      setFilteredTemplates(templates);
    } else {
      const filtered = templates.filter(
        template => template.category.name === activeCategory
      );
      setFilteredTemplates(filtered);
    }
  }, [activeCategory, templates]);

  if (loading) {
    return (
      <section className="bg-gray-50 py-20" id="templates">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Giao diện mẫu
          </h2>
          <div className="flex justify-center py-12">
            <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-gray-50 py-20" id="templates">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Giao diện mẫu
          </h2>
          <p className="text-center text-red-500 my-8">{error}</p>
        </div>
      </section>
    );
  }

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
          <a href="/du-an"
            className="hidden md:flex items-center text-black hover:underline"
          >
            Xem tất cả <ArrowRight size={16} className="ml-2" />
          </a>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id || "all"}
              onClick={() => setActiveCategory(category.name)}
              className={`px-4 py-2 rounded-full text-sm ${
                activeCategory === category.name
                  ? "bg-black text-white"
                  : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <a href={template.link}
              key={template.id}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-sm shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={template.image.startsWith('/uploads') 
                    ? `${import.meta.env.VITE_API_URL}${template.image}` 
                    : template.image}
                  alt={template.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <span className="inline-block w-max px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-medium mb-2">
                  {template.category.name}
                </span>
                <h3 className="text-lg font-semibold mb-0 transition-colors group-hover:text-indigo-600">
                  {template.name}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a href="/du-an" className="btn-primary">Xem tất cả mẫu</a>
        </div>
      </div>
    </section>
  );
};

export default Templates;