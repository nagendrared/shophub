import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-white">ShopHub</Link>
            </div>
            <p className="text-gray-300 text-base">
              Making quality products accessible to everyone. Shop with confidence with our secure payment options and fast delivery.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Shop</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/category/Electronics" className="text-base text-gray-300 hover:text-white">
                      Electronics
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/Clothing" className="text-base text-gray-300 hover:text-white">
                      Clothing
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/Home & Kitchen" className="text-base text-gray-300 hover:text-white">
                      Home & Kitchen
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/Books" className="text-base text-gray-300 hover:text-white">
                      Books
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/contact" className="text-base text-gray-300 hover:text-white">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-base text-gray-300 hover:text-white">
                      Shipping Info
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-base text-gray-300 hover:text-white">
                      Returns & Exchanges
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-base text-gray-300 hover:text-white">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/about" className="text-base text-gray-300 hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-300 hover:text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-300 hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-300 hover:text-white">
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-gray-400" />
                    <span className="text-base text-gray-300">+1 (555) 123-4567</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-gray-400" />
                    <span className="text-base text-gray-300">support@shophub.com</span>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 text-gray-400 mt-1" />
                    <span className="text-base text-gray-300">123 Commerce St.<br />Shopping City, SC 12345</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2025 ShopHub, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;