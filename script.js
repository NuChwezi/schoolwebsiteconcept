$(document).ready(function() {
   $('.bunnies').arctext({radius: 180, dir: -1});
  
  var canClickLinks = !true;
  
  $('#lock').click(function(e){
    if(canClickLinks){
      // don't escalate to action on gate..
       $(this).prop('checked', false);
       $('#launcher').get(0).click();
    }
    
    canClickLinks = !canClickLinks;
   
  });
});