// Dependencies
var mysql = require('mysql');
var inquirer = require("inquirer");

// Connection to the MySQL Database
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "bamazon_DB" 
});

// Test the connection
connection.connect(function(err) {
  if (err) throw err;
  start();
});

// Function that displays the table for the user
function start () {
  connection.query("SELECT * FROM products", function(err, results){
    if (err) throw err;
    console.table(results);
    selectItem();
  })
}
// Function that prompts user for the products 
function selectItem() {
  connection.query("SELECT * FROM products", function(err, results){
    if (err) throw err;
    inquirer 
      .prompt([
        {
          name: "choice",
          type: "input",
          message: "Which item_id would you like to choose?"
        },
      {
        name: "quantity",
        type: "input",
        message: "How many units of the product would you like to buy?"
      },
      {
        type: "confirm",
        message: "Are you sure you would like to select this item?",
        name: "confirmSelection",
        default: true
      }
    ])
    .then(function(response) {
      // console.log(response)
      var query = "SELECT * FROM products WHERE ?;"
      connection.query(query, {item_id: response.choice}, function (err, data){
        if (err) throw (err);
          var available_stock = data[0].stock_quantity;
          // console.log(data);
          var price = data[0].price;
          var department = data[0].department_name;
          // checks to see if there's enough inventory for the user:
        if (available_stock >= response.quantity) {
          // console.log("We have enough inventory for you to purchase this item now!")
          completePurchase(available_stock, price, response.productId, response.quantity);
          // If there is enough stock in the inventory, the purchase is completed.
        } else {
          // Otherwise, the user is told that there isn't enough stock in our store.  :(
          console.log("Not enough stock");
          // lets user pick a new product
          // start();
          // I may have to run "selectItem() instead..."
        }
      });
    });
  });   
  
  // This function completes the user's request to purchase the product.
var completePurchase = function(availableStock,price,selectedProductId,selectedProductStock) {
	// This variable updates stock quantity once the purchase complete.
  var updatedStockQuantity = availableStock - selectedProductStock;
	// Calculates total price for purchase based on unit price, and number of items in stock.
  var totalPrice = price * selectedProductStock;
	// Updates the stock quantity on the database based on user's purchase.
  var query = "UPDATE products SET ? WHERE ?"
	connection.query(query, [{
    stock_quantity: updatedStockQuantity,
	}, {
		item_id: selectedProductId

	}], function(err, response) {
		if (err) throw err;
		// This tells the user that the purchase was a success.
		console.log("Your purchase is complete");
		// This gives the user the total price for that specific purchase.
    console.log("There was a total price of $" + totalPrice + " on that transaction");
    // This displays the updated stock quantity of the inventory
    console.log("There are now " + updatedStockQuantity + " of that item left in inventory")
    });
  };
}










    //   var selection = ponseponse.choice;
    //   var selectedQuantity = parseInt(response.quantity);
    //   var confirm = response.confirmSelection;

    //   //If the user confirms the purchase, the next function will procced to the selling process.
    //   if (confirm) {
    //     processingPurchase(selection, selectedQuantity);

    //     //Otherwise the user will receive the prompt again.
    //   } else {
    //     selectFunction();
    //   }
    // });
  // })
// }
