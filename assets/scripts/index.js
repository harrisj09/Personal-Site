//Type
const BOTH = 'BOTH';
const PERSONAL = 'PERSONAL';
const CLIENT = 'CLIENT';

const ALL = 'ALL';
const HTML = 'HTML/CSS';
const JAVASCRIPT = 'JAVASCRIPT';
const WORDPRESS = 'WORDPRESS';
const REACT = 'REACT';

// Make an object that stores the options
// state.projectType = HTML;
/*
    const state = {
        projectType: BOTH,
        projectLang: ALL,
    }
*/
let projectType = BOTH;
let projectLang = ALL;

// Get rid of the onClick in the html and do it all in here.
// Give them a shared class so you can select all of them at once
// const btnOptions = document.querySelectorAll('.sharedType');


/*
    now you can simply loop over them and add an eventListener:
    btnOptions.forEach(button => button.addEventListener('click', callback)
*/
let previousClickType = document.getElementById('both');
let previousClickLang = document.getElementById('all');


function project(name, desc, type, language) {
    this.name = name;
    this.desc = desc;
    this.type = type;
    this.language = language;
}

const projects = [
    new project("Job Listing", "Static Page Containing Job Listings", PERSONAL, HTML),
    new project("Calculator", "Basic JavaScript Calculator", PERSONAL, HTML + ", " + JAVASCRIPT),
    new project("TODO", "Organize your everyday life with this web app made with React", PERSONAL, HTML + ", " + JAVASCRIPT + ", " + REACT),
    new project("Login and Signup", "Static Page for logging in and signing up", PERSONAL, HTML),
    new project("RNG Therapy Site", "WordPress Site that allows people to schedule appointments.", CLIENT, WORDPRESS),
    new project("Coffee Shop Website","Static Page for a Coffee Shop", CLIENT, HTML + ", " + JAVASCRIPT + ", " + REACT),
];

// Make css classes, and add/remove classes based on the STATE. Instead of directly changing it's property values
function typeFilter(obj, string) {
    //Add DOM for hovering
    previousClickType.style.backgroundColor = "white";
    previousClickType.style.color = "#2185D0";
    obj.style.backgroundColor = "#2185D0";
    obj.style.color = "white";
    previousClickType = obj;
    projectType = string;
    console.log(projectType);
    fullFilter();
}

// Now you can simply do state.projectType = HTML;
function languageFilter(obj, string) {
    //Add DOM for hovering
    previousClickLang.style.backgroundColor = "#E0E1E2";
    previousClickLang.style.color = "#000000";
    obj.style.backgroundColor = "#2185D0";
    obj.style.color = "white";
    previousClickLang = obj;
    projectLang = string;
    console.log(projectLang);
    fullFilter();
}

// FilteredArray should be const.
function fullFilter() {
    const filteredArray = [];
      if(projectType === BOTH && projectLang === ALL) {
            console.log("default values");
            domRegularArray(projects);
            //Just call function to print the projects Array otherwise run the loop
            //A function might be needed to handle if one of the default values but the other one isn't (type is BOTH lang is JavaScript)
        }
       else {
          for (let i = 0; i < projects.length; i++) {
              //Only print personal and HTML/CSS for some reason
              if (projects[i].type.includes(projectType) && projects[i].language.includes(projectLang)) {
                  //filteredArray.push(project(projects[i].name, projects[i].desc, projects[i].type, projects[i].language));
                  filteredArray[i] = Object.assign({}, projects[i]);
              }
          }
      }
    printArray(filteredArray);
}

function printArray(filteredArray) {
    console.log(filteredArray[0].name);
    for(let i = 0; i < filteredArray.length; i++) {
        console.log(filteredArray[i]);
    }

}

//Have the function in projectDOM to handle printing out the projects onto the screen