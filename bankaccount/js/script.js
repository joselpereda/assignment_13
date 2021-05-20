const bankAccount = function (ownerName) {
    let balance = 0;
    let owner = ownerName;

    return {
        withdrawal: function (withdrawalAmount) {
            balance -= withdrawalAmount;
            //return balance;
        },
        desposit: function (depositAmount) {
            balance += depositAmount;
            //return balance;
        },
        getOwnerName: function () {
            return owner;
        },
        getBalance: function() {
            return balance;
        }
    };

}
window.addEventListener('load', () => {
        //let account;
  
    document.getElementById('customer_name').onclick = function(e){
        let acctHolderName = prompt('Enter your full nuame:');
        account = bankAccount(acctHolderName);
        document.getElementById('cust_name').innerHTML = `Account Holder Name: ${account.getOwnerName()}`;
    }

    document.getElementById('deposit_amount').onclick = function(e){
        let depositAmt = parseFloat(prompt('Enter a deposit amount in xx.xx format:'));
        console.log(depositAmt);
        while ((depositAmt <= 0) || isNaN(depositAmt) || (depositAmt == " ")) {
            depositAmt = parseFloat(prompt('Enter a valid deposit amount in xx.xx format:'));
        } 
        account.desposit(depositAmt);
        document.getElementById('balance_amt').innerHTML = `Balance Amount: $${account.getBalance()}`;
    }

    document.getElementById('withdrawl_amount').onclick = function(e){
        let withdrawalAmt = parseFloat(prompt('Enter a withdrawal amount in xx.xx format:'));
        console.log(withdrawalAmt);
        while ((withdrawalAmt <= 0) || isNaN(withdrawalAmt) || (withdrawalAmt == " ")) {
            withdrawalAmt = parseFloat(prompt('Enter a valid withdrawal amount in xx.xx format:'));
        } 
        account.withdrawal(withdrawalAmt);
        document.getElementById('balance_amt').innerHTML = `Balance Amount: $${Math.round(account.getBalance() * 100)/100 }`;
    }

});
