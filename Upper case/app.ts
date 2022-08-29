var a :string|null=prompt("Enter a alphabet to check that is upper or lower case");
var b:string=String(a);
if(b>="A" && b<="Z"){
    document.write("That is upper case alphabet")
}else if (parseInt(b) ){
    document.write("Not a alphabet")
}
else if(b>='a' && b<='z') {
    document.write("That is a small case alphabet")
}