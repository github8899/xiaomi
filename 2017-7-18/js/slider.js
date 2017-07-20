$(document).ready(function(){
     var index=0
        $(".banner>li>img").eq(0).css("display","block");
        $(".yuan>li").eq(0).css("background","white")
        function show(){
            index++;
            if(index==4){
                index=0
            }
            $(".banner>li>img").css("display","none")
              $(".yuan>li").css("background","rgba(0,0,0,0)")
            $(".banner>li>img").eq(index).css("display","block")
            $(".yuan>li").eq(index).css("background","white")
        }
        function show1(){
            index--;
            if(index==-1){
                index=3
            }
            $(".banner>li>img").css("display","none")
            $(".yuan>li").css("background","rgba(0,0,0,0)")
            $(".banner>li>img").eq(index).css("display","block")
            $(".yuan>li").eq(index).css("background","white")
        }
        stop=setInterval(show,2000)
})