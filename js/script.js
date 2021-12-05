function counter (initialValue = 0) {
  const statistic = {
    numIncrease : 0,
    numDecrease : 0,
    numGet : 0,
    getStatistic : 0
  }

  const funcs = {
      increase (num) {
        statistic.numIncrease++;
        return initialValue += num;
      },
      decrease (num) {
        statistic.numDecrease++;
        return initialValue -= num;
      },
      get() {
        statistic.numGet++;
        return initialValue;
      },
      zeroing () {
        for (let i in statistic) {
          statistic[i] = 0;
        }
        return statistic;
      },
      getStatistic () {
        statistic.getStatistic++;
        return statistic;
      }
  }
  return funcs;
}

let counter1 = counter();

console.log(counter1.increase(3)); 
console.log(counter1.decrease(5)); 
console.log(counter1.get()); 
console.log(counter1.getStatistic()); 
console.log(counter1.zeroing()); 

