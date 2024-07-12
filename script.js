correct  = 0;
rank = "";
answer1 = prompt("What's your name?")

if (answer1 == "Michael") {
    correct += 1
}

answer2 = prompt("What country do you live in?")

if (answer2 == "Canada") {
    correct += 1
}

answer3 = prompt("What's the name of your school?")

if (answer3 == "Douglas College") {
    correct += 1
}
 
answer4 = prompt("What programming language is used to style webpages?")

if (answer4 == "CSS") {
    correct += 1
}

answer5 = prompt("What campus are you on?")

if (answer5 == "New Westminster") {
    correct += 1
}

if (correct == 5) {
    rank =  "Your rank is Gold"
} else if (correct == 4 ) {
    rank =  "Your rank is Silver"
} else if (correct == 3) {
    rank =  "Your crown is Bronze"
} else if (correct == 2) {
    rank = "2 out 5 you don't get a crown"
} else if (correct == 1) {
    rank = "1 out of 5, you don't get a crown too"
} else {
    rank = "NO CROWN FOR YOU AT ALLLL"
}


document.querySelector("main").innerHTML = `You scored ${correct} out of 5 <br> 
<h1>Your rank is ${rank}</h1>`;