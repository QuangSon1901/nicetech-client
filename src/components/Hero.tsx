import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

const Hero = () => {
  const [api, setApi] = React.useState(null);
  
  React.useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [api]);

  const heroImages = [
    {
      src: "/uploads/heros/hero.jpg",
      title: "Giao diện website",
      description: "Thiết kế phù hợp với mọi lĩnh vực kinh doanh"
    },
    {
      src: "/uploads/heros/hero.jpg",
      title: "Thương mại điện tử",
      description: "Giải pháp bán hàng trực tuyến hiệu quả"
    },
    {
      src: "/uploads/heros/hero.jpg",
      title: "Trang landing page",
      description: "Thu hút khách hàng và tăng tỷ lệ chuyển đổi"
    }
  ];

  return (
    <div className="relative bg-white pt-16 md:pt-20">
      <div className="section-container flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-5xl leading-tight">
          Khởi đầu vững chắc cho mọi ý tưởng kinh doanh
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl">
          Sở hữu website chuyên nghiệp để xây dựng thương hiệu và phát triển bền vững.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-16">
          <div className='relative w-full'>
            <span className='hidden md:flex md:items-center absolute top-1/2 -translate-y-1/2 right-full w-max whitespace-nowrap mr-2'>
              <span className="sliding-underline">Dựng demo miễn phí theo ý bạn</span> <ArrowRight size={14} className="ml-2" />
            </span>
            <span className='inline-block md:hidden mb-2'>
              <span className="sliding-underline">Dựng demo miễn phí theo ý bạn</span>
            </span>
            <button className="btn-primary w-full">Liên hệ ngay</button>
          </div>
          <a href='#templates' className='w-full'>
            <button className="btn-secondary flex items-center justify-center template-btn w-full">
              <span className='whitespace-nowrap'>Xem giao diện mẫu</span>
              <div className="arrow-container ml-2">
                <ArrowDown size={18} className="arrow-icon" />
              </div>
            </button>
          </a>
        </div>
        
        {/* Hero Slider */}
        <div className="w-full h-full max-h-[300px] md:h-full md:max-h-[500px] bg-gray-100 relative overflow-hidden rounded-xl">
          <Carousel className="w-full h-full max-h-[300px] md:h-full md:max-h-[500px]" opts={{ loop: true }} setApi={setApi}>
            <CarouselContent className="h-full max-h-[300px] md:h-full md:max-h-[500px]">
              {heroImages.map((image, index) => (
                <CarouselItem key={index} className="max-h-[300px] md:h-full md:max-h-[500px]">
                  <div className="relative w-full max-h-[300px] md:h-full md:max-h-[500px]">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full max-h-[300px] md:h-full md:max-h-[500px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8 text-white text-left">
                      <h3 className="text-xl font-medium mb-2">{image.title}</h3>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black h-10 w-10" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black h-10 w-10" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Hero;