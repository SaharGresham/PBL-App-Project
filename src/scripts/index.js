import stuff from './dom-pblApp.js'
import things from './pblApp.js'

// things.loadJSON(function(json) {
//     console.log(json); // this will log out the json object
//   });

const theResources = new things.ResourceHandlers();
const theCriterias = new stuff.criterias();
console.log(theCriterias);
addEventListener("load", myloadScript(), stuff.functions.hide());
async function myloadScript() {
    await theResources.createAssetsfromJson();
}

document.body.addEventListener("click", e => {



    const el = e.target;

    const elID = el.id;

    const elAttribute = el.getAttribute("type");



    if (elID === "select1") {
        theCriterias.getArea("select1")
        console.log(theCriterias.getArea("select1"));

        let subsetResources = theResources.filterbySector(theCriterias.ourfilters[0]);
        // if (theResources.filterbySector(stuff.getArea("select1")).length>0)
        console.log(subsetResources);
        { stuff.functions.Show() };

    console.log(elID);
    
    // event handler for area selctor
    
    if (elID === "select1") 
    {
        stuff.getArea("select1")
        console.log(stuff.getArea("select1"));
        
    }

// event handler for service selector
    
<<<<<<< HEAD
    if (elAttribute === "radio") {

        theCriterias.ourfilters[1] = String(elID);
    }
    console.log(theCriterias)
    if (theCriterias.ourfilters.length >=2){
     let finalSearch=  theResources.filterbyCriterias(theCriterias.ourfilters)
        console.log(finalSearch)
    }

=======
    const elAttribute = el.getAttribute("type");
    // console.log(elAttribute);
   
    if (elAttribute==="radio"){
    console.log(el.getAttribute("name"));

    const cardSection = document.getElementById("r-corner");

    let divNewCard = document.createElement("div");
    cardSection.appendChild(divNewCard);

    stuff.buildNewCard(divNewCard);


// event handlers for buttons on cards

//event handler for message area

//event handler for radio buttons y/n 

}
>>>>>>> 1bcf10847ead94e3a1d5c6d73089fe00e4cf2600
})









