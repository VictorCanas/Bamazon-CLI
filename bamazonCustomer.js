//Node.js & MySQL - Bamazon CLI 

var inquirer = require("inquirer");
var mysql = require("mysql");

var password = secret_password;

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: password,
	database: "bamazon"
});

connection.connect(err => {
	if (err) throw err;
	console.log("connected as id " + connection.threadId + "\n");
	queryBamazon();
})

function queryBamazon () {
	connection.query("SELECT * FROM products", function (err, res) {
		for (var i = 0; i < res.length; i++) {
			console.log("Item ID: " + res[i].item_id + " " + 
				"Product: " + res[i].product_name + " " +  
				"Department: " + res[i].department_name + 
				" " + "Price: " + res[i].price);
		}
	customerInquirer();
	});
}


function customerInquirer () {
	inquirer.prompt([
	{
		type: "input",
		message: "Welcome to Bamazon! Please select an item to purchase via item id.",
		name: "item_id"
		
	},
	{
		type: "input",
		message: "How much quantity would you like to buy? Please enter a  value.",
		name: "quantity"
	}
]).then(function(inquirerResponse) {
	var query = connection.query("SELECT item_id, product_name, department_name, price, stock_quantity FROM products WHERE item_id = ?", 
		[inquirerResponse.item_id], function(err, res) {
		for (var i = 0; i < res.length; i++) {
			if (inquirerResponse.quantity <= res[i].stock_quantity) {
				console.log("Your total for " + res[i].product_name + " at quantity: " 
					+ inquirerResponse.quantity + " is " + res[i].price * inquirerResponse.quantity 
					+ " \nThanks for choosing Bamazon!");

				var quantity = parseInt(inquirerResponse.quantity);
				var updateQuantity = res[i].stock_quantity - quantity;
				var query = connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [updateQuantity, inquirerResponse.item_id], function(err, res) {
					console.log("Come again soon!");
				});
			} else {
				console.log("Sorry, insufficent quantity!.");
				//callback to run promt again
				customerBuysProduct();
			}
		}
	})

});

}

