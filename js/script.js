/* global $ */


$(document).ready(function() {
    $("button").click(function() {
        
    var score= 0 ;

    var q1Result;
    q1Result= $("#question1").val();
    
    function quest1(male,female){
    if(male){
    score= score + 1;
    }else if(female){
    score= score + 1;
    }
}
    
    var q2Result; 
    q2Result= $("#question2").val();
    
    function quest2(human,animalistic,monster,other){
    if(human){
    score= score + 1;
    }else if(animalistic){
    score= score + 2;
    }else if(monster){
    score= score + 3;
    }else if(other){
    score= score + 4;
    }
}
    
    var q3Result;   
    q3Result= $("#question3").val();
    
    function quest3(light,medium,heavy,superheavy){
    if(light){
    score= score + 1;
    }else if(medium){
    score= score + 2;
    }else if(heavy){
    score= score + 3;
    }else if(superheavy){
    score= score + 4;
    }
}
    var q4Result;    
    q4Result= $("#question4").val();

    function quest4(grappler,tryhard,casual,buttonmasher,pro){
    if(grappler){
    score= score + 1;
    }else if(tryhard){
    score= score + 2;
    }else if(casual){
    score= score + 3;
    }else if(buttonmasher){
    score= score + 4;
    }else if(pro){
    score= score + 5;
    }
}
    var totalScore;
        if(totalScore <= 7){
        $(".result").html("Incnineroar");   
        $("#Incineroar").show();
        }
        else if(totalScore > 7 && totalScore < 10){
        $(".result").html("Ridley");
        $("#Ridley").show();
        }
        else if(totalScore > 10 && totalScore < 13){
        $(".result").html("Isabelle");
        $("#Isabelle").show();
        }
        else if(totalScore > 13 && totalScore < 16){
        $(".result").html("Lucina");
        $("#Lucina").show();
        }
        else if(totalScore >= 16){
        $(".result").html("King K Rool");
        $("#KingKRool").show();
        }
    });

});
