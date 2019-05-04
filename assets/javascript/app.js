document.readyState()




function onSubmit(){
   var score=0;
   var numOfQuestions=5;
   var ansArr=['c','c','d','c','d'];


   var q1 = document.forms[quiz][q1].value;
   var q2 = document.forms[quiz][q2].value;
   var q3 = document.forms[quiz][q3].value;
   var q4 = document.forms[quiz][q4].value;
   var q5 = document.forms[quiz][q5].value;
   newFunction(score);
   

   for(i=0;i<=numOfQuestions;i++){
       if (eval('q'.length) (ansArr.length-1)
       [i]++);
       
   }

   // more syntax errors once again!!!!!!!!grrrrrrr!!!!!!!!!


       
        
   

function newFunction(score) {
    var results = document.getElementById('results');
    results.innerHTML = "<h2>Youscored " + score + "points</h2>";
    return false;
}
}

