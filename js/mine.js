$(document).ready(function(){
   $(document).scroll(function(){
     let wScroll = $(document).scrollTop()
     if(wScroll >= 100){
        $('nav').css('backgroundColor' , 'rgba(0,0,0,.6)')
     }else{
        $('nav').css('backgroundColor' , 'transparent')
     }
   })
})