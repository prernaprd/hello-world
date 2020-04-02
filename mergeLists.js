function mergeLists(head1, head2) {
    if(head1 === null && head2 === null) {
        return null;
    }
    else if(head1 != null && head2 === null) {
        return head1;
    }
    else if(head1 === null && head2 != null) {
        return head2;
    }
    else {
        let cnList1 = head1, cnList2 = head2;
        let llist3 = new SinglyLinkedListNode();
        if(cnList1.data <= cnList2.data) {
            llist3 = cnList1;
            cnList1 = cnList1.next;
        }
        else {
            llist3 = cnList2;
            cnList2 = cnList2.next;
        }

        let startingNode = llist3;
        while(cnList1 && cnList2) {
            
            if(cnList1.data <= cnList2.data) {
                llist3.next = cnList1;
                llist3 = cnList1;
                cnList1 = cnList1.next;
            }
            else {
                llist3.next = cnList2;
                llist3 = cnList2;
                cnList2 = cnList2.next;
            }
        }

        if(cnList1 === null) { llist3.next = cnList2};
        if(cnList2 === null) { llist3.next = cnList1};
        return startingNode;
    }

}