import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import ProductGrid from '../components/ProductGrid';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import { products, categories } from '../data/products';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <CategorySection categories={categories} />
      <FeaturedProducts products={products} />
      <ProductGrid products={products} title="All Products" />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default HomePage;