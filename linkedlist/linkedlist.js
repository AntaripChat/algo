let head = null;
const node = require('./node');

function addfirst(val){
    let newNode = new node(val);
    head = newNode;
    newNode = head;
}

function print(){
    let tem = head;
    while(tem != null){
        console.log(tem.data);
        
    }
}