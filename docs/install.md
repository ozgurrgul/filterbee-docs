## Installation

__Filterbee__ is a set of components that you can use in your e-commerce pages that your building with __React.js__ and __Shadcn/ui__ components (wrapper around `RadixUI` and `Tailwindcss`). It's fully typed with <u>typescript</u> and provides easy implementation.


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

For styling, import the needed CSS file from node_modules:

``` bash
import "filterbee/dist/style.css"
```
or 
``` bash
import "~filterbee/dist/style.css"
```

:::info
If you don't have access to side loading CSS from `node_modules`, you can also copy & paste the generated `node_modules/filterbee/dist/style.css` file to your project, and import directly from local file.
:::


Declare the needed CSS variables:

```css

:root {
    --background: 0 0% 100%;
    --foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 47.4% 11.2%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 47.4% 11.2%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;

    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 100% 50%;
    --destructive-foreground: 210 40% 98%;

    --ring: 215 20.2% 65.1%;

    --radius: 0.5rem;
    --font-sans: Arial, Helvetica, sans-serif;
  }

  .dark {
    --background: 224 71% 4%;
    --foreground: 213 31% 91%;

    --muted: 223 47% 11%;
    --muted-foreground: 215.4 16.3% 56.9%;

    --popover: 224 71% 4%;
    --popover-foreground: 215 20.2% 65.1%;

    --card: 224 71% 4%;
    --card-foreground: 213 31% 91%;

    --border: 216 34% 17%;
    --input: 216 34% 17%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 1.2%;

    --secondary: 222.2 47.4% 11.2%;
    --secondary-foreground: 210 40% 98%;

    --accent: 216 34% 17%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 63% 31%;
    --destructive-foreground: 210 40% 98%;

    --ring: 216 34% 17%;

    --radius: 0.5rem;
    --font-sans: Arial, Helvetica, sans-serif;
  }

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

<code src="./install-example.tsx"></code>