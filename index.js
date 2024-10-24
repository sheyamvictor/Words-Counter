let text = document.getElementById("textarea")
let result=document.getElementById("result")

let button = document.getElementById("button")


    button.addEventListener('click',function(){

    let words = text.value
    let spaceCut = words.trim( )
    if(spaceCut.length===0){
        result.innerHTML="enter the text"
    }else{
let wordsCal = spaceCut.split(" ").length
    result.innerHTML= wordsCal + "Words"
    }
    
 
        
        
        
        })


