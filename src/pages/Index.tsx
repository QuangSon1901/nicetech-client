import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Templates from "../components/Templates";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import './Index.css'

const Index = () => {
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
        <title>NiceTech - Thiết kế Website chuẩn SEO, tối ưu hiệu suất</title>
        <meta name="description" content="NiceTech - Dịch vụ thiết kế, phát triển website chuẩn SEO, tối ưu hiệu suất, tư vấn và triển khai hệ thống ERP cho doanh nghiệp." />

        <meta property="og:title" content="NiceTech - Thiết kế Website chuẩn SEO, tối ưu hiệu suất" />
        <meta property="og:description" content="NiceTech - Dịch vụ thiết kế, phát triển website chuẩn SEO, tối ưu hiệu suất, tư vấn và triển khai hệ thống ERP cho doanh nghiệp." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/uploads/hero.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NiceTech - Thiết kế Website chuẩn SEO, tối ưu hiệu suất" />
        <meta name="twitter:image" content="/uploads/hero.jpg" />
        <link rel="canonical" href="https://nicetech.vn/" />
      </Helmet>
      <div className="bg-white min-h-screen">
        <Navbar />
        <main className="pt-16">
          <Hero />
          <Features />
          <Templates />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
