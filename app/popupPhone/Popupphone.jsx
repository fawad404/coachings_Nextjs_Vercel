import React from 'react';

const Popupphone = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50 h-[300px] mt-[200px]">
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white rounded-lg shadow-lg">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img 
                        className="mx-auto h-10 w-auto" 
                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" 
                        alt="Your Company" 
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>
        
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Phone number</label>
                            <div className="mt-2">
                                <input 
                                    id="number" 
                                    name="number" 
                                    type='number'
                                    autoComplete="number" 
                                    required 
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                />
                            </div>
                        </div>
{/*         
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input 
                                    id="password" 
                                    name="password" 
                                    type="password" 
                                    autoComplete="current-password" 
                                    required 
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                />
                            </div>
                        </div> */}
        
                        <div>
                            <button 
                                type="submit" 
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Start Test
                            </button>
                        </div>
                    </form>
        
                 
                </div>
                <button onClick={onClose} className="mt-4 text-gray-500 hover:text-gray-900">
                    Close
                </button>
            </div>
        </div>
    );
};

export default Popupphone;
