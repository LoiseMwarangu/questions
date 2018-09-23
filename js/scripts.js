 $(document).ready(function() {
  $(".radio").submit(function(event) {
  event.preventDefault();
   var button1 = document.getElementById("button1");
   var button2 = document.getElementById("button2");
   if (button1.checked){
     alert ("your score is 0");
   }
   else if (button2.checked) {
   alert ("your score is 20");
 }
 )}
 )}
