//Type
const BOTH = 'BOTH';
const PERSONAL = 'PERSONAL';
const CLIENT = 'CLIENT';

const ALL = 'ALL';
const HTML = 'HTML/CSS';
const JAVASCRIPT = 'JAVASCRIPT';
const WORDPRESS = 'WORDPRESS';
const REACT = 'REACT';

let projectType = BOTH;
let projectLang = ALL;
const ifDefaultChoices = projectType === BOTH && projectLang === ALL;

//Element make this blank and check if its null every time in the functions that handle this. If its null dont do anything otherwise change its colors
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

//Handles what color changes calls filter function at the end to automatically update results
function typeFilter(obj, string) {
    previousClickType.style.backgroundColor = "white";
    previousClickType.style.color = "#2185D0";
    obj.style.backgroundColor = "#2185D0";
    obj.style.color = "white";
    previousClickType = obj;
    projectType = string;
    fullFilter();
}

function languageFilter(obj, string) {
    previousClickLang.style.backgroundColor = "#E0E1E2";
    previousClickLang.style.color = "#000000";
    obj.style.backgroundColor = "#2185D0";
    obj.style.color = "white";
    previousClickLang = obj;
    projectLang = string;
    fullFilter();
}

function fullFilter() {
    let filteredArray = [];
    let m = 0;
    if(ifDefaultChoices) {
        //Just call function to print the projects Array otherwise run the loop
        //A function might be needed to handle if one of the default values but the other one isn't (type is BOTH lang is JavaScript)
    }
    else {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].type.includes(projectType) && projects[i].lang.includes(projectLang)) {
                filteredArray[m] = new project(projects[i].type, projects[i].lang);
                console.log( m + " " + filteredArray[m].type + " and " + filteredArray[m].lang);
                m++;
            }
        }
    }
}

/*
    THIS WORKS

const testVal = "HTML";
const testVal2 = "WEBSITE";

const h = "HTML";
const j = "JAVASCRIPT";
const w = "WEBSITE";


function obje(type, lang) {
  this.type = type;
  this.lang = lang;
}

const test = [
  new obje(h + ", " + j, w),
  new obje(j, "IM JOHN"),
];

let blankArray = [];
let m = 0;

filter();

function filter() {
  for(let i = 0; i < test.length; i++){
    if(test[i].type.includes(testVal) && test[i].lang.includes(testVal2)) {
      blankArray[m] = new obje(test[i].type, test[i].lang);
      m++;
    }
  }
  console.log(blankArray[0].type + " is a " + blankArray[0].lang);
}
 */