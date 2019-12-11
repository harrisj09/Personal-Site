/*
Eventually apply these changes to this script
https://pastebin.com/tHhu5NES


https://jsbin.com/sujocoxara/edit?html,js,console,output
 */

let htmlRewrite = ``;
let wrapper = document.getElementById("wrapper");

const projectAttributes = [
    document.querySelector('[data-project="1"]'),
    document.querySelector('[data-project="2"]'),
    document.querySelector('[data-project="3"]'),
    document.querySelector('[data-project="4"]'),
    document.querySelector('[data-project="5"]'),
    document.querySelector('[data-project="6"]'),
];

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
    new project("RNG Therapy Site", "WordPress Site that allows people to schedule appointments.", CLIENT, WORDPRESS),
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
    let index = 0;
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

          filteredArray.forEach(printArray);
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

          //debugging
          filteredArray.forEach(printArray);
      }

      //Normal Filter
       else {
          for (let i = 0; i < projects.length; i++) {
              console.log(projects[i].type.includes(projectType) && projects[i].language.includes(projectLang));
              if (projects[i].type.includes(projectType) && projects[i].language.includes(projectLang)) {
                  filteredArray[i] = Object.assign({}, projects[i]);
              }
          }

          wrapper.innerHTML = "";

          filteredArray.forEach(replaceDOM);

          wrapper.innerHTML = htmlRewrite;

          filteredArray.forEach(printArray);
      }
}

function printArray(filteredArray) {
    console.log(filteredArray);
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

/*          projectAttributes.forEach(function() {
                        htmlRewrite += `
                      <div class="top">
                    <h3 class="title">${filteredArray[index].name}</h3>
                    <h6 class="language">${filteredArray[index].language}</h6>
                    <p class="desc">${filteredArray[index].desc}</p>
                </div>

                <div class="bottom">
                    <div class="image"> </div>
                    <p class="type">${filteredArray[index].type}</p>
                </div>

                    <div class="row">
                    <img class="logo" src="https://static.vecteezy.com/system/resources/previews/000/350/423/non_2x/vector-checklist-icon.jpg" alt="image">
                 </div>
    `;
              index++;
          });
          wrapper.innerHTML = '';
          wrapper.innerHTML = htmlRewrite;*/