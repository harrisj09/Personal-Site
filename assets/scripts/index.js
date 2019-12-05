//Type
const BOTH = 'BOTH';
const PERSONAL = 'PERSONAL';
const CLIENT = 'CLIENT';

//Language
const ALL = 'ALL';
const HTML = 'HTML/CSS';
const JAVASCRIPT = 'JAVASCRIPT';
const WORDPRESS = 'WORDPRESS';
const REACT = 'REACT';

//Base variables for filtering results
let projectType;
let projectLang;

//Apply this to the instance variables it doesn't apply to
const NULL = null;

//Element 
let previousClick = document.getElementById('both');
let previousClickLang = document.getElementById('all');

//Create objects of the projects the actual version on my site will contain another parameter for a link for anchor tags 
function project(name, desc, both, personal, client, all, html, wordpress, js, react) {
  this.name = name;
  this.desc = desc;
  this.both = both;
  this.personal = personal;
  this.client = client;
  this.all = all;
  this.html = html;
  this.wordpress = wordpress;
  this.js = js;
  this.react = react;
}

//Store objects
const projects = [
    // name, desc, both,  personal, client, all, html, wordpress, js, react
  new project("Job Listing", "Static Page Containing Job Listings", BOTH, PERSONAL, NULL, ALL, HTML, NULL, NULL, NULL),
  new project("Calculator", "Basic JavaScript Calculator", BOTH, PERSONAL, NULL, ALL, HTML, NULL, JAVASCRIPT, NULL),
  new project("TODO", "Organize your everyday life with this web app made with React", BOTH, PERSONAL, NULL, ALL, HTML, NULL, JAVASCRIPT, REACT),
  new project("Login and Signup", "Static Page for logging in and signing up", BOTH, PERSONAL, NULL, ALL, HTML, NULL, NULL, NULL),
  new project("RNG Therapy Site", "WordPress Site that allows people to schedule appointments.", BOTH, NULL, CLIENT, ALL, NULL, WORDPRESS, NULL, NULL),
  new project("Coffee Shop Website","Static Page for a Coffee Shop", BOTH, NULL, CLIENT, ALL, HTML, NULL, JAVASCRIPT, REACT),
];

//Handles what color changes calls filter function at the end to automatically update results
function typeFilter(obj, string) {
    previousClick.style.backgroundColor = "white";
    previousClick.style.color = "#2185D0";
    obj.style.backgroundColor = "#2185D0";
    obj.style.color = "white";
    previousClick = obj;
    projectType = string;
    projects.filter(filterArray);
    console.log(projects);
}

function languageFilter(obj, string) {
    previousClickLang.style.backgroundColor = "#E0E1E2";
    previousClickLang.style.color = "#000000";
    obj.style.backgroundColor = "#2185D0";
    obj.style.color = "white";
    previousClickLang = obj;
    projectLang = string;
    //projects.filter(filterArray);
    projects.filter(filterArray);
    console.log(projects);
}

//Checks what the variables type and lang have and filters out if that object contains that word
//I should probably make another array for the projects boxes (the outline)
function filterArray() {
    return projects.indexOf(projectType) !== -1 && projects.indexOf(projectLang) !== -1;
}

/*
  const isValid = (projects[i].type == type && projects[i].lang == lang);
  //For loop starts checks base variables.
  for(i = 0; i < projects.length; ++i) {
      if(isValid) {
        //Logic goes here
      }
  }
*/