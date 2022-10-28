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
        name: 'Firestarter', 
        description: 'A DAO (decentralised autonomous organisation) inspired full stack MERN application to connect developers with developers, and assist in lighting the spark of innovation for projects. Developers can signup and post new projects they are working on as well as browse other projects from other developers. Projects of interest then have the ability to be funded by developers or people who are not signed up but browsing the site.', 
        technologies: ['MongoDB | Express.js | React | Node.js | GraphQL | Javascript | Apollo | JWT | MUI | npm | Heroku'], 
        sourceCode: 'https://github.com/mdkgray/fireStarter', 
        livePreview: 'https://secret-headland-78641.herokuapp.com/',
        image: '/assets/projectImages/firestarter.png'
    },
    {
        name: 'Check-A-Tradie', 
        description: 'Check-A-Tradie allows a tradesperson looking for work to display their services, skills and certification so that a consumer can browse a list of options for a service they need completing. A business owner can sign up and register their business, edit their dashboard and profile to showcase what they offer. Our application also allows consumers to be able to browse the selection of businesses and select one based on the job they require to be completed.', 
        technologies: ['Node.js | Express.js | MySQL | Sequelize | Javascript | Handlebars.js | Bootstrap | npm | Heroku'], 
        sourceCode: 'https://github.com/mdkgray/check-a-tradie', 
        livePreview: 'https://pacific-waters-66801.herokuapp.com/',
        image: '/assets/projectImages/check_a_tradie.png'
    },
    {
        name: 'bookMERN', 
        description: 'An application designed and created for an avid book reader, bookMERN allows for the searching of new books to read which can be saved as a list for future reference and purchase. The front end is built using React which is served with a GraphQL API built with an Apollo server.', 
        technologies: ['MongoDB | Express.js | React | Node.js | Mongoose | GraphQL | Javascript | JWT | Apollo-Server | Heroku'], 
        sourceCode: 'https://github.com/mdkgray/bookMERN', 
        livePreview: 'https://thawing-escarpment-08809.herokuapp.com/',
        image: '/assets/projectImages/bookMERN.png'
    },
    {
        name: 'Marvellous', 
        description: 'Journey into the Marvel Universe and discover images of your favourite comics and characters using the Marvel API and Google Images API.', 
        technologies: ['Javascript | HTML | CSS | Bootstrap | API'], 
        sourceCode: 'https://github.com/mdkgray/marvel_universe', 
        livePreview: 'https://mdkgray.github.io/marvel_universe/',
        image: '/assets/projectImages/marvelgif.gif'
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
        name: 'README Generator',  
        description: 'A tool to generate a README file. A developer can use this command-line application to quickly create a professional README file where the content of the README is populated from responses to questions about the project repository.', 
        technologies: ['Node.js | Javascript | Command-Line'], 
        sourceCode: 'https://github.com/mdkgray/README_generator', 
        livePreview: 'https://github.com/mdkgray/README_generator',
        image: '/assets/projectImages/README_generator.png'
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

const resume = {
    resume: '/portfoligray/assets/resume/mdkgray.pdf'
}

export { header, about, projects, skills, contact, resume }