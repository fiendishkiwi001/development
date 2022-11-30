# Development

### Link to Deployed Website
https://fiendishkiwi001.github.io/development/

### Goal and Value of the Application

This application is useful for frequent customers of Kung Fu Tea such as myself. Customers can view menu items, their respective details, and filter by multiple categories in order to find a drink that they like.

### Usability Principles Considered

I made use of a simple, yet expressive hierarchy that organizes my page well. The main sections are the title, sidebar, and content divs. You may notice that my page is fully responsive to different sizes. Further, the title and sidebar remain fixed in order to give users easy access to the filtering.

### Organization of Components

The major components consisted of checkboxes, cards for menu items, and a component for cart items. In order to keep track of states, each filter had its own useState. Then, useEffects were used in order to make sure the page remains up to date. A similar design was used for the cart and the respective buttons, which alter an array of cart items state as well as a total cart price state. UseEffects also link these to their jsx components which makes sure they are current. Some props included the details I needed from the menu item objects, price, name, and filters.
