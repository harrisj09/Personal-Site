/*
Eventually apply these changes to this script
https://pastebin.com/tHhu5NES

https://jsbin.com/sujocoxara/edit?html,js,console,output

https://stackoverflow.com/questions/59276857/using-javascript-dom-to-rewrite-an-array-of-data-attributes-using-an-array-of-ob
 */

let htmlRewrite = ``;
const wrapper = document.getElementById("wrapper");

//Types
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

let previousClickType = document.getElementById('both');
let previousClickLang = document.getElementById('all');

//Add an instance variable for replacing image with
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
    new project("RNG Therapy Site", "WordPress Site that allows users to schedule appointments.", CLIENT, WORDPRESS),
    new project("Coffee Shop Website","Static Page for a Coffee Shop", CLIENT, HTML + ", " + JAVASCRIPT + ", " + REACT),
];

function typeFilter(obj, string) {
    //Add DOM for hovering
    previousClickType.style.backgroundColor = "white";
    previousClickType.style.color = "#2185D0";
    obj.style.backgroundColor = "#2185D0";
    obj.style.color = "white";
    previousClickType = obj;
    projectType = string;
    console.log(projectType);
    fullHandler();
}

function languageFilter(obj, string) {
    //Add DOM for hovering
    previousClickLang.style.backgroundColor = "#E0E1E2";
    previousClickLang.style.color = "#000000";
    obj.style.backgroundColor = "#2185D0";
    obj.style.color = "white";
    previousClickLang = obj;
    projectLang = string;
    console.log(projectLang);
    fullHandler();
}

function fullHandler() {
    htmlRewrite = ``;
    const filteredArray = [];
      if(projectType === BOTH && projectLang === ALL) {
          wrapper.innerHTML = "";
          projects.forEach(replaceDOM);
          wrapper.innerHTML = htmlRewrite;
        }

      //type is default, lang is not
      else if(projectType === BOTH && projectLang !== ALL) {
          for (let i = 0; i < projects.length; i++) {
              if (projects[i].language.includes(projectLang)) {
                  filteredArray[i] = Object.assign({}, projects[i]);
              }
          }
          wrapper.innerHTML = "";
          filteredArray.forEach(replaceDOM);
          wrapper.innerHTML = htmlRewrite;
      }

      //Type isnt default, lang is
      else if(projectType !== BOTH && projectLang === ALL) {
          for (let i = 0; i < projects.length; i++) {
              if (projects[i].type.includes(projectType)) {
                  filteredArray[i] = Object.assign({}, projects[i]);
              }
          }
          wrapper.innerHTML = "";
          filteredArray.forEach(replaceDOM);
          wrapper.innerHTML = htmlRewrite;
      }

      //Normal Filter
       else {
          for (let i = 0; i < projects.length; i++) {
              if (projects[i].type.includes(projectType) && projects[i].language.includes(projectLang)) {
                  filteredArray[i] = Object.assign({}, projects[i]);
              }
          }
          wrapper.innerHTML = "";
          filteredArray.forEach(replaceDOM);
          wrapper.innerHTML = htmlRewrite;
      }
}

function replaceDOM(filteredArray, index) {
    htmlRewrite += `
                    <div class="row" data-project="${index}">
                    <img class="logo" src="https://static.vecteezy.com/system/resources/previews/000/350/423/non_2x/vector-checklist-icon.jpg" alt="image">
                      <div class="top">
                    <h3 class="title">${filteredArray.name}</h3>
                    <h6 class="language">${filteredArray.language}</h6>
                    <p class="desc">${filteredArray.desc}</p>
                </div>

                <div class="bottom">
                    <div class="image"> </div>
                    <p class="type">${filteredArray.type}</p>
                </div>
                 </div>
    `;
}