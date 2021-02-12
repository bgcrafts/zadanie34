let x = "Uwielbiam JavaScript";
let y = "Jestem świetnym programistą";

let c = function(a, b) {

    if ( a.length > b.length) {
        return a;
    }

    else if (a.length < b.length) {
        return b;
    }

}

console.log(c(x,y));