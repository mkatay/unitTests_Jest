//a passwornak min 6 hosszuságúkell legyen, legyen benne kis és nagy betű és szám is:
function allCases(string) {
    const
        upper = /[A-Z]/.test(string),
        lower = /[a-z]/.test(string);
    return upper && lower;
}
function containNumber(string){
    return /\d/.test(string)
}

export const checkPassword=(pw)=>{
    if(!pw) return false//utólag ide előre kell emelni
    if(pw.length<6) return false
    //  if(!pw) return false //így hibás a fg.,a 3.teszt nem fut le
    if(!allCases(pw)) return false
    if(!containNumber) return false
    return true

}
