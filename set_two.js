const inputField1 = document.querySelector('.multiplier_text');

let mValue_in_string;
let mValue_in_number;
let F;
let G;
let H;
let I;




document.querySelector('.multiplier_reset').addEventListener('click',function()

{
    inputField1.value="";
    mValue_in_number = "";
    document.querySelector('#Error2').innerHTML = 'Multiplier yet to set';
changePItwo();
F=undefined;
G=undefined;
H=undefined;
I=undefined;

main_values.my_multiplier=undefined;

}


)



inputField1.addEventListener('change',function()
{
mValue_in_string=inputField1.value;
mValue_in_number=Number(mValue_in_string);



}

)


document.querySelector('.multiplier_set').addEventListener('click',function()

{
F=mValue_in_number;
G=F*100;
H=Math.round(G);

if(typeof mValue_in_number === "undefined"||inputField1.value==="")
    {

        I = NaN;
    
    }
    else{
        I=H/100;

    }



console.log(I);





if(typeof mValue_in_number === "undefined"||inputField1.value==="")
{
    document.querySelector('#Error2').innerHTML = ' Error 6 :multiplier not set';
    main_values.my_multiplier=undefined;
    inputField1.value="";



}

else{
    if(isNaN(F))
        {
            main_values.my_multiplier=undefined;
            inputField1.value="";

            document.querySelector('#Error2').innerHTML = ' Error 3 :set Multiplier correctly';
        }
        else{
        
        if(I<=1)
        {
            document.querySelector('#Error2').innerHTML = ' Error8 : Multiplier cannot be <= 1 ';
            main_values.my_multiplier=undefined;
            inputField1.value="";

        }else
        {
            document.querySelector('#Error2').innerHTML = `Multiplier set to : <span style="
                    font-family: Arial;
                color:aqua;
                font-weight:bolder;
                margin-left: 4px;
                margin-top:4px;
                margin-bottom:1px;
                display:inline-block;" class="one_span">
                    
                    
                    ${I} </span>`  ;

                    main_values.my_multiplier=I;

        
                    console.log('step3');
        
        }
        
        
        
        }


}







}


)


console.log('set_two.js added ');





function changePItwo()
{
    inputField1.placeholder = 'Set here Eg[0.45]'
}


function changePBtwo()
{
    inputField1.value="";


   
    
    if(typeof mValue_in_number === "undefined")
        {
    
            I = NaN;
        
        }
        else{
            I=H/100;
    
        }



if(typeof mValue_in_number === "undefined")
    {

        inputField1.placeholder = 'Error 6 | clik here/RESET '

    
    
    }
    
    else{
        if(isNaN(F))
            {
                inputField1.placeholder = 'Error 3 | clik here/RESET '

            }
            else{
            
            if(I<=1)
            {
                inputField1.placeholder = 'Error 8 | clik here/RESET '
            
            }else
            {
                
                inputField1.placeholder = ` ${I} | click to change`

            
            }
            
            
            
            }
    
    
    }
}






