import {
  AppliedFiltersType,
  FilterCategoriesType,
  FilterLayoutContextProvider,
  FiltersContainer,
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

const Demo: React.FC = () => {
  const [appliedFilters, setAppliedFilters] = useState<
    Partial<AppliedFiltersType<MyProductFilters>>
  >({
    'product-brand': ['Apple', 'Samsung', 'Huawei', 'Golden'],
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

  const uniqProductCategories = getUniqValuesForFilter(products, 'category');
  const uniqProductBrands = getUniqValuesForFilter(products, 'brand');

  const handleFilterChange = (
    newFilters: Partial<AppliedFiltersType<MyProductFilters>>,
  ) => {
    console.log('handleFilterChange, ', newFilters);
    setAppliedFilters(newFilters);
  };

  const categories: FilterCategoriesType<MyProductFilters> = {
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

  return (
    <FilterLayoutContextProvider appliedFilters={appliedFilters}>
      <FiltersContainer<MyProductFilters>
        onChange={handleFilterChange}
        categories={categories}
      />
    </FilterLayoutContextProvider>
  );
};

export default Demo;
