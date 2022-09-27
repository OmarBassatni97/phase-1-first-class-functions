function receivesAFunction(anything) {
    return anything()
}

function returnsANamedFunction() {
    return function help () {

    }
}
function returnsAnAnonymousFunction () {
    return function () {
        
    }
}