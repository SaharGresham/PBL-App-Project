
class criterias{
    constructor(){
        this.ourfilters=[];
    }

    getArea() {
        let select2 = document.getElementById('select1');
        this.ourfilters[0]=String(select2.value);

        return this;
    }
    getNeed (eL){
        let ourNeed=eL.id;
        console.log(ourNeed);
        this.ourfilters[1]=String(ourNeed.id);
        return this;
    }
}
    const functions = {
    hide(){
        document.getElementById("cont1").style.visibility="hidden";    
    },

    Show(){
        document.getElementById("cont1").style.visibility="visible";     
    }


}

export default {criterias,functions};







// const domFunction = 
    
//     function getOption() { 

//     let selectElement =  document.getElementById('select1');  
              
//     let output = selectElement.value; 
    
//     console.log(output);
    
//     return output;

    

//     // document.querySelector('.output').textContent = output; 
            
// } 

// export default domFunction;