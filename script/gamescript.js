function xox() {

	// for every area determining a value for it
	let a1, a2, a3, b1, b2, b3, c1, c2, c3;
	a1 = document.getElementById("a1").value;
	a2 = document.getElementById("a2").value;
	a3 = document.getElementById("a3").value;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	c1 = document.getElementById("c1").value;
	c2 = document.getElementById("c2").value;
	c3 = document.getElementById("c3").value;

	// Checking after every click whether X is win or loose and also disable the areas for prevent re-check the  3x3 game area
	if ((a1 == 'x' || a1 == 'X') && (a2 == 'x' ||
		a2 == 'X') && (a3 == 'x' || a3 == 'X')) {
		document.getElementById('showTurn').innerHTML = "Player X won";
		document.getElementById("b1").disabled = 1;
		document.getElementById("b2").disabled = 1;
		document.getElementById("b3").disabled = 1;
		document.getElementById("c1").disabled = 1;
		document.getElementById("c2").disabled = 1;
		document.getElementById("c3").disabled = 1;
	}
	else if ((a1 == 'x' || a1 == 'X') && (b1 == 'x' ||
		b1 == 'X') && (c1 == 'x' || c1 == 'X')) {
		document.getElementById('showTurn').innerHTML = "Player X won";
		document.getElementById("a2").disabled = 1;
		document.getElementById("a3").disabled = 1;
		document.getElementById("b2").disabled = 1;
		document.getElementById("b3").disabled = 1;
		document.getElementById("c2").disabled = 1;
		document.getElementById("c3").disabled = 1;
	}
	else if ((c1 == 'x' || c1 == 'X') && (c2 == 'x' ||
		c2 == 'X') && (c3 == 'x' || c3 == 'X')) {
		document.getElementById('showTurn').innerHTML = "Player X won";
		document.getElementById("a1").disabled = 1;
		document.getElementById("a2").disabled = 1;
		document.getElementById("a3").disabled = 1;
		document.getElementById("b1").disabled = 1;
		document.getElementById("b2").disabled = 1;
		document.getElementById("b3").disabled = 1;
	}
	else if ((a3 == 'x' || a3 == 'X') && (b3 == 'x' ||
		b3 == 'X') && (c3 == 'x' || c3 == 'X')) {
		document.getElementById('showTurn').innerHTML = "Player X won";
		document.getElementById("a1").disabled = 1;
		document.getElementById("a2").disabled = 1;
		document.getElementById("b1").disabled = 1;
		document.getElementById("b2").disabled = 1;
		document.getElementById("c1").disabled = 1;
		document.getElementById("c2").disabled = 1;
	}
	else if ((a1 == 'x' || a1 == 'X') && (b2 == 'x' ||
		b2 == 'X') && (c3 == 'x' || c3 == 'X')) {
		document.getElementById('showTurn').innerHTML = "Player X won";
		document.getElementById("a2").disabled = 1;
		document.getElementById("a3").disabled = 1;
		document.getElementById("b1").disabled = 1;
		document.getElementById("b3").disabled = 1;
		document.getElementById("c1").disabled = 1;
		document.getElementById("c2").disabled = 1;
	}
	else if ((a3 == 'x' || a3 == 'X') && (b2 == 'x' ||
		b2 == 'X') && (c1 == 'x' || c1 == 'X')) {
		document.getElementById('showTurn').innerHTML = "Player X won";
		document.getElementById("a1").disabled = 1;
		document.getElementById("a2").disabled = 1;
		document.getElementById("b1").disabled = 1;
		document.getElementById("b3").disabled = 1;
		document.getElementById("c2").disabled = 1;
		document.getElementById("c3").disabled = 1;
	}
	else if ((a2 == 'x' || a2 == 'X') && (b2 == 'x' ||
		b2 == 'X') && (c2 == 'x' || c2 == 'X')) {
		document.getElementById('showTurn').innerHTML = "Player X won";
		document.getElementById("a1").disabled = 1;
		document.getElementById("a3").disabled = 1;
		document.getElementById("b1").disabled = 1;
		document.getElementById("b3").disabled = 1;
		document.getElementById("c1").disabled = 1;
		document.getElementById("c3").disabled = 1;
	}
	else if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
		b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
		document.getElementById('showTurn').innerHTML = "Player X won";
		document.getElementById("a1").disabled = 1;
		document.getElementById("a2").disabled = 1;
		document.getElementById("a3").disabled = 1;
		document.getElementById("c1").disabled = 1;
		document.getElementById("c2").disabled = 1;
		document.getElementById("c3").disabled = 1;
	}

	// Look-up for the turns of X and looking O to take its turn and if 0 wins or not, also disables the selected fields
	else if ((a1 == 'O' || a1 == 'O') && (a2 == 'O' ||
		a2 == 'O') && (a3 == 'O' || a3 == 'O')) {
		document.getElementById('showTurn').innerHTML = "Player O won";
		document.getElementById("b1").disabled = 1;
		document.getElementById("b2").disabled = 1;
		document.getElementById("b3").disabled = 1;
		document.getElementById("c1").disabled = 1;
		document.getElementById("c2").disabled = 1;
		document.getElementById("c3").disabled = 1;
	}
	else if ((a1 == 'O' || a1 == 'O') && (b1 == 'O' ||
		b1 == 'O') && (c1 == 'O' || c1 == 'O')) {
		document.getElementById('showTurn').innerHTML = "Player O won";
		document.getElementById("a2").disabled = 1;
		document.getElementById("a3").disabled = 1;
		document.getElementById("b2").disabled = 1;
		document.getElementById("b3").disabled = 1;
		document.getElementById("c2").disabled = 1;
		document.getElementById("c3").disabled = 1;
	}
	else if ((c1 == 'O' || c1 == 'O') && (c2 == 'O' ||
		c2 == 'O') && (c3 == 'O' || c3 == 'O')) {
		document.getElementById('showTurn').innerHTML = "Player O won";
		document.getElementById("a1").disabled = 1;
		document.getElementById("a2").disabled = 1;
		document.getElementById("a3").disabled = 1;
		document.getElementById("b1").disabled = 1;
		document.getElementById("b2").disabled = 1;
		document.getElementById("b3").disabled = 1;
	}
	else if ((a3 == 'O' || a3 == 'O') && (b3 == 'O' ||
		b3 == 'O') && (c3 == 'O' || c3 == 'O')) {
		document.getElementById('showTurn').innerHTML = "Player O won";
		document.getElementById("a1").disabled = 1;
		document.getElementById("a2").disabled = 1;
		document.getElementById("b1").disabled = 1;
		document.getElementById("b2").disabled = 1;
		document.getElementById("c1").disabled = 1;
		document.getElementById("c2").disabled = 1;
	}
	else if ((a1 == 'O' || a1 == 'O') && (b2 == 'O' ||
		b2 == 'O') && (c3 == 'O' || c3 == 'O')) {
		document.getElementById('showTurn').innerHTML = "Player O won";
		document.getElementById("a2").disabled = 1;
		document.getElementById("a3").disabled = 1;
		document.getElementById("b1").disabled = 1;
		document.getElementById("b3").disabled = 1;
		document.getElementById("c1").disabled = 1;
		document.getElementById("c2").disabled = 1;
	}
	else if ((a3 == 'O' || a3 == 'O') && (b2 == 'O' ||
		b2 == 'O') && (c1 == 'O' || c1 == 'O')) {
		document.getElementById('showTurn').innerHTML = "Player O won";
		document.getElementById("a1").disabled = 1;
		document.getElementById("a2").disabled = 1;
		document.getElementById("b1").disabled = 1;
		document.getElementById("b3").disabled = 1;
		document.getElementById("c2").disabled = 1;
		document.getElementById("c3").disabled = 1;
	}
	else if ((a2 == 'O' || a2 == 'O') && (b2 == 'O' ||
		b2 == 'O') && (c2 == 'O' || c2 == 'O')) {
		document.getElementById('showTurn').innerHTML = "Player O won";
		document.getElementById("a1").disabled = 1;
		document.getElementById("a3").disabled = 1;
		document.getElementById("b1").disabled = 1;
		document.getElementById("b3").disabled = 1;
		document.getElementById("c1").disabled = 1;
		document.getElementById("c3").disabled = 1;
	}
	else if ((b1 == 'O' || b1 == 'O') && (b2 == 'O' ||
		b2 == 'O') && (b3 == 'O' || b3 == 'O')) {
		document.getElementById('showTurn').innerHTML = "Player O won";
		document.getElementById("a1").disabled = 1;
		document.getElementById("a2").disabled = 1;
		document.getElementById("a3").disabled = 1;
		document.getElementById("c1").disabled = 1;
		document.getElementById("c2").disabled = 1;
		document.getElementById("c3").disabled = 1;
	}

	// Controls whether O is played or game ended
	else if ((a1 == 'X' || a1 == 'O') && (a2 == 'X'
		|| a2 == 'O') && (a3 == 'X' || a3 == 'O') &&
		(b1 == 'X' || b1 == 'O') && (b2 == 'X' ||
		b2 == 'O') && (b3 == 'X' || b3 == 'O') &&
		(c1 == 'X' || c1 == 'O') && (c2 == 'X' ||
		c2 == 'O') && (c3 == 'X' || c3 == 'O')) {
			document.getElementById('showTurn').innerHTML = "Match Tie";
	}
	else {
		if (check == 1) {
			document.getElementById('showTurn').innerHTML = "Player X Turn";
		}
		else {
			document.getElementById('showTurn').innerHTML = "Player O Turn";
		}
	}
}

