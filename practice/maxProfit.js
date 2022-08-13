// Best time to buy and sell stock
var maxProfit = function (prices) {
  /**
   get max profit.
   max profit = max price - min price
   
   search
   minBuyPrice = 999;
   maxProfit = 0;

   - search array
   - check if current value is min or not
   - update minBuyPrice
   - compare minBuyPrice with 
   - get profit: current value - minBuyPrice
   - check if the profit is max nor not
   - update maxprofit
   */
  var minBuyPrice = 9999;
  var maxProfit = 0;

  for (var i = 0; i < prices.length - 1; i++) {
    var currentPrice = prices[i];
    var profit = 0;
    if (currentPrice < minBuyPrice) {
      minBuyPrice = currentPrice;
    } else {
      profit = currentPrice - minBuyPrice;
    }

    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
};

var input = [7, 1, 5, 3, 6, 4];
var result = maxProfit(input);
console.log("result", result);
