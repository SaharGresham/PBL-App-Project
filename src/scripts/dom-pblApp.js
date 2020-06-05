
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

    buildNewCard(organization,category,hours_of_operation,phone,email,pet_friendly,website,Google_Maps_link) {

        console.log("Does the card work?");


        //  create div

        const divNewCard = document.createElement("div");
        divNewCard.setAttribute("class", "card-body");
        divNewCard.setAttribute("id", "r-corner");
        const breakLine7 = document.createElement("br");
        divNewCard.appendChild(breakLine7);

        // create card title

        const txtNode = document.createElement("strong");
        //   const msg = ... need from resources4.JSON/sheet1.Organization
        txtNode.textContent = String(organization);
        txtNode.classList.add("text-center");
        divNewCard.appendChild(txtNode);

        const breakLine1 = document.createElement("br");
        divNewCard.appendChild(breakLine1);

        // txtNode.setAttribute('id', `cardTitle ${text.name}`);

        // create subtitles


        const subtitle1 = document.createElement("h4");
        //    const msg1 = ... need from resources4.JSON/sheet1.Sector
        subtitle1.textContent = "This Center provides: "+String(category);
        // subtitle1.classList.add("text-center");
        divNewCard.appendChild(subtitle1);

        // const breakLine2 = document.createElement("br");
        // divNewCard.appendChild(breakLine2);

        const subtitle2 = document.createTextNode("h5");
        //    const msg2 = ... need from resources4.JSON/sheet1.Category
        subtitle2.textContent = "Hours of Operation: "
        divNewCard.appendChild(subtitle2);
        
        // subtitle2.classList.add("text-center");
        const breakLine6 = document.createElement("br");
        divNewCard.appendChild(breakLine6);

        const subTitle_2 = document.createTextNode("h3");
        subTitle_2.textContent = String(hours_of_operation);
        // subTitle_2.id="subtitle_2"
        // document.getElementById("subtitle_2").style.color="blue"

        divNewCard.appendChild(subTitle_2);
        

        const breakLine3 = document.createElement("br");
        divNewCard.appendChild(breakLine3);

        const breakLine2 = document.createElement("br");
        divNewCard.appendChild(breakLine2);

        const subtitle3 = document.createTextNode("h5");
        subtitle3.textContent = "Phone: "+String(phone)+" & ";
        divNewCard.appendChild(subtitle3);



        //Email Section
        const subtitle4 = document.createTextNode("h5");
        subtitle4.textContent = "Email: " + String(email);
        divNewCard.appendChild(subtitle4);

        const breakLine8 = document.createElement("br");
        divNewCard.appendChild(breakLine8);

        const breakLine9 = document.createElement("br");
        divNewCard.appendChild(breakLine9);

       

        //Pet Friendly Sectionil
        const subtitle5 = document.createTextNode("h5");
        subtitle5.textContent = "Pet Friendly: " + String(pet_friendly);
        divNewCard.appendChild(subtitle5);

        const breakLine10 = document.createElement("br");
        divNewCard.appendChild(breakLine10);

        const breakLine11 = document.createElement("br");
        divNewCard.appendChild(breakLine11);


        // create buttons

        // const addLinkBtn = document.createElement("button");
        const addLinkBtn = document.createElement("a");
        addLinkBtn.setAttribute("href",String(website));
        addLinkBtn.setAttribute("target","_blank");
        addLinkBtn.appendChild(document.createTextNode("Website"));
        addLinkBtn.setAttribute("todo", "addLink");
        divNewCard.appendChild(addLinkBtn);
      
       
        const breakLine12 = document.createElement("br");
        divNewCard.appendChild(breakLine12);

        const breakLine13 = document.createElement("br");
        divNewCard.appendChild(breakLine13);

        if ((String(Google_Maps_link).length)>5)
        {
       
        const addMapBtn = document.createElement("a");
        // addMapBtn.setAttribute("href", "https://www.google.ca/maps/place/Calgary,+AB/@51.0272883,-114.3680132,10z/data=!3m1!4b1!4m5!3m4!1s0x537170039f843fd5:0x266d3bb1b652b63a!8m2!3d51.0447331!4d-114.0718831")
        addMapBtn.setAttribute("href", String(Google_Maps_link))
        addMapBtn.setAttribute("target","_blank");
        addMapBtn.appendChild(document.createTextNode("Google Map"));
        addMapBtn.setAttribute("todo", "addMap");
        divNewCard.appendChild(addMapBtn);
    }
    else {
        const subtitle6 = document.createTextNode("h5");
        subtitle6.textContent = "No address defined for security reason."
        divNewCard.appendChild(subtitle6);
    }


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

  
export default { criterias, functions };
