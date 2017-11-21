$.fn.multiply = function(numCopies) {
    var newElements = this.clone();
    for(var i = 1; i < numCopies; i++)
    {
        newElements = newElements.add(this.clone());
    }
    return newElements;
};

$('.pixel').multiply(1023).insertAfter('.pixel');

function changePixel(){
    $(".pixel").mouseenter(function(){
        $(this).css('background-color', '#000');
    }); 
}

changePixel();

function changetoBlack(){
    $(".black").click(function(){
        $(".pixel").mouseenter(function(){
            $(this).css('background-color', '#000'); 
        });
    }); 
}

function changetoRed(){
    $(".red").click(function(){
        $(".pixel").mouseenter(function(){
            $(this).css('background-color', 'red'); 
        });
    }); 
}

function changetoYellow(){
    $(".yellow").click(function(){
        $(".pixel").mouseenter(function(){
            $(this).css('background-color', 'yellow'); 
        });
    }); 
}

function changetoBlue(){
    $(".blue").click(function(){
        $(".pixel").mouseenter(function(){
            $(this).css('background-color', 'blue'); 
        });
    }); 
}

function resetPad(){
    $('.reset').click(function() {
        $('.pixel').css({'background-color': '#CCC'});
       
      })
}
