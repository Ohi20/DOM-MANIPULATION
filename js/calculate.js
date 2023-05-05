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



 