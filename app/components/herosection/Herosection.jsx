import React from 'react';
import './herosection.css';


// import bg from './images/backgroundhero.png';
// import cr1 from './images/1.png';
// import cr2 from './images/2.png';
// import cr3 from './images/4.png';
const Hero2 = () => {
  return (
    <div className="containerhero2">
      <div className="left-sectionhero2">
        <h1>Dhyeya IAS</h1>
        <p>
       <span className='spandeheya'>Dhyeya IAS Delhi</span>  has dependably kept up its name in the primary foundations and has conveyed incredible results reliably. The instructors are effortlessly agreeable and exceptionally supportive. There are regular counselling sessions to keep the students in good mental health. The coaching institute has worked with great dedication to impart education to future doctors and engineers.

Its qualities such as small batch size, experienced faculty, and advanced study material make it an institute worth considering. The testing framework is an extraordinary method to guarantee that understudies do not dread the feared day of the exam. Thinking about the essentialness of these exams, the institute gives their …
        </p>
        <button>Read More</button>
        <h1>Dhyeya IAS Photos</h1>
        <div className="image-containerhero2">
          <img src='/1.png' alt="Image 1" />
          <img src='/2.png' alt="Image 2" />
          <img src='/4.png' alt="Image 3" />
          <img src='/1.png' alt="Image 4" />
        </div>
      </div>
      <div className="right-sectionhero2"></div>
    </div>
  );
};

export default Hero2;
