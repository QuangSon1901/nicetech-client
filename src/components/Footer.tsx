
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Website Builder", href: "#" },
      { name: "Online Stores", href: "#" },
      { name: "Domain Names", href: "#" },
      { name: "Marketing Tools", href: "#" },
      { name: "Analytics", href: "#" },
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Investors", href: "#" },
      { name: "Partners", href: "#" },
    ]
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Community", href: "#" },
      { name: "Developer Platform", href: "#" },
      { name: "Status", href: "#" },
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#" },
      { name: "Guides", href: "#" },
      { name: "Templates", href: "#" },
      { name: "Webinars", href: "#" },
      { name: "Podcasts", href: "#" },
    ]
  }
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="section-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="/" className="text-2xl font-bold mb-6 inline-block">
              <span className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-black mr-2"></div>
                <span>Squarespace</span>
              </span>
            </a>
            <p className="text-gray-600 mb-6">
              Build a website, sell online, and engage with your audience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {footerLinks.map((group, index) => (
            <div key={index}>
              <h4 className="font-bold mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-gray-600 hover:text-black">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between">
          <div className="text-gray-500 mb-4 md:mb-0">
            © 2023 Squarespace Clone. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-800">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-800">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-800">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
