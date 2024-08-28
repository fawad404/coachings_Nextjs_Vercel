import PastPaper from "../components/pastPapers/PastPaper";


const Page = () => {
  const users = [
    { name: '2020 Papers', email: 'As officially conducted on October 03 2020', year: '24', question: 'UPSC', hour: 'PDF', imgSrc: '/test-data-svgrepo-com (1).svg' },
    { name: '2021 Papers', email: 'As officially conducted on October 03 2020', year: '18', question: 'UPSC', hour: 'PDF', imgSrc: '/test-data-svgrepo-com (1).svg' },
    { name: '2022 Papers', email: 'As officially conducted on October 03 2020', year: '30', question: 'UPSC', hour: 'PDF', imgSrc: '/test-data-svgrepo-com (1).svg' },
    { name: '2018 Papers', email: 'As officially conducted on October 03 2020', year: '15', question: 'UPSC', hour: 'PDF', imgSrc: '/test-data-svgrepo-com (1).svg' },
  ];

  return (
   <div className="flex flex-col md:flex-row ">
    <section className="bg-coolGray-50 py-4 w-full md:w-4/5">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -m-3">
          {users.map((user, index) => (
            <PastPaper
            key={index}
            name={user.name}
            email={user.email}
              year={user.year}
              question={user.question}
              hour={user.hour}
              imgSrc={user.imgSrc}
              />
            ))}
        </div>
      </div>
    </section>
    <section className="w-full md:w-1/6">
      
        Adds Section
      
    </section>
   
            </div>
  );
};

export default Page;
