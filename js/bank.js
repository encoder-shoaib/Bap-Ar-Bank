console.log('hi bank')

// Deposit 

document.getElementById('depositFile').addEventListener('click',function(){
    
    console.log('yessssss');
    const deposit =document.getElementById('deposit-input');
    const newDepositMoney = deposit.value;
    // console.log(newDepositMoney);
    // console.log(typeof newDepositMoney)

    const ConvartDepositVlue = parseFloat(newDepositMoney);
    // console.log(typeof ConvartDepositVlue )

    // text to number convart

    const depositTotalElement = document.getElementById('deposit-total') 
    const previousDeposit = depositTotalElement.innerText ;
    // console.log(FinalDeposit);
    const convartPreviousDeposit = parseFloat (previousDeposit);


    const currentDeposit = convartPreviousDeposit + ConvartDepositVlue;
    depositTotalElement.innerText =currentDeposit;


    // total blance part******
    const blanceText = document.getElementById('total-for-deposit')
    const blanceTextValue =blanceText.innerText;
    const convartBlanceTextValue = parseFloat(blanceTextValue);
    // console.log(convartBlanceTextValue)
    const totalBlancr = convartBlanceTextValue + ConvartDepositVlue;
    blanceText.innerText = totalBlancr;


    //  clear the deposit fild 
    deposit.value='';

})

                   // Withdraw 

document.getElementById('Withdraw').addEventListener('click',function(){

  
    const Withdraw =document.getElementById('Withdraw-input')
    const WithdrawMoney = Withdraw.value;
    const convartWithdrawMoney = parseFloat(WithdrawMoney);
    // console.log(convartBlanceTextValue)
    if(isNaN(convartWithdrawMoney ))
    {
        alert('Please enter number !!');
        Withdraw.value='';
        return ;

    }

    
                      // WithdrawText

    const WithdrawTotal = document.getElementById('Withdraw-total');
    const WithdrawText = WithdrawTotal.innerText;
    console.log(WithdrawText);
    const convartWithdrawText = parseFloat(WithdrawText);
   

                    // total blance part******

     const blanceText = document.getElementById('total-for-deposit')
     const blanceTextValue =blanceText.innerText;
     const convartBlanceTextValue = parseFloat(blanceTextValue);

     Withdraw.value='';
     
    if(convartWithdrawMoney>convartBlanceTextValue)
    {
        alert('Takar gas paicos ni bata.Tor baper bank a oto taka nai .')
        return ;
    }
    
    const NowWithdraw = convartWithdrawText + convartWithdrawMoney;
    WithdrawTotal.innerText = NowWithdraw;
    
    const totalBlancr=  convartBlanceTextValue - convartWithdrawMoney ;
    blanceText.innerText = totalBlancr;
    

        
})
