var customerName = "bob";

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer(){
    bestCustomer = "not bob";
    return bestCustomer;
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob"
    return bestCustomer;
}

const leastFavoriteCustomer = "ted"

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "Assignment to constant variable."
}