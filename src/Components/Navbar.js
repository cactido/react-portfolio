import React from 'react';

const Navbar = ({ currentPage, setCurrentPage }) => {
    const skills = (currentPage === 'Skills' ? <span className="mr-5 text-gray-100 hover:text-gray-400 border-b-2 border-yellow-200">Skills</span> : <span className="mr-5 text-gray-100 hover:text-yellow-300 border-b-2 border-bluegray-800" onClick={() => { setCurrentPage('Skills') }}>Skills</span>);
    const portfolio = (currentPage === 'Portfolio' ? <span className="mr-5 text-gray-100 hover:text-gray-400 border-b-2 border-yellow-200">Portfolio</span> : <span className="mr-5 text-gray-100 hover:text-yellow-300 border-b-2 border-bluegray-800" onClick={() => { setCurrentPage('Portfolio') }}>Portfolio</span>);
    const contact = (currentPage === 'Contact' ? <span className="mr-5 text-gray-100 hover:text-gray-400 border-b-2 border-yellow-200">Contact Me</span> : <span className="mr-5 text-gray-100 hover:text-yellow-300 border-b-2 border-bluegray-800" onClick={() => { setCurrentPage('Contact') }}>Contact Me</span>);
    const resume = (currentPage === 'Resume' ? <span className="inline-flex items-center mt-4 md:mt-0 text-gray-100 hover:text-gray-400 border-b-2 border-yellow-200">Resume</span> : <span className="inline-flex items-center mt-4 md:mt-0 text-gray-100 hover:text-yellow-300 border-b-2 border-bluegray-800" onClick={() => { setCurrentPage('Resume') }}>Resume</span>);

    return (
        <div className="bg-bluegray-800 md:sticky top-0 z-10 border-b-2 border-yellow-300 mb-2">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <span className="title-font text-gray-100 font-medium text-white mb-4 md:mb-0 ml-3 text-xl hover:text-yellow-200" onClick={() => { setCurrentPage('Home') }}>M. Travis Russell</span>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    {portfolio}
                    {skills}
                    {contact}
                </nav>
                {resume}
            </div>
        </div>
    );
}

export default Navbar;