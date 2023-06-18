---
order: 1
group: components
---

The `FiltersContainer<T>` component allows users to filter data based on different criteria. It supports various filter types, such as `radio` buttons, `multi-select`, `range`, `input` fields, and `rating` stars. It uses accordions to display filter categories, making the UI clean and easy to navigate. You can also customize UI elements like the `loading` indicator.

| Property          | Type                                                | Description                                                                                              |
|-------------------|-----------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `categories`      | `FilterCategoriesType<T>`                | An object that holds categories. Each category is a filter type.                                         |
| `onChange`        | `(newFilters: Partial<AppliedFiltersType<T>>) => void` | Callback function that gets called when the filter value changes.               |


:::info

`FilterCategoriesType<T>` essentially just a dictionary of `FilterCategoryType` items. Example:

```ts

  const categories: FilterCategoriesType<MyProductFilters> = {
    'filter-category': {
      type: 'multi-select',
      options: [
        {
          optionId: 'phone',
          title: 'Phone',
        },
        {
          optionId: 'computer',
          title: 'Computer',
        },
      ],
      title: 'Categories',
    },
    'filter-brand': {
      type: 'multi-select',
      options: [
        {
          optionId: 'apple',
          title: 'Apple',
        },
        {
          optionId: 'microsoft',
          title: 'Microsoft',
        },
        {
          optionId: 'samsung',
          title: 'Samsung',
        },
      ],
      title: 'Brands',
    },
  };
```

:::
Each `options` consist of array of `FilterCategoryOptionType` (`{optionId: string; title?: string;}`). In order to render multiple choice of filtering capability, you will need to provide array of `options` most of the time.

:::info
`onChange()` emits the applied filters (which user selected) and has type compability.
:::


## FilterCategoryType

This is a union type combining all possible filter category types:

- `MultiSelectFilterCategoryType`
- `RadioFilterCategoryType`
- `RangeFilterCategoryType`
- `InputFilterCategoryType`
- `RatingFilterCategoryType`

## Multi Select

Multi select filtering category is the most common and most powerful filtering component. It allows user to choose <u>multiple type</u> of items from a dropdown. 

### Basic example

<code src="./examples/multi-select-example-basic.tsx"></code>

### More advanced example

<code src="./examples/multi-select-example-advanced.tsx"></code>

### Api

| Property       | Type                          | Description                                            |
|----------------|-------------------------------|--------------------------------------------------------|
| `title`        | `string`                      | Title of the filter category.                          |
| `type`         | `"multi-select"`              | Type must be 'multi-select'.                           |
| `options`      | `FilterCategoryOptionType[]`  | Options for the multi-select filter.                   |
| `ui`           | `MultiSelectFilterCategoryType["ui"]`                      | Optional UI properties.                               |
| `renderItem`   | `(optionId: FilterOptionIdType, isChecked: boolean) => React.ReactNode`                    | Optional function to render each item.                 |

<hr/>

## Radio

Radio filter category allows user to select only <u>one</u> from the provided options. Common when the options are limited.

### Basic example

<code src="./examples/radio-example-basic.tsx"></code>

### Api

| Property  | Type                          | Description                      |
|-----------|-------------------------------|----------------------------------|
| `title`   | `string`                      | Title of the filter category.    |
| `type`    | `"radio"`                     | Type must be 'radio'.            |
| `options` | `FilterCategoryOptionType[]`  | Options for the radio filter.    |
| `ui`      | `{ loading?: boolean }`       | Optional UI properties.          |

<hr/>

## Range

Range filter category allows user to define minimum and maxiumum ranges. Common for price filtering.

### Basic example

<code src="./examples/range-example-basic.tsx"></code>

### Api

| Property  | Type                          | Description                         |
|-----------|-------------------------------|-------------------------------------|
| `title`   | `string`                      | Title of the filter category.       |
| `type`    | `"range"`                     | Type must be 'range'.               |
| `options` | `{ min: {title: string}; max: {title: string}; }` | Minimum and maximum range options.  |
| `ui`      | `{ loading?: boolean }`       | Optional UI properties.             |

<hr/>

## Input

Input filter category allows user to type into provided input. It can be used for a custom search in backend api or other reasons.

### Basic example

<code src="./examples/input-example-basic.tsx"></code>

### Api

| Property  | Type                          | Description                         |
|-----------|-------------------------------|-------------------------------------|
| `title`   | `string`                      | Title of the filter category.       |
| `type`    | `"input"`                     | Type must be 'input'.               |
| `ui`      | `{ loading?: boolean; label: string; inputType: HTMLInputTypeAttribute; }`                      | Optional UI properties.             |

## Rating

Rating filter category allows user to apply a rating filtering. Most of e-commerce websites have rating visibility based on user reviews on the products.

### Basic example

<code src="./examples/rating-example-basic.tsx"></code>

### Api

| Property  | Type                          | Description                         |
|-----------|-------------------------------|-------------------------------------|
| `title`   | `string`                      | Title of the filter category.       |
| `type`    | `"rating"`                    | Type must be 'rating'.              |
| `ui`      | `{ loading?: boolean, amountOfStars: number }` | Optional UI properties.         |

## Common UI options

For now, `ui` configuration only supports `loading` prop as common property between all filter category types.

<code src="./examples/loading-example-basic.tsx"></code>