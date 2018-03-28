//function to support creation of the pixels 
$.fn.multiply = function(numCopies) {
    var newElements = this.clone();
    for(var i = 1; i < numCopies; i++)
    {
        newElements = newElements.add(this.clone());
    }
    return newElements;
};

//Multiples the pixels by 1023. Total of 1024.
$('.pixel').multiply(1023).insertAfter('.pixel');

//Changes pixel default state from gray to Black
function changePixel(){
    $(".pixel").mouseenter(function(){
        $(this).css('background-color', '#000');
    }); 
}

changePixel();
//Function to change color to Black
function changetoBlack(){
    $(".black").click(function(){
        $(".pixel").mouseenter(function(){
            $(this).css('background-color', '#000'); 
        });
    }); 
}

//Function to change color to Red
function changetoRed(){
    $(".red").click(function(){
        $(".pixel").mouseenter(function(){
            $(this).css('background-color', 'red'); 
        });
    }); 
}

//Function to change color to Yellow
function changetoYellow(){
    $(".yellow").click(function(){
        $(".pixel").mouseenter(function(){
            $(this).css('background-color', 'yellow'); 
        });
    }); 
}

//function to change color to blue
function changetoBlue(){
    $(".blue").click(function(){
        $(".pixel").mouseenter(function(){
            $(this).css('background-color', 'blue'); 
        });
    }); 
}

//Resets entire pad and pixels to original state
function resetPad(){
    $('.reset').click(function() {
        $('.pixel').css({'background-color': '#CCC'});
       
      })
}
