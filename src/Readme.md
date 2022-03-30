- Authentication using JSON Web Tokens (JWT).
- Option to add, edit, view and delete all the items in our store.
- Option to add items or remove items from the cart.
- Display the total bill of the cart and update it as soon as the cart is updated by the user.
- Using Local Storage to store the JWT so that we only allow logged-in users to buy items.
- Option to pay and checkout thus creating order and emptying the cart.


Models :
- User: Name, Email, Username, registration Date
- Items - Name, brand, price 
- Cart - item, quantity
- Order - item, quantity, price, bill

-------------------------------------------------
Mock APIs:
    /login - returns 200 OK status
    /register - creates a new user and returns 200 OK status
    /addProduct - adds a new product and returns 200 OK status
    /removeProduct - removes a new product and returns 200 OK status
    /updateProduct - updates a new product and returns 200 OK status
    /order - creates a new order the products and returns 200 OK status

    
