// Música
const music = new Audio("./music/bkgMusic.mp3");

function rectangularCollision({	rectangle1,	rectangle2 }) {
	return (
		rectangle1.attackBox.position.x + rectangle1.attackBox.width >=	rectangle2.position.x 
		&& rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width 
		&& rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y 
		&& rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
	)
}

function determineWinner({player, enemy, timerId}) {
	clearTimeout(timerId)
	document.querySelector('#displayText').style.display = 'flex'
	if(player.health === enemy.health){
		document.querySelector('#displayText').innerHTML = 'Tie'
		music.pause()
	} else if (player.health > enemy.health) {
		document.querySelector('#displayText').innerHTML = 'Player 1 Wins'
		music.pause()

	} else if (player.health < enemy.health) {
		document.querySelector('#displayText').innerHTML = 'Player 2 Wins'
		music.pause()
	}
}


// Tempo
let timer = 60
let timerId
function decreaseTimer() {	
	if(timer > 0) {
		music.play()
		timerId = setTimeout(decreaseTimer, 1000)
		timer--
		document.querySelector('#timer').innerHTML = timer
	}

	if(timer === 0) {
		music.stop()
		determineWinner({player, enemy, timerId})
	}
}