// Restarting game
function xox_rStart() {
	location.reload();
	document.getElementById('a1').value = '';
	document.getElementById("a2").value = '';
	document.getElementById("a3").value = '';
	document.getElementById("b1").value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("c1").value = '';
	document.getElementById("c2").value = '';
	document.getElementById("c3").value = '';

}

// Functions for determining for player and their turns, also giving a value for them: X and O
check = 1;
function xox_3() {
	if (check == 1) {
		document.getElementById("a1").value = "X";
		document.getElementById("a1").disabled = 1;
		check = 0;
	}
	else {
		document.getElementById("a1").value = "O";
		document.getElementById("a1").disabled = 1;
		check = 1;
	}
}

function xox_4() {
	if (check == 1) {
		document.getElementById("a2").value = "X";
		document.getElementById("a2").disabled = 1;
		check = 0;
	}
	else {
		document.getElementById("a2").value = "O";
		document.getElementById("a2").disabled = 1;
		check = 1;
	}
}

function xox_5() {
	if (check == 1) {
		document.getElementById("a3").value = "X";
		document.getElementById("a3").disabled = 1;
		check = 0;
	}
	else {
		document.getElementById("a3").value = "O";
		document.getElementById("a3").disabled = 1;
		check = 1;
	}
}

function xox_6() {
	if (check == 1) {
		document.getElementById("b1").value = "X";
		document.getElementById("b1").disabled = 1;
		check = 0;
	}
	else {
		document.getElementById("b1").value = "O";
		document.getElementById("b1").disabled = 1;
		check = 1;
	}
}

