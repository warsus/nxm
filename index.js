var $question = document.getElementById("question")

var question = [2, "*", 4];
var $solution = document.getElementById("solution");
var $mtable = document.getElementById("multiplication-table");

function generateQuestion(){
    var num1 = Math.floor(Math.random() * 8) + 2;
    var num2 = Math.floor(Math.random() * 8) + 2;
    var operator = ["*"];
    var randomOperator = operator[Math.floor(Math.random() * operator.length)];
    question = [num1, randomOperator, num2];
}

function solve(question){
    if(question[1] == "/"){
        return question[0] / question[2];
    } else if (question[1] == "*") { 
        return question[0] * question[2];
    }
}

function render(question){
    $question.innerHTML = `${question[0]} ${question[1]} ${question[2]} = `;
}

render(question);

function renderMatrix(hideAnswers){
    var $trs = $mtable.getElementsByTagName("tr");
    for(var i = 0; i < $trs.length; i++){
        var $tds = $trs[i].getElementsByTagName("td");
        for(var j = 0; j < $tds.length; j++){
            if(hideAnswers && (i == 0 || j == 0)){
                $tds[j].innerHTML = (i+1)*(j+1);
            } else {
                $tds[j].innerHTML = "";
            }
        }
    }
}

renderMatrix(true);

$solution.onchange = function(event) {
    let guess = parseInt(event.target.value)
    let answer = solve(question);
    if (guess == answer) {
        //alert("Correct!");
        event.target.value = "";
        event.target.className = "correct";
        generateQuestion();
        render(question);
    } else {
        event.target.className = "incorrect";
    }
    setTimeout(function(){
        $solution.className = "";
    }, 2000);
}



