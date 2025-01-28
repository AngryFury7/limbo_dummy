let add_input  = document.querySelector('.addmoneyinput');

let addedmoney_string ;
let addedmoney_number;
let AA;
let BB;
let CC;
let DD;


document.querySelector('.reset_retry').addEventListener('click',function()
{
    let balanceinfo = roundoff(Pay.wallet_balance);

    document.querySelector('.wallet_p').innerHTML = `Your current wallet balance is : ${balanceinfo} &#8377;`;
    document.querySelector('.addmoneyinput').value="";
    addedmoney_number = undefined;

}
);

add_input.addEventListener('change', function()
{
addedmoney_string = add_input.value;
addedmoney_number= Number(addedmoney_string);
}
);


document.querySelector('.addmoneybutton').addEventListener('click' , function()

{
AA = addedmoney_number*100;
BB = Math.round(AA);
CC = BB/100;

DD = CC;
 
console.log('pressed');
processpay();
setTimeout (updatepayment,1000);
setTimeout(updateWallet,1100);

}
);


function processpay()
{
 console.log('processing')
    document.querySelector('.wallet_p').innerHTML = 'processing payment ...... '
}


function updatepayment()
{

    console.log('done processing')
if(addedmoney_number<0)
{
    document.querySelector('.wallet_p').innerHTML = `Error 9 : you entered amount < 0 . press retry/reset`;
    add_input.value="";

}
else{


    if(typeof addedmoney_number === "undefined")
    {
        document.querySelector('.wallet_p').innerHTML = `Error 11 : please select amount . press retry/reset `;
        add_input.value="";

    } else{
        if(isNaN(addedmoney_number))
            {
                document.querySelector('.wallet_p').innerHTML = `Error 10 : you entered amount improperly . press retry/reset `;
                add_input.value="";

            }
            else{

                if(addedmoney_number>5000)
                {
                    document.querySelector('.wallet_p').innerHTML = `Error 14 : Amount > 5000 , try lower  `;
                    add_input.value="";

                }
                else{
                    Pay.wallet_balance = Pay.wallet_balance+DD;

                updateWallet();
                let balanceinfo = roundoff(Pay.wallet_balance);

                document.querySelector('.wallet_p').innerHTML = `Your current wallet balance is : ${balanceinfo} &#8377;`
                add_input.value="";

                }

               
            
            }
    }


}

}

console.log('add.js added');
