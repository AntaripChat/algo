class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
function rever(val){
    
}
function print(){
    let tem = head;
    while(tem != null){
        console.log(tem.data);
        tem = tem.next
    }
}

let head = new Node(1);
let mid = new Node(2);
let last = new Node(3);
head.next = mid;
mid.next = last;
last.next = null;

print();

console.log(head);