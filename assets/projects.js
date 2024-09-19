const projects = [
    {
        id: 1, 
        dateCompleted: new Date('2024-04-01'), 
        title: 'Thesis', 
        description: 'Optimizing the Interpretability of Contrastive Learning Models: An Analysis of Augmentation Strategies', 
        accomplishments: [
            'Fourth year EngSci thesis',
            'Accepted to Conference on Robots and Vision'
        ],
        imageURL: '/assets/img/my_images/projects/thesis.jpg',
        website: 'https://engsci.utoronto.ca/program/thesis/',
        github: 'https://github.com/amyy2/thesis',
        isExpanded: false
    },
    {
        id: 2, 
        dateCompleted: new Date('2023-12-01'), 
        title: 'Mobile App', 
        description: 'Mobile application for startup', 
        accomplishments: [
            'Used Flutter and Firebase',
            'Register/login to the app',
            'Recommend tasks to complete based on user\'s preferences',
            'Display open tasks'
        ],
        imageURL: '/assets/img/my_images/projects/remission.png',
        website: 'https://www.remissionsupport.com/',
        github: 'https://github.com/amyy2/remission'
    },
    {
        id: 3, 
        dateCompleted: new Date('2022-10-01'), 
        title: 'Aircraft Non Conformance Dashboard', 
        description: 'Web application displaying open issues on aircraft in production', 
        accomplishments: [
            'Users can view current data from a SQL database',
            'Users can update data with comments and flags'
        ],
        imageURL: '/assets/img/my_images/projects/bombardier.avif',
        website: 'https://bombardier.com/en/aircraft/global-7500',
        github: 'https://github.com/amyy2'
    },
    {
        id: 4, 
        dateCompleted: new Date('2023-12-01'), 
        title: 'Capstone Project with Canadian Sports Institute', 
        description: 'Machine learning algorithm to classify skiing sub-techniques', 
        accomplishments: [
            'Built a convolutional neural network from scratch to classify raw IMU data into skiing strides',
            'Built a UI to display the results'
        ],
        imageURL: '/assets/img/my_images/projects/csi.jpg',
        github: 'https://github.com/baronet2/csi_capstone'
    },
    {
        id: 5, 
        dateCompleted: new Date('2023-08-01'), 
        title: 'MachNet', 
        description: 'AI-powered CFD engine for aerodynamic analysis', 
        accomplishments: [
            'Won first place in a Digital Transformation Competition',
            'Presented design to senior executives'
        ],
        imageURL: '/assets/img/my_images/projects/machnet.png'
    },
    {
        id: 6, 
        dateCompleted: new Date('2021-12-01'), 
        title: 'Automated Microscopic Malarial Diagnosis Software', 
        description: 'Machine learning model to classify blood samples', 
        accomplishments: [
            'Collaborated on a student engineer team to develop automated malaria diagnosis software using ML',
            'Produced a detailed design report and pitch to present our design and prototype to stakeholders'
        ],
        imageURL: '/assets/img/my_images/projects/malaria.webp',
        github: 'https://github.com/nshdesai/micromalaria'
    }
];

function sortProjects(projects) {
    projects.sort((a, b) => b.dateCompleted - a.dateCompleted)
    return projects;
};

function renderProjects(projects) {

    // Sort projects by date
    sortedProjects = sortProjects(projects);

    // Get latest project
    latestProject = sortedProjects[0];
    
    // Update DOM
    document.getElementById("latestProject").innerHTML = `
        <div class="background" style="background-image: url(${latestProject.imageURL});"></div>
        
        <div class="content">
            <div class="title">
                <h1>Latest project:</h1>
                <h1 id="title">${latestProject.title}</h1>
            </div>

            <div class="description">
                <h2>${latestProject.description}</h2>
            </div>

            <div id="details-${latestProject.id}" style="display: none;" class="details">
                <p>Accomplishments:</p>
                <ul id="accomplishments-${latestProject.id}" class="accomplishments-list"></ul>
            </div>
            
            <div class="footer">
                <button onclick="toggleReadMore(${latestProject.id})" id="readMoreButton-${latestProject.id}">Read more</button>
                <div class="card-action">
                    <a href=${latestProject.website} target="_blank" data-position="top" data-tooltip="View Online"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                        class="fa fa-external-link"></i></a>
                    <a href=${latestProject.github} target="_blank" data-position="top" data-tooltip="View Github"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                        class="fa fa-github"></i></a>
                </div>
            </div>
        </div>
    `

    for (var i = 0; i < latestProject.accomplishments.length; i++) {
        document.getElementById(`accomplishments-${latestProject.id}`).innerHTML += `
            <li>☆ ${latestProject.accomplishments[i]}</li>
        `
    }
}

function renderMoreProjects() {

    document.getElementById("viewMoreButton").style.display = "none"
    document.getElementById("previous-projects").style.display = "flex"

    for (var i = 1; i < projects.length; i++) {
        document.getElementById("projects-container").innerHTML += `
        <div class="project">
        <div class="background" style="background-image: url(${projects[i].imageURL});"></div>
        
        <div class="content">
            <div class="title">
                <h1 id="title">${projects[i].title}</h1>
            </div>

            <div class="description">
                <h2>${projects[i].description}</h2>
            </div>

            <div id="details-${projects[i].id}" style="display: none;" class="details">
                <p>Accomplishments:</p>
                <ul id="accomplishments-${projects[i].id}" class="accomplishments-list"></ul>
            </div>
            
            <div class="footer">
                <button onclick="toggleReadMore(${projects[i].id})" id="readMoreButton-${projects[i].id}">Read more</button>
                <div class="card-action">
                    <a href=${projects[i].website} target="_blank" data-position="top" data-tooltip="View Online"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                        class="fa fa-external-link"></i></a>
                    <a href=${projects[i].github} target="_blank" data-position="top" data-tooltip="View Github"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                        class="fa fa-github"></i></a>
                </div>
            </div>
        </div>
        </div>
        `

        for (var j = 0; j < projects[i].accomplishments.length; j++) {
            document.getElementById(`accomplishments-${projects[i].id}`).innerHTML += `
                <li>☆ ${projects[i].accomplishments[j]}</li>
            `
        }
    }
}

function toggleReadMore(id) {
    let currProject = projects.find(p => p.id == id);
    currProject.isExpanded = !currProject.isExpanded;
    let detailsElement = document.getElementById(`details-${id}`);

    if (currProject.isExpanded) {
        detailsElement.style.display = "block";
        document.getElementById(`readMoreButton-${id}`).innerText = "Read less"
    } else {
        detailsElement.style.display = "none";
        document.getElementById(`readMoreButton-${id}`).innerText = "Read more"
    }
}

renderProjects(projects);