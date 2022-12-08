const question = document.getElementById('frage') ;
const buttons = document.getElementById("buttons");
const ThemenWahl = "Welche Thema willst du spielen? "

function askQuestion(fragen){
    question.innerText = fragen.frage
    const fragenLänge = fragen.Frage1.length
    for(let i = 0; i < fragenLänge; i++ ){

        let button = document.createElement("button");
        
        button.innerText = fragen.Frage1[i];
        button.addEventListener("click",() => {
            if(fragen.Frage1[i] === fragen.antwort){
                button.style = "background-color:green;";
                
            }else{
                button.style = "background-color:red;";
            }
            
           
        })
        buttons.appendChild(button);
        
    }
    




}


function Clear(){
    buttons.innerHTML ="";
    question.innerHTML ="";
}

function StartTopic(topic, result){
    Clear();
    
    switch(topic){
        case "Geschichte":
           askQuestion( result.Geschichte)
           
        break;

        case "Informatik": 
            askQuestion(result.Informatik)

        break;
        
        case "ComputerLinguistik":
            askQuestion(result.Computerlinguistik)

        break;
    }
            
    
   
    


}



function StartGame(result){
    
    question.innerText= ThemenWahl
    const anzahlDerThemen = result.Themen.length;




    for(let i = 0 ; i < anzahlDerThemen; i++){

        let button = document.createElement("button");
        button.innerText = result.Themen[i];
        button.addEventListener("click",() => {
            StartTopic(result.Themen[i], result);
            
           
        })
        buttons.appendChild(button);
        
    }
}



