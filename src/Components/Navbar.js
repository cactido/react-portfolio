import React from 'react';

const Navbar = ({ currentPage, setCurrentPage }) => {
    const about = (currentPage === 'About' ? <span className="mr-5 text-yellow-300 hover:text-gray-400" >About Me</span> : <span className="mr-5 text-gray-100 hover:text-yellow-300" onClick={() => { setCurrentPage('About') }}>About Me</span>);
    const portfolio = (currentPage === 'Portfolio' ? <span className="mr-5 text-yellow-300 hover:text-gray-400">Portfolio</span> : <span className="mr-5 text-gray-100 hover:text-yellow-300" onClick={() => { setCurrentPage('Portfolio') }}>Portfolio</span>);
    const contact = (currentPage === 'Contact' ? <span className="mr-5 text-yellow-300 hover:text-gray-400">Contact Me</span> : <span className="mr-5 text-gray-100 hover:text-yellow-300" onClick={() => { setCurrentPage('Contact') }}>Contact Me</span>);

    return (
        <div className="bg-bluegray-800 md:sticky top-0 z-10 border-b-2 border-yellow-200 mb-2">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <span className="title-font text-gray-100 font-medium text-white mb-4 md:mb-0 ml-3 text-xl hover:text-yellow-300" onClick={() => { setCurrentPage('Home') }}>M. Travis Russell</span>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    {about}
                    {portfolio}
                    {contact}
                </nav>
            </div>
        </div>
    );
}

export default Navbar;