function CompareLists(llist1, llist2) {
    if(llist1 === null || llist2 === null) {
        return 1;
    }
    else if((llist1 === null && llist2 !== null) || (llist1 !== null && llist2 === null))    {
        return 0;
    }
    else {
        let currentNodeList1 = llist1;
        let currentNodeList2 = llist2;
        let numOfList1Node = 0, numOfList2Node = 0;
        //Check number of nodes in list 1
        while(currentNodeList1) {
            numOfList1Node++;
            currentNodeList1 = currentNodeList1.next;
        }

        //Check number of node in list 2
        while(currentNodeList2) {
            numOfList2Node++;
            currentNodeList2 = currentNodeList2.next;
        }

        if(numOfList1Node === numOfList2Node) {
            let currentNodeList1 = llist1;
            let currentNodeList2 = llist2;
            let isEqual = true;
            //Now compare each data in node
            while (currentNodeList1 && currentNodeList2) {
                if(currentNodeList1.data !== currentNodeList2.data) {
                    isEqual = false;
                    break;
                }
                else {
                    currentNodeList1 = currentNodeList1.next;
                    currentNodeList2 = currentNodeList2.next;
                }
            }
            return isEqual === false ? 0 : 1;
        }
        else {
            return 0;
        }
    }
}