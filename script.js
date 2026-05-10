function calculate() {

    let name = document.getElementById("name").value;

    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);
    let m3 = Number(document.getElementById("m3").value);
    let m4 = Number(document.getElementById("m4").value);
    let m5 = Number(document.getElementById("m5").value);

    let total = m1 + m2 + m3 + m4 + m5;

    let percentage = total / 5;

    let grade = "";

    if (percentage >= 90)
        grade = "A+";
    else if (percentage >= 75)
        grade = "A";
    else if (percentage >= 60)
        grade = "B";
    else if (percentage >= 40)
        grade = "C";
    else
        grade = "Fail";

    document.getElementById("result").innerHTML =
        `
        Name: ${name} <br>
        Total: ${total} <br>
        Percentage: ${percentage}% <br>
        Grade: ${grade}
        `;
}