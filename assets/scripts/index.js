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
// end

// Get rid of the onClick in the html and do it all in here.
// Give them a shared class so you can select all of them at once
// const btnOptions = document.querySelectorAll('.sharedBtns');   (Terrible naming! ;P)
/*
    now you can simply loop over them and add an eventListener:
    btnOptions.forEach(button => button.addEventListener('click', callback)
*/
let previousClickType = document.getElementById('both');
let previousClickLang = document.getElementById('all');


function project(name, desc, both, type, all, language) {
    this.name = name;
    this.desc = desc;
    this.both = both;
    this.type = type;
    this.all = all;
    this.language = language;
}

const projects = [
    new project("Job Listing", "Static Page Containing Job Listings", BOTH, PERSONAL, ALL, HTML),
    new project("Calculator", "Basic JavaScript Calculator", BOTH, PERSONAL, ALL, HTML + ", " + JAVASCRIPT),
    new project("TODO", "Organize your everyday life with this web app made with React", BOTH, PERSONAL, ALL, HTML + ", " + JAVASCRIPT + ", " + REACT),
    new project("Login and Signup", "Static Page for logging in and signing up", BOTH, PERSONAL, ALL, HTML),
    new project("RNG Therapy Site", "WordPress Site that allows people to schedule appointments.", BOTH, CLIENT, ALL, WORDPRESS),
    new project("Coffee Shop Website","Static Page for a Coffee Shop", BOTH, CLIENT, ALL, HTML + ", " + JAVASCRIPT + ", " + REACT),
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
    fullFilter();
}

// FilteredArray should be const.
function fullFilter() {
    const filteredArray = [];
    let m = 0;
    /*
      if(ifDefaultChoices) {
            console.log("default values");
            //Just call function to print the projects Array otherwise run the loop
            //A function might be needed to handle if one of the default values but the other one isn't (type is BOTH lang is JavaScript)
        }
       else {
        }
    */

// Use .push(), the M variable isnt neccesary
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].type.includes(projectType) && projects[i].language.includes(projectLang)) {
            filteredArray.push(project(projects[i].name, projects[i].desc, projects[i].type, projects[i].language));

            m++;
        }
    }
    printArray(filteredArray);
}
// Same thing here
function printArray(filteredArray) {
    for(let i = 0; i < filteredArray.length; i++) {
        console.log(filteredArray.name + " " + filteredArray.desc + " " + filteredArray.type + " " + filteredArray.language);
    }
}