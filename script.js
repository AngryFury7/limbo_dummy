console.log('script.js added ');

let Pay = JSON.parse(localStorage.getItem('wallet'));

document.querySelector('.wallet_p').innerHTML = `Your current wallet balance is : ${Pay.wallet_balance} &#8377;`

function roundoff(X)
{
    let intone = X*100;
    let inttwo = Math.round(intone);
    let intthree = inttwo/100;

    return intthree
}

updateWallet();

let balanceinfotwo = roundoff(Pay.wallet_balance);

document.querySelector('.wallet_p').innerHTML = `Your current wallet balance is : ${balanceinfotwo} &#8377;`

document.querySelector('.continue').addEventListener('click',function()

{location.reload();}
)
