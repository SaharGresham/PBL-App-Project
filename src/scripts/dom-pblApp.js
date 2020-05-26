// What do we need? 
// Card title, subtitle (2) - service type/sector, text describing services

const functions = {

    getArea() {
        let select2 = document.getElementById('select1');

        // document.getElementById('name').value=select2.value;

        return (select2.value);
    },


}


const functions = {
    buildNewCard: () => {

      //  create div
  
      const divNewCard = document.createElement("div");

      // create card title
    
      const txtNode = document.createElement("strong");
      //   const msg = ... need from resources.JSON/sheet1.Organization
      txtNode.textContent = msg;
      txtNode.classList.add("text-center");
      divNewCard.appendChild(txtNode);

      const breakLine1 = document.createElement("br");
      div.appendChild(breakLine1);

      // txtNode.setAttribute('id', `cardTitle ${text.name}`);

      // create subtitles


      const subtitle1 = document.createElement("h3");
      //    const msg1 = ... need from resources.JSON/sheet1.Sector
      subtitle1.textContent = msg1;
      subtitle1.classList.add("text-center");
      divNewCard.appendChild(subtitle1);

      const breakLine2 = document.createElement("br");
      div.appendChild(breakLine2);  
      
      const subtitle2 = document.createTextNode("h3");
      //    const msg2 = ... need from resources.JSON/sheet1.Category
      subtitle2.textContent = msg2;
      subtitle2.classList.add("text-center");
      divNewCard.appendChild(subtitle2);

      const breakLine3 = document.createElement("br");
      div.appendChild(breakLine3); 

      // create service description ... placeholder





      // create buttons

      const addLinkBtn = document.createElement("button");
      addLinkBtn.appendChild(document.createTextNode("Link"));
      addLinkBtn.setAttribute("todo", "addLink");
      divNewCard.appendChild(addLinkBtn);

      const addEmailBtn = document.createElement("button");
      addEmailBtn.appendChild(document.createTextNode("Email"));
      addEmailBtn.setAttribute("todo", "addEmail");
      divNewCard.appendChild(addEmailBtn);

      const addPhoneBtn = document.createElement("button");
      addPhoneBtn.appendChild(document.createTextNode("Phone"));
      addPhoneBtn.setAttribute("todo", "addPhone");
      divNewCard.appendChild(addPhoneBtn);

      const addMapBtn = document.createElement("button");
      addMapBtn.appendChild(document.createTextNode("Map"));
      addMapBtn.setAttribute("todo", "addPhone");
      divNewCard.appendChild(addMapBtn);

      divNewCard.classList.add("card-body");


    return divNewCard;
  },

  //Card Logic - Connects card to event listener

  addCardBefore: (el) => {
    const card = el.parentElement;
    const group = card.parentElement;
    const div = functions.buildNewCard();
    group.insertBefore(div, card);
  },

  addCardAfter: (el) => {
    const card = el.parentElement;
    const group = card.parentElement;
    const div = functions.buildNewCard();
    group.insertBefore(div, card.nextSibling);

  },

  deleteCard: (el) => {
    const card = el.parentElement;
    const group = card.parentElement;
    group.removeChild (card); 

  },
};






},

export default functions;







// const domFunction = 
    
//     function getOption() { 

//     let selectElement =  document.getElementById('select1');  
              
//     let output = selectElement.value; 
    
//     console.log(output);
    
//     return output;

    

//     // document.querySelector('.output').textContent = output; 
            
// } 

// export default domFunction;