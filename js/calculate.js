document.getElementById("calculate-button").addEventListener('click',function(){
    
   // getting expenses input values
   const foodInput = document.getElementById("food-input");
   const foodMoney = foodInput.value;
  
   const rentInput = document.getElementById("rent-input");
   const rentMoney = rentInput.value;
 
   const clothesInput = document.getElementById("clothes-input");
   const clothesMoney = clothesInput.value;

   // get imcome value
  
   const incomeInput = document.getElementById("income-input");
   const incomeMoney = incomeInput.value;

    // checking if expenses is greater than income
    // if(incomeMoney < ((foodMoney+rentMoney+clothesMoney))
    //     console.log("what");
    // }
    // checking if input value is stringd
    // if(typeof(incomeInput.value,foodInput.value,rentInput.value,clothesInput.value) === 'string' ){
    //     const successMessage = document.getElementById('notify-success');
    // const failError = document.getElementById('notify-fail');
    //     successMessage.style.display = 'none';
    //     failError.style.display = 'block';
    //     }
    //calculating total expenses

   const totalExpenses = parseFloat(foodMoney) + parseFloat(rentMoney) + parseFloat(clothesMoney);
    
   //getting current total expense value
   const expensesTotal = document.getElementById("expenses-total");
   const expensesTotalText = expensesTotal.innerText;
   expensesTotal.innerText = parseFloat(totalExpenses);
    
   // clear input field
   foodInput.value = '';
   rentInput.value = '';
   clothesInput.value = '';

   // get current balance value
    
   const balanceTotal = document.getElementById("balance-total");
   const balanceTotalText = balanceTotal.innerText;
   balanceTotal.innerText = incomeMoney - parseFloat(totalExpenses);

   //  clear income input
   incomeInput.value = "";
})

document.getElementById("save-button").addEventListener('click',function(){
   // get income value

   const incomeInput = document.getElementById("income-input");
   const incomeMoney = incomeInput.value;

   // get expenses values
   const foodInput = document.getElementById("food-input");
   const foodMoney = foodInput.value;
   const rentInput = document.getElementById("rent-input");
   const rentMoney = rentInput.value;
   const clothesInput = document.getElementById("clothes-input");
   const clothesMoney = clothesInput.value;

   // total expenses
   const totalExpenses = parseFloat(foodMoney) + parseFloat(rentMoney) + parseFloat(clothesMoney);

   //get current total expense value
   const expensesTotal = document.getElementById("expenses-total");
   const expensesTotalText = expensesTotal.innerText;
   expensesTotal.innerText = parseFloat(totalExpenses);

   // get balance
    
   const balanceTotal = document.getElementById("balance-total");
   balanceTotalText = balanceTotal.innerText;
   balanceTotal.innerText = incomeMoney - parseFloat(totalExpenses);

   //  find Saving

   const bTotal = balanceTotal.innerText;
   const save = bTotal * (20/100);

   // Saving amount
   const totalSaving = document.getElementById("total-saving");
   const totalSavingText = totalSaving.innerText;
   totalSaving.innerText = save;

   //  remaining balance
   const remainingBalance = document.getElementById("remaining-balance");
   const remainingBalanceText = remainingBalance.innerText;
   remainingBalance.innerText = bTotal - save;

   //  clear input field
   foodInput.value = '';
   rentInput.value = '';
   clothesInput.value = '';
   incomeInput.value = '';
})