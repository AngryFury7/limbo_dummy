console.log('placebet.js added ');

let thisgame_profit;
let thisgame_loss;
let multiplierofmine ;


let main_values = {

    bet_amount : undefined,
    my_multiplier : undefined,
    dificulty_level : undefined,
    C_multiplier:undefined
    
    }

    document.querySelector('#button3').addEventListener('click' , function()
{

    let balanceinfo;

    if(

        main_values.bet_amount === undefined ||
        main_values.my_multiplier === undefined ||
        main_values.C_multiplier === undefined ||
        main_values.dificulty_level === undefined )
        {
            document.querySelector('#Error3').innerHTML = '    OOPS :  ERROR OCCURED';
        }
        
        else
        {
        
        if(
            main_values.my_multiplier > main_values.C_multiplier
        )
        {

            thisgame_loss = main_values.bet_amount;


document.querySelector('#result').innerHTML = `<span class="Forfeit">Forfeit</span> : ${thisgame_loss} &#8377; `



document.querySelector('.showmultiplier_p').innerHTML = `<span id="loss">${main_values.C_multiplier}</span><span class="p_span_loss">&#10005;</span> `;
            console.log('you lost ');
           Pay.wallet_balance = Pay.wallet_balance-thisgame_loss;
           updateWallet();
            intfour = Pay.wallet_balance*100;
            intfive = Math.round(intfour);
            intsix = intfive/100;
           document.querySelector('.wallet_p').innerHTML = `Your current wallet balance is : ${intsix} &#8377;`
          

        }
        else{
            console.log('you won');
            multiplierofmine = main_values.my_multiplier;

            thisgame_profit = main_values.bet_amount*(multiplierofmine-1);

            let intone = Pay.wallet_balance*100;
            let inttwo = Math.round(intone);
             intthree = inttwo/100;

            document.querySelector('#result').innerHTML = `<span class="Yeild">Yeild</span> : ${intthree} &#8377; `



            document.querySelector('.showmultiplier_p').innerHTML = `<span id="profit">${main_values.C_multiplier}</span><span class="p_span">&#10005;</span> `;
            Pay.wallet_balance = Pay.wallet_balance+thisgame_profit;
           updateWallet();
            balanceinfo = roundoff(Pay.wallet_balance);

           document.querySelector('.wallet_p').innerHTML = `Your current wallet balance is : ${balanceinfo} &#8377;`

            hetlevelsetter= document.getElementById('select_level');
             



        }
        
        
        
        
        
        }

}

)












