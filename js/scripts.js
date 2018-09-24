
var result= function(object,data,infinity,code,company,comments,automatic){
return(object+data+infinity+code+company+comments+automatic);
}

// user logic

$(document).ready(function(){
  $("#answers").click(function(event){
    event.preventDefault()
    var object   = parseInt($("input:radio[name=object]:checked").val());
    var data     = parseInt($("input:radio[name=data]:checked").val());
    var infinity = parseInt($("input:radio[name=infinity]:checked").val());
    var code     =parseInt ($("input:radio[name=code]:checked").val());
    var company  =parseInt ($("input:radio[name=company]:checked").val());
    var comments = parseInt($("input:radio[name=comments]:checked").val());
    var automatic=parseInt ($("input:radio[name=automatic]:checked").val());
    var totalScore=result(object,data,infinity,code,company,comments,automatic);

    // total.innerHTML=("good job! " +totalScore)


    if (totalScore >=50){
      $("#form1").hide();
      total.innerHTML=("Excellent! Your total score is: " +totalScore)
    }
    else if(totalScore>=40 && totalScore<50){
      $("#form1").hide();
      total.innerHTML=("Good job! Your total score is: " +totalScore)
    }
    else if (totalScore>0 && totalScore<40) {
      $("#form1").hide();
    total.innerHTML=("Try harder next time, your total score is: " +totalScore )
    }

    else {
      $("#form1").hide();
      $("#total").show();
      total.innerHTML=("Review the test" )
    }

    })
})
