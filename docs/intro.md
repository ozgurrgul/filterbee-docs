# Intro

Filterbee is a set of components that you can use in your e-commerce pages that your building with React.js and Tailwind. It's fully typed with typescript and provides easy implementation.

## Installation

In order to install, you have to have a working react.js project. Then install dependecy:

``` bash
npm i filterbee
```

or 

``` bash
yarn add filterbee
```

Then, import dependencies (most basic functionality):

``` ts
import {
  AppliedFiltersType,
  FilterCategoriesType,
  FilterLayoutContextProvider,
  FiltersContainer,
} from 'filterbee';
```

Create your filter type. It can be many union types or just one as it's on this guide (more on this later):

``` ts
type MyProductFilters = 'product-category' | 'product-brand';
```

These type strings are just identifiers for the app and library to pass around and distinguish.


Now, lets declare our filter categories, which is basically saying what our `MyProductFilters` type that we define is going to be responsible to render on screen:


``` ts
  const categories: FilterCategoriesType<MyProductFilters> = {
    'product-category': {
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
    'product-brand': {
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

Now lets define our temporary filters variable, so we know that what user selected from our filter definition:


``` ts

const [appliedFilters, setAppliedFilters] = useState<Partial<AppliedFiltersType<MyProductFilters>>>();

const handleFilterChange = (newFilters: Partial<AppliedFiltersType<MyProductFilters>>,) => {
    console.log('handleFilterChange, ', newFilters);
    setAppliedFilters(newFilters);
};

```

Finally, lets feed these configuration to our renderer layer:

``` ts

  return (
    <FilterLayoutContextProvider appliedFilters={appliedFilters}>
      <FiltersContainer<MyProductFilters>
        onChange={handleFilterChange}
        categories={categories}
      />
    </FilterLayoutContextProvider>
  );


```

Final example with full React component (play with filters and observe `console`!):

<code src="./intro-example.tsx"></code>