//default scores
let userScore = 0;
let computerScore = 0;
let timer = 1500;

// reset score
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.getElementById("result-message")
const reset_btn = document.getElementById("btn-reset");

// image
const rock_div = document.getElementById("urock");
const paper_div = document.getElementById("upaper");
const scissors_div = document.getElementById("uscissors");
const lizard_div = document.getElementById("ulizard");
const spock_div = document.getElementById("uspock")

document.addEventListener("DOMContentLoaded", function () {
    //dom content is loaded, main fun activate after user choice
    rock_div.addEventListener("click", function (){
        game("rock");
    });
    paper_div.addEventListener("click", function (){
        game("paper");
    });
    scissors_div.addEventListener("click", function (){
        game("scissors");
    });
    lizard_div.addEventListener("click", function (){
        game("lizard");
    });
    spock_div.addEventListener("click", function (){
        game("spock");
    });
    reset_btn.addEventListener("click", resetScore);

});

function computerChoice() {
    const computerDraws = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomNumber = Math.floor(Math.random() * computerDraws.length);
    let reference_object = {
        "0": document.getElementById("path-rock"),
		"1": document.getElementById("path-paper"),
		"2": document.getElementById("path-scissors"),
		"3": document.getElementById("path-lizard"),
		"4": document.getElementById("path-spock"),
    };
    let element = reference_object[randomNumber]
    element.style.display = 'block';
    setTimeout(
        ()=>(element.style.display = 'none'), timer
    );
    return computerDraws[randomNumber];
}

function game(uChoice){
    result_p.style.visibility = 'visible';
    const cChoice = computerChoice();
    switch (uChoice + cChoice){
        case "rockscissors":
		case "rocklizard":
		case "paperrock":
		case "paperspock":
		case "scissorspaper":
		case "scissorslizard":
		case "lizardspock":
		case "lizardpaper":
		case "spockrock":
		case "spockscissors":
			incrementUserScore();
			break;

		case "rockpaper":
		case "rockspock":
		case "paperlizard":
		case "paperscissors":
		case "scissorsspock":
		case "scissorsrock":
		case "lizardrock":
		case "lizardscissors":
		case "spocklizard":
		case "spockpaper":
			incrementComputerScore();
			break;

		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
		case "lizardlizard":
		case "spockspock":
			tie();
			break;
    }
}

function incrementUserScore() {
    userScore++
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = "You Won"
    setTimeout(()=>(result_p.style.visibility = 'hidden'), timer);
    if (userScore == 10){
        winner('user')
    }
}

function incrementComputerScore() {
	
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = "COMPUTER WON!";
	setTimeout(() => (result_p.style.visibility = "hidden"), timer);
	if (computerScore == 10) {
		winner("computer");
	}
}
function tie() {
	//displays a temporary message when computer and user made the same choiche according to the game function
	result_p.innerHTML = "IT'S A TIE!";
	setTimeout(() => (result_p.style.visibility = "hidden"), timer);
}
function winner(win) {
	//show a message with the winner, resets the score
	if (win === "computer") {
		result_p.innerHTML = "COMPUTER WON THE MATCH!";
		resetScore();
	} else {
		result_p.innerHTML = "YOU WON THE MATCH!";
		resetScore();
	}
}
function resetScore() {
	/*set js variables and relative HTML elements in the score-area to 0*/
	userScore = 0;
	computerScore = 0;
	userScore_span.innerHTML = 0;
	computerScore_span.innerHTML = 0;
}

// simulates :hover effect for mouse and touch screen
$(".uchoice").on('mouseover touchstart', function () {
	$(this).find('svg').children().css({
		'stroke': '#0057b7',
		'filter': 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))'
	});
});

$(".uchoice").on('mouseleave', function () {
	$(this).find('svg').children().css({
		'stroke': '#000'
	});
});

//when user selects another option, the computer choice disappears before timeout
$(".uchoice").on('click', function () {
	$(".cchoice").find('svg').children().css({
		'display': 'none'
	});
});