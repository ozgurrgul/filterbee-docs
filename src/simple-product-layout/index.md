---
order: 3
group: components
---

`SimpleProductLayout` is a React functional component that displays a list of simple products in a responsive grid layout. It utilizes the `SimpleProductCard` component to display each product and allows users to define a custom click handler for each product card.

The component uses a grid layout with responsive column count. By default, it displays one column on extra small screens, two columns on small screens, and three columns on extra large screens. The gaps between the columns and rows are set to `6`. The styling can be modified by targeting the class names or extending the component.

## Properties

- `products` (type: `SimpleProduct[]`, optional): An array of simple products to be displayed. If not provided or empty, no products will be displayed.
- `onClick` (type: `(product: SimpleProduct) => void`, optional): A callback function that is triggered when a product card is clicked. The clicked product is passed as an argument to the callback function.

## Basic example

<code src="./simple-product-layout-basic-example.tsx"></code>

## Additional Notes

- It is important to provide unique ids to the list of products to ensure React can efficiently update the DOM.
- If no `onClick` handler is provided, the product cards will be displayed but clicks will have no effect.