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

    // returns the first node in the list
    getHead(){
        return this.head;
    }

    // returns last node in the list
    getTail(){
        let tmp = this.head;
        while (tmp.nextNode != null){
            tmp = tmp.nextNode;
        }
        return tmp;
    }

    // returns node at given index
    at(index){
        let tmp = this.head;
        for (let i = 1; i < index; i++){
            tmp = tmp.nextNode;
        }
        return tmp;
    }

    // removes last element from the list
    pop(){
        // get second to last element, set nextNode to null, cutting tie with old tail
        this.at(this.size() - 1).nextNode = null;        
    }

    //returns true if passed in value is in the list and false if not
    contains(value){
        let tmp = this.head;
        // traverse
        while (tmp != null){
            //if there is a match at any point, return true and exit
            if (value === tmp.value){
                return true;
            }
            // if not yet a match, try next node
            tmp = tmp.nextNode;
        }

        
        // if no match is found the whole time, return false
        return false;
    }

    // returns index of node containing value, null if not found
    find(value){
        let tmp = this.head;
        let counter = 1;
        while (tmp != null){
            if(value === tmp.value){
                return counter;
            }

            counter += 1;
            tmp = tmp.nextNode;
        }

        return null;
    }

    // returns LL obj as strings in format:
    //( value ) -> ( value ) -> ( value ) -> null
    toString(){
        let str = '';
        let tmp = this.head;
        while(tmp != null){
            str = str.concat(`( ${tmp.value} ) -> `);
            tmp = tmp.nextNode;
        }
        str = str.concat('null');

        return str;
    }

    insertAt(value, index){
        // create new node
        let newNode = new Node;
        newNode.value = value;

        if (index === 1){
            newNode.nextNode = this.head;
            this.head = newNode;
        }else{
            // at ( index - 1 ), save nextNode to tmp
            // save the node at which we are trying to insert
            // so that when we set the index-1 nextNode, it doesnt get lost
            let tmp = this.at(index);

            // setting the index before to point to new node
            this.at(index-1).nextNode = newNode;

            // set new node's nextNode to tmp
            newNode.nextNode = tmp;

        }


        return newNode;
    }

    removeAt(index){
        let tmp = this.at(index);

        if (index === 1){
            this.head = this.at(index + 1);
        }else{
            this.at(index - 1).nextNode = this.at(index).nextNode;
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
// console.log(newList.at(1));
// console.log(newList.at(2));
// console.log(newList.at(3));
// newList.pop();
// console.log(newList.contains('first prepend'));
// console.log(newList.find('first prepend'));
// console.log(newList.find('first append'));
// console.log(newList.find('second append'));
// console.log(newList.find('what'))
// console.log(newList.toString());
console.log(newList.toString());
newList.insertAt('insert 2', 2);
console.log(newList.toString());
newList.insertAt('insert 4', 4);
console.log(newList.toString());
newList.removeAt(3);
console.log(newList.toString());
newList.removeAt(1);
console.log(newList.toString());
newList.removeAt(1);
console.log(newList.toString());
newList.insertAt('insert 1', 1);
console.log(newList.toString());