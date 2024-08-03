// 1.Exploring Conditional Statements and Loops

// Task 1: Implement a conditional statement to check if a user is logged in before allowing them to add items to the cart.
let isLoggedIn = true; // check if login
let cart = [];

// add items
function addToCart(item) {
    if (!isLoggedIn) {
        console.log("Please log in to add items to your cart.");
        return;
    }
    cart.push(item);
    console.log(`${item} has been added to your cart.`);
}


// Task 2: Use a loop to display the list of available products to the user and add functionality for users to add products to their cart.

let products = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

// list
console.log("Available products:");
for (let i = 0; i < products.length; i++) {
    console.log(`${i + 1}. ${products[i]}`);
}

// add selected
function userSelectProduct(productIndex) {
    if (productIndex >= 1 && productIndex <= products.length) {
        addToCart(products[productIndex - 1]);
    } else {
        console.log("Invalid product selection.");
    }
}

// show selected items
userSelectProduct(1); //  Apple 
userSelectProduct(3); //  Orange 


// Task 3: Calculate the total cost of the items in the cart and display it to the user.

let productPrices = {
    "Apple": 1.2,
    "Banana": 0.5,
    "Orange": 0.8,
    "Grapes": 2.0,
    "Mango": 1.5
};

// calculate cost
function calculateTotalCost() {
    let totalCost = 0;
    for (let i = 0; i < cart.length; i++) {
        totalCost += productPrices[cart[i]];
    }
    return totalCost;
}

// total cost
function displayTotalCost() {
    let totalCost = calculateTotalCost();
    console.log(`Total cost of items in the cart: $${totalCost.toFixed(2)}`);
}

// display total cost
displayTotalCost();



// 2. Exploring Functions in JavaScript

// Task 1: Create a function to handle deposits into a bank account.

let balance = 0; // Initial balance

// Function to handle deposits
function deposit(amount) {
    if (amount > 0) {
        balance += amount;
        console.log(`Deposited: $${amount}`);
        console.log(`New Balance: $${balance}`);
    } else {
        console.log("Deposit amount must be positive.");
    }
}

// Example usage
deposit(100); // Deposited: $100, New Balance: $100
deposit(50);  // Deposited: $50, New Balance: $150
deposit(-20); // Deposit amount must be positive.



// Task 2: Implement a function to handle withdrawals from a bank account, ensuring sufficient balance.

// Function to handle withdrawals
function withdraw(amount) {
    if (amount > 0) {
        if (amount <= balance) {
            balance -= amount;
            console.log(`Withdrawn: $${amount}`);
            console.log(`New Balance: $${balance}`);
        } else {
            console.log("Insufficient balance for this withdrawal.");
        }
    } else {
        console.log("Withdrawal amount must be positive.");
    }
}

// Example usage
withdraw(50);  // Withdrawn: $50, New Balance: $100
withdraw(200); // Insufficient balance for this withdrawal.
withdraw(-10); // Withdrawal amount must be positive.


// Task 3: Develop a function to check the current balance of the account.

// Function to check the current balance
function checkBalance() {
    console.log(`Current Balance: $${balance}`);
    return balance;
}

// Example usage
checkBalance(); // Current Balance: $100
