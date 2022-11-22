# Audio Shop

### This is my Final Project for **CS50x** course

### Description:

    This is a Web application which I created with React.js framework and styled it tailwindCss and also some plain css.
    The website have 4 main pages each of it having it's own route using react-router-dom,
    a home page and 3 other pages of categories,
    each of it being filled with .jsx Components:
    - Headphones with 3 different models
    - Speakers with 2 different models
    - Earphones with one model
    The website also have a shopping cart where the products are beign displayed when you click the add to cart button,
    in the cart modal you can change the number of how many products you want to buy, delete products, see the total price of the card, or move forward to the checkout by clicking the checkout button.
    On the checkout page there is a form with billing details, shipping info and payment details, and also a summary of your cart and total price of it.
    You can choose to pay either with cash or with the card. After you successfully completed the form and clicked continue, you will be redirected to the success page where a confirmation of your purchase pops up.
    The website is responsive for all devices using media queries, css flexbox and grids.

    Creating the pages:

    Taking advantage of reusable Components, I created separate page for each product having it's own route,
     which have more informations about it like, description, price, more images of it, what's in the box,
    related products and the button to add it to cart and to set the amount. And I used react links and useNavigate to make the navigation possible.
    I used framer-motion to animate the components, and for the dynamic navbar I created a function using the scroll event listener and DOM manipulation.
    The modal for the cart is made with a js function using on click event and DOM manipulation.
    I created a ProductsData.js file where i stored the informations of the products in an array of objects and I used it to fill in the components with it.

    ## Adding functionality:

    I made a ProductContext.js file using createContext where I created the functions and variables to store data,
    making use of useState hook, conditionals, ternary operator, objects, array methods like map, find, filter, reduce.
     I wrapped all of the components in the App.js with the context provider to use the context everywhere is needed.

    ### I wrote functions to:

    - Add to cart
    - Display the cart
    - Set the quantity
    - Set the cart products
    - Remove all from cart
    - Remove one product from cart
    - Calculate the total value
    And I used those functions in the components with useContext hook making the website fully functional and interractive.

    This project helped me to strengthen my react knowledge, to learn more about react context, framer motion, how to take advantage
    of reusable components, to make a more complex and scalabe web application.


    The design of the website is from the frontendmentor.io
