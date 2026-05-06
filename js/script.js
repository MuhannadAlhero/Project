function show(i) {
    const answers = document.getElementsByClassName("answer");

    if (answers[i].style.display === "block") {
        answers[i].style.display = "none";
    } else {
        answers[i].style.display = "block";
    }
}