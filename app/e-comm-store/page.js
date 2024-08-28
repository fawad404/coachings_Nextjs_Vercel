import React from 'react';
import Store from '../components/store/Store';

const Page = () => {
  // Example breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Shop', link: '/shop' },
    { label: 'Category', link: '/category' }
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
      name: 'Product 1',
      price: 150,
      image: 'https://via.placeholder.com/150',
      link: '/product/1'
    },
    {
      name: 'Product 2',
      price: 300,
      image: 'https://via.placeholder.com/150',
      link: '/product/2'
    },
    {
      name: 'Product 3',
      price: 450,
      image: 'https://via.placeholder.com/150',
      link: '/product/3'
    }
  ];

  return (
    <div>
      <h1>Product Page</h1>
      <Store
        breadcrumbItems={breadcrumbItems}
        productCount={productCount}
        priceRange={priceRange}
        locationOptions={locationOptions}
        products={products}
      />
    </div>
  );
};

export default Page;
