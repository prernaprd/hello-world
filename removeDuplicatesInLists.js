function removeDuplicates(head) {
    if(head != null) {
        let currentNode = head.next;
        let previousNode = head;
        while(currentNode) {
            if(previousNode.data === currentNode.data) {
                previousNode.next = currentNode.next;
                currentNode = currentNode.next ;
            }
            else {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
        return head;
    }
    else {
        return null;
    }

}
