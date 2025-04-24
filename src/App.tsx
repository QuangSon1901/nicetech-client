import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import ServiceWebsite from "./pages/services/Website";
import ServiceExploreTemplates from "./pages/services/ExploreTemplates";
import ServicePortfolios from "./pages/services/Portfolios";
import ServiceBlogs from "./pages/services/Blogs";
import ServiceBusinessWebsite from "./pages/services/BusinessWebsite";
import ServiceECommerce from "./pages/services/ECommerce";
import ServiceOnlineStore from "./pages/services/OnlineStore";
import ServiceIndustryWebsite  from "./pages/services/ServiceIndustryWebsite";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gioi-thieu" element={<About />} />
            <Route path="/dich-vu/website" element={<ServiceWebsite />} />
            <Route path="/dich-vu/kham-pha-mau" element={<ServiceExploreTemplates />} />
            <Route path="/dich-vu/portfolios" element={<ServicePortfolios />} />
            <Route path="/dich-vu/blogs" element={<ServiceBlogs />} />
            <Route path="/dich-vu/doanh-nghiep" element={<ServiceBusinessWebsite />} />
            <Route path="/dich-vu/ecommerce" element={<ServiceECommerce />} />
            <Route path="/dich-vu/ban-hang-online" element={<ServiceOnlineStore />} />
            <Route path="/dich-vu/nganh-dich-vu" element={<ServiceIndustryWebsite />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
