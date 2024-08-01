

const textbox = document.getElementById("textbox")
const felin = document.getElementById("felin")
const celiues = document.getElementById("celiues")
const result= document.getElementById("result")
      let temp;

function convert(){


    if(felin.checked){


        temp=Number(textbox.value);

        temp = temp *9/5+32;

        result.textContent=temp.toFixed(1)+"°F"

    }
    else if(celiues.checked){
        temp=Number(textbox.value);

        temp = (temp-32)*(5/9);

        result.textContent=temp.toFixed(1)+"°C"
        


    }
    else{

        result.textContent="select a unit "

    }






}








   