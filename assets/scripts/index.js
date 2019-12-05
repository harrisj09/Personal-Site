//default values
let type = "Both";
let lang = "All";

//Element 
let previousClick = document.getElementById('both');
let previousClickLang = document.getElementById('all');

//stores the objects
let projectsArray = [];

//Create objects of the projects the actual version on my site will contain another parameter for a link for anchor tags 
function project(name, lang, desc, type) {
  this.name = name;
  this.lang = lang;
  this.desc = desc;
  this.type = type;
}

//Project Objects
let project1 = new project("Job Listing", "HTML/CSS", "Static Page Containing Job Listings", "Personal");
let project2 = new project("Calculator", "HTML/CSS, JavaScript", "Basic JavaScript Calculator", "Personal");
let project3 = new project("TODO", "HTML/CSS, JavaScript, React", "Organize your everyday life with this web app made with React", "Personal");
let project4 = new project("Login and Signup", "HTML/CSS", "Static Page for logging in and signing up", "Personal");
let project5 = new project("RNG Therapy Site", "WordPress", "WordPress Site that allows people to schedule appointments.", "Client");
let project6 = new project("Coffee Shop Website", "HTML/CSS, JavaScript, React", "Static Page for a Coffee Shop", "Client");

projectsArray.push(project1);
projectsArray.push(project2);
projectsArray.push(project3);
projectsArray.push(project4);
projectsArray.push(project5);
projectsArray.push(project6);

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
  
}