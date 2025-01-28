let inputField2 = document.querySelector('.bet_text');

let B_amount_in_string;

let B_amount_in_numbers_by_input;

let B_amount_in_numbers_by_button;
let A;
let B;
let C;

let D; 
let E ={
    number : 0
}
//D is the rounded off number of the B_amount_in_numbers_by_button
document.querySelector('.bet_reset').addEventListener('click',function()
{
    document.querySelector('.bet_text').value = "";
    console.log('reset done')
    B_amount_in_numbers_by_input = "";
    document.querySelector('#Error1').innerHTML = `Amount yet to set`;
    A=undefined;
    B=undefined;
    C=undefined;
    D=undefined;
    main_values.bet_amount = undefined;



}


)
//======================================

inputField2.addEventListener('change',function()
{
  B_amount_in_string= document.querySelector('.bet_text').value;



    B_amount_in_numbers_by_input = Number(B_amount_in_string);
    console.log('string converted to number ');


}
)


//-----------------------------------------------------------------





//----------------------------------------------------------------------
let set_button1 = document.querySelector('.bet_set')

set_button1.addEventListener('click',function()
{
    console.log('button_pressed');
    B_amount_in_numbers_by_button=B_amount_in_numbers_by_input;
    console.log(B_amount_in_numbers_by_button);

     A = B_amount_in_numbers_by_button;
     B= A*100;
     C = Math.round(B);
     D = C/100;
console.log('---------');
     console.log(A);
     console.log(B);
     console.log(C);
     console.log(D);
     console.log('---------');


     E.number=D;
console.log('rounded of');
    console.log(D);


    if( B_amount_in_numbers_by_button <0)
    {
        document.querySelector('#Error1').innerHTML = `Error7 : amount cannot be less than 0`;
        main_values.bet_amount = undefined;
        document.querySelector('.bet_text').value = "";

    }

    else{

        if(typeof B_amount_in_numbers_by_button === "undefined" && typeof D === "undefined")
            {
                document.querySelector('#Error1').innerHTML = `Error5 : amount not entered`;
                main_values.bet_amount = undefined;
                document.querySelector('.bet_text').value = "";

            }
            else{
                if(isNaN(B_amount_in_numbers_by_input))
                    {
                        document.querySelector('#Error1').innerHTML = `Error1 : amount entered incorrectly`;
                        main_values.bet_amount = undefined;
                        document.querySelector('.bet_text').value = "";

                
                    }
                    else{
                
                
                        if(A===""||B_amount_in_string=== "")
                        {
                            document.querySelector('#Error1').innerHTML = `Error5 : amount not entered `;
                            main_values.bet_amount = undefined;
                            document.querySelector('.bet_text').value = "";

                        }
                        else{
                            if(D>Pay.wallet_balance)
                                {
                                    document.querySelector('#Error1').innerHTML = `Error13 : amount more than
                                    <span style="
                                   font-family: Arial;
                               color:aqua;
                               font-weight:bolder;
                               margin-left: 4px;
                               margin-top:4px;
                               margin-bottom:1px;
                               display:inline-block;" class="two_span">
                                   
                                   balance </span>`;
                                   main_values.bet_amount = undefined;
                                   document.querySelector('.bet_text').value = "";

                                }
                
                     
                                else{ 
                                    if(D>5000)
                                        {
                                            document.querySelector('#Error1').innerHTML = `Error2 : amount greater than
                                             <span style="
                                            font-family: Arial;
                                        color:aqua;
                                        font-weight:bolder;
                                        margin-left: 4px;
                                        margin-top:4px;
                                        margin-bottom:1px;
                                        display:inline-block;" class="two_span">
                                            
                                            5000 </span>`;
                                            main_values.bet_amount = undefined;
                                            document.querySelector('.bet_text').value = "";

                                        }
                                

                                    else{
                                        document.querySelector('#Error1').innerHTML = `Amount set to : <span style="
                                        font-family: Arial;
                                    color:aqua;
                                    font-weight:bolder;
                                    margin-left: 4px;
                                    margin-top:4px;
                                    margin-bottom:1px;
                                    display:inline-block;" class="one_span">
                                        
                                        
                                        ${D} </span>`;

                                        main_values.bet_amount = D;
                                    }
                                    
                                    
                                    
                                  }
                        
                        }
                
                
                
                
                       
                
                
                    }
            
            }
    }


   
console.log('below is printed E.number');
    console.log(E.number);


})


console.log('set_one.js added ');



function changePIone()
{
    inputField2.placeholder = "Enter amount Eg[89.81]";

}


function changePBone()
{

    let A = B_amount_in_numbers_by_button;
    let B= A*100;
    
    document.querySelector('.bet_text').value = "";



if( B_amount_in_numbers_by_button <0)
    {

        inputField2.placeholder = `Error 7 | click here/RESET`;

    }

    else{

        if(typeof B_amount_in_numbers_by_button === "undefined")
            {
                inputField2.placeholder = `Error 5 | click here/RESET`;

            }
            else{
                if(isNaN(B_amount_in_numbers_by_input))
                    {
                
                        inputField2.placeholder = `Error 1 | click here/RESET`;

                    }
                    else{
                
                
                        if(A===""||B_amount_in_string=== "")
                        {
                            inputField2.placeholder = `Error 5 | click here/RESET`;

                        }
                        else{
                            if(D>Pay.wallet_balance)
                                {
                                    inputField2.placeholder = `Error 13 | click here/RESET`;


                                }
                
                     
                                else{ 
                                    if(D>5000)
                                        {
                                            inputField2.placeholder = `Error 2 | click here/RESET`;

                                
                                        }
                                

                                    else{
                                      
                                            inputField2.placeholder = `${D} | click to change`;

                                        
                                    }
                                    
                                    
                                    
                                  }
                        
                        }
                
                
                
                
                       
                
                
                    }
            
            }
    }

}




