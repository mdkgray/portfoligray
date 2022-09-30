// import { Pages } from '@material-ui/icons';
import React from 'react';

// function Navigation({ currentPage, setCurrentPage }) {

//     return (
//             <li className="">
//                 <a
//                     href="#about"
//                     onClick={() => setCurrentPage('About')}
//                     className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
//                 >
//                     About
//                 </a>
//             </li>

//             <li className="">
//                 <a
//                     href="#portfolio"
//                     onClick={() => setCurrentPage('Portfolio')}
//                     className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
//                 >
//                     Portfolio
//                 </a>
//             </li>

//             <li className="">
//                 <a
//                     href="#contact"
//                     onClick={() => setCurrentPage('Contact')}
//                     className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//                 >
//                     Contact
//                 </a>
//             </li>

//             <li className="">
//                 <a
//                     href="#resume"
//                     onClick={() => setCurrentPage('Resume')}
//                     className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
//                 >
//                     Resume
//                 </a>
//             </li>       
//         </ul>
//     );
// }

function Navigation(props) {
        const {
        pages = [],
        setCurrentPage,
        currentPage,
        } = props;

    return (
        <nav>
            <ul className="flex-row">
                {pages.map((page) => (
                    <li
                        className={`mx-5 ${currentPage.name === page.name && 'navActive'}`}
                        key={page.name}
                    >
                        <span onClick={() => setCurrentPage(page)}>{page.name}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;