









function speedTaker(speed){
    // action for when speed falls within limit
if(speed<=80){
    return 'good';
    //action for when speed exceeds limit but warrants less than 12 demerit points
}else if(speed>80&&speed<140){
    return (speed-80)/5 + ' '+'demerit points';
//action for when speed exceeds limit and exceeds 12 demerit points
}else{
    return 'licence suspended';
}


}
//prompt for speed entry
let outcome=prompt("Enter speed:");
let speed=parseFloat(outcome);
if(!isNaN(speed)){
    let outcome=speedTaker(speed);
    console.log(`outcome is ${outcome}`);
}else{
    console.log('invalid entry');
}

