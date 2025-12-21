function multImplication(arr) {
    if (!arr.length) return null;

    return arr.reduce((acc, curr) => {
    return (!acc || curr);
    });
}

function opposite(number){
    return -number
}

function fixTheMeerkat(arr) {
    return arr.reverse()
}

function grader(score) {
    if (score > 1 || score < 0.6) return "F";
    else if (score >= 0.9) return "A";
    else if (score >= 0.8) return "B";
    else if (score >= 0.7) return "C";
    else if (score >= 0.6) return "D";
}