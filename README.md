# bamazon

1. Open MySQL and run the 'seeds.sql' file to create your database and tables

	a. 'Database-Before-Purchase.jpg' shows the database with 10 items

2. Make sure you run 'npm i' in the command prompt to install the necessary packages

3. Use 'node bamazonCustomer.js' to run the code

4. Type in the desired item_id for what you want to buy as well as how many when prompted

	a. Refer to 'Console-Display-On-Function-Run(1).jpg' and Refer to 'Console-Display-On-Function-Run(2).jpg' to see how it should look

5. If you buy the amount of items in stock or less, the console should log that the purchase was successful and the database will be updated to reflect the new amount

	a. The database should reflect the change as shown in 'Database-After-Purchase.jpg' 

6. If you attempt to buy more than what is in stock, the console will log that there is Insufficient Quantity for the user and the database will not update

	b. Refer to 'Console-Display-On-Function-Run-Insufficient-Amount.jpg'