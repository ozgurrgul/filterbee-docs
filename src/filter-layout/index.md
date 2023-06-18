---
order: 2
group: components
---

## FilterLayout

Advanced and customizable layout component for product filters in React applications. It contains a mobile and a desktop version. It's essentially a wrapper around `FiltersContainer<T>`.

The `FilterLayout` component is a responsive container for filters. It includes the ability to toggle between different filter categories and apply filters on both mobile and desktop viewports. The component employs a `side-by-side layout` for tablet and larger screens, while using a `dialog sheet` (or drawer) for mobile devices.

:::info
Tip: Try resizing!
:::

<code src="./examples/filter-layout-example-basic.tsx"></code>


#### Api

| Property               | Type                                                   | Description                                                                  |
|------------------------|--------------------------------------------------------|------------------------------------------------------------------------------|
| `categories`           | `FilterCategoriesType<T>`                              | An object that holds filter categories. Each category is a filter type.     |
| `onChange`             | `(newFilters: Partial<AppliedFiltersType<T>>) => void` | Callback function that is called when the filter value changes.             |
| `header`               | `{ mobile?: JSX.Element }`                             | Optional property to set a custom header for mobile view.                   |
| `i18n`                    | `{ buttons?: { apply?: any; cancel?: any; filters?: any; };` | Optional i18n property for lokalization on UI components