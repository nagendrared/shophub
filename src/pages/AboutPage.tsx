import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ShoppingBag, Truck, HeadphonesIcon as HeadphoneIcon } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">About Us</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Story
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            We're on a mission to make quality products accessible to everyone.
          </p>
        </div>

        <div className="mt-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Who We Are
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Founded in 2020, ShopHub started with a simple idea: create an online shopping experience that puts customers first. 
                What began as a small operation has grown into a trusted e-commerce destination serving thousands of happy customers.
              </p>
              <p className="mt-3 text-lg text-gray-500">
                Our team is passionate about curating high-quality products across various categories, from electronics to home goods, 
                ensuring that every item we sell meets our strict standards for quality and value.
              </p>
              <div className="mt-8 sm:flex">
                <div className="rounded-md shadow">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Contact Us
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/"
                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                className="rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Team meeting"
              />
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Our Values
              </h3>
              <p className="mt-4 text-lg text-gray-500">
                At ShopHub, we believe in:
              </p>
              <div className="mt-6 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <Users className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Customer First</h4>
                    <p className="mt-2 text-base text-gray-500">
                      Every decision we make starts with the question: "How does this benefit our customers?"
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <ShoppingBag className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Quality Products</h4>
                    <p className="mt-2 text-base text-gray-500">
                      We rigorously test and select only the best products to ensure you receive items that exceed your expectations.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <Truck className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Fast & Reliable Shipping</h4>
                    <p className="mt-2 text-base text-gray-500">
                      We partner with trusted shipping providers to ensure your orders arrive quickly and safely.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <HeadphoneIcon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Exceptional Support</h4>
                    <p className="mt-2 text-base text-gray-500">
                      Our customer service team is always ready to help with any questions or concerns you might have.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Customer service team"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Join Our Community
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Be part of the ShopHub family and enjoy exclusive benefits.
            </p>
          </div>
          <div className="mt-10 pb-12 bg-white sm:pb-16">
            <div className="relative">
              <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                  <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                    <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Happy Customers</dt>
                      <dd className="order-1 text-5xl font-extrabold text-indigo-600">100K+</dd>
                    </div>
                    <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Products</dt>
                      <dd className="order-1 text-5xl font-extrabold text-indigo-600">5K+</dd>
                    </div>
                    <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Countries</dt>
                      <dd className="order-1 text-5xl font-extrabold text-indigo-600">25</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;