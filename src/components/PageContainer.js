import React, { useState } from "react";
import "../App.css";

import About from '../components/Pages/About';
import Contact from '../components/Pages/Contact';
import Portfolio from '../components/Pages/Portfolio';
import Resume from '../components/Pages/Resume';
import Navigation from './Navigation';

export default function ProfileContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        </div>
    );
}