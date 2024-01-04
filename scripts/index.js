const elemProjects = document.getElementById('project__content')

const creatImage = (projectImage) => {
    
    const elemPicture = document.createElement('picture');
    const elemImg = document.createElement('img');

    elemImg.setAttribute('src', projectImage);

    elemPicture.appendChild(elemImg);

    return elemPicture
}

const createStrong = (projectName) => {
    const elemStrong = document.createElement('strong');
    elemStrong.innerText = projectName

    return elemStrong
}

const createTags = (projectTags) => {
    const elemTags = document.createElement('div');
        projectTags.forEach(tag => {
            const elemTag = document.createElement('span')
            elemTag.innerText = tag

            elemTags.appendChild(elemTag)
        })

        return elemTags
}

const createProject = (project, index) => {
    const elemProject = document.createElement('a');

    elemProject.setAttribute('href', project.link);
    elemProject.setAttribute('target', '_blank');

    elemProject.setAttribute('data-aos', 'zoom-in-up')
    elemProject.setAttribute('data-aos-duration', '800')
    elemProject.setAttribute('data-aos-easing', 'ease-in-out')
    elemProject.setAttribute('data-aos-offset', '-100')
    elemProject.setAttribute('data-aos-delay', 300 * (index + 1))

    elemProject.classList.add('project');


    // add imagem da capa

    elemProject.appendChild(creatImage(project.image));

    const elemStrong = document.createElement('strong');
    elemStrong.innerText = project.name

    // add nome do proojeto

    elemProject.appendChild(createStrong(project.name));

    // add tags do projeto

    elemProject.appendChild(createTags(project.tags));

    return elemProject
}
const loadProjects = (projects) => {
    projects.forEach((project, index) => {
        elemProjects.appendChild(createProject(project, index)) 
    });
}

fetch('./projects.json').then(response => response.json()).then(loadProjects)
