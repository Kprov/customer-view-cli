# customer-view-cli
CLI application that stores inventory data to a MySQL database and adjust on-hand counts accordingly based on user "purchases"

Once a user has selected thier product and quantity, they will recieve a receipt review of their order including product, quantity, price before tax, sales tax and total cost. 

If the product is out of stock or the customer has ordered more units than currrently on hand, they will recieve a message explaining the error and will need to select a new product or quantity.

The appropriate inventory counts within the sql database will then be adjusted to reflect the remaining inveentory. 

Please see below images as examples of functionality

1 - Running the file
 <img width="1486" alt="screen shot 2019-03-07 at 1 39 30 am" src="https://user-images.githubusercontent.com/42752968/53940192-a5998400-407a-11e9-9e4c-9c79c5048557.png"><br>
2 - Catalogue request displayed and prompts appear
<img width="1488" alt="screen shot 2019-03-07 at 1 39 39 am" src="https://user-images.githubusercontent.com/42752968/53940191-a5998400-407a-11e9-833c-4a0fe9f92d2c.png"><br>
3 - Sample purchase of 5 in stock lightbulbs 
<img width="1487" alt="screen shot 2019-03-07 at 1 40 01 am" src="https://user-images.githubusercontent.com/42752968/53940190-a5998400-407a-11e9-8ee3-b4a4b61b13a0.png"><br>
4 - Receipt returned with all relevant information
<img width="1485" alt="screen shot 2019-03-07 at 1 40 14 am" src="https://user-images.githubusercontent.com/42752968/53940189-a5998400-407a-11e9-9fee-37004b5efd0e.png">
<br>
5 - Visual of database (lightbulb) inventory before purchase
<img width="786" alt="screen shot 2019-03-07 at 1 40 31 am" src="https://user-images.githubusercontent.com/42752968/53940188-a5998400-407a-11e9-96bf-a919f080c00f.png"><br>
6 - Database (lightbulb) inventory reduced but quantity purchased after order completion
<img width="825" alt="screen shot 2019-03-07 at 1 40 41 am" src="https://user-images.githubusercontent.com/42752968/53940187-a500ed80-407a-11e9-8b96-619b9620e08a.png"><br>
7 - Sample order of a out of stock product
<img width="850" alt="screen shot 2019-03-07 at 1 41 31 am" src="https://user-images.githubusercontent.com/42752968/53940186-a500ed80-407a-11e9-886b-1138dc6c23fa.png"><br>
8 - Sample order of a requested quantity above current inventory levels
<img width="472" alt="screen shot 2019-03-07 at 1 42 00 am" src="https://user-images.githubusercontent.com/42752968/53940185-a500ed80-407a-11e9-87df-1ad78c621419.png"><br>







