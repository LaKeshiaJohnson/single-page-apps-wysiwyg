console.log("hello");
let peopleList = [

{

  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "http://hobdragon.gdyerwebsolution.netdna-cdn.com/reel/wp-content/uploads/2011/10/tomoe-gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
 },
{
  title: "Pharaoh",
  name: "Cleopatra",
  bio: "Cleopatra VII Philopator, known to history simply as Cleopatra, was the last active ruler of Ptolemaic Egypt, briefly survived as pharaoh by her son Caesarion. After her reign, Egypt became a province of the recently established Roman Empire.",
  image: "https://listen-current-prod.s3.amazonaws.com/lessons/photos/000/000/296/4cea10caafe280a3590b65df291343c7debe605a/medium/Queen-cleopatra.jpg?1470082073",
  lifespan: {
    birth:  "69 BC",
    death: "August 12, 30 BC"
  }
 },
 {
  title: "Princess",
  name: "Diana Spencer",
  bio: "Diana, Princess of Wales (Diana Frances; née Spencer;), was the first wife of Charles, Prince of Wales, who is the eldest child and heir apparent of Queen Elizabeth II.",
  image: "http://www.thehypertexts.com/images/Princess-Diana.jpg",
  lifespan: {
    birth: "July 1, 1961",
    death: "August 31, 1997"
  }
 },
 {
  title: "Minister",
  name: "Martin Luther King Jr.",
  bio: "Martin Luther King Jr. was an American Baptist minister and activist who became the most visible spokesperson and leader in the Civil Rights Movement.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Martin_Luther_King%2C_Jr..jpg/220px-Martin_Luther_King%2C_Jr..jpg",
  lifespan: {
    birth: "January 15, 1929",
    death: "April 4, 1968"
  }
 },
 {
  title: "Saint",
  name: "Mother Teresa",
  bio: "Mother Teresa, known in the Catholic Church as Saint Teresa of Calcutta, was an Albanian-Indian Roman Catholic nun and missionary.",
  image: "http://images.huffingtonpost.com/2016-10-27-1477610038-415619-motherteresa.jpg",
  lifespan: {
    birth: "August 26, 1910",
    death: "September 5, 1997"
  }
}
];

let output = document.getElementById("container");

for (let i = 0; i < peopleList.length; i++) {
	output.innerHTML += `<div class="person_container" id="[i]">
						<h2>${peopleList[i].title}: ${peopleList[i].name}</h2>
						<img class="image" src="${peopleList[i].image}">
  						<p class="bio">${peopleList[i].bio}</p>
  						<footer>${peopleList[i].lifespan.birth} - ${peopleList[i].lifespan.death}</footer>
  					</div>`;

};

var containerEl = document.getElementsByClassName("person_container");
let input = document.getElementById("input-box");
let bio = document.getElementsByClassName("bio");

/***************** TOGGLE BORDER/FOCUS/BINDING ********************/
// Event listeners are created
for (var j = 0; j < containerEl.length; j++) {
  containerEl[0].addEventListener("click", function (event) {
  	//console.log("event target: ", event.target);
  	//console.log("currentTarget", event.currentTarget)
    containerEl[0].classList.toggle("bordered");
    //document.getElementById("input-box").focus();
    input.focus();
    input.addEventListener("keyup", function(event) {
      bio[0].innerHTML = event.target.value;
      })
    }
  )};

  for (var k = 0; k < containerEl.length; k++) {
  containerEl[1].addEventListener("click", function (event) {
    containerEl[1].classList.toggle("bordered");
    input.focus();
    input.addEventListener("keyup", function(event) {
      bio[1].innerHTML = event.target.value;
      })
    }
  )};

  for (var l = 0; l < containerEl.length; l++) {
  containerEl[2].addEventListener("click", function (event) {
    containerEl[2].classList.toggle("bordered");
    input.focus();
    input.addEventListener("keyup", function(event) {
      bio[2].innerHTML = event.target.value;
      })
    }
  )};

  for (var m = 0; m < containerEl.length; m++) {
  containerEl[3].addEventListener("click", function (event) {
    containerEl[3].classList.toggle("bordered");
    input.focus();
    input.addEventListener("keyup", function(event) {
      bio[3].innerHTML = event.target.value;
      })
    }
  )};

  for (var n = 0; n < containerEl.length; n++) {
  containerEl[4].addEventListener("click", function (event) {
    containerEl[4].classList.toggle("bordered");
    input.focus();
    input.addEventListener("keyup", function(event) {
      bio[4].innerHTML = event.target.value;
      })
    }
  )};

  /************** CLEAR INPUT BOX ******************/

  //let input = document.getElementById("input-box");

input.addEventListener("keyup", clearField);
  function clearField() {
    if (event.keyCode === 13) {
      input.value = "";
    };

  };





