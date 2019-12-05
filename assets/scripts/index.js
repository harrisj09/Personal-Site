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
function project(name, desc, both, personal, client, all, html, js, wordpress, react) {
  this.name = name;
  this.desc = desc;
  this.both = both;
  this.personal = personal;
  this.client = client;
  this.all = all;
  this.html = html;
  this.js = js;
  this.wordpress = wordpress;
  this.react = react;
}

//Store objects
const projects = [
    // name, desc, both,  personal, client, all, html, js, wordpress, react
  new project("Job Listing", "Static Page Containing Job Listings", BOTH, PERSONAL, NULL, ALL, HTML, ),
  new project("Calculator", "HTML/CSS, JavaScript", "Basic JavaScript Calculator", "Personal"),
  new project("TODO", "HTML/CSS, JavaScript, React", "Organize your everyday life with this web app made with React", "Personal"),
  new project("Login and Signup", "HTML/CSS", "Static Page for logging in and signing up", "Personal"),
  new project("RNG Therapy Site", "WordPress", "WordPress Site that allows people to schedule appointments.", "Client"),
  new project("Coffee Shop Website", "HTML/CSS, JavaScript, React", "Static Page for a Coffee Shop", "Client"),
];

//Handles what color changes calls filter function at the end to automatically update results
function typeFilter(obj, string) {
    previousClick.style.backgroundColor = "white";
    previousClick.style.color = "#2185D0";
    obj.style.backgroundColor = "#2185D0";
    obj.style.color = "white";
    previousClick = obj;
    type = string;
    console.log(type)
}

function languageFilter(obj, string) {
    previousClickLang.style.backgroundColor = "#E0E1E2";
    previousClickLang.style.color = "#000000";
    obj.style.backgroundColor = "#2185D0";
    obj.style.color = "white";
    previousClickLang = obj;
    lang = string;
    console.log(lang);
}

//Checks what the variables type and lang have and filters out if that object contains that word
//I should probably make another array for the projects boxes (the outline)
function projectFilter() {
  const typeFilter

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