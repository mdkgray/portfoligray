import React from 'react';
import { projects } from '../../content';
import CardInfo from '../CardInfo';

export default function Projects() {
    console.log(projects);

    return (
    <div>
        <h1>Projects</h1>
        <div>
            {projects.map((project, i) => (
                <CardInfo
                    key={i}
                    name={project.name}
                    image={project.image}
                    description={project.description}
                    technologies={project.technologies}
                    sourceCode={project.sourceCode}
                    livePreview={project.livePreview}
                />
            ))}
        </div>
    </div>
    );
}