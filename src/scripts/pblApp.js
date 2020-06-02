
import fetchfunctions from './fetch-pblApp.js';
import stuff from './dom-pblApp.js'


class ResourceHandlers {
    constructor() {
        this.majorRS = [];
        this.counter = 1;
    }
    nextID() {
        return `${this.counter++}`;
    }
    findAsset(ID) {
        return this.majorRS.find(rs => rs.ID === ID);
    }

    async createAssetsfromJson() {
        //        await let loadData=loadJSON(function(json)
        fetch('../data/resources4.json').then(response => {
            return response.json();
        }).then(data => {
            let newData = Object.entries(data)[0][1];
            this.majorRS = newData.map(asset => new Asset(asset.ID, asset.Organization, asset.Sector, asset.Category, asset.Website, asset.Address, asset.Phone_office_hours, asset.Phone_after_hours, asset.Hours_of_operation, asset.Email, asset.Women_only, asset.Pet_friendly, asset.Notes,asset.Google_Maps_link))
            this.counter = (this.majorRS.length) + 1;
            console.log(newData);
            console.log(this.majorRS);
            console.log(this.counter);
            return this;
        })
            .catch(err => {
                console.log("error")
            });

    }
    // findAssets(sector){
    //     let sectorAssets= this.majorRS.find(city => city.Sector === Sector);
    //     console.log(sectorAssets);
    //  return sectorAssets;
    // }
    filterbySector(term) {
        let ans;
        if (term === "Y") {
            ans = this.majorRS.filter(temp => temp.Women_only === term)
        }
        else {
            ans = this.majorRS.filter(temp => temp.Sector === term)
        }
        // console.log( ans);
        return ans;
    };
    filterbyWomenOnly(){
        let womenAns;
        womenAns=this.majorRS.filter(tempWomen => tempWomen.Women_only === "Y")
        return womenAns;
    }
    filterbyCriterias(terms) {
        let finalAns;
        if (terms[0]==="Y")
        {
            finalAns=this.majorRS.filter(temp1 => ((temp1.Women_only === terms[0]) && (temp1.Category.includes(String(terms[1])))))

        }
        else
        { finalAns = this.majorRS.filter(temp1 => ((temp1.Sector === terms[0]) && (temp1.Category.includes(String(terms[1])))))}
        if (finalAns.length === 0) {
        //     finalAns = this.filterbySector(terms[0]);
            stuff.functions.noResourcesShow()
        }
        // alert ("No available resources with these criterias.All resources in this area of Calgary are as belows")}
        return finalAns;
    }
     

}


class Asset {
    constructor(ID, Organization, Sector, Category, Website, Address, Phone_office_hours, Phone_after_hours, Hours_of_operation, Email, Women_only, Pet_friendly, Notes,Google_Maps_link) {
        this.ID = String(ID);
        this.Organization = String(Organization);
        this.Sector = String(Sector);
        this.Category = String(Category);
        this.Website = String(Website);
        this.Address = String(Address);
        this.Phone_office_hours = String(Phone_office_hours);
        this.Phone_after_hours = String(Phone_after_hours);
        this.Hours_of_operation = String(Hours_of_operation);
        this.Email = String(Email);
        this.Women_only = String(Women_only);
        this.Pet_friendly = String(Pet_friendly);
        this.Notes = String(Notes);
        this.Google_Maps_link = String(Google_Maps_link);

    }
    // showAsset(){
    //  stuff.functions.buildNewCard(
    //     this.Organization,
    //     this.Category,
    //     this.Hours_of_operation,
    //     this.Website,
    //     this.Email,
    //     this.Phone_office_hours    
    //  )

    //  }


}
export default { Asset, ResourceHandlers };