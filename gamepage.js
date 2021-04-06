player_1_name= localStorage.getItem("player_1_name");
player_2_name= localStorage.getItem("player_2_name");

player_1_score=0;
player_2_score=0;
question_turn=player_1_name;
answer_turn
document.getElementById("player_1_name").innerHTML=player_1_name;
document.getElementById("player_2_name").innerHTML=player_2_name;
document.getElementById("player_1_score").innerHTML=player_1_score;
document.getElementById("player_2_score").innerHTML=player_2_score;

document.getElementById("question_turn").innerHTML=player_1_name;
document.getElementById("answer_turn").innerHTML=player_2_name;

function send(){
    firstno= document.getElementById("firstno").value;
    secno=document.getElementById("secno").value;
    result=firstno*secno;
    console.log(result);
    localStorage.setItem("result",result);
    firstline="<h4> Q: "+firstno +" X "+ secno+"</h4>";
    console.log(firstline);
    secline="<br><br><input id='answer' placeholder='Enter your answer here'> ";
    console.log(secline);
    butn="<br><button class='btn btn-info' type='button' onclick='check()'>Submit</button>";
    row=firstline+secline+butn;
    console.log(row);
    document.getElementById("output").innerHTML=row;
    document.getElementById("firstno").value="";
    document.getElementById("secno").value="";

}
function check(){
    answer=document.getElementById("answer").value;
    if(answer==result){
        if(answer_turn==player_2_name){
            player_2_score++;
            localStorage.setItem("player_2_score",player_2_score);
            
            alert("Correct answer");
            question_turn=player_2_name;
            answer_turn=player_1_name;
            document.getElementById("question_turn").innerHTML=player_1_name;
            document.getElementById("answer_turn").innerHTML=player_2_name;
            

        }
        else{
            player_1_score++;
            alert("Correct answer");
            localStorage.setItem("player_1_score",player_1_score);
            question_turn=player_1_name;
            answer_turn=player_2_name;
            document.getElementById("question_turn").innerHTML=player_2_name;
            document.getElementById("answer_turn").innerHTML=player_1_name;
            

        }
        document.getElementById("player_1_score").innerHTML=player_1_score;
        document.getElementById("player_2_score").innerHTML=player_2_score;
        
    }
    else{alert("sorry wrong answer");

}
send();    
}
