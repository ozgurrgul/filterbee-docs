---
order: 1
group: Utilities
---

# getUniqValuesForFilter

`getUniqValuesForFilter` is a utility function that extracts unique values for a specified field from an array of objects. It leverages the `uniq` function from the popular Lodash library to ensure uniqueness.

```ts
import uniq from "lodash.uniq";

export const getUniqValuesForFilter = <T, K extends keyof T>(
  entity: T[],
  field: K
): T[K][] => uniq(entity.map((entity) => entity[field]));
```

## Parameters
- `entity` (type: `T[]`): An array of objects where you want to extract the unique values from.
- `field` (type: `K`): The key (property name) of the objects whose unique values you want to extract.

Here, `T` represents the type of the objects within the array, and `K` is a type that extends the keys of `T`.

## Return Value
The function returns an array of unique values of type `T[K]` typed accordingly.

## Example

``` ts

import { getUniqValuesForFilter } from "filterbee";

type Clothing = {
    id: number;
    name: string;
    brand: string;
};

const clothes: Clothing[] = [
    { id: 1, name: 'Shirt', brand: 'nike' },
    { id: 2, name: 'Shorts', brand: 'adidas' },
    { id: 3, name: 'Shoes', brand: 'nike' },
    { id: 4, name: 'Cap', brand: 'decathlon' }
];

// Using getUniqValuesForFilter to get unique brands
const uniqueBrands = getUniqValuesForFilter(clothes, 'brand');

// uniqueBrands will be ['nike', 'adidas', 'decathlon']
console.log(uniqueBrands);
```