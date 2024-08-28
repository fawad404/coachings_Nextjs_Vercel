import React from 'react';


const PastPaper = ({ name, email, year, question, hour, imgSrc }) => (
    
  <div className="w-full sm:w-1/2 xl:w-1/4 p-3">
      <div className="bg-white border border-coolGray-100 shadow-dashboard rounded-md">
        <div className="flex flex-col justify-center items-center px-4 pt-8 pb-6 border-b border-coolGray-100">
          <img className="mb-4 h-20" src="/download-svgrepo-com.svg" alt={`${name}'s avatar`} />
          <h2 className="text-lg font-semibold mb-2 font-medium text-coolGray-900">{name}</h2>
          <div className=''>
            <div className='mr-6 flex items-center px-4 font-medium text-sm rounded-md'>
            <svg 
            className="mr-2"
            width="20"
            height="20"
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10H3Z" fill="#22c55e" fill-opacity="0.24"></path> <rect x="3" y="6" width="18" height="15" rx="2" stroke="#22c55e" stroke-width="1.2"></rect> <path d="M7 3L7 6" stroke="#22c55e" stroke-width="1.2" stroke-linecap="round"></path> <path d="M17 3L17 6" stroke="#22c55e" stroke-width="1.2" stroke-linecap="round"></path> <rect x="7" y="12" width="4" height="2" rx="0.5" fill="#22c55e"></rect> <rect x="7" y="16" width="4" height="2" rx="0.5" fill="#22c55e"></rect> <rect x="13" y="12" width="4" height="2" rx="0.5" fill="#22c55e"></rect> <rect x="13" y="16" width="4" height="2" rx="0.5" fill="#22c55e"></rect> </g></svg>
          <p className="mb-2 mt-3 text-slate font-medium text-coolGray-400"><strong>Year: </strong>{year}</p>
            </div>
            <div className='mr-6 flex items-center px-4  font-medium text-sm rounded-md'>
            <img 
            className='h-4 mr-2'
            src="./check-education-exam-svgrepo-com.svg" alt="" />
          <p className="mb-2  mt-3  text-slate font-medium text-coolGray-400"><strong>Exam Name: </strong>{question}</p>
            </div>
            <div className='mr-6 flex items-center px-4 font-medium text-sm rounded-md'>
            <img 
            className='h-5 mr-2'
            src="./file-document-svgrepo-com.svg" alt="" />
             <p className="mb-2  mt-3  text-slate font-medium text-coolGray-400"><strong>File Type: </strong> {hour}</p>
            </div>
          </div>
          
          <button className="mr-6 mt-4 flex flex-row items-center px-4 py-2 font-medium text-sm text-white bg-green-500 hover:bg-green-600 rounded-md">
          <svg 
          className='mr-2'
          width="20" 
          height="20" 
          viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16 10H8V9h8zm-4.87 11l1.064 1H3.5C2.122 22 1 20.43 1 18.5S2.122 15 3.5 15H5V5.75C5 3.682 6.122 2 7.5 2h13c1.378 0 2.45 1.57 2.45 3.5S21.878 9 20.5 9H19v7.138l-1 .979V5.75A5.994 5.994 0 0 1 18.64 3H7.5C6.792 3 6 4.176 6 5.75V15h10.57l-.71.826A4.141 4.141 0 0 0 15 18.5a5.186 5.186 0 0 0 .047.692l-1.032-.971A5.555 5.555 0 0 1 14.557 16H3.5C2.701 16 2 17.168 2 18.5S2.701 21 3.5 21zM19 8h1.5c.799 0 1.55-1.168 1.55-2.5S21.299 3 20.5 3h-.677A4.62 4.62 0 0 0 19 5.75zM8 13h8v-1H8zm8-7H8v1h8zm6.491 8.819l-6.998 6.851-2.832-2.663-.685.728 3.53 3.321 7.685-7.522z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg> 
            <p>Download Papers</p>
          </button>
          
        </div>
        
      </div>
    </div>
   
  );
  

export default PastPaper;
