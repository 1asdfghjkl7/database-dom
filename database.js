const loadDatabase = localStorageKey => {

    const databaseString = localStorage.getItem(localStorageKey)

    return JSON.parse(databaseString)
}
//stores returned database
let homeInventory = loadDatabase("HomeInventory");


let article = document.querySelector("#myStuff");
let fragment = document.createDocumentFragment();

// for (const table in homeInventory) { 
//     const invTable = homeInventory[table] //table is furniture, crafts, and electronics
    const selectDataSet = (dataSet) => {
        const invTable = homeInventory[dataSet] //dataSet is furniture, crafts, or electronics
        invTable.forEach(item => { //for each item in furniture, crafts, or electronics
            let section = document.createElement("section"); 
            for (const key in item) { //for every key in item
                let p = document.createElement("p");
                p.textContent = `${key}: ${item[key]}`
                section.appendChild(p);
            }
            fragment.appendChild(section);
        })
}
selectDataSet("furniture");
article.appendChild(fragment);


