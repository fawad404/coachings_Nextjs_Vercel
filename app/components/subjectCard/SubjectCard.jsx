import React from 'react';

const SubjectCard = () => {
  // Array of card data
  const cardsData = [
    {
      imageSrc: 'https://static.shuffle.dev/components/preview/697340ff-5445-426e-84bf-57e856b9afbf/assets/public/nightsable-assets/images/cards/bg-image1.png',
      title: 'Safeguarded with leading banks',
    },
    {
      imageSrc: 'https://static.shuffle.dev/components/preview/697340ff-5445-426e-84bf-57e856b9afbf/assets/public/nightsable-assets/images/cards/bg-image2.png',
      title: 'Advanced security features',
    },
    {
      imageSrc: 'https://static.shuffle.dev/components/preview/697340ff-5445-426e-84bf-57e856b9afbf/assets/public/nightsable-assets/images/cards/bg-image3.png',
      title: 'Protection for your assets',
    },
    {
      imageSrc: 'https://static.shuffle.dev/components/preview/697340ff-5445-426e-84bf-57e856b9afbf/assets/public/nightsable-assets/images/cards/bg-image1.png',
      title: 'Global reach, local support',
    },
    {
      imageSrc: 'https://static.shuffle.dev/components/preview/697340ff-5445-426e-84bf-57e856b9afbf/assets/public/nightsable-assets/images/cards/bg-image2.png',
      title: 'Industry-leading services',
    },
    {
      imageSrc: 'https://static.shuffle.dev/components/preview/697340ff-5445-426e-84bf-57e856b9afbf/assets/public/nightsable-assets/images/cards/bg-image3.png',
      title: 'Reliable financial partners',
    },
  ];

  return (
    <section className="pt-20 pb-24 bg-blueGray-900">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">NightsableCard</span>
          <h2 className="font-heading mb-6 text-3xl lg:text-5xl text-semibold text-gray-700 tracking-8xl">UPSC EXAMS SUBJECTS</h2>
          <p className="mb-20 text-gray-700 md:max-w-md mx-auto">Nightsable is a strategic branding agency focused on brand creation, rebrands, and brand</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {cardsData.map((card, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="relative mb-8 overflow-hidden rounded-5xl">
                <img className="w-full transform hover:scale-125 transition duration-1000" src={card.imageSrc} alt="Card Image" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-card p-8">
                  <span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">NightsableCard</span>
                  <a className="group inline-block max-w-sm" href="#">
                    <h3 className="mb-4 text-3xl text-white tracking-3xl hover:underline">{card.title}</h3>
                  </a>
                  <a className="group inline-flex items-center" href="#">
                    <span className="mr-3.5 text-white font-medium">Learn more</span>
                    <svg className="transform group-hover:rotate-90 transition duration-300" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5 0.75L1 11.25" stroke="white" strokeWidth="1.43182" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M11.5 10.3781V0.75H1.87187" stroke="white" strokeWidth="1.43182" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectCard;
