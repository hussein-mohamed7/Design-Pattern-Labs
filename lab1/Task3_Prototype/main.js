class Document{
    constructor(header,footer,pages,text){
    this.header = header;
    this.footer = footer;
    this.pages = pages;
    this.text = text;
    }
    display(){
        console.log(this.header);        
        console.log(this.footer);
        console.log(this.pages);
        console.log(this.text);
    }
}

class DocumentPrototype{
    constructor(orginalDocument){
        this.orginalDocument = orginalDocument;
    }
    clone (){
        let doc = new Document();
        doc.header = this.orginalDocument.header;
        doc.footer = this.orginalDocument.footer;
        doc.pages = this.orginalDocument.pages;
        doc.text = this.orginalDocument.text;
        return doc;
    }
}

let doc = new Document("header","footer","pages","text");
let docPrototype = new DocumentPrototype(doc);
let docClone = docPrototype.clone();
console.log("Orginal Document");
doc.display();
console.log("Clone Document");
docClone.display();
