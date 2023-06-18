---
order: 4
group: components
---

`SimpleProductCard` is a React functional component that displays information about a simple product in a card format. The card contains the product's title, image, description, rating, and price. It allows users to define a custom click handler for the card.

The component uses flexbox layout to organize content within the card. The card header contains the title, the card content contains the image, description, and rating, and the card footer contains the price.

- The card is clickable, and the cursor will change to a pointer when hovering over it.
- The card doesn't have a fixed width or height, so you would adjust them in a `grid` or `flexbox`.

## Component Properties

- `product` (type: `SimpleProduct`, optional): An object containing product information. If not provided, the component will not render anything. The `SimpleProduct` type has the following structure:
  - `id` (type: `string | number`, optional): A unique identifier for the product.
  - `title` (type: `string`, optional): The title of the product.
  - `description` (type: `string`, optional): A description of the product.
  - `rating` (type: `number`, optional): The rating of the product (usually from 1 to 5).
  - `price` (type: `string | number`, optional): The price of the product.
  - `image` (type: `string`, optional): The URL of the product's image.
- `onClick` (type: `(product: SimpleProduct) => void`, optional): A callback function that is triggered when the card is clicked. The product object is passed as an argument to the callback function.

## Basic example

<code src="./simple-product-card-basic-example.tsx"></code>


The styling can be modified by targeting the class names or extending the component.

## Additional Notes

- If no `onClick` handler is provided, the card will be displayed but clicks will have no effect.
- If no `product` object is provided, the component will not render anything.
- The component uses a `Stars` sub-component to display the rating. This component is responsible for rendering stars based on the rating value.