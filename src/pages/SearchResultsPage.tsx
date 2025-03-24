import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const SearchResultsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query')?.toLowerCase() || '';

  // Filter products based on search query
  const searchResults = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery) || 
    product.description.toLowerCase().includes(searchQuery) ||
    product.category.toLowerCase().includes(searchQuery)
  );

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">
        Search Results for "{searchQuery}"
      </h1>
      {searchResults.length === 0 ? (
        <div className="text-center text-gray-500">
          No products found matching your search.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchResults.map(product => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleProductClick(product.id)}
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">{product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-indigo-600">${product.price.toFixed(2)}</span>
                  <span className="text-yellow-500">★ {product.rating.toFixed(1)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;