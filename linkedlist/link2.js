
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    };
};

class Linklist{
    head;

    addNumber(number){
        let val = new Node(number);
        if(!this.head){
            this.head = val;
        }else{
            let vlu = this.head;
            // while(vlu.next != nu)
        }
    }
}
