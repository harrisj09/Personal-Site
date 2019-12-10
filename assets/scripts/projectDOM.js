/*
Store all data attributes into an array.
- Have a for loop to run DOM to replace elements with whats stored in each object
- in order to prevent over loading the projects and exceptions an if statement will be needed to check the size of the filteredArray
 If its greater than 6 (or 5 in indexes) have the for loop size be six, otherwise have the loops conditional be the size of the filtered array

- This also means you're gonna have to have a default array.
 */

const projectAttributes = [
    document.querySelector('[data-project="1"]'),
    document.querySelector('[data-project="2"]'),
    document.querySelector('[data-project="3"]'),
    document.querySelector('[data-project="4"]'),
    document.querySelector('[data-project="5"]'),
    document.querySelector('[data-project="6"]'),
];

function domReplaceProjects(projects) {
    console.log(projectAttributes.length);
    //Use projects array size for loop conditional
    if(projects.length <= 6) {
        for(let i = 0; i <= projects.length; i++) {
        }
    }
    //Use data attributes array size for loop conditional
    else {
        for(let i = 0; i < projectAttributes.length; i++) {
            console.log(i);
        }
    }
}

//Handles DOM
/*
const createProjectDescription = (project) => {
    return `
  <div class="top">
    <h3 class="title">${project.name}</h3>
    <h6 class="language">${project.desc}</h6>
    <p class="desc">${project.language}</p>
  </div>
  `
};


const createProjectBottom = (project) => {
    return `
<div class="bottom">
            <div class="image"> </div>
            <p class="type">${project.type}</p>
            </div>
`
};

const createProjectEl = (project) => {
    return `
    <div class="row">
          <img class="logo" src="https://static.vecteezy.com/system/resources/previews/000/350/423/non_2x/vector-checklist-icon.jpg" alt="image">
          ${createProjectDescription(project)}
          ${createProjectBottom(project)}
    </div>
  `
};

const draw = () => {
    const wrapper = document.getElementById('wrapper');

    let content = '';

    for (let project of projects) {
        content += createProjectEl(project)
    }

    wrapper.innerHTML = content;
}
*/