import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900">Product Not Found</h1>
        <p className="mt-4 text-gray-500">The product you're looking for doesn't exist or has been removed.</p>
        <button 
          onClick={() => navigate('/')}
          className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product Image */}
          <div className="lg:max-w-lg lg:self-end">
            <button 
              onClick={() => navigate(-1)}
              className="inline-flex items-center mb-6 text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </button>
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="mt-10 lg:mt-0 lg:col-start-2">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>
            
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">${product.price.toFixed(2)}</p>
            </div>

            <div className="mt-3 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="ml-2 text-sm text-gray-500">{product.rating} out of 5 stars</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-700">{product.description}</p>
            </div>

            <div className="mt-6">
              <div className="flex items-center">
                <h3 className="text-sm text-gray-600">Category:</h3>
                <p className="ml-2 text-sm text-gray-900">{product.category}</p>
              </div>
              <div className="flex items-center mt-2">
                <h3 className="text-sm text-gray-600">Availability:</h3>
                <p className="ml-2 text-sm text-gray-900">
                  {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex items-center">
                <h3 className="text-sm text-gray-600 mr-3">Quantity:</h3>
                <div className="flex items-center border rounded-md">
                  <button
                    className="px-3 py-1 text-gray-600 hover:text-gray-700"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="px-3 py-1">{quantity}</span>
                  <button
                    className="px-3 py-1 text-gray-600 hover:text-gray-700"
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mt-8 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className={`w-full flex items-center justify-center px-8 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
                    product.stock > 0 ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-400 cursor-not-allowed'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </button>
                <button
                  className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Save
                </button>
                <button
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Share2 className="mr-2 h-5 w-5" />
                  Share
                </button>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium text-gray-900">Product Details</h3>
              <div className="mt-4 prose prose-sm text-gray-500">
                <ul className="list-disc pl-5 space-y-2">
                  <li>High-quality materials</li>
                  <li>Durable construction</li>
                  <li>30-day money-back guarantee</li>
                  <li>Free shipping on orders over $50</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;