let getlevelsetter= document.getElementById('select_level');

let papaji;
let AAAA;
let BBBB;
let CCCC;

let aaaaa;
let bbbbb;
let ccccc;




getlevelsetter.addEventListener(('change'),function()
{

    let valueoflevel = getlevelsetter.value;
    papaji=valueoflevel;


   document.querySelector('.level').innerHTML='you chose : ' +valueoflevel ;

if(valueoflevel === 'Easy')
{
 AAAA = Easy();
    console.log('now aaaa')
    aaaaa = roundoff(AAAA);
    console.log(AAAA);
    console.log(aaaaa);
    main_values.C_multiplier=aaaaa;
    main_values.dificulty_level=valueoflevel;

}
else
{

if(valueoflevel === 'Hard')
{
     BBBB = Hard();
console.log('now bbbb');
bbbbb = roundoff(BBBB);

console.log(BBBB);
console.log(bbbbb);
main_values.C_multiplier=bbbbb;
main_values.dificulty_level=valueoflevel;


}
else{
 CCCC = Medium();
    console.log('now cccc');

    ccccc = roundoff(CCCC);

    console.log(CCCC);
    console.log(ccccc);
    main_values.C_multiplier=ccccc;
    main_values.dificulty_level=valueoflevel;


}



}













}
);

console.log('level.js added ');









