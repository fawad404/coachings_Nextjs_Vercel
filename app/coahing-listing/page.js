import React from 'react';
import Coaching from '../components/coachings/Coaching';

const Page = () => {
  const breadcrumbs = [
    { name: 'Home', url: '#' },
    { name: 'Coaching', url: '#' },
    { name: 'Listings', url: '#' }
  ];

  const sectionTitle = 'New in';
  const productCount = 449;

  const categories = [
    { name: 'Course', url: '#' },
    { name: 'Program Type', url: '#' },
    { name: 'Coaching Type', url: '#' },
    { name: 'City', url: '#' },
    { name: 'State', url: '#' }
  ];

  const products = [
    {
      name: 'Nirman IAS',
      description: '621, Banda Bahadur Marg, Mukherjee Nagar, New Delhi, Delhi, 110009, IN',
      price: '499',
      image: 'https://vajiram-prod.s3.ap-south-1.amazonaws.com/Guidelines_for_Registration_and_Regulation_of_Coaching_Center_2024_dbe9378b9b.webp',
      colors: ['UPSC', 'IPS'],
      url: '#'
    },
    // Add more products here...
  ];

  return (
    <div>
      <Coaching
        breadcrumbs={breadcrumbs}
        sectionTitle={sectionTitle}
        productCount={productCount}
        categories={categories}
        products={products}
      />
    </div>
  );
};

export default Page;
