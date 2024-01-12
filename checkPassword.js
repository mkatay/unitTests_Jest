//a passwornak min 6 hosszuságú kell legyen
// legyen benne kis és nagy betű és szám is!
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
    if(!pw) return false
    if(pw.length<6) return false
    if(!allCases(pw)) return false
    if(!containNumber(pw)) return false
    return true

}
