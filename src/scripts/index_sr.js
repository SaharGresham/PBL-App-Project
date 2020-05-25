// import apblFunction from './pblApp.js';
// import ooStuff from './account.js';

// let AcctControls = new ooStuff.AcctControls();
// let i = 0;

// document.body.addEventListener("click", (e) => {

//     function selectArea() {
//         var x = document.getElementById("sector");
//         var mySector = x.value;
//         console.log(mySector);
//     }

// })


document.body.addEventListener("click", (e) => {

    if (e.target.nodeName === 'SELECT') {

        if (e.target.textContent === "North West") {
            console.log("My location is NW");
        }

        if (e.target.textContent === "North East") {
            console.log("My location is NE");
        }

        if (e.target.textContent === "Downtown") {
            console.log("My location is Downtown");
        }
        
        if (e.target.textContent === "South West") {
            console.log("My location is SW");
        }

        if (e.target.textContent === "South East") {
            console.log("My location is SE");

        }
    }
})

//             const cardSection = document.getElementById("idAcctCards");
            
//             let div = document.createElement("div");

//             cardSection.appendChild(div);

//             if (idAcctName.value.length > 0 && idInitDeposit.value.length > 0) {
//                 AcctControls.addAcct(idAcctName.value, Number(idInitDeposit.value));
//                 DOMfunctions.buildNewCard(idAcctCards, (AcctControls.acctArray[i]));
//                 DOMfunctions.attachDropDown(idDropDown, (AcctControls.acctArray[i]));
//                 i++;
//                 idAccountStatusMsg.innerText = `The total balance of all acounts is $${AcctControls.totalAcctBalance()}`;
//                 clearFields();
//             }
                  
//         } else if (e.target.textContent === "Deposit") {

//             if (lengthCheck() > 0) {
//                 AcctControls.depositToAcct(idDropDown.value, Number(idAmount.value).toFixed(2));
//                 updateAccounts();
//                 idAccountStatusMsg.innerText = `The total balance of all acounts is $${AcctControls.totalAcctBalance()}`;
//                 clearFields();
//             }

//         } else if (e.target.textContent === "Withdraw") {

//             if (lengthCheck() > 0) {
//                 AcctControls.withdrawFromAcct(idDropDown.value, Number(idAmount.value).toFixed(2));
//                 updateAccounts();
//                 idAccountStatusMsg.innerText = `The total balance of all acounts is $${AcctControls.totalAcctBalance()}`;
//                 clearFields();
//             }
                       
//         } else if (e.target.textContent === "Remove Account") {

//             AcctControls.removeAcct(event.target.parentElement.id);
//             idAccountStatusMsg.innerText = `The total balance of all acounts is $${AcctControls.totalAcctBalance()}`;
//             DOMfunctions.deleteAcctCard(event.target.parentElement);

//             let dropDown = event.target.parentElement.id;

//             let counter = 0;
//             for (let n = 0; n < idDropDown.length; n++) {

//                 if (dropDown === idDropDown[n].id) {
//                     counter = n;
//                 }
//             };
//             idDropDown.removeChild(idDropDown[counter]);
//             return i--;
            
           
//         } else if (e.target.textContent === "Lowest Account Balance") {

//             idAccountStatusMsg.innerText = `The lowest value account and balance are ${AcctControls.lowestAcctBalance()}`;
         
            
//         } else if (e.target.textContent === "Highest Account Balance") {

//             idAccountStatusMsg.innerText = `The highest value account and balance are ${AcctControls.highestAcctBalance()}`;
          

//         } else if (e.target.textContent === "Total Account Balance") {

//             idAccountStatusMsg.innerText = `The total balance of all acounts is $${AcctControls.totalAcctBalance()}`;

//        }

//     }

// })

// function clearFields() {
//     idAcctName.value = "";
//     idInitDeposit.value = "";
//     idAmount.value = "";
//     idDropDown.value = "Select";
// };

// function lengthCheck() {
//     return idAmount.value.length;
// };

// function updateAccounts() {
//     let index = AcctControls.acctArray.findIndex(acctFinder => acctFinder.name === idDropDown.value);
//     let updateBalance = AcctControls.acctArray[index].name;
//     let counter = 0;
//     for (let n = 0; n < idDropDown.length; n++) {
        
//         if (updateBalance === idDropDown[n].id) {
//             counter = n;
//         }
//     };
//     if (updateBalance === idDropDown[counter].value) {
//         document.getElementById(`idAcctCard ${updateBalance}`).textContent = "$" + AcctControls.acctArray[index].balance;
//     }
// };