import {
  AppliedFiltersType,
  FilterCategoriesType,
  FilterCategoryToEntityPropertMap,
  FilterLayout,
  FilterLayoutContextProvider,
  SimpleProductLayout,
  getFilteredEntities,
  getUniqValuesForFilter,
} from 'filterbee';
import React, { useEffect, useState } from 'react';

type MyProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type MyProductFilters =
  | 'product-category'
  | 'product-brand'
  | 'product-price'
  | 'product-rating'
  | 'product-id-test';

const Demo: React.FC = (args) => {
  const [appliedFilters, setAppliedFilters] = useState<
    Partial<AppliedFiltersType<MyProductFilters>>
  >({
    'product-brand': ['Apple', 'Samsung', 'Huawei'],
  });

  const [products, setProducts] = useState<MyProduct[]>([]);
  const [productsLoading, setProductsLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.products);
        setProductsLoading(false);
      });
  }, []);

  // Tip: You can use `getUniqValuesForFilter` to extract uniq values of property
  const uniqProductCategories = getUniqValuesForFilter(products, 'category');
  const uniqProductBrands = getUniqValuesForFilter(products, 'brand');

  const handleFilterChange = (
    newFilters: Partial<AppliedFiltersType<MyProductFilters>>,
  ) => {
    console.log('handleFilterChange, ', newFilters);
    setAppliedFilters(newFilters);
  };

  const categories: FilterCategoriesType<MyProductFilters> = {
    'product-brand': {
      type: 'multi-select',
      options: uniqProductBrands.map((productBrand) => ({
        optionId: productBrand,
        title: productBrand,
      })),
      title: 'Brand',
      ui: {
        filterable: true,
        loading: productsLoading,
        showAll: {
          showAlltext: 'Show more',
          hideText: 'Hide',
          threshold: 5,
        },
      },
    },
    'product-category': {
      type: 'multi-select',
      options: uniqProductCategories.map((productCategory) => ({
        optionId: productCategory,
        title: productCategory,
      })),
      title: 'Categories',
      ui: {
        filterable: true,
        loading: productsLoading,
      },
    },
    'product-price': {
      type: 'range',
      options: {
        min: {
          title: 'Min price',
        },
        max: {
          title: 'Max price',
        },
      },
      title: 'Price',
      ui: {
        loading: productsLoading,
      },
    },
    'product-id-test': {
      type: 'radio',
      options: [
        { optionId: '1', title: 'Iphone 9 filter only' },
        { optionId: '2', title: 'iPhone X filter only' },
      ],
      title: 'Singular selection',
      ui: {
        loading: productsLoading,
      },
    },
    'product-rating': {
      type: 'rating',
      title: 'Rating',
      ui: {
        amountOfStars: 4,
        loading: productsLoading,
      },
    },
  };

  const filterCategoryToEntityPropertMap: FilterCategoryToEntityPropertMap<
    MyProduct,
    MyProductFilters
  > = {
    'product-category': 'category',
    'product-brand': 'brand',
    'product-price': 'price',
    'product-id-test': 'id',
    'product-rating': 'rating',
  };

  const filteredEntities = getFilteredEntities<MyProduct, MyProductFilters>({
    entities: products,
    filterCategories: categories,
    appliedFilters,
    filterCategoryToEntityPropertMap,
  });

  return (
    <FilterLayoutContextProvider appliedFilters={appliedFilters}>
      <FilterLayout<MyProductFilters>
        {...args}
        onChange={handleFilterChange}
        categories={categories}
        i18n={{
          buttons: {
            apply: 'Apply',
            cancel: 'Exit',
            filters: 'Filters',
          },
        }}
      >
        <div className="p-6">
          <pre>{JSON.stringify(appliedFilters, null, 4)}</pre>
          <SimpleProductLayout
            products={filteredEntities.map((p) => ({
              id: p.id,
              title: p.title,
              description: p.description,
              image: p.thumbnail,
              price: p.price,
              rating: p.rating,
            }))}
          />
        </div>
      </FilterLayout>
    </FilterLayoutContextProvider>
  );
};

export default Demo;
