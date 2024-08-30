import React from 'react';
import Store from '../components/store/Store';

const Page = () => {
  // Example breadcrumb items
  const breadcrumbs = [
    { name: 'Home', url: '#' },
    { name: 'Coaching', url: '#' },
    { name: 'Listings', url: '#' }
  ];

  // Example product count
  const productCount = 25;

  // Example price range
  const priceRange = { min: 100, max: 1000 };

  // Example location options
  const locationOptions = [
    { value: 'ny', label: 'New York' },
    { value: 'la', label: 'Los Angeles' },
    { value: 'sf', label: 'San Francisco' }
  ];

  // Example products array
  const products = [
    {
      id: 1,
      name: 'Apple iPhone 12 Pro (128GB) Silver',
      price: 544.90,
      imageUrl: 'https://static.shuffle.dev/components/preview/4a61043c-520e-44ad-9579-e398d8dfa81e/assets/public/uinel-assets/images/ecommerce-product-list/iphone-12-pro.png',
    },
    {
      id: 2,
      name: 'Apple iPhone 12 Pro (128GB) Silver',
      price: 544.90,
      imageUrl: 'https://static.shuffle.dev/components/preview/4a61043c-520e-44ad-9579-e398d8dfa81e/assets/public/uinel-assets/images/ecommerce-product-list/iphone-12-pro.png',
    },
    {
      id: 3,
      name: 'Apple iPhone 12 Pro (128GB) Silver',
      price: 544.90,
      imageUrl: 'https://static.shuffle.dev/components/preview/4a61043c-520e-44ad-9579-e398d8dfa81e/assets/public/uinel-assets/images/ecommerce-product-list/iphone-12-pro.png',
    },
    {
      id: 4,
      name: 'Apple iPhone 12 Pro (128GB) Silver',
      price: 544.90,
      imageUrl: 'https://static.shuffle.dev/components/preview/4a61043c-520e-44ad-9579-e398d8dfa81e/assets/public/uinel-assets/images/ecommerce-product-list/iphone-12-pro.png',
    },
    // Add more products as needed
  ];
  return (
  
      <Store
      breadcrumbs={breadcrumbs}
      products={products}
      />
    
  );
};

export default Page;
