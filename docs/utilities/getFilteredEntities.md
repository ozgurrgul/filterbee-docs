---
order: 2
group: Utilities
---

# getFilteredEntities

`getFilteredEntities` is an utility function designed to filter an array of entities based on a set of applied filters, filter categories, and a mapping between filter categories and entity properties.

:::warning
This function is a helper and used to coordinate filtering output with your entities that you are applying filter. This function is not mandatory use and mostly covers simple cases.
:::

```typescript
function getFilteredEntities<TEntity, FFilterType extends string>({
  entities,
  filterCategories,
  appliedFilters,
  filterCategoryToEntityPropertMap,
}: {
  entities: TEntity[];
  filterCategories: FilterCategoriesType<FFilterType>;
  appliedFilters: Partial<AppliedFiltersType<FFilterType>>;
  filterCategoryToEntityPropertMap: FilterCategoryToEntityPropertMap<
    TEntity,
    FFilterType
  >;
}): TEntity[];
```

## Parameters

- `entities` (type: `TEntity[]`): An array of entities that need to be filtered. This can be feed with an API response coming from your backend.
- `filterCategories` (type: `FilterCategoriesType<FFilterType>`): An object that defines the filter categories and their respective options. See more in [FiltersContainer](/components/filters-container#filtercategorytype) documentation.
- `appliedFilters` (type: `Partial<AppliedFiltersType<FFilterType>>`): An object that contains the applied filters. This data is fed by `FilterLayout` or `FiltersContainer` `onChange` calls as user does interaction.
- `filterCategoryToEntityPropertMap` (type: `FilterCategoryToEntityPropertMap<TEntity, FFilterType>`): A mapping between the filter categories and the corresponding entity properties.

## Return Value

The function returns an array of filtered entities based on the applied filters. If no filters are applied, it will return all entities.

## Example

```typescript
import { getFilteredEntities, FilterCategoriesType, AppliedFiltersType } from 'filterbee';

type MyProductFilters = 'filter-brand' | 'filter-price';
type Product = {
  id: number;
  name: string;
  price: number;
  brand: string;
};

const products: Product[] = [
  { id: 1, name: 'Product A', price: 50, brand: 'nike' },
  { id: 2, name: 'Product B', price: 30, brand: 'adidas' },
  { id: 3, name: 'Product C', price: 70, brand: 'nike' },
  { id: 4, name: 'Product D', price: 100, brand: 'puma' },
];

const filterCategories: FilterCategoriesType<MyProductFilters> = {
  'filter-brand': {
    title: 'Brand',
    type: 'multi-select',
    options: [
      { optionId: 'nike', title: 'Nike' },
      { optionId: 'adidas', title: 'Adidas' },
      { optionId: 'puma', title: 'Puma' },
    ],
  },
  'filter-price': {
    title: 'Price',
    type: 'range',
    options: {
      min: { title: 'Min' },
      max: { title: 'Max' },
    },
  },
};

const appliedFilters: Partial<AppliedFiltersType<MyProductFilters>> = {
  'filter-brand': ['nike'],
};

/**
 * A mapping of our filter category definitions to the entity properties
 * getFilteredEntities() is going to search provided `appliedFilters` in the `entities` dataset,
 * with the help of `filterCategoryToEntityPropertMap` dictionary, 
 * because we need to know the definitions of `filterCategories`, which we are using `filterCategoryToEntityPropertMap` for loopup
 * check source code if confused
 */
const filterCategoryToEntityPropertMap: FilterCategoryToEntityPropertMap<
  Product,
  MyProductFilters
> = {
  'filter-brand': 'brand',
  'filter-price': 'price',
};

const filteredProducts = getFilteredEntities<Product, MyProductFilters>({
  entities: products,
  filterCategories,
  appliedFilters,
  filterCategoryToEntityPropertMap,
});

console.log(filteredProducts);
/* Outputs product items with `brand='nike'`, because it's provided with `appliedFilters` parameter:
[
    { "id": 1, "name": "Product A", "price": 50, "brand": "nike" }, 
    { "id": 3, "name": "Product C", "price": 70, "brand": "nike" } 
]
*/
```

In this example, `getFilteredEntities` filters a list of products based on the brand and price range. The function returns the products that have the brand 'Nike' and a price between 50 and 100.

:::info
`getFilteredEntities` doesn't have capability to filter nested complex entities. You will always need to map your entities to 1 level JSON object:

``` js

// Not supported nested filtering!
 const myDataFromBackend = [
    { "id": 1, "name": "Product A", "price": 50, "brand": { id: "nike" } },
    { "id": 1, "name": "Product B", "price": 50, "brand": { id: "adidas" } },
    { "id": 1, "name": "Product C", "price": 50, "brand": { id: "jump "} },
 ]

 // Supported!
 const myDataFromBackend = [
    { "id": 1, "name": "Product A", "price": 50, "brand": "nike" },
    { "id": 1, "name": "Product B", "price": 50, "brand": "adidas" },
    { "id": 1, "name": "Product C", "price": 50, "brand": "jump" },
 ]


 ```
:::