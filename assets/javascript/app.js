$('#start').on('click',function(){
    var questions = [];
    console.log("connected")
    
 for(var i=0;i< questions.length;i++){
     $('#subwrapper').append('<h2>' +'questions[i].question'+ '</h2>');
        for(j=0;j<questions[i].answers.length;j++){
            $('#subwrapper').append("<input type='radio' name = 'question-"+i+"'  'value ='" + questions[i].answers[j]+"'>"+questions.answers[j])
           
        }
 }
document.write(questions)
questions = [{
    question:"who are the two main charecters in the captain underpants series?",
    answers:["Starksy & Hutch", "Tom & Jerry", "George & Harold", "Dylan & Nick"], 
    correctAnswer:"george & Harold"
},   {
    question:"who are the two main charecters in the captain underpants series?",
    answers:["Starksy & Hutch", "Tom & Jerry", "George & Harold", "Dylan & Nick"], 
    correctAnswer:"george & Harold"
},  {
    question:"who are the two main charecters in the captain underpants series?",
    answers:["Starksy & Hutch", "Tom & Jerry", "George & Harold", "Dylan & Nick"], 
    correctAnswer:"george & Harold"
},   {
    question:"who are the two main charecters in the captain underpants series?",
    answers:["Starksy & Hutch", "Tom & Jerry", "George & Harold", "Dylan & Nick"], 
    correctAnswer:"george & Harold"
},   {
    question:"who are the two main charecters in the captain underpants series?",
    answers:["Starksy & Hutch", "Tom & Jerry", "George & Harold", "Dylan & Nick"], 
    correctAnswer:"george & Harold"
},   {
    question:"who are the two main charecters in the captain underpants series?",
    answers:["Starksy & Hutch", "Tom & Jerry", "George & Harold", "Dylan & Nick"], 
    correctAnswer:"george & Harold"
},   {
    question:"who are the two main charecters in the captain underpants series?",
    answers:["Starksy & Hutch", "Tom & Jerry", "George & Harold", "Dylan & Nick"], 
    correctAnswer:"george & Harold"
},   {
    question:"who are the two main charecters in the captain underpants series?",
    answers:["Starksy & Hutch", "Tom & Jerry", "George & Harold", "Dylan & Nick"], 
    correctAnswer:"george & Harold"



}]

})
