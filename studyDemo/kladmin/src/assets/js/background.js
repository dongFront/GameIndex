 $(function(){
      console.log(22112323);
      var i=1;
        function task(){

            i++;
            if(i>=3){
                i=1;
            }
            var bg=$('#bg2');
            console.log(i);
            bg.css({
                backgroundImage: "url(../assets/img/bk"+i+".jpg)"
            })

        }



       var timer=setInterval(task,1000);



    })