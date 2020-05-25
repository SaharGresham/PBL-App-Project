import stuff from './dom-pblApp.js'

document.body.addEventListener("click", e => {
    
    console.log(e);
    
    const el = e.target;
    console.log(e.target);
    const elID = el.id;
    console.log(elID);
    
    
    
    if (elID === "select1") 
    {
        stuff.getArea("select1")
        console.log(stuff.getArea("select1"));
        
    }
    
    const elAttribute = el.getAttribute("type");
    // console.log(elAttribute);
   
    if (elAttribute==="radio"){
    console.log(el.getAttribute("name"));
}
})









