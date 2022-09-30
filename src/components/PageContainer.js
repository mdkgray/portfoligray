import React from "react";
import "../App.css";

import About from '../components/Pages/About';
import Contact from '../components/Pages/Contact';
import Projects from './Pages/Projects';
import Resume from '../components/Pages/Resume';
import PageContent from './PageContent';

export default function ProfileContainer({currentPage}) {    

    const renderPage = () => {
        if (currentPage.name === 'About') {
            return <About />;
        }
        if (currentPage.name === 'Projects') {
            return <Projects />;
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