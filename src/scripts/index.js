import stuff from './dom-pblApp.js'

document.body.addEventListener("click", e => {
    
    console.log(e);
    
    const el = e.target;
    console.log(e.target);
    const elID = el.id;
    console.log(elID);
    
    // event handler for area selctor
    
    if (elID === "select1") 
    {
        stuff.getArea("select1")
        console.log(stuff.getArea("select1"));
        
    }

// event handler for service selector
    
    const elAttribute = el.getAttribute("type");
    // console.log(elAttribute);
   
    if (elAttribute==="radio"){
    console.log(el.getAttribute("name"));


// event handlers for buttons on cards

//event handler for message area

//event handler for radio buttons y/n 

}
})









