function startup(n) {
	document.getElementById('wrapper').innerHTML = `
	<div class = "game-area">
		<div class = "title">
			<span class = "title-tile-number">2048</span>
		</div>
		<div class = "score">
			<span class = "score-title">SCORE</span>
			<span class = "score-value">0</span>
			<span id = "number">0</span>
		</div>
			<button type="button" onclick="randomGame()">Random Game</button> 
			<button type="button" onclick="seededGame(484)">Seeded Game</button> 
		<table cellspacing = "10" class = "game-table">
			<tr>
				<td class="cell 1 a"></td>
				<td class="cell 2 a"></td>
				<td class="cell 3 a"></td>
				<td class="cell 4 a"></td>
			</tr>
			<tr>
				<td class="cell 1 b"></td>
				<td class="cell 2 b"></td>
				<td class="cell 3 b"></td>
				<td class="cell 4 b"></td>
			</tr>
			<tr>
				<td class="cell 1 c"></td>
				<td class="cell 2 c"></td>
				<td class="cell 3 c"></td>
				<td class="cell 4 c"></td>
			</tr>
			<tr>
				<td class="cell 1 d"></td>
				<td class="cell 2 d"></td>
				<td class="cell 3 d"></td>
				<td class="cell 4 d"></td>
			</tr>
		</table>
	</div>	
	`;
	seededGame(n);
}

var c1 = document.getElementsByClassName("1");
var c2 = document.getElementsByClassName("2");
var c3 = document.getElementsByClassName("3");
var c4 = document.getElementsByClassName("4");
var d1 = document.getElementsByClassName("1");
var d2 = document.getElementsByClassName("2");
var d3 = document.getElementsByClassName("3");
var d4 = document.getElementsByClassName("4");
var r1 = document.getElementsByClassName("a");
var r2 = document.getElementsByClassName("b");
var r3 = document.getElementsByClassName("c");
var r4 = document.getElementsByClassName("d");
var s1 = document.getElementsByClassName("a");
var s2 = document.getElementsByClassName("b");
var s3 = document.getElementsByClassName("c");
var s4 = document.getElementsByClassName("d");
var transitionTime=80;
var score = 0;
var target = 0;
var moveCount = 0, combineCount = 0;
var emptyCount; 
var isMoveOver = 1;

/*
function randomElement(){
	var x = parseInt(Math.random()*100);
	var randomFour = parseInt(Math.random()*100);
	if(x<16 && x>=0 && document.getElementsByClassName("cell")[x].childNodes.length == 0){
		if(randomFour % 4 == 0){
			var newTile = document.createElement("div");
			newTile.classList.add("tile", "tile4");
			document.getElementsByClassName("cell")[x].appendChild(newTile);

			var newTileNumber = document.createElement("span");
			newTileNumber.setAttribute("class", "tile-number");
			newTileNumber.innerHTML = "4";
			newTile.appendChild(newTileNumber);

			newTile.style.transform = "scale(1)";
		}
		
		else{	
			var newTile = document.createElement("div");
			newTile.classList.add("tile", "tile2");
			document.getElementsByClassName("cell")[x].appendChild(newTile);

			var newTileNumber = document.createElement("span");
			newTileNumber.setAttribute("class", "tile-number");
			newTileNumber.innerHTML = "2";
			newTile.appendChild(newTileNumber);

			newTile.style.transform = "scale(1)";
		}
	}
	else{
		//randomElement();
	}
}
//randomElement();
//randomElement();
*/

function makeTile(n, x) {
	console.log('making tile');
	var newTile = document.createElement("div");
	newTile.classList.add("tile", "tile"+n);
	document.getElementsByClassName("cell")[x].appendChild(newTile);
	var newTileNumber = document.createElement("span");
	newTileNumber.setAttribute("class", "tile-number");
	newTileNumber.innerHTML = n;
	newTile.appendChild(newTileNumber);
	newTile.style.transform = "scale(1)";
}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomGame() {
	restart();
	var num = 0;
	var numTile = 0;
	var tileArray = [2, 4, 8, 16, 32, 64];
	var seed = getRandomInt(500);
	var remainder1 = seed % 8;
	var remainder2 = seed % 7;
	var remainder3 = seed % 2;
	if (remainder1 <= remainder2) {
		var remainder4 = remainder2 - remainder1;
	}
	else {
		var remainder4 = remainder1 - remainder2;
	}
	document.getElementById('number').innerHTML =seed;
	console.log('seed is '+seed+ ', other numbers are '+remainder1+' '+remainder2+' '+remainder3+' '+remainder4);
	for (i = 0; i < 15; i++) {
		num = 0;
		if (i < 6) {
			num = i - remainder1;
			if (num > 0) {
				num = i + remainder2;
			}
			if (num < 0) {
				num += 3;
			}
			if (num > 5) {
				num -= 3;
			}
		}
		else {
			num = i % 6;
			num += remainder4;
		}
		if (num < 6 && num > -1) {
			numTile = tileArray[num];
			makeTile(numTile, i);
		}
	}
}

function seededGame(n) {
	restart();
	var num = 0;
	var numTile = 0;
	var tileArray = [2, 4, 8, 16, 32];
	var seed = n;
	var remainder1 = seed % 8;
	var remainder2 = seed % 7;
	var remainder3 = seed % 2;
	if (remainder1 <= remainder2) {
		var remainder4 = remainder2 - remainder1;
	}
	else {
		var remainder4 = remainder1 - remainder2;
	}
	document.getElementById('number').innerHTML =seed;
	console.log('seed is '+seed+ ', other numbers are '+remainder1+' '+remainder2+' '+remainder3+' '+remainder4);
	for (i = 0; i < 15; i++) {
		num = 0;
		if (i < 6) {
			num = i - remainder1;
			if (num > 0) {
				num = i + remainder2;
			}
			if (num < 0) {
				num += 3;
			}
			if (num > 5) {
				num -= 3;
			}
		}
		else {
			num = i % 6;
			num += remainder4;
		}
		if (num < 5 && num > -1) {
			numTile = tileArray[num];
			makeTile(numTile, i);
		}
	}
}

function game(n) {
	console.log('game button '+n);
	restart();
	switch (n) {
		case 1: {
			console.log('now begining game '+n);
			target = 2048;
				
			break;
		}
		case 1: {
			console.log('now begining game '+n);
			target = 256;
			makeTile(2, 5);
			makeTile(8, 6);
			makeTile(4, 7);
			makeTile(16, 9);
			makeTile(2, 10);
			makeTile(8, 11);
			makeTile(4, 12);
			makeTile(2, 13);
			makeTile(16, 14);
			makeTile(4, 15);
			break;
		}
		case 1: {
			console.log('now begining game '+n);
			target = 256;
			makeTile(8, 2);
			makeTile(32, 4);
			makeTile(16, 5);
			makeTile(32, 6);
			makeTile(16, 7);
			makeTile(64, 8);
			makeTile(4, 9);
			makeTile(4, 10);
			makeTile(4, 11);
			makeTile(64, 12);
			makeTile(8, 13);
			makeTile(4, 14);
			makeTile(2, 15);
			break;
		}
		case 2: {
			console.log('now begining game '+n);
			target = 32
			makeTile(2, 4);
			makeTile(2, 8);
			makeTile(4, 6);
			makeTile(4, 9);
			makeTile(4, 1);
			makeTile(16, 15);
			break;
		}
		case 3: {
			console.log('now begining game '+n);
			target = 64;
			makeTile(8, 4);
			makeTile(16, 5);
			makeTile(16, 7);
			makeTile(8, 8);
			makeTile(4, 9);
			makeTile(2, 10);
			makeTile(4, 11);
			makeTile(2, 13);
			makeTile(4, 14);
			makeTile(2, 15);
			break;
		}
	}
}

function combineX(a,b){//called when two tiles are combined, format -> combineX(tile1,tile2)
	var distBetween = b.getBoundingClientRect().left - a.getBoundingClientRect().left;
	a.style.transform = 'translateX('+distBetween+'px)';
	var currentTileNumber = a.classList[1].slice(4,a.classList[1].length);

	setTimeout(function(){
		a.remove();
		b.style.transform = "scale(1.2)";
		b.setAttribute("class", "tile tile"+(2*currentTileNumber));
		b.childNodes[0].innerHTML = 2*currentTileNumber;
	},transitionTime);
	
	setTimeout(function(){
		b.style.transform = "scale(1)";
	},transitionTime*2);	

	score += 2*currentTileNumber;

	document.getElementsByClassName("score-value")[0].innerHTML = score;
	combineCount++;//should there be random tile

	//determining win
	if(2*currentTileNumber == target){
		var x = confirm("You have Won! Want to continue?");
		if(x == false){
			restart();
		}
	}
}

function moveX(a,b){//called to move a tile from one cell to another, format -> moveX(cell1,cell2)
	var distBetween = b.getBoundingClientRect().left - a.getBoundingClientRect().left;
	a.childNodes[0].style.transform = 'translateX('+distBetween+'px)';

	setTimeout(function(){
		b.appendChild(a.childNodes[0]);
		b.childNodes[0].style.transform = 'translateX(0px)';
	},transitionTime);

	moveCount++;
}	

function combineY(a,b){//called when two tiles are combined, format -> combineX(tile1,tile2)
	var distBetween = b.getBoundingClientRect().top - a.getBoundingClientRect().top;
	a.style.transform = 'translateY('+distBetween+'px)';
	var currentTileNumber = a.classList[1].slice(4,a.classList[1].length);
	setTimeout(function(){
		a.remove();
		b.style.transform = "scale(1.2)";
		b.setAttribute("class", "tile tile"+(2*currentTileNumber));
		b.childNodes[0].innerHTML = 2*currentTileNumber;
	},transitionTime);
	
	setTimeout(function(){
		b.style.transform = "scale(1)";
	},transitionTime*2);	

	score += 2*currentTileNumber;

	document.getElementsByClassName("score-value")[0].innerHTML = score;
	combineCount++;

	//determining win
	if(2*currentTileNumber == target){
		var x = confirm("You have Won! Want to continue?");
		if(x == false){
			restart();
		}
	}
}

