
export function color(_rotation){
    var borderColour = `linear-gradient(${_rotation}, #ffc53f 0%,#ffc53f 100%)`
    var rainbow = `linear-gradient(${_rotation}, rgb(243, 115, 97) 0%, 
        rgb(243, 115, 97) 16.6%, 
        rgb(248, 155, 60) 16.6%, 
        rgb(248, 155, 60) 33.2%,
        #ffc53f 33.2%, 
        #ffc53f 49.36%, 
        rgb(163, 187, 74) 49.36%, 
        rgb(163, 187, 74) 65.96%, 
        rgb(91, 199, 190) 65.96%, 
        rgb(91, 199, 190) 82.56%, 
        rgb(106, 80, 149) 82.56%, 
        rgb(106, 80, 149) 100%)`
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1; //Current Month
    
    if (date == 17 && month == 5){
        borderColour=rainbow
    }
    return borderColour
}


