// LinkedList class
    // represents full list
    // construct Nodes inside
class LinkedList {
    // creating linked list, can access by name
    // default, head is null, so LL is empty
    constructor(name){
        this.name = name;
        this.head = null;
    }

    //append adds to end of LL
    append(value) {
        
        //if there are no elements, prepend as first element
        if(this.head === null){
            this.prepend(value);
            return this.head;
        }

        // use tmp to traverse list
        let tmp = this.head;
        // traverse LL to the tail before hitting null
        // once the nextNode is null (ie we hit the tail)
        // then loop ends
        while (tmp.nextNode != null){
            tmp = tmp.nextNode;
        }

        //we make a new node at the tail and assign value
        tmp.nextNode = new Node;
        tmp.nextNode.value = value;
        return tmp.nextNode;
    }

    //add node to start of list
    prepend(value){
        if (this.head != null){
            // use tmp to hold onto current head
            // while we overwrite current head with new head
            let tmp = this.head;
            this.head = new Node;
            this.head.value = value;
            this.head.nextNode = tmp;
        }else{
            // if there is no head, create one
            this.head = new Node;
            this.head.value = value;
        }
        return this.head;
    }

    //returns total number of nodes in the list
    size(){
        //traversing again
        let tmp = this.head;
        let counter = 0;
        while (tmp.nextNode != null){
            tmp = tmp.nextNode;
            counter += 1;
        }
        //one more counter as the loop stops at last node before counting it
        counter += 1;
        return counter;

    }

    getHead(){
        return this.head;
    }

    getTail(){
        let tmp = this.head;
        while (tmp.nextNode != null){
            tmp = tmp.nextNode;
        }
        return tmp;
    }

    at(index){
        let tmp = this.head;
        for (let i = 1; i < index; i++){
            tmp = tmp.nextNode;
        }
        return tmp;
    }

    
}


// Node class
    // contains value, link to next node.
    // both value and link set to null as default

class Node {
    constructor(){
        this.value = null;
        this.nextNode = null;
    }
}


let newList = new LinkedList('list');

newList.append('first append');
newList.append('second append');
newList.prepend('first prepend');
// console.log(newList.size());
// console.log(newList.getHead());
// console.log(newList.getTail());
console.log(newList.at(1));
console.log(newList.at(2));
console.log(newList.at(3));