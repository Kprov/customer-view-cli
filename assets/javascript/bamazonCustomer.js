var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
// start();
console.log("Connected")
  // run the start function after the connection is made to prompt the user
displayProducts();
});
//function sending a request and receiving all porducts results to be viewed by the user
function displayProducts(){
    connection.query("SELECT * FROM products",function(err, results) {
        console.log("\nWelcome! Here is our product catalogue..\n")
        if(err) throw err;
        //Displaying product results in a user friendly layout
        for (var i=0;i < results.length;i++){
            console.log("\n ------- \nProduct: " + results[i].product_name);
            console.log("Price: $" + results[i].price);
            console.log("Department: " + results[i].department_name);
            console.log("Product ID: " + results[i].item_id) + "\n ------- \n";
        }
        inquirer    
            .prompt([
                {
                name: "productid",
                type: "value",
                message: "Please enter the ID of your chosen product.",
                validate: function (value) {
                    if(isNaN(value) === true) throw "Please enter a valid product ID";
                    if(isNaN(value) === false) return true;
                }
            },
            { 
                name:"quantity",
                type: "value",
                message: "How many items would you like to purchase?",
                validate: function (value) {
                    if(isNaN(value) === true) throw "Please enter a valid quantity";
                    if(isNaN(value) === false) return true;
                }
            }])
            .then(function(answer){
                var query = "SELECT * FROM products WHERE item_id =" + answer.productid;
                connection.query(query, function(err, result){
                    if(err) throw err;
                    
                    for (i=0; i < result.length;i++){
                    
                    if (result[i].stock_quantity === 0) {
                        console.log("\nProduct out of stock.\n")
                    }
                    else if (answer.quantity > result[i].stock_quantity) {
                        console.log("\nI'm sorry, we currently only have " + result[i].stock_quantity +" in stock.\n")
                            
                        
                    }
                    else if (answer.quantity <= result[i].stock_quantity){
                        var beforeTax = answer.quantity * result[i].price;
                        var tax = (answer.quantity * result[i].price) *.05;
                        var finalPrice = beforeTax + tax;
                        console.log("\nThank you for your purchase! Here is your receipt.\n\n")
                        console.log("Product: " + result[i].product_name);
                        console.log("Quantity: " + answer.quantity);
                        console.log("Before Tax: $" + beforeTax);
                        console.log("5% Sales Tax: $" + tax);
                        console.log("\nTotal: $" + finalPrice + "\n");

                        var currentInventory = result[i].stock_quantity - answer.quantity;

                        
                        currentInventory = parseInt(currentInventory);
                        result[i].stock_quantity = parseInt(result[i].stock_quantity);
                        update();

                        function update(){

                        connection.query("UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: currentInventory,
                            },
                            {
                                stock_quantity: result[i].stock_quantity,
                            }
                        ], function(err, res){
                            if (err) throw err;
                        })
                        }
                        
                    }
                    connection.end();

                
                    
                }
                }) 
                
            })
    });
}





