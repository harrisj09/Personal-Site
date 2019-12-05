//default values
let type = "Both";
let lang = "All";

//Element 
let previousClick = document.getElementById('both');
let previousClickLang = document.getElementById('all');

//Create objects of the projects the actual version on my site will contain another parameter for a link for anchor tags 
function project(name, lang, desc, type) {
  this.name = name;
  this.lang = lang;
  this.desc = desc;
  this.type = type;
}

//Store objects
const projects = [
  new project("Job Listing", "HTML/CSS", "Static Page Containing Job Listings", "Personal"),
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
  let i = 0;
  const isValid = (projects[i].type == type && projects[i].lang == lang);
  //For loop starts checks base variables.
  for(i = 0; i < projects.length; ++i) {
      if(isValid) {
        //Logic goes here
      }
  }
}