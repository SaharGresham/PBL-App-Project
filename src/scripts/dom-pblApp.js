
class criterias {
    constructor() {
        this.ourfilters = [];
    }
    // What do we need? 
    // Card title, subtitle (2) - service type/sector, text describing services



    getArea() {
        let select2 = document.getElementById('select1');
        this.ourfilters[0] = String(select2.value);

        return this;
    }
    getNeed(eL) {
        let ourNeed = eL.id;
        console.log(ourNeed);
        this.ourfilters[1] = String(ourNeed.id);
        return this;
    }
}
const functions = {
    hide() {
        document.getElementById("cont1").style.visibility = "hidden";
    },

    Show() {
        document.getElementById("cont1").style.visibility = "visible";
    },

    noResourceshide(){
        document.getElementById("no-resources1").style.visibility= "hidden";
        // document.getElementById("no-resources2").style.visibility= "hidden";

    },
    noResourcesShow(){
        document.getElementById("no-resources1").style.visibility= "visible";
        // document.getElementById("no-resources2").style.visibility= "visible";

    },
     disable() {
        document.getElementById("select1").disabled=true;
      },
    enable() {
        document.getElementById("select1").disabled=false;
      },

    buildNewCard(organization,category,hours_of_operation,phone,link,email) {

        console.log("Does the card work?");


        //  create div

        const divNewCard = document.createElement("div");
        divNewCard.setAttribute("class", "card-body");
        divNewCard.setAttribute("id", "r-corner");
        const breakLine7 = document.createElement("br");
        divNewCard.appendChild(breakLine7);

        // create card title

        const txtNode = document.createElement("strong");
        //   const msg = ... need from resources.JSON/sheet1.Organization
        txtNode.textContent = String(organization);
        txtNode.classList.add("text-center");
        divNewCard.appendChild(txtNode);

        const breakLine1 = document.createElement("br");
        divNewCard.appendChild(breakLine1);

        // txtNode.setAttribute('id', `cardTitle ${text.name}`);

        // create subtitles


        const subtitle1 = document.createElement("h4");
        //    const msg1 = ... need from resources.JSON/sheet1.Sector
        subtitle1.textContent = "This Center provides: "+String(category);
        // subtitle1.classList.add("text-center");
        divNewCard.appendChild(subtitle1);

        // const breakLine2 = document.createElement("br");
        // divNewCard.appendChild(breakLine2);

        const subtitle2 = document.createTextNode("h5");
        //    const msg2 = ... need from resources.JSON/sheet1.Category
        subtitle2.textContent = "Hours of Operation: "
        divNewCard.appendChild(subtitle2);
        
        // subtitle2.classList.add("text-center");
        const breakLine6 = document.createElement("br");
        divNewCard.appendChild(breakLine6);

        const subTitle_2 = document.createTextNode("h3");
        subTitle_2.textContent = String(hours_of_operation);
        divNewCard.appendChild(subTitle_2);

        const breakLine3 = document.createElement("br");
        divNewCard.appendChild(breakLine3);

        const breakLine2 = document.createElement("br");
        divNewCard.appendChild(breakLine2);

        const subtitle3 = document.createTextNode("h5");
        //    const msg2 = ... need from resources.JSON/sheet1.Category
        subtitle3.textContent = "Phone: "+String(phone);
        divNewCard.appendChild(subtitle3);
        
        const breakLine8 = document.createElement("br");
        divNewCard.appendChild(breakLine8);

        const breakLine9 = document.createElement("br");
        divNewCard.appendChild(breakLine9);

        // create service description ... placeholder

        // const placeHolder = document.createTextNode("p");
        // //    const msg2 = ... need from resources.JSON/sheet1.Description
        // placeHolder.textContent = "description: ";
        // // placeHolder.classList.add("text-center");
        // divNewCard.appendChild(placeHolder);

        // create buttons

        // const addLinkBtn = document.createElement("button");
        const addLinkBtn = document.createElement("a");
        addLinkBtn.setAttribute("href",String(link));
        addLinkBtn.appendChild(document.createTextNode("Link"));
        addLinkBtn.setAttribute("todo", "addLink");
        divNewCard.appendChild(addLinkBtn);
      
        // const addEmailBtn = document.createElement("button");
        if (!(String(email==="tbd")))
        {
        const addEmailBtn = document.createElement("a");
        addEmailBtn.setAttribute("href","mailto:"+String(email));
        addEmailBtn.appendChild(document.createTextNode("Email"));
        addEmailBtn.setAttribute("todo", "addEmail");
        divNewCard.appendChild(addEmailBtn);}

        // const addPhoneBtn = document.createElement("button");
        // const addPhoneBtn = document.createElement("a");
        // addPhoneBtn.setAttribute("href",String(phone));
        // addPhoneBtn.appendChild(document.createTextNode("Phone"));
        // addPhoneBtn.setAttribute("todo", "addPhone");
        // divNewCard.appendChild(addPhoneBtn);

        // const addMapBtn = document.createElement("button");
        const addMapBtn = document.createElement("a");
        addMapBtn.setAttribute("href", "https://www.google.ca/maps/place/Calgary,+AB/@51.0272883,-114.3680132,10z/data=!3m1!4b1!4m5!3m4!1s0x537170039f843fd5:0x266d3bb1b652b63a!8m2!3d51.0447331!4d-114.0718831")
        addMapBtn.appendChild(document.createTextNode("Google Map"));
        addMapBtn.setAttribute("todo", "addMap");
        divNewCard.appendChild(addMapBtn);

        // divNewCard.classList.add("card-body");

        console.log("Still working?");
        console.log(divNewCard)

        const breakLine4 = document.createElement("br");
        divNewCard.appendChild(breakLine4);

        const breakLine5 = document.createElement("br");
        divNewCard.appendChild(breakLine5);


        return divNewCard;
    },
    //  deleteCard(cardHolder)
    //  {
       

    //     thisCard.parentNode.removeChild(thisCard);
    //     // await fetchCities.postData(fetchCities.url + 'delete', {"key":deletedCity.key});

    //     // this.cities.splice(deletedIndex, 1);
    // }
}

  //Card Logic - Connects card to event listener

  // addCardBefore: (el) => {
  //   const card = el.parentElement;
  //   const group = card.parentElement;
  //   const div = functions.buildNewCard();
  //   group.insertBefore(div, card);
  // },

  // addCardAfter: (el) => {
  //   const card = el.parentElement;
  //   const group = card.parentElement;
  //   const div = functions.buildNewCard();
  //   group.insertBefore(div, card.nextSibling);

  // },

  // deleteCard: (el) => {
  //   const card = el.parentElement;
  //   const group = card.parentElement;
  //   group.removeChild (card); 

  // },





export default { criterias, functions };
