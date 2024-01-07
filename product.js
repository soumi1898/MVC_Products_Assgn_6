//const products=[];
const fs= require('fs');
const path = require('path');


//Class to represent an single product
module.exports = class Product{
    constructor(title){
        this.title=title;
    }

    save(){ //it's a funct w/o the keyword
        //products.push(this);
        const getPath=path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
            );
        fs.readFile(getPath,(err,fileContent)=>{
            let products=[];
            if(!err){
                //reading file content if there is no error
                products=JSON.parse(fileContent);   //takes in json and gives JS array
            }
            products.push(this);
            fs.writeFile(getPath,JSON.stringify(products),(err)=>{
                console.log(err);
            });
        });
    }

    static fetchAll(cb){

        const getPath=path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
            );
        fs.readFile(getPath,(err,fileContent)=>{
            if(err)
            {
                cb ([]);
            }

            cb (JSON.parse(fileContent));
        });
    }

}