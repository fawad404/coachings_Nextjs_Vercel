import Test from "./components/test/Test";


const Home = () => {
  const users = [
    { name: 'UPSC General Studies Paper 2 2020', email: 'As officially conducted on October 03 2020', year: '24', question: '420', hour: '2', imgSrc: '/test-data-svgrepo-com (1).svg' },
    { name: 'UPSC Prelims GS 2020', email: 'As officially conducted on October 03 2020', year: '18', question: '310', hour: '1', imgSrc: '/test-data-svgrepo-com (1).svg' },
    { name: 'UPSC PrelUPSC Prelims 2019', email: 'As officially conducted on October 03 2020', year: '30', question: '450', hour: '3', imgSrc: '/test-data-svgrepo-com (1).svg' },
    { name: 'Vision IAS GS(P) 2019', email: 'As officially conducted on October 03 2020', year: '15', question: '280', hour: '1', imgSrc: '/test-data-svgrepo-com (1).svg' },
  ];

  return (
   <div className="flex flex-col md:flex-row ">
    <section className="bg-coolGray-50 py-4 w-full md:w-4/5">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -m-3">
          {users.map((user, index) => (
            <Test
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

export default Home;
