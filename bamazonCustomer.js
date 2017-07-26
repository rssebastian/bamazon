var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "mapleman1",
  database: "bamazon"
});

connection.connect(function(err) {
	console.log("Connected as id: " + connection.threadID);
	productDisplay();
});

var productDisplay = function() {
	connection.query("SELECT * FROM products", function(err,results) {
		if (err) throw err;
		console.log(JSON.stringify(results, null, 2));
		inquirer.prompt([
			{
				name: "desiredID",
				message: "What is the ID of the item you'd like to buy?",
				type: "input"
			},
			{
				name: "desiredAmt",
				message: "How many would you like to order?",
				type: "input"
			}
		]).then(function(answers) {
			var desiredID = answers.desiredID;
			var desiredAmt = answers.desiredAmt;
			connection.query("SELECT * FROM products WHERE item_id =" + desiredID, function(err,results) {
				if (err) throw err;
				var stockAmt = results[0].stock_quantity;
				console.log(stockAmt);
				if (stockAmt >= desiredAmt) {
					var newStock = stockAmt-desiredAmt;
					console.log(newStock);
					connection.query("UPDATE products SET stock_quantity = " + newStock + " WHERE item_id = " + desiredID , function(err, result) {
						if (err) throw err;
						console.log("Item bought! Thank you for your purchase!");
					})
				} else {
					console.log("Insufficient quantity!");
				}
			});
		});
	});
}