function moveY(a,b){//called to move a tile from one cell to another, format -> moveX(cell1,cell2)
	var distBetween = b.getBoundingClientRect().top - a.getBoundingClientRect().top;
	a.childNodes[0].style.transform = 'translateY('+distBetween+'px)';

	setTimeout(function(){
		b.appendChild(a.childNodes[0]);
		b.childNodes[0].style.transform = 'translateY(0px)';
	},transitionTime);

	moveCount++;
}

function restart(){
	for(i=0;i<16;i++){
		if (document.getElementsByClassName("cell")[i].childNodes[0]) {
		document.getElementsByClassName("cell")[i].childNodes[0].remove();
		}
	}
	//randomElement();
	//randomElement();
	score = 0;
	document.getElementsByClassName("score-value")[0].innerHTML = score;
	emptyCount = 1;
}



var keyStack = [];
var i = 0;
setInterval(function(){
	if(i>keyStack.length-1) return false;

	else{
		i++;
	}
}, 1000);

document.addEventListener("keydown", function(e){
	if(!e) e = window.event;
	
	if(e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40){ 
		if (game = true) {
			keyStack[keyStack.length] = e.keyCode;
		}
	}
});

var k = 0;
setInterval(function(){
	if(k>keyStack.length-1) return false;

	else{

		switch(keyStack[k]){
		case 39 : //right arrow
			

			if(isMoveOver == 1){
			for(i=0;i<4;i++){
			if(c3[i].childNodes.length != 0){//checks whether the third column is filled of empty
				if(c4[i].childNodes.length == 0){//if fourth column empty
					moveX(c3[i],c4[i]);

					if(c2[i].childNodes.length != 0){//if second column filled
						if(c2[i].childNodes[0].classList[1] == c3[i].childNodes[0].classList[1]){//if second and third same
							combineX(c2[i].childNodes[0],c3[i].childNodes[0]);

							if(c1[i].childNodes.length != 0){//if first column filled
								moveX(c1[i],c3[i]);
							}
						}
						else{//if second third not same
							moveX(c2[i],c3[i]);

							if(c1[i].childNodes.length != 0){//if first column filled
								
								if(c1[i].childNodes[0].classList[1] == c2[i].childNodes[0].classList[1]){
									combineX(c1[i].childNodes[0], c2[i].childNodes[0]);
								}
								
								else{
									moveX(c1[i],c2[i]);
								}
							}
						}
					}

					else if(c1[i].childNodes.length != 0){
						if(c1[i].childNodes[0].classList[1] == c3[i].childNodes[0].classList[1]){
							combineX(c1[i].childNodes[0], c3[i].childNodes[0]);
						}
						else{
							moveX(c1[i],c3[i]);
						}
					}
				}

				else if(c3[i].childNodes[0].classList[1] == c4[i].childNodes[0].classList[1]){//if fourth column filled and same
					combineX(c3[i].childNodes[0],c4[i].childNodes[0]);

					if(c2[i].childNodes.length != 0){//if second column filled
						moveX(c2[i],c3[i]);

						if(c1[i].childNodes.length != 0){
							if(c1[i].childNodes[0].classList[1] == c2[i].childNodes[0].classList[1]){
								combineX(c1[i].childNodes[0], c2[i].childNodes[0]);
							}
							else{
								moveX(c1[i], c2[i]);
							}
						}
					}

					else if(c1[i].childNodes.length != 0){//if first column filled
						moveX(c1[i],c3[i]);
					}
				}

				else{
					if(c2[i].childNodes.length != 0){
						if(c2[i].childNodes[0].classList[1] == c3[i].childNodes[0].classList[1]){
							combineX(c2[i].childNodes[0], c3[i].childNodes[0]);

							if(c1[i].childNodes.length != 0){
								moveX(c1[i],c2[i])
							}
						}

						else if(c1[i].childNodes.length != 0){
							if(c1[i].childNodes[0].classList[1] == c2[i].childNodes[0].classList[1]){
								combineX(c1[i].childNodes[0], c2[i].childNodes[0]);		
							}
						}
					}

					else if(c1[i].childNodes.length != 0){
						if(c1[i].childNodes[0].classList[1] == c3[i].childNodes[0].classList[1]){
							combineX(c1[i].childNodes[0], c3[i].childNodes[0]);
						}
						else{
							moveX(c1[i],c2[i]);
						}
					}
				}
			}

			else if(c2[i].childNodes.length != 0){
				if(c4[i].childNodes.length != 0){
					if(c2[i].childNodes[0].classList[1] == c4[i].childNodes[0].classList[1]){
						combineX(c2[i].childNodes[0],c4[i].childNodes[0]);

						if(c1[i].childNodes.length != 0){
							moveX(c1[i],c3[i]);
						}
					}

					else{
						moveX(c2[i],c3[i]);

						if(c1[i].childNodes.length != 0){
							if(c1[i].childNodes[0].classList[1] == c2[i].childNodes[0].classList[1]){
								combineX(c1[i].childNodes[0],c2[i].childNodes[0]);
							}
							else{
								moveX(c1[i],c2[i]);
							}
						}
					}
				}

				else if(c1[i].childNodes.length != 0){
					moveX(c2[i],c4[i]);

					if(c1[i].childNodes[0].classList[1] == c2[i].childNodes[0].classList[1]){
								combineX(c1[i].childNodes[0],c2[i].childNodes[0]);
					}
					else{
						moveX(c1[i],c3[i]);
					}
				}

				else{
					moveX(c2[i],c4[i]);
				}
			}

			else if(c1[i].childNodes.length != 0){
				if(c4[i].childNodes.length != 0){
					if(c1[i].childNodes[0].classList[1] == c4[i].childNodes[0].classList[1]){
						combineX(c1[i].childNodes[0],c4[i].childNodes[0]);
					}
					else{
						moveX(c1[i],c3[i]);
					}
				}
				else{
					moveX(c1[i],c4[i]);
				}
			}
			}
			}

			isMoveOver = 0;
			setTimeout(function(){isMoveOver = 1}, 100);
			setTimeout(function(){if(moveCount > 0 || combineCount > 0){
				//randomElement();
				moveCount = 0;
				combineCount = 0;
			}},transitionTime);

			var check = 0;
			setTimeout(function(){
				emptyCount = 0;
				for(i=0;i<16;i++){
					if(document.getElementsByClassName("cell")[i].childNodes.length == 0){
						emptyCount++;
					}
				}
				if(emptyCount == 0){
					for(i=0;i<4;i++){
						if(i==0){
							if(document.getElementsByClassName("1")[0].childNodes[0].classList[1] == document.getElementsByClassName("1")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("2")[0].childNodes[0].classList[1] == document.getElementsByClassName("2")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("3")[0].childNodes[0].classList[1] == document.getElementsByClassName("3")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("4")[0].childNodes[0].classList[1] == document.getElementsByClassName("4")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("a")[0].childNodes[0].classList[1] == document.getElementsByClassName("a")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("b")[0].childNodes[0].classList[1] == document.getElementsByClassName("b")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("c")[0].childNodes[0].classList[1] == document.getElementsByClassName("c")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("d")[0].childNodes[0].classList[1] == document.getElementsByClassName("d")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
						}
						else if(i==3){
							if(document.getElementsByClassName("1")[3].childNodes[0].classList[1] == document.getElementsByClassName("1")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("2")[3].childNodes[0].classList[1] == document.getElementsByClassName("2")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("3")[3].childNodes[0].classList[1] == document.getElementsByClassName("3")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("4")[3].childNodes[0].classList[1] == document.getElementsByClassName("4")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("a")[3].childNodes[0].classList[1] == document.getElementsByClassName("a")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("b")[3].childNodes[0].classList[1] == document.getElementsByClassName("b")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("c")[3].childNodes[0].classList[1] == document.getElementsByClassName("c")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("d")[3].childNodes[0].classList[1] == document.getElementsByClassName("d")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
						}	
						else{
							if(document.getElementsByClassName("1")[i].childNodes[0].classList[1] == document.getElementsByClassName("1")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("1")[i].childNodes[0].classList[1] == document.getElementsByClassName("1")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("2")[i].childNodes[0].classList[1] == document.getElementsByClassName("2")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("2")[i].childNodes[0].classList[1] == document.getElementsByClassName("2")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("3")[i].childNodes[0].classList[1] == document.getElementsByClassName("3")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("3")[i].childNodes[0].classList[1] == document.getElementsByClassName("3")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("4")[i].childNodes[0].classList[1] == document.getElementsByClassName("4")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("4")[i].childNodes[0].classList[1] == document.getElementsByClassName("4")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("a")[i].childNodes[0].classList[1] == document.getElementsByClassName("a")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("a")[i].childNodes[0].classList[1] == document.getElementsByClassName("a")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("b")[i].childNodes[0].classList[1] == document.getElementsByClassName("b")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("b")[i].childNodes[0].classList[1] == document.getElementsByClassName("b")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("c")[i].childNodes[0].classList[1] == document.getElementsByClassName("c")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("c")[i].childNodes[0].classList[1] == document.getElementsByClassName("c")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("d")[i].childNodes[0].classList[1] == document.getElementsByClassName("d")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("d")[i].childNodes[0].classList[1] == document.getElementsByClassName("d")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
						}
					}
					if(check==0){
						var x = confirm("Sorry, you lose");
						if(x == true){
							restart();
						}
					}
				}
				
			}, (transitionTime+20));
			k++;
			break; 

		case 37: //left arrow

		if(isMoveOver == 1){
		for(i=0;i<4;i++){
			if(d2[i].childNodes.length != 0){//checks whether the third column is filled of empty
				if(d1[i].childNodes.length == 0){//if fourth column empty
					moveX(d2[i],d1[i]);

					if(d3[i].childNodes.length != 0){//if second column filled
						if(d3[i].childNodes[0].classList[1] == d2[i].childNodes[0].classList[1]){//if second and third same
							combineX(d3[i].childNodes[0],d2[i].childNodes[0]);

							if(d4[i].childNodes.length != 0){//if first column filled
								moveX(d4[i],d2[i]);
							}
						}
						else{//if second third not same
							moveX(d3[i],d2[i]);

							if(d4[i].childNodes.length != 0){//if first column filled
								
								if(d4[i].childNodes[0].classList[1] == d3[i].childNodes[0].classList[1]){
									combineX(d4[i].childNodes[0], d3[i].childNodes[0]);
								}
								
								else{
									moveX(d4[i],d3[i]);
								}
							}
						}
					}

					else if(d4[i].childNodes.length != 0){
						if(d4[i].childNodes[0].classList[1] == d2[i].childNodes[0].classList[1]){
							combineX(d4[i].childNodes[0], d2[i].childNodes[0]);
						}
						else{
							moveX(d4[i],d2[i]);
						}
					}
				}

				else if(d2[i].childNodes[0].classList[1] == d1[i].childNodes[0].classList[1]){//if fourth column filled and same
					combineX(d2[i].childNodes[0],d1[i].childNodes[0]);

					if(d3[i].childNodes.length != 0){//if second column filled
						moveX(d3[i],d2[i]);

						if(d4[i].childNodes.length != 0){
							if(d4[i].childNodes[0].classList[1] == d3[i].childNodes[0].classList[1]){
								combineX(d4[i].childNodes[0], d3[i].childNodes[0]);
							}
							else{
								moveX(d4[i], d3[i]);
							}
						}
					}

					else if(d4[i].childNodes.length != 0){//if first column filled
						moveX(d4[i],d2[i]);
					}
				}

				else{
					if(d3[i].childNodes.length != 0){
						if(d3[i].childNodes[0].classList[1] == d2[i].childNodes[0].classList[1]){
							combineX(d3[i].childNodes[0], d2[i].childNodes[0]);

							if(d4[i].childNodes.length != 0){
								moveX(d4[i],d3[i])
							}
						}

						else if(d4[i].childNodes.length != 0){
							if(d4[i].childNodes[0].classList[1] == d3[i].childNodes[0].classList[1]){
								combineX(d4[i].childNodes[0], d3[i].childNodes[0]);		
							}
						}
					}

					else if(d4[i].childNodes.length != 0){
						if(d4[i].childNodes[0].classList[1] == d2[i].childNodes[0].classList[1]){
							combineX(d4[i].childNodes[0], d2[i].childNodes[0]);
						}
						else{
							moveX(d4[i],d3[i]);
						}
					}
				}
			}

			else if(d3[i].childNodes.length != 0){
				if(d1[i].childNodes.length != 0){
					if(d3[i].childNodes[0].classList[1] == d1[i].childNodes[0].classList[1]){
						combineX(d3[i].childNodes[0],d1[i].childNodes[0]);

						if(d4[i].childNodes.length != 0){
							moveX(d4[i],d2[i]);
						}
					}

					else{
						moveX(d3[i],d2[i]);

						if(d4[i].childNodes.length != 0){
							if(d4[i].childNodes[0].classList[1] == d3[i].childNodes[0].classList[1]){
								combineX(d4[i].childNodes[0],d3[i].childNodes[0]);
							}
							else{
								moveX(d4[i],d3[i]);
							}
						}
					}
				}

				else if(d4[i].childNodes.length != 0){
					moveX(d3[i],d1[i]);

					if(d4[i].childNodes[0].classList[1] == d3[i].childNodes[0].classList[1]){
								combineX(d4[i].childNodes[0],d3[i].childNodes[0]);
					}
					else{
						moveX(d4[i],d2[i]);
					}
				}

				else{
					moveX(d3[i],d1[i]);
				}
			}

			else if(d4[i].childNodes.length != 0){
				if(d1[i].childNodes.length != 0){
					if(d4[i].childNodes[0].classList[1] == d1[i].childNodes[0].classList[1]){
						combineX(d4[i].childNodes[0],d1[i].childNodes[0]);
					}
					else{
						moveX(d4[i],d2[i]);
					}
				}
				else{
					moveX(d4[i],d1[i]);
				}
			}
		}
		}	
			isMoveOver = 0;
			setTimeout(function(){isMoveOver = 1}, 100);

			setTimeout(function(){if(moveCount > 0 || combineCount > 0){
				//randomElement();
				moveCount = 0;
				combineCount = 0;
			}},transitionTime);
			
			var check = 0;
			setTimeout(function(){
				emptyCount = 0;
				for(i=0;i<16;i++){
					if(document.getElementsByClassName("cell")[i].childNodes.length == 0){
						emptyCount++;
					}
				}
				if(emptyCount == 0){
					for(i=0;i<4;i++){
						if(i==0){
							if(document.getElementsByClassName("1")[0].childNodes[0].classList[1] == document.getElementsByClassName("1")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("2")[0].childNodes[0].classList[1] == document.getElementsByClassName("2")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("3")[0].childNodes[0].classList[1] == document.getElementsByClassName("3")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("4")[0].childNodes[0].classList[1] == document.getElementsByClassName("4")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("a")[0].childNodes[0].classList[1] == document.getElementsByClassName("a")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("b")[0].childNodes[0].classList[1] == document.getElementsByClassName("b")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("c")[0].childNodes[0].classList[1] == document.getElementsByClassName("c")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("d")[0].childNodes[0].classList[1] == document.getElementsByClassName("d")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
						}
						else if(i==3){
							if(document.getElementsByClassName("1")[3].childNodes[0].classList[1] == document.getElementsByClassName("1")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("2")[3].childNodes[0].classList[1] == document.getElementsByClassName("2")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("3")[3].childNodes[0].classList[1] == document.getElementsByClassName("3")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("4")[3].childNodes[0].classList[1] == document.getElementsByClassName("4")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("a")[3].childNodes[0].classList[1] == document.getElementsByClassName("a")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("b")[3].childNodes[0].classList[1] == document.getElementsByClassName("b")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("c")[3].childNodes[0].classList[1] == document.getElementsByClassName("c")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("d")[3].childNodes[0].classList[1] == document.getElementsByClassName("d")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
						}	
						else{
							if(document.getElementsByClassName("1")[i].childNodes[0].classList[1] == document.getElementsByClassName("1")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("1")[i].childNodes[0].classList[1] == document.getElementsByClassName("1")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("2")[i].childNodes[0].classList[1] == document.getElementsByClassName("2")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("2")[i].childNodes[0].classList[1] == document.getElementsByClassName("2")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("3")[i].childNodes[0].classList[1] == document.getElementsByClassName("3")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("3")[i].childNodes[0].classList[1] == document.getElementsByClassName("3")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("4")[i].childNodes[0].classList[1] == document.getElementsByClassName("4")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("4")[i].childNodes[0].classList[1] == document.getElementsByClassName("4")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("a")[i].childNodes[0].classList[1] == document.getElementsByClassName("a")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("a")[i].childNodes[0].classList[1] == document.getElementsByClassName("a")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("b")[i].childNodes[0].classList[1] == document.getElementsByClassName("b")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("b")[i].childNodes[0].classList[1] == document.getElementsByClassName("b")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("c")[i].childNodes[0].classList[1] == document.getElementsByClassName("c")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("c")[i].childNodes[0].classList[1] == document.getElementsByClassName("c")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("d")[i].childNodes[0].classList[1] == document.getElementsByClassName("d")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("d")[i].childNodes[0].classList[1] == document.getElementsByClassName("d")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
						}
					}
					if(check==0){
						var x = confirm("Sorry, you lose");
						if(x == true){
							restart();
						}
					}
				}
				
			}, (transitionTime+20));
			k++;
			break; 


		case 38://upper arrow
			

			if(isMoveOver == 1){
			for(i=0;i<4;i++){
			if(s2[i].childNodes.length != 0){//checks whether the third column is filled of empty
				if(s1[i].childNodes.length == 0){//if fourth column empty
					moveY(s2[i],s1[i]);

					if(s3[i].childNodes.length != 0){//if second column filled
						if(s3[i].childNodes[0].classList[1] == s2[i].childNodes[0].classList[1]){//if second and third same
							combineY(s3[i].childNodes[0],s2[i].childNodes[0]);

							if(s4[i].childNodes.length != 0){//if first column filled
								moveY(s4[i],s2[i]);
							}
						}
						else{//if second third not same
							moveY(s3[i],s2[i]);

							if(s4[i].childNodes.length != 0){//if first column filled
								
								if(s4[i].childNodes[0].classList[1] == s3[i].childNodes[0].classList[1]){
									combineY(s4[i].childNodes[0], s3[i].childNodes[0]);
								}
								
								else{
									moveY(s4[i],s3[i]);
								}
							}
						}
					}

					else if(s4[i].childNodes.length != 0){
						if(s4[i].childNodes[0].classList[1] == s2[i].childNodes[0].classList[1]){
							combineY(s4[i].childNodes[0], s2[i].childNodes[0]);
						}
						else{
							moveY(s4[i],s2[i]);
						}
					}
				}

				else if(s2[i].childNodes[0].classList[1] == s1[i].childNodes[0].classList[1]){//if fourth column filled and same
					combineY(s2[i].childNodes[0],s1[i].childNodes[0]);

					if(s3[i].childNodes.length != 0){//if second column filled
						moveY(s3[i],s2[i]);

						if(s4[i].childNodes.length != 0){
							if(s4[i].childNodes[0].classList[1] == s3[i].childNodes[0].classList[1]){
								combineY(s4[i].childNodes[0], s3[i].childNodes[0]);
							}
							else{
								moveY(s4[i], s3[i]);
							}
						}
					}

					else if(s4[i].childNodes.length != 0){//if first column filled
						moveY(s4[i],s2[i]);
					}
				}

				else{
					if(s3[i].childNodes.length != 0){
						if(s3[i].childNodes[0].classList[1] == s2[i].childNodes[0].classList[1]){
							combineY(s3[i].childNodes[0], s2[i].childNodes[0]);

							if(s4[i].childNodes.length != 0){
								moveY(s4[i],s3[i])
							}
						}

						else if(s4[i].childNodes.length != 0){
							if(s4[i].childNodes[0].classList[1] == s3[i].childNodes[0].classList[1]){
								combineY(s4[i].childNodes[0], s3[i].childNodes[0]);		
							}
						}
					}

					else if(s4[i].childNodes.length != 0){
						if(s4[i].childNodes[0].classList[1] == s2[i].childNodes[0].classList[1]){
							combineY(s4[i].childNodes[0], s2[i].childNodes[0]);
						}
						else{
							moveY(s4[i],s3[i]);
						}
					}
				}
			}

			else if(s3[i].childNodes.length != 0){
				if(s1[i].childNodes.length != 0){
					if(s3[i].childNodes[0].classList[1] == s1[i].childNodes[0].classList[1]){
						combineY(s3[i].childNodes[0],s1[i].childNodes[0]);

						if(s4[i].childNodes.length != 0){
							moveY(s4[i],s2[i]);
						}
					}

					else{
						moveY(s3[i],s2[i]);

						if(s4[i].childNodes.length != 0){
							if(s4[i].childNodes[0].classList[1] == s3[i].childNodes[0].classList[1]){
								combineY(s4[i].childNodes[0],s3[i].childNodes[0]);
							}
							else{
								moveY(s4[i],s3[i]);
							}
						}
					}
				}

				else if(s4[i].childNodes.length != 0){
					moveY(s3[i],s1[i]);

					if(s4[i].childNodes[0].classList[1] == s3[i].childNodes[0].classList[1]){
								combineY(s4[i].childNodes[0],s3[i].childNodes[0]);
					}
					else{
						moveY(s4[i],s2[i]);
					}
				}

				else{
					moveY(s3[i],s1[i]);
				}
			}

			else if(s4[i].childNodes.length != 0){
				if(s1[i].childNodes.length != 0){
					if(s4[i].childNodes[0].classList[1] == s1[i].childNodes[0].classList[1]){
						combineY(s4[i].childNodes[0],s1[i].childNodes[0]);
					}
					else{
						moveY(s4[i],s2[i]);
					}
				}
				else{
					moveY(s4[i],s1[i]);
				}
			}
			}
			}

			isMoveOver = 0;
			setTimeout(function(){isMoveOver = 1}, 100);

			setTimeout(function(){if(moveCount > 0 || combineCount > 0){
				//randomElement();
				moveCount = 0;
				combineCount = 0;
			}},transitionTime);

			var check = 0;
			setTimeout(function(){
				emptyCount = 0;
				for(i=0;i<16;i++){
					if(document.getElementsByClassName("cell")[i].childNodes.length == 0){
						emptyCount++;
					}
				}
				if(emptyCount == 0){
					for(i=0;i<4;i++){
						if(i==0){
							if(document.getElementsByClassName("1")[0].childNodes[0].classList[1] == document.getElementsByClassName("1")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("2")[0].childNodes[0].classList[1] == document.getElementsByClassName("2")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("3")[0].childNodes[0].classList[1] == document.getElementsByClassName("3")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("4")[0].childNodes[0].classList[1] == document.getElementsByClassName("4")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("a")[0].childNodes[0].classList[1] == document.getElementsByClassName("a")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("b")[0].childNodes[0].classList[1] == document.getElementsByClassName("b")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("c")[0].childNodes[0].classList[1] == document.getElementsByClassName("c")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("d")[0].childNodes[0].classList[1] == document.getElementsByClassName("d")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
						}
						else if(i==3){
							if(document.getElementsByClassName("1")[3].childNodes[0].classList[1] == document.getElementsByClassName("1")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("2")[3].childNodes[0].classList[1] == document.getElementsByClassName("2")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("3")[3].childNodes[0].classList[1] == document.getElementsByClassName("3")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("4")[3].childNodes[0].classList[1] == document.getElementsByClassName("4")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("a")[3].childNodes[0].classList[1] == document.getElementsByClassName("a")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("b")[3].childNodes[0].classList[1] == document.getElementsByClassName("b")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("c")[3].childNodes[0].classList[1] == document.getElementsByClassName("c")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("d")[3].childNodes[0].classList[1] == document.getElementsByClassName("d")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
						}	
						else{
							if(document.getElementsByClassName("1")[i].childNodes[0].classList[1] == document.getElementsByClassName("1")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("1")[i].childNodes[0].classList[1] == document.getElementsByClassName("1")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("2")[i].childNodes[0].classList[1] == document.getElementsByClassName("2")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("2")[i].childNodes[0].classList[1] == document.getElementsByClassName("2")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("3")[i].childNodes[0].classList[1] == document.getElementsByClassName("3")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("3")[i].childNodes[0].classList[1] == document.getElementsByClassName("3")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("4")[i].childNodes[0].classList[1] == document.getElementsByClassName("4")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("4")[i].childNodes[0].classList[1] == document.getElementsByClassName("4")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("a")[i].childNodes[0].classList[1] == document.getElementsByClassName("a")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("a")[i].childNodes[0].classList[1] == document.getElementsByClassName("a")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("b")[i].childNodes[0].classList[1] == document.getElementsByClassName("b")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("b")[i].childNodes[0].classList[1] == document.getElementsByClassName("b")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("c")[i].childNodes[0].classList[1] == document.getElementsByClassName("c")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("c")[i].childNodes[0].classList[1] == document.getElementsByClassName("c")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("d")[i].childNodes[0].classList[1] == document.getElementsByClassName("d")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("d")[i].childNodes[0].classList[1] == document.getElementsByClassName("d")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
						}
					}
					if(check==0){
						var x = confirm("Sorry, you lose");
						if(x == true){
							restart();
						}
					}
				}
				
			}, (transitionTime+20));
			k++;
			break;

			case 40:
				

			if(isMoveOver == 1){
			for(i=0;i<4;i++){
			if(r3[i].childNodes.length != 0){//checks whether the third column is filled of empty
				if(r4[i].childNodes.length == 0){//if fourth column empty
					moveY(r3[i],r4[i]);

					if(r2[i].childNodes.length != 0){//if second column filled
						if(r2[i].childNodes[0].classList[1] == r3[i].childNodes[0].classList[1]){//if second and third same
							combineY(r2[i].childNodes[0],r3[i].childNodes[0]);

							if(r1[i].childNodes.length != 0){//if first column filled
								moveY(r1[i],r3[i]);
							}
						}
						else{//if second third not same
							moveY(r2[i],r3[i]);

							if(r1[i].childNodes.length != 0){//if first column filled
								
								if(r1[i].childNodes[0].classList[1] == r2[i].childNodes[0].classList[1]){
									combineY(r1[i].childNodes[0], r2[i].childNodes[0]);
								}
								
								else{
									moveY(r1[i],r2[i]);
								}
							}
						}
					}

					else if(r1[i].childNodes.length != 0){
						if(r1[i].childNodes[0].classList[1] == r3[i].childNodes[0].classList[1]){
							combineY(r1[i].childNodes[0], r3[i].childNodes[0]);
						}
						else{
							moveY(r1[i],r3[i]);
						}
					}
				}

				else if(r3[i].childNodes[0].classList[1] == r4[i].childNodes[0].classList[1]){//if fourth column filled and same
					combineY(r3[i].childNodes[0],r4[i].childNodes[0]);

					if(r2[i].childNodes.length != 0){//if second column filled
						moveY(r2[i],r3[i]);

						if(r1[i].childNodes.length != 0){
							if(r1[i].childNodes[0].classList[1] == r2[i].childNodes[0].classList[1]){
								combineY(r1[i].childNodes[0], r2[i].childNodes[0]);
							}
							else{
								moveY(r1[i], r2[i]);
							}
						}
					}

					else if(r1[i].childNodes.length != 0){//if first column filled
						moveY(r1[i],r3[i]);
					}
				}

				else{
					if(r2[i].childNodes.length != 0){
						if(r2[i].childNodes[0].classList[1] == r3[i].childNodes[0].classList[1]){
							combineY(r2[i].childNodes[0], r3[i].childNodes[0]);

							if(r1[i].childNodes.length != 0){
								moveY(r1[i],r2[i])
							}
						}

						else if(r1[i].childNodes.length != 0){
							if(r1[i].childNodes[0].classList[1] == r2[i].childNodes[0].classList[1]){
								combineY(r1[i].childNodes[0], r2[i].childNodes[0]);		
							}
						}
					}

					else if(r1[i].childNodes.length != 0){
						if(r1[i].childNodes[0].classList[1] == r3[i].childNodes[0].classList[1]){
							combineY(r1[i].childNodes[0], r3[i].childNodes[0]);
						}
						else{
							moveY(r1[i],r2[i]);
						}
					}
				}
			}

			else if(r2[i].childNodes.length != 0){
				if(r4[i].childNodes.length != 0){
					if(r2[i].childNodes[0].classList[1] == r4[i].childNodes[0].classList[1]){
						combineY(r2[i].childNodes[0],r4[i].childNodes[0]);

						if(r1[i].childNodes.length != 0){
							moveY(r1[i],r3[i]);
						}
					}

					else{
						moveY(r2[i],r3[i]);

						if(r1[i].childNodes.length != 0){
							if(r1[i].childNodes[0].classList[1] == r2[i].childNodes[0].classList[1]){
								combineY(r1[i].childNodes[0],r2[i].childNodes[0]);
							}
							else{
								moveY(r1[i],r2[i]);
							}
						}
					}
				}

				else if(r1[i].childNodes.length != 0){
					moveY(r2[i],r4[i]);

					if(r1[i].childNodes[0].classList[1] == r2[i].childNodes[0].classList[1]){
								combineY(r1[i].childNodes[0],r2[i].childNodes[0]);
					}
					else{
						moveY(r1[i],r3[i]);
					}
				}

				else{
					moveY(r2[i],r4[i]);
				}
			}

			else if(r1[i].childNodes.length != 0){
				if(r4[i].childNodes.length != 0){
					if(r1[i].childNodes[0].classList[1] == r4[i].childNodes[0].classList[1]){
						combineY(r1[i].childNodes[0],r4[i].childNodes[0]);
					}
					else{
						moveY(r1[i],r3[i]);
					}
				}
				else{
					moveY(r1[i],r4[i]);
				}
			}
			}
			}

			isMoveOver = 0;
			setTimeout(function(){isMoveOver = 1}, 100);

			setTimeout(function(){if(moveCount > 0 || combineCount > 0){
				//randomElement();
				moveCount = 0;
				combineCount = 0;
			}},transitionTime);
			
			var check = 0;
			setTimeout(function(){
				emptyCount = 0;
				for(i=0;i<16;i++){
					if(document.getElementsByClassName("cell")[i].childNodes.length == 0){
						emptyCount++;
					}
				}
				if(emptyCount == 0){
					for(i=0;i<4;i++){
						if(i==0){
							if(document.getElementsByClassName("1")[0].childNodes[0].classList[1] == document.getElementsByClassName("1")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("2")[0].childNodes[0].classList[1] == document.getElementsByClassName("2")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("3")[0].childNodes[0].classList[1] == document.getElementsByClassName("3")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("4")[0].childNodes[0].classList[1] == document.getElementsByClassName("4")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("a")[0].childNodes[0].classList[1] == document.getElementsByClassName("a")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("b")[0].childNodes[0].classList[1] == document.getElementsByClassName("b")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("c")[0].childNodes[0].classList[1] == document.getElementsByClassName("c")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("d")[0].childNodes[0].classList[1] == document.getElementsByClassName("d")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
						}
						else if(i==3){
							if(document.getElementsByClassName("1")[3].childNodes[0].classList[1] == document.getElementsByClassName("1")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("2")[3].childNodes[0].classList[1] == document.getElementsByClassName("2")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("3")[3].childNodes[0].classList[1] == document.getElementsByClassName("3")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("4")[3].childNodes[0].classList[1] == document.getElementsByClassName("4")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("a")[3].childNodes[0].classList[1] == document.getElementsByClassName("a")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("b")[3].childNodes[0].classList[1] == document.getElementsByClassName("b")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("c")[3].childNodes[0].classList[1] == document.getElementsByClassName("c")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("d")[3].childNodes[0].classList[1] == document.getElementsByClassName("d")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
						}	
						else{
							if(document.getElementsByClassName("1")[i].childNodes[0].classList[1] == document.getElementsByClassName("1")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("1")[i].childNodes[0].classList[1] == document.getElementsByClassName("1")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("2")[i].childNodes[0].classList[1] == document.getElementsByClassName("2")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("2")[i].childNodes[0].classList[1] == document.getElementsByClassName("2")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("3")[i].childNodes[0].classList[1] == document.getElementsByClassName("3")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("3")[i].childNodes[0].classList[1] == document.getElementsByClassName("3")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("4")[i].childNodes[0].classList[1] == document.getElementsByClassName("4")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("4")[i].childNodes[0].classList[1] == document.getElementsByClassName("4")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("a")[i].childNodes[0].classList[1] == document.getElementsByClassName("a")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("a")[i].childNodes[0].classList[1] == document.getElementsByClassName("a")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("b")[i].childNodes[0].classList[1] == document.getElementsByClassName("b")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("b")[i].childNodes[0].classList[1] == document.getElementsByClassName("b")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("c")[i].childNodes[0].classList[1] == document.getElementsByClassName("c")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("c")[i].childNodes[0].classList[1] == document.getElementsByClassName("c")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("d")[i].childNodes[0].classList[1] == document.getElementsByClassName("d")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("d")[i].childNodes[0].classList[1] == document.getElementsByClassName("d")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
						}
					}
					if(check==0){
						var x = confirm("Sorry, you lose");
						if(x == true){
							restart();
						}
					}
				}
				
			}, (transitionTime+20));
			k++;
			break;
	}

	}
}, 100);

var x1,y1;
document.addEventListener("touchstart", function(e){
	if(!e) e = event.which;

	e.preventDefault();
	x1 = e.changedTouches[0].pageX;
	y1 = e.changedTouches[0].pageY;
});

document.addEventListener("touchend", function(e){
	deltaX = e.changedTouches[0].pageX - x1;
	deltaY = e.changedTouches[0].pageY - y1;

	if(deltaX > 0 && Math.abs(deltaX) >= Math.abs(deltaY)){//right swipe
		e.preventDefault();

			if(isMoveOver == 1){
			for(i=0;i<4;i++){
			if(c3[i].childNodes.length != 0){//checks whether the third column is filled of empty
				if(c4[i].childNodes.length == 0){//if fourth column empty
					moveX(c3[i],c4[i]);

					if(c2[i].childNodes.length != 0){//if second column filled
						if(c2[i].childNodes[0].classList[1] == c3[i].childNodes[0].classList[1]){//if second and third same
							combineX(c2[i].childNodes[0],c3[i].childNodes[0]);

							if(c1[i].childNodes.length != 0){//if first column filled
								moveX(c1[i],c3[i]);
							}
						}
						else{//if second third not same
							moveX(c2[i],c3[i]);

							if(c1[i].childNodes.length != 0){//if first column filled
								
								if(c1[i].childNodes[0].classList[1] == c2[i].childNodes[0].classList[1]){
									combineX(c1[i].childNodes[0], c2[i].childNodes[0]);
								}
								
								else{
									moveX(c1[i],c2[i]);
								}
							}
						}
					}

					else if(c1[i].childNodes.length != 0){
						if(c1[i].childNodes[0].classList[1] == c3[i].childNodes[0].classList[1]){
							combineX(c1[i].childNodes[0], c3[i].childNodes[0]);
						}
						else{
							moveX(c1[i],c3[i]);
						}
					}
				}

				else if(c3[i].childNodes[0].classList[1] == c4[i].childNodes[0].classList[1]){//if fourth column filled and same
					combineX(c3[i].childNodes[0],c4[i].childNodes[0]);

					if(c2[i].childNodes.length != 0){//if second column filled
						moveX(c2[i],c3[i]);

						if(c1[i].childNodes.length != 0){
							if(c1[i].childNodes[0].classList[1] == c2[i].childNodes[0].classList[1]){
								combineX(c1[i].childNodes[0], c2[i].childNodes[0]);
							}
							else{
								moveX(c1[i], c2[i]);
							}
						}
					}

					else if(c1[i].childNodes.length != 0){//if first column filled
						moveX(c1[i],c3[i]);
					}
				}

				else{
					if(c2[i].childNodes.length != 0){
						if(c2[i].childNodes[0].classList[1] == c3[i].childNodes[0].classList[1]){
							combineX(c2[i].childNodes[0], c3[i].childNodes[0]);

							if(c1[i].childNodes.length != 0){
								moveX(c1[i],c2[i])
							}
						}

						else if(c1[i].childNodes.length != 0){
							if(c1[i].childNodes[0].classList[1] == c2[i].childNodes[0].classList[1]){
								combineX(c1[i].childNodes[0], c2[i].childNodes[0]);		
							}
						}
					}

					else if(c1[i].childNodes.length != 0){
						if(c1[i].childNodes[0].classList[1] == c3[i].childNodes[0].classList[1]){
							combineX(c1[i].childNodes[0], c3[i].childNodes[0]);
						}
						else{
							moveX(c1[i],c2[i]);
						}
					}
				}
			}

			else if(c2[i].childNodes.length != 0){
				if(c4[i].childNodes.length != 0){
					if(c2[i].childNodes[0].classList[1] == c4[i].childNodes[0].classList[1]){
						combineX(c2[i].childNodes[0],c4[i].childNodes[0]);

						if(c1[i].childNodes.length != 0){
							moveX(c1[i],c3[i]);
						}
					}

					else{
						moveX(c2[i],c3[i]);

						if(c1[i].childNodes.length != 0){
							if(c1[i].childNodes[0].classList[1] == c2[i].childNodes[0].classList[1]){
								combineX(c1[i].childNodes[0],c2[i].childNodes[0]);
							}
							else{
								moveX(c1[i],c2[i]);
							}
						}
					}
				}

				else if(c1[i].childNodes.length != 0){
					moveX(c2[i],c4[i]);

					if(c1[i].childNodes[0].classList[1] == c2[i].childNodes[0].classList[1]){
								combineX(c1[i].childNodes[0],c2[i].childNodes[0]);
					}
					else{
						moveX(c1[i],c3[i]);
					}
				}

				else{
					moveX(c2[i],c4[i]);
				}
			}

			else if(c1[i].childNodes.length != 0){
				if(c4[i].childNodes.length != 0){
					if(c1[i].childNodes[0].classList[1] == c4[i].childNodes[0].classList[1]){
						combineX(c1[i].childNodes[0],c4[i].childNodes[0]);
					}
					else{
						moveX(c1[i],c3[i]);
					}
				}
				else{
					moveX(c1[i],c4[i]);
				}
			}
			}
			}

			isMoveOver = 0;

			setTimeout(function(){isMoveOver=1}, 100);

			setTimeout(function(){if(moveCount > 0 || combineCount > 0){
				//randomElement();
				moveCount = 0;
				combineCount = 0;
			}},transitionTime);

			var check = 0;
			setTimeout(function(){
				emptyCount = 0;
				for(i=0;i<16;i++){
					if(document.getElementsByClassName("cell")[i].childNodes.length == 0){
						emptyCount++;
					}
				}
				if(emptyCount == 0){
					for(i=0;i<4;i++){
						if(i==0){
							if(document.getElementsByClassName("1")[0].childNodes[0].classList[1] == document.getElementsByClassName("1")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("2")[0].childNodes[0].classList[1] == document.getElementsByClassName("2")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("3")[0].childNodes[0].classList[1] == document.getElementsByClassName("3")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("4")[0].childNodes[0].classList[1] == document.getElementsByClassName("4")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("a")[0].childNodes[0].classList[1] == document.getElementsByClassName("a")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("b")[0].childNodes[0].classList[1] == document.getElementsByClassName("b")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("c")[0].childNodes[0].classList[1] == document.getElementsByClassName("c")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("d")[0].childNodes[0].classList[1] == document.getElementsByClassName("d")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
						}
						else if(i==3){
							if(document.getElementsByClassName("1")[3].childNodes[0].classList[1] == document.getElementsByClassName("1")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("2")[3].childNodes[0].classList[1] == document.getElementsByClassName("2")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("3")[3].childNodes[0].classList[1] == document.getElementsByClassName("3")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("4")[3].childNodes[0].classList[1] == document.getElementsByClassName("4")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("a")[3].childNodes[0].classList[1] == document.getElementsByClassName("a")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("b")[3].childNodes[0].classList[1] == document.getElementsByClassName("b")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("c")[3].childNodes[0].classList[1] == document.getElementsByClassName("c")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("d")[3].childNodes[0].classList[1] == document.getElementsByClassName("d")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
						}	
						else{
							if(document.getElementsByClassName("1")[i].childNodes[0].classList[1] == document.getElementsByClassName("1")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("1")[i].childNodes[0].classList[1] == document.getElementsByClassName("1")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("2")[i].childNodes[0].classList[1] == document.getElementsByClassName("2")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("2")[i].childNodes[0].classList[1] == document.getElementsByClassName("2")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("3")[i].childNodes[0].classList[1] == document.getElementsByClassName("3")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("3")[i].childNodes[0].classList[1] == document.getElementsByClassName("3")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("4")[i].childNodes[0].classList[1] == document.getElementsByClassName("4")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("4")[i].childNodes[0].classList[1] == document.getElementsByClassName("4")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("a")[i].childNodes[0].classList[1] == document.getElementsByClassName("a")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("a")[i].childNodes[0].classList[1] == document.getElementsByClassName("a")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("b")[i].childNodes[0].classList[1] == document.getElementsByClassName("b")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("b")[i].childNodes[0].classList[1] == document.getElementsByClassName("b")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("c")[i].childNodes[0].classList[1] == document.getElementsByClassName("c")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("c")[i].childNodes[0].classList[1] == document.getElementsByClassName("c")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("d")[i].childNodes[0].classList[1] == document.getElementsByClassName("d")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("d")[i].childNodes[0].classList[1] == document.getElementsByClassName("d")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
						}
					}
					if(check==0){
						var x = confirm("Sorry, you lose");
						if(x == true){
							restart();
						}
					}
				}
				
			}, (transitionTime+20));
	}

	else if(deltaX < 0 && Math.abs(deltaX) >= Math.abs(deltaY)){//left swipe
		e.preventDefault();

		if(isMoveOver == 1){
		for(i=0;i<4;i++){
			if(d2[i].childNodes.length != 0){//checks whether the third column is filled of empty
				if(d1[i].childNodes.length == 0){//if fourth column empty
					moveX(d2[i],d1[i]);

					if(d3[i].childNodes.length != 0){//if second column filled
						if(d3[i].childNodes[0].classList[1] == d2[i].childNodes[0].classList[1]){//if second and third same
							combineX(d3[i].childNodes[0],d2[i].childNodes[0]);

							if(d4[i].childNodes.length != 0){//if first column filled
								moveX(d4[i],d2[i]);
							}
						}
						else{//if second third not same
							moveX(d3[i],d2[i]);

							if(d4[i].childNodes.length != 0){//if first column filled
								
								if(d4[i].childNodes[0].classList[1] == d3[i].childNodes[0].classList[1]){
									combineX(d4[i].childNodes[0], d3[i].childNodes[0]);
								}
								
								else{
									moveX(d4[i],d3[i]);
								}
							}
						}
					}

					else if(d4[i].childNodes.length != 0){
						if(d4[i].childNodes[0].classList[1] == d2[i].childNodes[0].classList[1]){
							combineX(d4[i].childNodes[0], d2[i].childNodes[0]);
						}
						else{
							moveX(d4[i],d2[i]);
						}
					}
				}

				else if(d2[i].childNodes[0].classList[1] == d1[i].childNodes[0].classList[1]){//if fourth column filled and same
					combineX(d2[i].childNodes[0],d1[i].childNodes[0]);

					if(d3[i].childNodes.length != 0){//if second column filled
						moveX(d3[i],d2[i]);

						if(d4[i].childNodes.length != 0){
							if(d4[i].childNodes[0].classList[1] == d3[i].childNodes[0].classList[1]){
								combineX(d4[i].childNodes[0], d3[i].childNodes[0]);
							}
							else{
								moveX(d4[i], d3[i]);
							}
						}
					}

					else if(d4[i].childNodes.length != 0){//if first column filled
						moveX(d4[i],d2[i]);
					}
				}

				else{
					if(d3[i].childNodes.length != 0){
						if(d3[i].childNodes[0].classList[1] == d2[i].childNodes[0].classList[1]){
							combineX(d3[i].childNodes[0], d2[i].childNodes[0]);

							if(d4[i].childNodes.length != 0){
								moveX(d4[i],d3[i])
							}
						}

						else if(d4[i].childNodes.length != 0){
							if(d4[i].childNodes[0].classList[1] == d3[i].childNodes[0].classList[1]){
								combineX(d4[i].childNodes[0], d3[i].childNodes[0]);		
							}
						}
					}

					else if(d4[i].childNodes.length != 0){
						if(d4[i].childNodes[0].classList[1] == d2[i].childNodes[0].classList[1]){
							combineX(d4[i].childNodes[0], d2[i].childNodes[0]);

						}
						else{
							moveX(d4[i],d3[i]);
						}
					}
				}
			}

			else if(d3[i].childNodes.length != 0){
				if(d1[i].childNodes.length != 0){
					if(d3[i].childNodes[0].classList[1] == d1[i].childNodes[0].classList[1]){
						combineX(d3[i].childNodes[0],d1[i].childNodes[0]);

						if(d4[i].childNodes.length != 0){
							moveX(d4[i],d2[i]);
						}
					}

					else{
						moveX(d3[i],d2[i]);

						if(d4[i].childNodes.length != 0){
							if(d4[i].childNodes[0].classList[1] == d3[i].childNodes[0].classList[1]){
								combineX(d4[i].childNodes[0],d3[i].childNodes[0]);
							}
							else{
								moveX(d4[i],d3[i]);
							}
						}
					}
				}

				else if(d4[i].childNodes.length != 0){
					moveX(d3[i],d1[i]);

					if(d4[i].childNodes[0].classList[1] == d3[i].childNodes[0].classList[1]){
								combineX(d4[i].childNodes[0],d3[i].childNodes[0]);
					}
					else{
						moveX(d4[i],d2[i]);
					}
				}

				else{
					moveX(d3[i],d1[i]);
				}
			}

			else if(d4[i].childNodes.length != 0){
				if(d1[i].childNodes.length != 0){
					if(d4[i].childNodes[0].classList[1] == d1[i].childNodes[0].classList[1]){
						combineX(d4[i].childNodes[0],d1[i].childNodes[0]);
					}
					else{
						moveX(d4[i],d2[i]);
					}
				}
				else{
					moveX(d4[i],d1[i]);
				}
			}
			}
			}

			isMoveOver = 0;

			setTimeout(function(){isMoveOver=1}, 100);

			setTimeout(function(){if(moveCount > 0 || combineCount > 0){
				//randomElement();
				moveCount = 0;
				combineCount = 0;
			}},transitionTime);
			
			var check = 0;
			setTimeout(function(){
				emptyCount = 0;
				for(i=0;i<16;i++){
					if(document.getElementsByClassName("cell")[i].childNodes.length == 0){
						emptyCount++;
					}
				}
				if(emptyCount == 0){
					for(i=0;i<4;i++){
						if(i==0){
							if(document.getElementsByClassName("1")[0].childNodes[0].classList[1] == document.getElementsByClassName("1")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("2")[0].childNodes[0].classList[1] == document.getElementsByClassName("2")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("3")[0].childNodes[0].classList[1] == document.getElementsByClassName("3")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("4")[0].childNodes[0].classList[1] == document.getElementsByClassName("4")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("a")[0].childNodes[0].classList[1] == document.getElementsByClassName("a")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("b")[0].childNodes[0].classList[1] == document.getElementsByClassName("b")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("c")[0].childNodes[0].classList[1] == document.getElementsByClassName("c")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("d")[0].childNodes[0].classList[1] == document.getElementsByClassName("d")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
						}
						else if(i==3){
							if(document.getElementsByClassName("1")[3].childNodes[0].classList[1] == document.getElementsByClassName("1")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("2")[3].childNodes[0].classList[1] == document.getElementsByClassName("2")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("3")[3].childNodes[0].classList[1] == document.getElementsByClassName("3")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("4")[3].childNodes[0].classList[1] == document.getElementsByClassName("4")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("a")[3].childNodes[0].classList[1] == document.getElementsByClassName("a")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("b")[3].childNodes[0].classList[1] == document.getElementsByClassName("b")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("c")[3].childNodes[0].classList[1] == document.getElementsByClassName("c")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("d")[3].childNodes[0].classList[1] == document.getElementsByClassName("d")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
						}	
						else{
							if(document.getElementsByClassName("1")[i].childNodes[0].classList[1] == document.getElementsByClassName("1")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("1")[i].childNodes[0].classList[1] == document.getElementsByClassName("1")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("2")[i].childNodes[0].classList[1] == document.getElementsByClassName("2")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("2")[i].childNodes[0].classList[1] == document.getElementsByClassName("2")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("3")[i].childNodes[0].classList[1] == document.getElementsByClassName("3")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("3")[i].childNodes[0].classList[1] == document.getElementsByClassName("3")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("4")[i].childNodes[0].classList[1] == document.getElementsByClassName("4")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("4")[i].childNodes[0].classList[1] == document.getElementsByClassName("4")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("a")[i].childNodes[0].classList[1] == document.getElementsByClassName("a")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("a")[i].childNodes[0].classList[1] == document.getElementsByClassName("a")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("b")[i].childNodes[0].classList[1] == document.getElementsByClassName("b")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("b")[i].childNodes[0].classList[1] == document.getElementsByClassName("b")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("c")[i].childNodes[0].classList[1] == document.getElementsByClassName("c")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("c")[i].childNodes[0].classList[1] == document.getElementsByClassName("c")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("d")[i].childNodes[0].classList[1] == document.getElementsByClassName("d")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("d")[i].childNodes[0].classList[1] == document.getElementsByClassName("d")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
						}
					}
					if(check==0){
						var x = confirm("Sorry, you lose");
						if(x == true){
							restart();
						}
					}
				}
				
			}, (transitionTime+20));
			
	}

	else if(deltaY < 0 && Math.abs(deltaX) <= Math.abs(deltaY)){//upper swipe
		e.preventDefault();

		if(isMoveOver == 1){
		for(i=0;i<4;i++){
			if(s2[i].childNodes.length != 0){//checks whether the third column is filled of empty
				if(s1[i].childNodes.length == 0){//if fourth column empty
					moveY(s2[i],s1[i]);

					if(s3[i].childNodes.length != 0){//if second column filled
						if(s3[i].childNodes[0].classList[1] == s2[i].childNodes[0].classList[1]){//if second and third same
							combineY(s3[i].childNodes[0],s2[i].childNodes[0]);

							if(s4[i].childNodes.length != 0){//if first column filled
								moveY(s4[i],s2[i]);
							}
						}
						else{//if second third not same
							moveY(s3[i],s2[i]);

							if(s4[i].childNodes.length != 0){//if first column filled
								
								if(s4[i].childNodes[0].classList[1] == s3[i].childNodes[0].classList[1]){
									combineY(s4[i].childNodes[0], s3[i].childNodes[0]);
								}
								
								else{
									moveY(s4[i],s3[i]);
								}
							}
						}
					}

					else if(s4[i].childNodes.length != 0){
						if(s4[i].childNodes[0].classList[1] == s2[i].childNodes[0].classList[1]){
							combineY(s4[i].childNodes[0], s2[i].childNodes[0]);
						}
						else{
							moveY(s4[i],s2[i]);
						}
					}
				}

				else if(s2[i].childNodes[0].classList[1] == s1[i].childNodes[0].classList[1]){//if fourth column filled and same
					combineY(s2[i].childNodes[0],s1[i].childNodes[0]);

					if(s3[i].childNodes.length != 0){//if second column filled
						moveY(s3[i],s2[i]);

						if(s4[i].childNodes.length != 0){
							if(s4[i].childNodes[0].classList[1] == s3[i].childNodes[0].classList[1]){
								combineY(s4[i].childNodes[0], s3[i].childNodes[0]);
							}
							else{
								moveY(s4[i], s3[i]);
							}
						}
					}

					else if(s4[i].childNodes.length != 0){//if first column filled
						moveY(s4[i],s2[i]);
					}
				}

				else{
					if(s3[i].childNodes.length != 0){
						if(s3[i].childNodes[0].classList[1] == s2[i].childNodes[0].classList[1]){
							combineY(s3[i].childNodes[0], s2[i].childNodes[0]);

							if(s4[i].childNodes.length != 0){
								moveY(s4[i],s3[i])
							}
						}

						else if(s4[i].childNodes.length != 0){
							if(s4[i].childNodes[0].classList[1] == s3[i].childNodes[0].classList[1]){
								combineY(s4[i].childNodes[0], s3[i].childNodes[0]);		
							}
						}
					}

					else if(s4[i].childNodes.length != 0){
						if(s4[i].childNodes[0].classList[1] == s2[i].childNodes[0].classList[1]){
							combineY(s4[i].childNodes[0], s2[i].childNodes[0]);
						}
						else{
							moveY(s4[i],s3[i]);
						}
					}
				}
			}

			else if(s3[i].childNodes.length != 0){
				if(s1[i].childNodes.length != 0){
					if(s3[i].childNodes[0].classList[1] == s1[i].childNodes[0].classList[1]){
						combineY(s3[i].childNodes[0],s1[i].childNodes[0]);

						if(s4[i].childNodes.length != 0){
							moveY(s4[i],s2[i]);
						}
					}

					else{
						moveY(s3[i],s2[i]);

						if(s4[i].childNodes.length != 0){
							if(s4[i].childNodes[0].classList[1] == s3[i].childNodes[0].classList[1]){
								combineY(s4[i].childNodes[0],s3[i].childNodes[0]);
							}
							else{
								moveY(s4[i],s3[i]);
							}
						}
					}
				}

				else if(s4[i].childNodes.length != 0){
					moveY(s3[i],s1[i]);

					if(s4[i].childNodes[0].classList[1] == s3[i].childNodes[0].classList[1]){
								combineY(s4[i].childNodes[0],s3[i].childNodes[0]);
					}
					else{
						moveY(s4[i],s2[i]);
					}
				}

				else{
					moveY(s3[i],s1[i]);
				}
			}

			else if(s4[i].childNodes.length != 0){
				if(s1[i].childNodes.length != 0){
					if(s4[i].childNodes[0].classList[1] == s1[i].childNodes[0].classList[1]){
						combineY(s4[i].childNodes[0],s1[i].childNodes[0]);
					}
					else{
						moveY(s4[i],s2[i]);
					}
				}
				else{
					moveY(s4[i],s1[i]);
				}
			}
			}
			}

			isMoveOver = 0;

			setTimeout(function(){isMoveOver=1}, 100);

			setTimeout(function(){if(moveCount > 0 || combineCount > 0){
				//randomElement();
				moveCount = 0;
				combineCount = 0;
			}},transitionTime);

			var check = 0;
			setTimeout(function(){
				emptyCount = 0;
				for(i=0;i<16;i++){
					if(document.getElementsByClassName("cell")[i].childNodes.length == 0){
						emptyCount++;
					}
				}
				if(emptyCount == 0){
					for(i=0;i<4;i++){
						if(i==0){
							if(document.getElementsByClassName("1")[0].childNodes[0].classList[1] == document.getElementsByClassName("1")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("2")[0].childNodes[0].classList[1] == document.getElementsByClassName("2")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("3")[0].childNodes[0].classList[1] == document.getElementsByClassName("3")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("4")[0].childNodes[0].classList[1] == document.getElementsByClassName("4")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("a")[0].childNodes[0].classList[1] == document.getElementsByClassName("a")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("b")[0].childNodes[0].classList[1] == document.getElementsByClassName("b")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("c")[0].childNodes[0].classList[1] == document.getElementsByClassName("c")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("d")[0].childNodes[0].classList[1] == document.getElementsByClassName("d")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
						}
						else if(i==3){
							if(document.getElementsByClassName("1")[3].childNodes[0].classList[1] == document.getElementsByClassName("1")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("2")[3].childNodes[0].classList[1] == document.getElementsByClassName("2")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("3")[3].childNodes[0].classList[1] == document.getElementsByClassName("3")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("4")[3].childNodes[0].classList[1] == document.getElementsByClassName("4")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("a")[3].childNodes[0].classList[1] == document.getElementsByClassName("a")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("b")[3].childNodes[0].classList[1] == document.getElementsByClassName("b")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("c")[3].childNodes[0].classList[1] == document.getElementsByClassName("c")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("d")[3].childNodes[0].classList[1] == document.getElementsByClassName("d")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
						}	
						else{
							if(document.getElementsByClassName("1")[i].childNodes[0].classList[1] == document.getElementsByClassName("1")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("1")[i].childNodes[0].classList[1] == document.getElementsByClassName("1")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("2")[i].childNodes[0].classList[1] == document.getElementsByClassName("2")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("2")[i].childNodes[0].classList[1] == document.getElementsByClassName("2")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("3")[i].childNodes[0].classList[1] == document.getElementsByClassName("3")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("3")[i].childNodes[0].classList[1] == document.getElementsByClassName("3")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("4")[i].childNodes[0].classList[1] == document.getElementsByClassName("4")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("4")[i].childNodes[0].classList[1] == document.getElementsByClassName("4")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("a")[i].childNodes[0].classList[1] == document.getElementsByClassName("a")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("a")[i].childNodes[0].classList[1] == document.getElementsByClassName("a")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("b")[i].childNodes[0].classList[1] == document.getElementsByClassName("b")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("b")[i].childNodes[0].classList[1] == document.getElementsByClassName("b")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("c")[i].childNodes[0].classList[1] == document.getElementsByClassName("c")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("c")[i].childNodes[0].classList[1] == document.getElementsByClassName("c")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("d")[i].childNodes[0].classList[1] == document.getElementsByClassName("d")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("d")[i].childNodes[0].classList[1] == document.getElementsByClassName("d")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
						}
					}
					if(check==0){
						var x = confirm("Sorry, you lose");
						if(x == true){
							restart();
						}
					}
				}
				
			}, (transitionTime+20));
	}

	else if(deltaY > 0 && Math.abs(deltaX) <= Math.abs(deltaY)){//lower swipe
		e.preventDefault();

		if(isMoveOver == 1){
		for(i=0;i<4;i++){
			if(r3[i].childNodes.length != 0){//checks whether the third column is filled of empty
				if(r4[i].childNodes.length == 0){//if fourth column empty
					moveY(r3[i],r4[i]);

					if(r2[i].childNodes.length != 0){//if second column filled
						if(r2[i].childNodes[0].classList[1] == r3[i].childNodes[0].classList[1]){//if second and third same
							combineY(r2[i].childNodes[0],r3[i].childNodes[0]);

							if(r1[i].childNodes.length != 0){//if first column filled
								moveY(r1[i],r3[i]);
							}
						}
						else{//if second third not same
							moveY(r2[i],r3[i]);

							if(r1[i].childNodes.length != 0){//if first column filled
								
								if(r1[i].childNodes[0].classList[1] == r2[i].childNodes[0].classList[1]){
									combineY(r1[i].childNodes[0], r2[i].childNodes[0]);
								}
								
								else{
									moveY(r1[i],r2[i]);
								}
							}
						}
					}

					else if(r1[i].childNodes.length != 0){
						if(r1[i].childNodes[0].classList[1] == r3[i].childNodes[0].classList[1]){
							combineY(r1[i].childNodes[0], r3[i].childNodes[0]);
						}
						else{
							moveY(r1[i],r3[i]);
						}
					}
				}

				else if(r3[i].childNodes[0].classList[1] == r4[i].childNodes[0].classList[1]){//if fourth column filled and same
					combineY(r3[i].childNodes[0],r4[i].childNodes[0]);

					if(r2[i].childNodes.length != 0){//if second column filled
						moveY(r2[i],r3[i]);

						if(r1[i].childNodes.length != 0){
							if(r1[i].childNodes[0].classList[1] == r2[i].childNodes[0].classList[1]){
								combineY(r1[i].childNodes[0], r2[i].childNodes[0]);
							}
							else{
								moveY(r1[i], r2[i]);
							}
						}
					}

					else if(r1[i].childNodes.length != 0){//if first column filled
						moveY(r1[i],r3[i]);
					}
				}

				else{
					if(r2[i].childNodes.length != 0){
						if(r2[i].childNodes[0].classList[1] == r3[i].childNodes[0].classList[1]){
							combineY(r2[i].childNodes[0], r3[i].childNodes[0]);

							if(r1[i].childNodes.length != 0){
								moveY(r1[i],r2[i])
							}
						}

						else if(r1[i].childNodes.length != 0){
							if(r1[i].childNodes[0].classList[1] == r2[i].childNodes[0].classList[1]){
								combineY(r1[i].childNodes[0], r2[i].childNodes[0]);		
							}
						}
					}

					else if(r1[i].childNodes.length != 0){
						if(r1[i].childNodes[0].classList[1] == r3[i].childNodes[0].classList[1]){
							combineY(r1[i].childNodes[0], r3[i].childNodes[0]);
						}
						else{
							moveY(r1[i],r2[i]);
						}
					}
				}
			}

			else if(r2[i].childNodes.length != 0){
				if(r4[i].childNodes.length != 0){
					if(r2[i].childNodes[0].classList[1] == r4[i].childNodes[0].classList[1]){
						combineY(r2[i].childNodes[0],r4[i].childNodes[0]);

						if(r1[i].childNodes.length != 0){
							moveY(r1[i],r3[i]);
						}
					}

					else{
						moveY(r2[i],r3[i]);

						if(r1[i].childNodes.length != 0){
							if(r1[i].childNodes[0].classList[1] == r2[i].childNodes[0].classList[1]){
								combineY(r1[i].childNodes[0],r2[i].childNodes[0]);
							}
							else{
								moveY(r1[i],r2[i]);
							}
						}
					}
				}

				else if(r1[i].childNodes.length != 0){
					moveY(r2[i],r4[i]);

					if(r1[i].childNodes[0].classList[1] == r2[i].childNodes[0].classList[1]){
								combineY(r1[i].childNodes[0],r2[i].childNodes[0]);
					}
					else{
						moveY(r1[i],r3[i]);
					}
				}

				else{
					moveY(r2[i],r4[i]);
				}
			}

			else if(r1[i].childNodes.length != 0){
				if(r4[i].childNodes.length != 0){
					if(r1[i].childNodes[0].classList[1] == r4[i].childNodes[0].classList[1]){
						combineY(r1[i].childNodes[0],r4[i].childNodes[0]);
					}
					else{
						moveY(r1[i],r3[i]);
					}
				}
				else{
					moveY(r1[i],r4[i]);
				}
			}
			}
			}

			isMoveOver = 0;

			setTimeout(function(){isMoveOver=1}, 100);
			
			setTimeout(function(){if(moveCount > 0 || combineCount > 0){
				//randomElement();
				moveCount = 0;
				combineCount = 0;
			}},transitionTime);
			
			var check = 0;
			setTimeout(function(){
				emptyCount = 0;
				for(i=0;i<16;i++){
					if(document.getElementsByClassName("cell")[i].childNodes.length == 0){
						emptyCount++;
					}
				}
				if(emptyCount == 0){
					for(i=0;i<4;i++){
						if(i==0){
							if(document.getElementsByClassName("1")[0].childNodes[0].classList[1] == document.getElementsByClassName("1")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("2")[0].childNodes[0].classList[1] == document.getElementsByClassName("2")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("3")[0].childNodes[0].classList[1] == document.getElementsByClassName("3")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("4")[0].childNodes[0].classList[1] == document.getElementsByClassName("4")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("a")[0].childNodes[0].classList[1] == document.getElementsByClassName("a")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("b")[0].childNodes[0].classList[1] == document.getElementsByClassName("b")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("c")[0].childNodes[0].classList[1] == document.getElementsByClassName("c")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("d")[0].childNodes[0].classList[1] == document.getElementsByClassName("d")[1].childNodes[0].classList[1]){
								check++;
								break;
							}
						}
						else if(i==3){
							if(document.getElementsByClassName("1")[3].childNodes[0].classList[1] == document.getElementsByClassName("1")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("2")[3].childNodes[0].classList[1] == document.getElementsByClassName("2")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("3")[3].childNodes[0].classList[1] == document.getElementsByClassName("3")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("4")[3].childNodes[0].classList[1] == document.getElementsByClassName("4")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("a")[3].childNodes[0].classList[1] == document.getElementsByClassName("a")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("b")[3].childNodes[0].classList[1] == document.getElementsByClassName("b")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("c")[3].childNodes[0].classList[1] == document.getElementsByClassName("c")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("d")[3].childNodes[0].classList[1] == document.getElementsByClassName("d")[2].childNodes[0].classList[1]){
								check++;
								break;
							}
						}	
						else{
							if(document.getElementsByClassName("1")[i].childNodes[0].classList[1] == document.getElementsByClassName("1")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("1")[i].childNodes[0].classList[1] == document.getElementsByClassName("1")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("2")[i].childNodes[0].classList[1] == document.getElementsByClassName("2")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("2")[i].childNodes[0].classList[1] == document.getElementsByClassName("2")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("3")[i].childNodes[0].classList[1] == document.getElementsByClassName("3")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("3")[i].childNodes[0].classList[1] == document.getElementsByClassName("3")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("4")[i].childNodes[0].classList[1] == document.getElementsByClassName("4")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("4")[i].childNodes[0].classList[1] == document.getElementsByClassName("4")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("a")[i].childNodes[0].classList[1] == document.getElementsByClassName("a")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("a")[i].childNodes[0].classList[1] == document.getElementsByClassName("a")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("b")[i].childNodes[0].classList[1] == document.getElementsByClassName("b")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("b")[i].childNodes[0].classList[1] == document.getElementsByClassName("b")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("c")[i].childNodes[0].classList[1] == document.getElementsByClassName("c")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("c")[i].childNodes[0].classList[1] == document.getElementsByClassName("c")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
							else if(document.getElementsByClassName("d")[i].childNodes[0].classList[1] == document.getElementsByClassName("d")[i-1].childNodes[0].classList[1] || document.getElementsByClassName("d")[i].childNodes[0].classList[1] == document.getElementsByClassName("d")[i+1].childNodes[0].classList[1]){
								check++;
								break;
							}
						}
					}
					if(check==0){
						var x = confirm("Sorry, you lose");
						if(x == true){
							restart();
						}
					}
				}
				
			}, (transitionTime+20));
	}
});
