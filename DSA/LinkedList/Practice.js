class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class list {
    constructor(){
        this.head = null;
    }


    addFirst(data) {
    
        const newnode = new Node(data) ;
        newnode.next = this.head;
        this.head = newnode ;
    
    }

    addLast(data){
        const newnode = new Node(data);

        if(this.head == null){  

            
        }

    }
}

