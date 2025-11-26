function createCounter(){
    let count=0;
    function increment(){
        count++;
        return function(){
            console.log("Incrementingcount",count)   
        }
    }
    function decrement(){
        count--
        console.log("Decrementing count",count)
    }
    return{increment,decrement}
}
const c=createCounter();
const d=c.increment();
d()
c.decrement()