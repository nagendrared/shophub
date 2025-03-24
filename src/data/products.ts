import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics & Computers',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  },
  {
    id: '2',
    name: 'Home, Kitchen & Appliances',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  },
  {
    id: '3',
    name: 'Clothing, Shoes & Accessories',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  },
  {
    id: '4',
    name: 'Beauty, Health & Personal Care',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  },
  {
    id: '5',
    name: 'Grocery & Gourmet Food',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  },
  {
    id: '6',
    name: 'Books, Movies & Music',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  },
  {
    id: '7',
    name: 'Toys, Games & Baby Products',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  },
  {
    id: '8',
    name: 'Sports, Fitness & Outdoor',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  },
  {
    id: '9',
    name: 'Automotive & Industrial Supplies',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  },
  {
    id: '10',
    name: 'Office Products & Stationery',
    image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  },
  {
    id: '11',
    name: 'Pet Supplies',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  },
  {
    id: '12',
    name: 'Software & Video Games',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  }
];

export const products: Product[] = [
  // Electronics & Computers
  {
    id: '1',
    name: 'MacBook Pro 16"',
    description: 'Powerful laptop with M2 chip, 16GB RAM, and 512GB SSD storage.',
    price: 2499.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    category: 'Electronics & Computers',
    rating: 4.8,
    stock: 15
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    description: 'Latest smartphone with A17 chip, 256GB storage, and pro camera system.',
    price: 1099.99,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    category: 'Electronics & Computers',
    rating: 4.9,
    stock: 20
  },
  {
    id: '3',
    name: 'Sony Alpha A7 IV',
    description: 'Full-frame mirrorless camera with 33MP sensor and 4K video recording.',
    price: 2499.99,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    category: 'Electronics & Computers',
    rating: 4.7,
    stock: 8
  },
  {
    id: '4',
    name: 'Bose QuietComfort Earbuds',
    description: 'Wireless noise-cancelling earbuds with high-fidelity audio and 6-hour battery life.',
    price: 279.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    category: 'Electronics & Computers',
    rating: 4.6,
    stock: 25
  },
  {
    id: '5',
    name: 'Apple Watch Series 9',
    description: 'Advanced smartwatch with health monitoring, GPS, and cellular connectivity.',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1764&q=80',
    category: 'Electronics & Computers',
    rating: 4.7,
    stock: 30
  },
  
  // Home, Kitchen & Appliances
  {
    id: '6',
    name: 'Modern Sectional Sofa',
    description: 'L-shaped sectional sofa with chaise lounge and premium fabric upholstery.',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    category: 'Home, Kitchen & Appliances',
    rating: 4.5,
    stock: 5
  },
  
  {
    id: '7',
    name: 'Samsung French Door Refrigerator',
    description: 'Energy-efficient refrigerator with smart features and ice maker.',
    price: 2199.99,
    image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1734&q=80',
    category: 'Home, Kitchen & Appliances',
    rating: 4.6,
    stock: 7
  },
  {
    id: '8',
    name: 'Philips Hue Smart Lighting Kit',
    description: 'Starter kit with 4 color-changing bulbs and bridge for smart home integration.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=1741&q=80',
    category: 'Home, Kitchen & Appliances',
    rating: 4.7,
    stock: 15
  },
  {
    id: '9',
    name: 'Egyptian Cotton Sheet Set',
    description: 'Luxury 1000-thread-count sheet set with pillowcases, available in multiple colors.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80',
    category: 'Home, Kitchen & Appliances',
    rating: 4.8,
    stock: 20
  },
  
  // Clothing, Shoes & Accessories
  {
    id: '10',
    name: 'Men\'s Wool Overcoat',
    description: 'Classic tailored wool overcoat with satin lining, perfect for winter.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
    category: 'Clothing, Shoes & Accessories',
    rating: 4.6,
    stock: 10
  },
  {
    id: '11',
    name: 'Women\'s Cashmere Sweater',
    description: 'Soft 100% cashmere sweater with ribbed trim, available in multiple colors.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=1364&q=80',
    category: 'Clothing, Shoes & Accessories',
    rating: 4.7,
    stock: 15
  },
  {
    id: '12',
    name: 'Nike Air Max Sneakers',
    description: 'Iconic athletic shoes with air cushioning and breathable mesh upper.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    category: 'Clothing, Shoes & Accessories',
    rating: 4.8,
    stock: 25
  },
  {
    id: '13',
    name: 'Designer Leather Handbag',
    description: 'Premium leather handbag with gold hardware and adjustable shoulder strap.',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    category: 'Clothing, Shoes & Accessories',
    rating: 4.5,
    stock: 8
  },
  {
    id: '14',
    name: 'Ray-Ban Aviator Sunglasses',
    description: 'Classic aviator sunglasses with polarized lenses and metal frame.',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80',
    category: 'Clothing, Shoes & Accessories',
    rating: 4.7,
    stock: 20
  },
  
  // Beauty, Health & Personal Care
  {
    id: '15',
    name: 'Vitamin C Serum',
    description: 'Brightening facial serum with 20% vitamin C and hyaluronic acid.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
    category: 'Beauty, Health & Personal Care',
    rating: 4.6,
    stock: 30
  },
  {
    id: '16',
    name: 'Dyson Hair Dryer',
    description: 'Professional-grade hair dryer with intelligent heat control to prevent damage.',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1288&q=80',
    category: 'Beauty, Health & Personal Care',
    rating: 4.8,
    stock: 10
  },
  {
    id: '17',
    name: 'Tom Ford Oud Wood Perfume',
    description: 'Luxury fragrance with notes of rare oud wood, sandalwood, and amber.',
    price: 259.99,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80',
    category: 'Beauty, Health & Personal Care',
    rating: 4.9,
    stock: 12
  },
  {
    id: '18',
    name: 'Omega-3 Fish Oil Supplements',
    description: 'High-potency fish oil capsules with 1000mg of omega-3 fatty acids.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80',
    category: 'Beauty, Health & Personal Care',
    rating: 4.5,
    stock: 40
  },
  {
    id: '19',
    name: 'First Aid Kit',
    description: 'Comprehensive medical kit with 150 items for emergency situations.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1160&q=80',
    category: 'Beauty, Health & Personal Care',
    rating: 4.7,
    stock: 25
  },
  
  // Grocery & Gourmet Food
  {
    id: '20',
    name: 'Organic Fruit Basket',
    description: 'Assortment of seasonal organic fruits delivered fresh to your door.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    category: 'Grocery & Gourmet Food',
    rating: 4.6,
    stock: 15
  },
  {
    id: '21',
    name: 'Artisanal Coffee Beans',
    description: 'Single-origin, fair-trade coffee beans, freshly roasted and ground to order.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    category: 'Grocery & Gourmet Food',
    rating: 4.8,
    stock: 30
  },
  {
    id: '22',
    name: 'Gourmet Chocolate Collection',
    description: 'Assorted handcrafted chocolates with unique flavors from around the world.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    category: 'Grocery & Gourmet Food',
    rating: 4.9,
    stock: 20
  },
  
  // Books, Movies & Music
  {
    id: '23',
    name: 'Bestselling Fiction Novel',
    description: 'Award-winning novel from a renowned author, available in hardcover.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    category: 'Books, Movies & Music',
    rating: 4.8,
    stock: 35
  },
  {
    id: '24',
    name: '4K Ultra HD Movie Collection',
    description: 'Box set of award-winning films in stunning 4K resolution with HDR.',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1735&q=80',
    category: 'Books, Movies & Music',
    rating: 4.7,
    stock: 15
  },
  {
    id: '25',
    name: 'Vinyl Record Collection',
    description: 'Limited edition vinyl records featuring classic albums from legendary artists.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    category: 'Books, Movies & Music',
    rating: 4.9,
    stock: 8
  },
  {
    id: '26',
    name: 'Acoustic Guitar',
    description: 'Handcrafted acoustic guitar with solid spruce top and mahogany back and sides.',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    category: 'Books, Movies & Music',
    rating: 4.6,
    stock: 5
  },
  
  // Toys, Games & Baby Products
  {
    id: '27',
    name: 'LEGO Star Wars Set',
    description: 'Collectible building set with over 1,000 pieces and multiple minifigures.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80',
    category: 'Toys, Games & Baby Products',
    rating: 4.8,
    stock: 12
  },
  {
    id: '28',
    name: 'Strategy Board Game',
    description: 'Award-winning strategy game for 2-6 players, ages 12 and up.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80',
    category: 'Toys, Games & Baby Products',
    rating: 4.7,
    stock: 20
  },
  {
    id: '29',
    name: 'Baby Stroller Travel System',
    description: 'Convertible stroller with car seat, suitable from birth to toddler years.',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1617&q=80',
    category: 'Toys, Games & Baby Products',
    rating: 4.6,
    stock: 8
  },
  {
    id: '30',
    name: 'STEM Learning Toy Set',
    description: 'Educational toys that teach coding, engineering, and problem-solving skills.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    category: 'Toys, Games & Baby Products',
    rating: 4.9,
    stock: 15
  },
  
  // Sports, Fitness & Outdoor
  {
    id: '31',
    name: 'Smart Home Gym System',
    description: 'Complete home fitness system with digital weights and interactive coaching.',
    price: 1999.99,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    category: 'Sports, Fitness & Outdoor',
    rating: 4.7,
    stock: 5
  },
  {
    id: '32',
    name: 'Men\'s Trail Running Shoes',
    description: 'All-terrain running shoes with superior grip and waterproof membrane.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
    category: 'Sports, Fitness & Outdoor',
    rating: 4.6,
    stock: 20
  },
  {
    id: '33',
    name: '4-Person Camping Tent',
    description: 'Weatherproof tent with easy setup, suitable for 3-season camping.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    category: 'Sports, Fitness & Outdoor',
    rating: 4.5,
    stock: 10
  },
  {
    id: '34',
    name: 'Carbon Fiber Road Bike',
    description: 'Lightweight carbon frame road bike with electronic shifting system.',
    price: 2499.99,
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    category: 'Sports, Fitness & Outdoor',
    rating: 4.8,
    stock: 3
  },
  
  // Automotive & Industrial Supplies
  {
    id: '35',
    name: 'Car Dash Cam',
    description: '4K resolution dash camera with night vision and 128GB storage.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    category: 'Automotive & Industrial Supplies',
    rating: 4.6,
    stock: 15
  },
  {
    id: '36',
    name: 'Motorcycle Helmet',
    description: 'DOT-certified full-face helmet with integrated Bluetooth communication.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    category: 'Automotive & Industrial Supplies',
    rating: 4.8,
    stock: 10
  },
  {
    id: '37',
    name: 'Cordless Power Drill Set',
    description: '20V lithium-ion drill with 2 batteries, charger, and 100-piece accessory kit.',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80',
    category: 'Automotive & Industrial Supplies',
    rating: 4.7,
    stock: 12
  },
  
  // Office Products & Stationery
  {
    id: '38',
    name: 'Color Laser Printer',
    description: 'Wireless all-in-one printer with scanning, copying, and duplex printing.',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    category: 'Office Products & Stationery',
    rating: 4.5,
    stock: 10
  },
  {
    id: '39',
    name: 'Premium Fountain Pen',
    description: 'Handcrafted fountain pen with 14K gold nib and elegant gift box.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1746&q=80',
    category: 'Office Products & Stationery',
    rating: 4.8,
    stock: 15
  },
  
  // Pet Supplies
  {
    id: '40',
    name: 'Premium Dog Food',
    description: 'Grain-free, high-protein dry dog food made with real meat, 24lb bag.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    category: 'Pet Supplies',
    rating: 4.7,
    stock: 20
  },
  {
    id: '41',
    name: 'Automatic Pet Feeder',
    description: 'Programmable feeder with portion control and smartphone connectivity.',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1738&q=80',
    category: 'Pet Supplies',
    rating: 4.5,
    stock: 15
  },
  
  // Software & Video Games
  {
    id: '42',
    name: 'PlayStation 5 Console',
    description: 'Next-generation gaming console with ultra-high-speed SSD and 4K gaming.',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    category: 'Software & Video Games',
    rating: 4.9,
    stock: 5
  },
  {
    id: '43',
    name: 'Gaming Headset',
    description: 'Wireless gaming headset with 7.1 surround sound and noise-cancelling microphone.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80',
    category: 'Software & Video Games',
    rating: 4.7,
    stock: 15
  },
  {
    id: '44',
    name: 'Adobe Creative Cloud Subscription',
    description: '12-month subscription with access to Photoshop, Illustrator, and 20+ apps.',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    category: 'Software & Video Games',
    rating: 4.8,
    stock: 999
  }
];