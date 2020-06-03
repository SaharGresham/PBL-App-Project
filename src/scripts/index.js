import stuff from './dom-pblApp.js'
import things from './pblApp.js'


const theResources = new things.ResourceHandlers();
const theCriterias = new stuff.criterias();
const cardSection = document.getElementById("r-corner");
console.log(theCriterias);
addEventListener("load", myloadScript(), stuff.functions.hide(), stuff.functions.noResourceshide());

async function myloadScript() {
    await theResources.createAssetsfromJson();
}

document.body.addEventListener("click", e => {
    const el = e.target;
    const elID = el.id;
    const todo = el.getAttribute("todo");
    const elAttribute = el.getAttribute("type");

    if (todo === "women-only"){
        stuff.functions.disable();
       stuff.functions.Show();
       theCriterias.ourfilters[0] = String("Y");

    }

    if (elID === "select1") {
        theCriterias.getArea("select1")
        console.log(theCriterias.getArea("select1"));

        let subsetResources = theResources.filterbySector(theCriterias.ourfilters[0]);
        // if (theResources.filterbySector(stuff.getArea("select1")).length>0)
        console.log(subsetResources);
        { stuff.functions.Show() };

    }



    if (elAttribute === "radio") {
        theCriterias.ourfilters[1] = String(elID);
    }
    console.log(theCriterias)

    if (theCriterias.ourfilters.length >= 2) {
        let finalSearch = theResources.filterbyCriterias(theCriterias.ourfilters)
        console.log(finalSearch)

        console.log(cardSection);

        // let cards = finalSearch.map(tempasset => tempasset.showAsset());
        let cards = finalSearch.map(tempasset => stuff.functions.buildNewCard(tempasset.Organization,
            tempasset.Category,
            tempasset.Hours_of_operation,
            tempasset.Phone_office_hours,
            tempasset.Website,
            tempasset.Google_Maps_link,));
        console.log(cards);

        cards.forEach(thecard => {
            cardSection.appendChild(thecard);
        });
    }

    if (elAttribute === "reset") {
        theCriterias.ourfilters = [];
        console.log(theCriterias.ourfilters);
        stuff.functions.enable();
        stuff.functions.noResourceshide();



        console.log(cardSection.childNodes);

        let ourCrads = cardSection.childNodes;
        console.log(ourCrads);
        for (let i = 0; i < cardSection.childNodes.length; i++)

            {if ((cardSection.lastChild.nodeName === "DIV") && (cardSection.lastChild.getAttribute("class") === "card-body")) {
                let theChild = cardSection.lastChild;
                cardSection.removeChild(theChild);
               
            }

    }
}
    
    
        

})









