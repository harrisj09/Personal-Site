//Type
const BOTH = 'BOTH';
const PERSONAL = 'PERSONAL';
const CLIENT = 'CLIENT';

const ALL = 'ALL';
const HTML = 'HTML/CSS';
const JAVASCRIPT = 'JAVASCRIPT';
const WORDPRESS = 'WORDPRESS';
const REACT = 'REACT';

//Base variables for filtering results
let projectType = BOTH;
let projectLang = ALL;
let filteredArray = [];

//Element make this blank and check if its null every time in the functions that handle this. If its null dont do anything otherwise change its colors
let previousClickType = document.getElementById('both');
let previousClickLang = document.getElementById('all');

//Create objects of the projects the actual version on my site will contain another parameter for a link for anchor tags 
function project(name, desc, both, type, all, language) {
  this.name = name;
  this.desc = desc;
  this.both = both;
  this.type = type;
  this.all = all;
  this.language = language;
}

//Store objects
const projects = [
    new project("Job Listing", "Static Page Containing Job Listings", BOTH, PERSONAL, ALL, HTML),
    new project("Calculator", "Basic JavaScript Calculator", BOTH, PERSONAL, ALL, HTML + ", " + JAVASCRIPT),
    new project("TODO", "Organize your everyday life with this web app made with React", BOTH, PERSONAL, ALL, HTML + ", " + JAVASCRIPT + ", " + REACT),
    new project("Login and Signup", "Static Page for logging in and signing up", BOTH, PERSONAL, ALL, HTML),
    new project("RNG Therapy Site", "WordPress Site that allows people to schedule appointments.", BOTH, CLIENT, ALL, WORDPRESS),
    new project("Coffee Shop Website","Static Page for a Coffee Shop", BOTH, CLIENT, ALL, HTML + ", " + JAVASCRIPT + ", " + REACT),
];

//Handles what color changes calls filter function at the end to automatically update results
function typeFilter(obj, string) {
    previousClickType.style.backgroundColor = "white";
    previousClickType.style.color = "#2185D0";
    obj.style.backgroundColor = "#2185D0";
    obj.style.color = "white";
    previousClickType = obj;
    projectType = string;
    projects.filter(finalFilter);
}

function languageFilter(obj, string) {
    previousClickLang.style.backgroundColor = "#E0E1E2";
    previousClickLang.style.color = "#000000";
    obj.style.backgroundColor = "#2185D0";
    obj.style.color = "white";
    previousClickLang = obj;
    projectLang = string;
    projects.filter(finalFilter);
}

function finalFilter() {
    //Have logic here for when the selection is all or both

    /*
    You're getting an error because the objects aren't defined
    Maybe a for each loop in my function to go through each index
    https://stackoverflow.com/questions/41511587/javascript-error-cannot-read-property-includes-of-undefined

    THIS WORKS

    const testVal = "HTML";
const testVal2 = "WEBSITE";

const h = "HTML"
const j = "JAVASCRIPT"
const w = "WEBSITE"


function obje(type, lang) {
  this.type = type;
  this.lang = lang;
}

const test = [
  new obje(h + ", " + j, w),
  new obje(j, "IM JOHN"),
];

filter();

function filter() {
  for(let i = 0; i < test.length; i++){
    console.log(test[i].type.includes(testVal) && test[i].lang.includes(testVal2));
  }
}
     */
    return projects.type.includes(projectType) && projects.language.includes(projectLang);
}