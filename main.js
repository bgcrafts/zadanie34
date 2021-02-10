let a = "Uwielbiam JavaScript";
let b = "Jestem świetnym programistą";

let c = function(a, b) {

    if ( a.lenght > b.length) {
        return a;
    }

    else if (a.length < b.length) {
        return b;
    }

}

console.log(c(a,b));
