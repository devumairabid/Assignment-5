


var a:string|null=prompt("Enter your unit ")
var b:number=Number(a)
if (b <= 50) {
    document.write("Cost of electricity " + (b * 0.50 + b*0.50/100*20  )   )
} else if (b <= 150) {
    document.write("Cost of electricity " + (b * 0.75 +  b*0.75/100*20 ))
} else if (b <= 150) {
    document.write("Cost of electricity " + (b * 1 +  b*1/100*20 ))
} else if (b <= 250) {
    document.write("Cost of electricity " + (b * 1.25  +  b*1.25/100*20 ))
} else {
    document.write("Cost of electricity " + (b * 1.50 +  b*1.50/100*20 ))
}