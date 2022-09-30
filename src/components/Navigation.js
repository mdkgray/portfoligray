import { Pages } from '@material-ui/icons';
import React from 'react';

function Navigation({ currentPage, setCurrentPage }) {
    const pages = pages.map((page) => {
        <li>{page}</li>
    }); 


    return (
        <ul className="">
            {/* {pages.map(page) => (
                <li key={page}>
                    page
                    onClick={() => setCurrentPage(page)}
                </li>
            )}


            <ul>
                {
                pages.map(page)(function(item, i){
                    <li>
                        key={page},
                        onClick={() => setCurrentPage(page)}
                    </li>
                })
                }
            </ul>
            */}

            <li>
                <a>
                    
                </a>
            </li>


            <li className="">
                <a
                    href="#about"
                    onClick={() => setCurrentPage('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </a>
            </li>

            <li className="">
                <a
                    href="#portfolio"
                    onClick={() => setCurrentPage('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>

            <li className="">
                <a
                    href="#contact"
                    onClick={() => setCurrentPage('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>

            <li className="">
                <a
                    href="#resume"
                    onClick={() => setCurrentPage('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </li>       
        </ul>
    );
}

export default Navigation;