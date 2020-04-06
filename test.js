function maximumToys(prices, k) {
    let sortedPriceList = prices.sort(function(a,b){ return a-b});
    let p, toyAmt = 0;
    for(p = 0; p < sortedPriceList.length; ++p) {
        if(sortedPriceList[p] < k && toyAmt < k) {
            toyAmt = toyAmt + sortedPriceList[p];
        }
        else {
            break;
        }
    }

    return toyAmt > k ? p-1: p;

}

console.log(maximumToys([1,12,5,111,200,1000,10], 50));