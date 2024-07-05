let text = document.getElementById("textarea")
let result=document.getElementById("result")

let button = document.getElementById("button")

button.addEventListener('click',function(){

let eValue= text

if(eValue= text.value.length-1){
result .textContent= eValue+ "words";
}

else{
    alert("Enter the TEXT")
}


})
