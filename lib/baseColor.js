export function rainbow(_rotation) {
    return `linear-gradient(${_rotation}, rgb(243, 115, 97) 0%, 
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
    rgb(106, 80, 149) 100%)`;
}

export function color(_rotation, _type="gradient"){
    var color= `#ffc53f`
    var borderColour = `linear-gradient(${_rotation}, #ffc53f 0%,#ffc53f 100%)`
    var rainbowStr = rainbow(_rotation);
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1; //Current Month
    // console.log([date,month].toString())
    switch ([date, month].toString()) {
        case "17,5": //IDAHOBIT (17 5)
            borderColour=rainbowStr
            break;

        case "26,8": //Wear it purple day (26 8)
            borderColour=`linear-gradient(${_rotation}, rgb(106, 80, 149) 0%,rgb(106, 80, 149) 100%)`
            color = `rgb(106, 80, 149)`
            break;

        case "20,9": // digital climate strike (20 9)
            borderColour=`linear-gradient(${_rotation}, rgb(163, 187, 74) 0%, rgb(163, 187, 74) 100%)`
            color = "rgb(163, 187, 74)"
            break;

        default:
            break;
    }

    switch (_type) {
        case "gradient":
            return borderColour
            break;
        case "color":
            return color;
            break;
        default:
            break;
    }
    
}
