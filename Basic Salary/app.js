var a = prompt("Enter your salary");
var b = Number(a);
if (b <= 10000) {
    document.write("Total of your salary is " + (b + b / 100 * 20 + b / 100 * 80));
}
else if (b <= 20000) {
    document.write("Total of your salary is " + (b + b / 100 * 25 + b / 100 * 90));
}
else {
    document.write("Total of your salary is " + (b + b / 100 * 30 + b / 100 * 95));
}
