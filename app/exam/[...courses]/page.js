import Page3 from '@/app/components/cards/Cards';
import Carousel from '@/app/components/carousalCourses/CarsoleCourses';
import CoachingDetail from '@/app/components/coachingDetail/CoachingDetail';
import Coaching from '@/app/components/coachings/Coaching';
import DiplomasCarousel from '@/app/components/disploma/diplomas';
import Footer from '@/app/components/footer/Footer';
import LearnerComponent from '@/app/components/learner/learner';
import PopularCourses from '@/app/components/popularCourses/PopularCourses';
import StatComponent from '@/app/components/statsSection/StatsSection';
import SubjectCard from '@/app/components/subjectCard/SubjectCard';
import React from 'react';

const Page = ({ params }) => {

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

  // Get the length of the courses parameter
  const urlLength = params.courses.length;

  console.log(params);
  console.log("url length:", urlLength);

  // Render different components based on URL length
  return (
    <>
      {urlLength === 2 ? (
        <Coaching 
          breadcrumbs={breadcrumbs}
          sectionTitle={sectionTitle}
          productCount={productCount}
          categories={categories}
          products={products}
        />
      ) : urlLength === 3 ? (
        // <DiplomasCarousel />
        <CoachingDetail />
        
      ) : (
        <>
        <div className='flex flex-col justify-center items-center min-h-screen'>
          <PopularCourses path={params.courses.slice(0, 2).join('/')} />
          <Carousel />
          <LearnerComponent />
          
        </div>
        <Footer />
        </>
      )}
    </>
  );
};

export default Page;