function xox_7() {
	if (check == 1) {
		document.getElementById("b2").value = "X";
		document.getElementById("b2").disabled = 1;
		check = 0;
	}
	else {
		document.getElementById("b2").value = "O";
		document.getElementById("b2").disabled = 1;
		check = 1;
	}
}

function xox_8() {
	if (check == 1) {
		document.getElementById("b3").value = "X";
		document.getElementById("b3").disabled = 1;
		check = 0;
	}
	else {
		document.getElementById("b3").value = "O";
		document.getElementById("b3").disabled = 1;
		check = 1;
	}
}

function xox_9() {
	if (check == 1) {
		document.getElementById("c1").value = "X";
		document.getElementById("c1").disabled = 1;
		check = 0;
	}
	else {
		document.getElementById("c1").value = "O";
		document.getElementById("c1").disabled = 1;
		check = 1;
	}
}

function xox_10() {
	if (check == 1) {
		document.getElementById("c2").value = "X";
		document.getElementById("c2").disabled = 1;
		check = 0;
	}
	else {
		document.getElementById("c2").value = "O";
		document.getElementById("c2").disabled = 1;
		check = 1;
	}
}

function xox_11() {
	if (check == 1) {
		document.getElementById("c3").value = "X";
		document.getElementById("c3").disabled = 1;
		check = 0;
	}
	else {
		document.getElementById("c3").value = "O";
		document.getElementById("c3").disabled = 1;
		check = 1;
	}
}
