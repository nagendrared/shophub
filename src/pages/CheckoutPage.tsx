import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Truck, ShieldCheck, GoalIcon as PaypalIcon, Bitcoin, Wallet } from 'lucide-react';
import { useCart } from '../context/CartContext';

type PaymentMethod = 'credit-card' | 'paypal' | 'crypto' | 'apple-pay' | 'google-pay';

const CheckoutPage: React.FC = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>('credit-card');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
    cryptoAddress: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
  };

  const paymentMethods = [
    {
      id: 'credit-card',
      name: 'Credit Card',
      icon: CreditCard,
      description: 'Pay securely with your credit card'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: PaypalIcon,
      description: 'Fast and secure payment with PayPal'
    },
    {
      id: 'crypto',
      name: 'Cryptocurrency',
      icon: Bitcoin,
      description: 'Pay with Bitcoin, Ethereum, or other cryptocurrencies'
    },
    {
      id: 'apple-pay',
      name: 'Apple Pay',
      icon: Wallet,
      description: 'Quick checkout with Apple Pay'
    },
    {
      id: 'google-pay',
      name: 'Google Pay',
      icon: Wallet,
      description: 'Fast checkout with Google Pay'
    }
  ];

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900">Your Cart is Empty</h1>
        <p className="mt-4 text-gray-500">Add some products to your cart before proceeding to checkout.</p>
        <Link 
          to="/"
          className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <ShieldCheck className="h-6 w-6 text-green-600" />
          </div>
          <h1 className="mt-4 text-2xl font-extrabold text-gray-900">Order Placed Successfully!</h1>
          <p className="mt-2 text-gray-500">
            Thank you for your purchase. We've sent a confirmation email with your order details.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Order #: {Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}
          </p>
          <Link 
            to="/"
            className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            to="/"
            className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Link>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900">
            Checkout
          </h1>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit}>
              {/* Shipping Information */}
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Shipping Information</h3>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Street address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        id="state"
                        required
                        value={formData.state}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                        ZIP / Postal code
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        id="zipCode"
                        required
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Payment Method</h3>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-1 gap-4">
                    {paymentMethods.map((method) => (
                      <div key={method.id} className="relative">
                        <div
                          className={`
                            ${selectedPayment === method.id ? 'border-indigo-500 ring-2 ring-indigo-500' : 'border-gray-300'}
                            border rounded-lg p-4 flex cursor-pointer hover:border-indigo-500
                          `}
                          onClick={() => setSelectedPayment(method.id as PaymentMethod)}
                        >
                          <div className="flex items-center h-5">
                            <input
                              type="radio"
                              name="payment-method"
                              checked={selectedPayment === method.id}
                              onChange={() => setSelectedPayment(method.id as PaymentMethod)}
                              className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                            />
                          </div>
                          <div className="ml-3 flex items-center">
                            <method.icon className="h-6 w-6 text-gray-400" />
                            <div className="ml-3">
                              <label className="block text-sm font-medium text-gray-700">
                                {method.name}
                              </label>
                              <p className="text-gray-500 text-sm">{method.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              {selectedPayment === 'credit-card' && (
                <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Card Details</h3>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6">
                        <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">
                          Name on card
                        </label>
                        <input
                          type="text"
                          name="cardName"
                          id="cardName"
                          required
                          value={formData.cardName}
                          onChange={handleChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                          Card number
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          id="cardNumber"
                          required
                          value={formData.cardNumber}
                          onChange={handleChange}
                          placeholder="XXXX XXXX XXXX XXXX"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="expDate" className="block text-sm font-medium text-gray-700">
                          Expiration date (MM/YY)
                        </label>
                        <input
                          type="text"
                          name="expDate"
                          id="expDate"
                          required
                          value={formData.expDate}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                          CVV
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          id="cvv"
                          required
                          value={formData.cvv}
                          onChange={handleChange}
                          placeholder="XXX"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedPayment === 'crypto' && (
                <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Cryptocurrency Payment</h3>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Select Cryptocurrency
                        </label>
                        <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                          <option>Bitcoin (BTC)</option>
                          <option>Ethereum (ETH)</option>
                          <option>USD Coin (USDC)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Your Wallet Address
                        </label>
                        <input
                          type="text"
                          name="cryptoAddress"
                          value={formData.cryptoAddress}
                          onChange={handleChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="Enter your wallet address"
                        />
                      </div>
                      <div className="rounded-md bg-yellow-50 p-4">
                        <div className="flex">
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-yellow-800">
                              Important Note
                            </h3>
                            <div className="mt-2 text-sm text-yellow-700">
                              <p>
                                Please ensure you're sending from a compatible wallet. The transaction may take 10-30 minutes to confirm.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="mt-10 lg:mt-0 lg:col-span-5">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Order Summary</h3>
              </div>
              <div className="border-t border-gray-200">
                <ul className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <li key={item.product.id} className="px-4 py-4 sm:px-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-16 h-16 border border-gray-200 rounded-md overflow-hidden">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="ml-4 flex-1">
                          <div className="flex justify-between">
                            <h4 className="text-sm font-medium text-gray-900">{item.product.name}</h4>
                            <p className="ml-4 text-sm font-medium text-gray-900">${(item.product.price * item.quantity).toFixed(2)}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">Qty: {item.quantity}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <div className="flex justify-between text-sm">
                    <p className="text-gray-500">Subtotal</p>
                    <p className="font-medium text-gray-900">${totalPrice.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <p className="text-gray-500">Shipping</p>
                    <p className="font-medium text-gray-900">$5.00</p>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <p className="text-gray-500">Tax</p>
                    <p className="font-medium text-gray-900">${(totalPrice * 0.07).toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
                    <p className="text-base font-medium text-gray-900">Total</p>
                    <p className="text-base font-medium text-gray-900">
                      ${(totalPrice + 5 + totalPrice * 0.07).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="px-4 py-5 sm:px-6 bg-gray-50">
                  <div className="flex items-center">
                    <Truck className="h-5 w-5 text-gray-400" />
                    <p className="ml-2 text-sm text-gray-500">Estimated delivery: 3-5 business days</p>
                  </div>
                  <div className="mt-2 flex items-center">
                    <CreditCard className="h-5 w-5 text-gray-400" />
                    <p className="ml-2 text-sm text-gray-500">Secure payment processing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;