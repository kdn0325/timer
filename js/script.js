$(function(){



    // 1초 마다 현재 시간 설정
    let timer = setInterval(function(){
        let now = new Date();
        let hr = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();

        if(hr>=10){
            hNum=hr;            
        }
        else{
            hNum='0'+hr;            
        }

        if(min>=10){
            minNum=min;            
        }else{
            minNum='0'+min;            
        }

        if(sec>=10){
            secNum=sec;            
        }else{
            secNum='0'+sec;            
        }

        $('p span').eq(0).text(hNum);
        $('p span').eq(1).text(minNum);
        $('p span').eq(2).text(secNum);
    },1000);

    // 시간에 따른 화면 테마 변경
    let now = new Date();
    let hr = now.getHours();

    if(hr >= 5 && hr < 11){
        $('#wrap').removeClass();
        $('#wrap').addClass('morning');
        $('nav li').removeClass();
        $('nav li').eq(0).addClass('on');
    }else if(hr >= 11 && hr < 16){
        $('#wrap').removeClass();
        $('#wrap').addClass('afternoon');
        $('nav li').removeClass();
        $('nav li').eq(1).addClass('on');
    }else if(hr >= 16 && hr < 20){
        $('#wrap').removeClass();
        $('#wrap').addClass('evening');
        $('nav li').removeClass();
        $('nav li').eq(2).addClass('on');
    }else{
        $('#wrap').removeClass();
        $('#wrap').addClass('night');
        $('nav li').removeClass();
        $('nav li').eq(3).addClass('on');        
    }

    $('nav li').on('click',function(){
        let className=$(this).children('a').text();   
        $('#wrap').removeClass();
        $('#wrap').addClass(className);
        $('nav li').removeClass();
        $(this).addClass('on');  
    });      
});