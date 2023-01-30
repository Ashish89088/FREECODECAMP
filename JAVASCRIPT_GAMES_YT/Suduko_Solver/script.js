//puzzle array that has to be solve
var puzzle = [["5","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]
]

//solution of that puzzle
var ans = [["5","3","4","6","7","8","9","1","2"],
["6","7","2","1","9","5","3","4","8"],
["1","9","8","3","4","2","5","6","7"],
["8","5","9","7","6","1","4","2","3"],
["4","2","6","8","5","3","7","9","1"],
["7","1","3","9","2","4","8","5","6"],
["9","6","1","5","3","7","2","8","4"],
["2","8","7","4","1","9","6","3","5"],
["3","4","5","2","8","6","1","7","9"]
]
var timerinterval
//timer function to show the time in format (hr : min : sec)
showtimerfun = () =>{
    var s=0;
    var m=0;
    var h=0;
    var btn = document.getElementById('timer').disabled=true
    timerinterval = setInterval(function(){
        s++;
        if(s == 60){
            m++;
            s=0;
        }
        if(m == 60){
            h++;
            m=0;
        }
        document.getElementById('show-timer').textContent = h + " : " + m + " : " + s
    },1000)  
}

//function to show the error that have been done while solving the suduko
var error = 0;
var emptyplaces = 0;
showerrorfun = () =>{
    error = 0;
    emptyplaces = 0;

    var btn = document.getElementById('error')
    for(i=0;i<9;i++){
        for(j=0;j<9;j++){
            const element = document.querySelector('.r'+i)
            const child = element.childNodes[j]
            
            if(child.style.backgroundColor === 'lightyellow'){
                continue;
            }

            if(child.value == "" || child.value != ans[i][j]){
                error++;
                if(child.value == ""){
                    emptyplaces++;
                }
                btn.addEventListener('mouseover',function(){
                    child.style.backgroundColor = "rgb(203, 74, 74)"
                })
                btn.addEventListener('mouseout',function(){
                    child.style.backgroundColor = "rgba(127,127,127,0.7)"
                })
            }
            if(child.value == ans[i][j]){
                btn.addEventListener('mouseover',function(){
                    child.style.backgroundColor = "rgba(127,127,127,0.7)"
                })
            }
        }
    }
    document.getElementById('showerror').innerHTML = error
}

//board variable to access the board div
var board=document.getElementById('board')

//creating the row with id = row
var row=document.createElement('div')
row.setAttribute('id', 'row')

//creating the column with id = col and assigning minValue=1 and maxValue=9
var col=document.createElement('input')
col.setAttribute('id','col')
col.setAttribute('type', 'number')
col.setAttribute('min','1')
col.setAttribute('max','9')

//creating a fragment to add 9 column tile to make a row
const fragment2 = new DocumentFragment

for(i=0;i<9;i++){
    if(i>0){
        var c = col.classList
        c.remove('c' + (i-1))
    }
    col.classList.add('c' + i)
    fragment2.appendChild(col.cloneNode(true))
}

row.append(fragment2)

//creating a  fragment to add 9 row to make the board
const fragment1 = new DocumentFragment

for(i=0;i<9;i++){

    if(i>0){
        var r = row.classList
        r.remove('r' + (i-1))
    }
    row.classList.add('r' + i)
    fragment1.appendChild(row.cloneNode(true))
}
board.append(fragment1)

//connecting the puzzle array to the board
for(i=0;i<9;i++){
    for(j=0;j<9;j++){
        const element=document.querySelector('.r'+i)
        element.childNodes[j].style.fontSize = "30px"
        if(puzzle[i][j]==='.'){
            element.childNodes[j].style.backgroundColor = "rgba(127,127,127,0.7)"
            continue
        }
        else{
            element.childNodes[j].style.backgroundColor = "lightyellow"
            element.childNodes[j].setAttribute('value',puzzle[i][j])
            element.childNodes[j].setAttribute('readonly',true)
        }
    }
    
}

// adding functionalities to submit button
submitfun = () =>{
    showerrorfun()
    if(error == 0 && emptyplaces==0){
        clearInterval(timerinterval)
        document.getElementById('showresult').style.color = "green"
        document.getElementById('showresult').textContent = "CONGRATULATIONS YOU HAVE SOLVED THIS SUDUKO"
    }
    else if(emptyplaces > 0){
        document.getElementById('showresult').style.color = "red"
        document.getElementById('showresult').textContent = "  PLEASE SOLVE THE COMPLETE CHALLENGE"
    }
    else{
        document.getElementById('showresult').style.color = "blue"
        document.getElementById('showresult').textContent = "  TRY AGAIN! YOU HAVE NOT SOLVED THIS SUDUKO CORRECTLY"
    }
    
}