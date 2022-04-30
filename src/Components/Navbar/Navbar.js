import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="w-full flex mt-2 items-center justify-between">
                <div className="relative mt-2 ml-2 w-full">
                    <select className="block appearance-none w-full bg-white focus:outline-none" id="grid-state">
                        {/* Default option is starbucks which was given in design file, other options are addded to make dropdown arrow a little bit reasonable */}
                        <option>Starbucks</option>
                        <option>Wallmart</option>
                        <option>Target</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-8 pt-1 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
                <div className='w-full'>
                    <button type="button" className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300"><svg width="24" height="24" fill="none" aria-hidden="true" className="mr-3 flex-none"><path d="m19 19-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle></svg>Search</button>
                </div>
                <div className='flex w-full items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <img className='w-10' src="https://i.ibb.co/VgSsX7W/Ellipse-1.png" alt="Ellipse-1" border="0" />
                    <div className="relative mt-2 ml-2 w-full">
                        <select className="block appearance-none w-full bg-white focus:outline-none" id="grid-state">
                            {/* Default option is starbucks which was given in design file, other options are addded to make dropdown arrow a little bit reasonable */}
                            <option>John Doe</option>
                            <option>Profile</option>
                            <option>Settings</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-8 pt-1 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;