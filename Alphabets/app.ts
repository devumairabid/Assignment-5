var a:string|null=prompt("Enter any alphabets,number or character ")
var b:string=String(a);
if(b>="A" && b<="Z" || b>='a' && b<='z'){
    document.write(" That is a alphabet")
}else if(parseInt(b)){
    document.write(" That is a number")
}else{
    document.write(" That is a special character")
}