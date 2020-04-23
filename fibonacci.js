const fib = {
    userOptions: {
        positionWanted: 15
    },
    fibPosition: function(position) {
        let newArr = [];
        let a = 0;
        let b = 1;
        let temp = 1;
        for(let i = 2; i <= position; i++) {
            temp = a + b;
            a = b;
            b = temp;
            newArr.push(b);
        }
        let fibObj = {
            numberAtPosition: temp,
            arrayUpToPosition: newArr
        };
        return fibObj;
    },
    init: function(options) {
        console.log(fib.fibPosition(options.positionWanted));
    }
};
fib.init(fib.userOptions);