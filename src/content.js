const header = {
    homepage: '', 
    imgFile: 'ZORB.jpg'
}

const about = {
    photo: '/assets/images/headshot.png', 
    name: 'Mackenzie Gray',
    role: 'Full Stack Developer', 
    description: 'I am a full stack developer based in Sydney, Australia. With a focus on attention to detail, creating polished and efficient code and working with people, my passion lies in product management in the technology space. I have a certificate in full stack develop from the University of Sydney Coding Bootcamp.', 
    resume: 'https://docs.google.com/document/d/1xrMoZIJozxEb6IeuwHAe5m69wsSm24ypRVbAMgtofhE/edit?usp=sharing',
    social: {
        github: 'https://github.com/mdkgray',
        linkedin: 'https://www.linkedin.com/in/mackenzie-gray-5a68aa46/',
        twitter: 'https://twitter.com/mackenzie_gray3'
    }
}

const projects = [
    {
        name: 'Check-A-Tradie', 
        description: 'Check-A-Tradie allows a tradesperson looking for work to display their services, skills and certification so that a consumer can browse a list of options for a service they need completing. A business owner can sign up and register their business, edit their dashboard and profile to showcase what they offer. Our application also allows consumers to be able to browse the selection of businesses and select one based on the job they require to be completed.', 
        technologies: ['Node.js | Express.js | MySQL | Sequelize | Javascript | Handlebars.js | Bootstrap | npm | Heroku'], 
        sourceCode: 'https://github.com/mdkgray/check-a-tradie', 
        livePreview: 'https://pacific-waters-66801.herokuapp.com/',
        image: '/assets/projectImages/check_a_tradie.png'
    },
    {
        name: 'Employee Tracker', 
        description: 'A command line application that can be used by a business owner to view and manage the departments, roles and employees in the company. Data in the database can be added, deleted and modified using prompts presented to the user in the command line.', 
        technologies: ['Javascript | MySQL | npm'], 
        sourceCode: 'https://github.com/mdkgray/employee_tracker', 
        livePreview: 'https://github.com/mdkgray/employee_tracker',
        image: '/assets/projectImages/employee_tracker.png'
    },
    {
        name: 'Tech Blog', 
        description: 'A blog site for a developer that writes about technology. They can publish articles, posts, thoughts and opinions which can be viewed and commented on by other developers and application users.', 
        technologies: ['Node.js | Express.js | MySQL | Sequelize | Javascript | Handlebars.js | Bootstrap | npm | Heroku'], 
        sourceCode: 'https://github.com/mdkgray/tech_blog', 
        livePreview: 'https://frozen-basin-60308.herokuapp.com/',
        image: '/assets/projectImages/tech_blog.png'
    },
    {
        name: 'Weather Dashboard', 
        description: 'An application to be used by a traveler to check the weather outlook for multiple cities. This will allow the user to plan their trip according to the weather conditions of a certain destination.', 
        technologies: ['HTML | Moment.js | JQuery | Javascript | CSS | Bootstrap | OpenWeather One Call API', ], 
        sourceCode: 'https://github.com/mdkgray/weather_dashboard', 
        livePreview: 'https://mdkgray.github.io/weather_dashboard/',
        image: '/assets/projectImages/weather_app.png'
    },
    {
        name: 'Note Taker', 
        description: 'A note taker application to allow business owners to write and save notes in order to keep track of tasks that need to be completed. Too often are those little tasks forgotten about. Well no more with this nifty tool. ', 
        technologies: ['Express.js | Node.js | Javascript | CSS | HTML'], 
        sourceCode: 'https://github.com/mdkgray/note_taker', 
        livePreview: 'https://calm-sea-51607.herokuapp.com/,',
        image: '/assets/projectImages/note_taker.png'
    },
    {
        name: 'Team Profile Generator', 
        description: 'Command-line application used to display the basic information of a work team in a HTML file. Using question prompts in the terminal, information such as email address and GitHub profiles can be generated and subsequent connections can be made.', 
        technologies: ['Express.js | Node.js | Javascript | CSS | HTML | npm'], 
        sourceCode: 'https://github.com/mdkgray/team_profile_generator', 
        livePreview: 'https://github.com/mdkgray/team_profile_generator',
        image: '/assets/projectImages/team_generator.png'
    }
]

const skills = [
    {
        name: 'HTML', 
        image: '/assets/icons/html.png'
    },
    {
        name: 'CSS', 
        image: '/assets/icons/css.png'
    },
    {
        name: 'Javascript',
        image: '/assets/icons/js.png'
    }, 
    {
        name: 'Node', 
        image: '/assets/icons/node.png'
    }, 
    {
        name: 'MongoDB', 
        image: '/assets/icons/mongodb.png'
    }, 
    {
        name: 'MySQL', 
        image: '/assets/icons/mysql.png'
    }, 
    {
        name: 'React', 
        image: '/assets/icons/react.png'
    },
    {
        name: 'Github',
        image: '/assets/icons/github.png'
    }
]

const contact = {
    email: 'mdkulen@gmail.com'
}

export { header, about, projects, skills, contact }