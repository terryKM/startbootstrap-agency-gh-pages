$(function (){
    function timer(p,n) {
      n=Math.min(n,p.attr("aria-valuenow"));
      p.css("width", n + "%").text(n+"% Complete");
      if(n < p.attr("aria-valuenow")) {
        setTimeout(function() {
          timer(p, n + 10);
        }, 100);
      }
    }
    $(".progress-bar").each(function(i,pb){
      timer($(pb),0); 
    });
  }); 