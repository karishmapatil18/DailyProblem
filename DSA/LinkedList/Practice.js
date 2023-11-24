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

            this.head = newnode;
            return; 
        }

        let current = this.head;

        while(current.next != null){
            current = current.next ;
        }

        current.next = newnode ;
        newnode.next = null ;


    }

    size(){

        let count = 0 ;
        let current = this.head ;

        while(current){
            count ++ ;
            current = current.next;
        }
        return count;
    }


    addAtIndex(Index,data){
        
        if(Index < 0 || Index > this.size()){
            console.log("Invalid Index")
            return;
        }
        
        let newnode  = new Node(data)
        let current = this.head;

        if(Index == 0){
            addFirst(data);
            return;
        }

        let i = 0 ;
        while(i < Index-1){
            current = current.next();
            i++ ;
        }

        newnode.next = current.next ;
        current.next = newnode ;

    }

    removelast(){
        const newnode = new Node();

        if(this.head == null){
            return "Linklist is empty"
        }
        let current = this.head.next

        while(current.next != null){
            current=current.next
        }

        
    }
}

