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
  						<p>${peopleList[i].bio}</p>
  						<footer>${peopleList[i].lifespan.birth} - ${peopleList[i].lifespan.death}</footer>
  					</div>`;

};

/*var containerEl = document.getElementsByClassName("person_container");

// Event listeners are created
for (var i = 0; i < containerEl.length; i++) {
  containerEl[i].addEventListener("click", function (event) {
  	console.log("event target: ", event.target);
  	console.log("currentTarget", event.currentTarget)

    //containerEl.classList.toggle("bordered");
     }
  )*/};
/*var counter = 0;
var outputEl = document.getElementById("container");
for (; counter < peopleList; counter++) {
  // Give each person element a unique identifier
  outputEl.innerHTML += `<div class="person_container" id="person--${counter}"></div>`

}

// Now containerEl will have elements in it
var containerEl = document.getElementsByClassName("person__container");

// Event listeners are created
for (var i = 0; i < containerEl.length; i++) {
  containerEl[i].addEventListener("click", function (event) {
    // Logic to execute when the element is clicked
     }
  )};
*/



