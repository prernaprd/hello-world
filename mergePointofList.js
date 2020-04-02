function findMergeNode(headA, headB) {
    let currentNodeA = headA;
    let currentNodeB = headB;

    while(currentNodeA !== currentNodeB) {
        if(currentNodeA.next === null) {
            currentNodeA = headB
        }
        else {
            currentNodeA = currentNodeA.next;
        }

        if(currentNodeB.next === null) {
            currentNodeB = headA
        }
        else {
            currentNodeB = currentNodeB.next;
        }
    }
    return currentNodeA.data;
}
