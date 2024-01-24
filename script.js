const practice1=(str)=>{
    let c=0;
    for(const char of str)
    {
        if((char==='a')||(char==='e')||(char==='i')||(char==='o')||(char==='u'))
        {
            c++
        }
    }
    return c;

}
let result=practice1("Jeeshan warish khan");
console.log(result);