window.onload = () => {
    done = document.querySelector('.done')
    done.addEventListener("click", checkSolution);
    reset = document.querySelector('#reset')
    reset.addEventListener("click", resetBoard);
    // tileSize = document.querySelectorAll(".tile")
    // for (let t = 1; t < tileSize.length; t++) {
    //     tileSize[t].addEventListener("input", (tile) => checkLen(tile.target))
    // }
    setupBoard();
}

var board = Array.from({length: 9}, () => Array(9).fill(''))

function setupBoard() {
    var boardContainer = document.querySelector('.board');

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            tile = document.createElement("div")
            tile.classList.add("tile")
            tile.innerText = "0";
            tile.contentEditable = true;
            boardContainer.append(tile);
        }
    }
}

function checkSolution() {
    console.log("I'm checking the solution, wait...");
}

function resetBoard() {
    console.log("I'm resetting the board")

    tiles = document.querySelectorAll(".tile")
    for (let i = 0; i < tiles.length; i++) {
        if (tiles[i].contentEditable) {
            tiles[i].innerText = "0";
        }
    }
}

function checkLen(inp) {
    console.log("don't type too much!")
    if (inp.length > 1) {
        console.log("too much typed")
        spot.innerText = spot.innerText.substring(0, 1)
    }

}

// var numSelected = null;
// var tileSelected = null;

// var errors = 0;

// var board = [
//     "--74916-5",
//     "2---6-3-9",
//     "-----7-1-",
//     "-586----4",
//     "--3----9-",
//     "--62--187",
//     "9-4-7---2",
//     "67-83----",
//     "81--45---"
// ]

// var solution = [
//     "387491625",
//     "241568379",
//     "569327418",
//     "758619234",
//     "123784596",
//     "496253187",
//     "934176852",
//     "675832941",
//     "812945763"
// ]

// window.onload = function() {
//     setGame();
// }

// function setGame() {
//     // Digits 1-9
//     for (let i = 1; i <= 9; i++) {
//         //<div id="1" class="number">1</div>
//         let number = document.createElement("div");
//         number.id = i
//         number.innerText = i;
//         number.addEventListener("click", selectNumber);
//         number.classList.add("number");
//         document.getElementById("digits").appendChild(number);
//     }

//     // Board 9x9
//     for (let r = 0; r < 9; r++) {
//         for (let c = 0; c < 9; c++) {
//             let tile = document.createElement("div");
//             tile.id = r.toString() + "-" + c.toString();
//             if (board[r][c] != "-") {
//                 tile.innerText = board[r][c];
//                 tile.classList.add("tile-start");
//             }
//             if (r == 2 || r == 5) {
//                 tile.classList.add("horizontal-line");
//             }
//             if (c == 2 || c == 5) {
//                 tile.classList.add("vertical-line");
//             }
//             tile.addEventListener("click", selectTile);
//             tile.classList.add("tile");
//             document.getElementById("board").append(tile);
//         }
//     }
// }

// function selectNumber(){
//     if (numSelected != null) {
//         numSelected.classList.remove("number-selected");
//     }
//     numSelected = this;
//     numSelected.classList.add("number-selected");
// }

// function selectTile() {
//     if (numSelected) {
//         if (this.innerText != "") {
//             return;
//         }

//         // "0-0" "0-1" .. "3-1"
//         let coords = this.id.split("-"); //["0", "0"]
//         let r = parseInt(coords[0]);
//         let c = parseInt(coords[1]);

//         if (solution[r][c] == numSelected.id) {
//             this.innerText = numSelected.id;
//         }
//         else {
//             errors += 1;
//             document.getElementById("errors").innerText = errors;
//         }
//     }
// }
