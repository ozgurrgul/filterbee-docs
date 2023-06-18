import {
  AppliedFiltersType,
  FilterCategoriesType,
  FilterLayoutContextProvider,
  FiltersContainer,
} from 'filterbee';
import React, { useState } from 'react';

type MyProductFilters = 'product-category' | 'product-brand';

const Demo: React.FC = () => {
  const [appliedFilters, setAppliedFilters] =
    useState<Partial<AppliedFiltersType<MyProductFilters>>>();

  const handleFilterChange = (
    newFilters: Partial<AppliedFiltersType<MyProductFilters>>,
  ) => {
    console.log('handleFilterChange, ', newFilters);
    setAppliedFilters(newFilters);
  };

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
