import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Shop by Category
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Browse our wide selection of products across popular categories
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category.id} className="group relative">
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <Link to={`/category/${category.name}`}>
                  <span className="absolute inset-0" />
                  {category.name}
                </Link>
              </h3>
              <p className="text-base font-semibold text-gray-900">Shop Now</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;