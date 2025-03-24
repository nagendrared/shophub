import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [showCategories, setShowCategories] = useState(false);
  const navigate = useNavigate();
  
  const filteredProducts = products.filter(
    product => product.category.toLowerCase() === categoryName?.toLowerCase()
  );

  const handleCategoryClick = (category: string) => {
    navigate(`/category/${category}`);
    setShowCategories(false);
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <Link 
              to="/"
              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setShowCategories(!showCategories)}
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                View Categories
                <ChevronDown className="ml-2 h-4 w-4" />
              </button>
              
              {showCategories && (
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1 max-h-96 overflow-y-auto">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.name)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900">
            {categoryName}
          </h1>
          <p className="mt-2 text-lg text-gray-500">
            Browse our selection of {categoryName?.toLowerCase()} products
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium text-gray-900">No products found</h2>
            <p className="mt-2 text-gray-500">
              We couldn't find any products in this category. Please check back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;