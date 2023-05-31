//timer name must be same

const doSomething = () => console.log('test');
const measureDoingSomething = () => {
  console.time('timer');
  // do something, and measure the time it takes
  doSomething();
  console.timeEnd('timer');
};
measureDoingSomething();
