/* Declare variables below to save the different sections (divs) of your story*/
let title = document.querySelector(".title");
let storyopening = document.querySelector(".story-opening");
let option1 = document.querySelector(".option-one-screen");
let option2 = document.querySelector(".option-two-screen");
let end1 = document.querySelector(".option-one-end");
let end2 = document.querySelector(".option-two-end");
let button1 = document.querySelector(".option-one");
let button2 = document.querySelector(".option-two");
let buttons = document.querySelector(".buttons");
let no = document.querySelector(".no");
let yes = document.querySelector(".yes");
let restart = document.querySelector(".restart");
let fight = document.querySelector(".fight");
let nah = document.querySelector(".nah");
let restart1 = document.querySelector(".restart1");
let dog = document.querySelector(".dog");
button1.onclick = function() {
	storyopening.style.display="none";
    option1.style.display="block";
};

button2.onclick = function() {
	storyopening.style.display="none";
    option2.style.display="block";
};

no.onclick = function() {
	option1.style.display="none";
    option2.style.display="block";
};

yes.onclick = function() {
	option1.style.display="none";
    end1.style.display="block";
};

restart.onclick = function() {
	end1.style.display="none";
    storyopening.style.display="block";
    
};

restart1.onclick = function() {
	end2.style.display="none";
    storyopening.style.display="block";
};

fight.onclick = function() {
	option2.style.display="none";
    end2.style.display="block";
};
nah.onclick = function() {
	nah.innerHTML="Too bad!";
};




/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/