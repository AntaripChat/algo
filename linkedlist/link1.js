function Node(number){
    this.number = number;
    this.next = null;
};

class Linklist{

    head;

    addNumber(number){
        let node = new Node(number);
        if(!this.head){
            this.head = node;
        }else{
            let t = this.head;
            while(t.next != null){
                t = t.next;
            }
            t.next = node;
        };
    };

    print(){
        let current = this.head;
        while(current != null){
            console.log(current.number);
            current = current.next;
        };
    };
};

const list = new Linklist();

list.addNumber(1);
list.addNumber(2);
list.addNumber(3);

list.print();