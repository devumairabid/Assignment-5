var a:number=Number(prompt("Enter Cost Price"));
var b :number=Number(prompt("Enter Selling Price"))
if(b - a>0){
    document.write(b-a  +  " is profit is this item" )
} else{
    document.write(a-b  + " is a loss in this item")
}