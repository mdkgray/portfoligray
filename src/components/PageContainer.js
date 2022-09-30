import React from "react";
import "../App.css";

import About from '../components/Pages/About';
import Contact from '../components/Pages/Contact';
import Portfolio from '../components/Pages/Portfolio';
import Resume from '../components/Pages/Resume';
import PageContent from './PageContent';

export default function ProfileContainer({currentPage}) {    

    const renderPage = () => {
        if (currentPage.name === 'About') {
            return <About />;
        }
        if (currentPage.name === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage.name === 'Resume') {
            return <Resume />;
        }
        return <Contact />;
    };

    return (
        <div>
            <h2>{currentPage.name}</h2>
            <PageContent>{renderPage()}</PageContent>
        </div>
    );
}