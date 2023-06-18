import {
  AppliedFiltersType,
  FilterCategoriesType,
  FilterLayoutContextProvider,
  FiltersContainer,
} from 'filterbee';
import React, { useState } from 'react';
import { DemoPreviewer } from '../../components/DemoPreviewer';

type MyProductFilters = 'product-condition' | 'product-style';

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
    'product-condition': {
      type: 'radio',
      options: [
        {
          optionId: 'used',
          title: 'Used',
        },
        {
          optionId: 'new',
          title: 'Brand new',
        },
      ],
      title: 'Product condition',
      ui: {
        loading: true,
      },
    },
    'product-style': {
      type: 'radio',
      options: [
        {
          optionId: 'black',
          title: 'Black',
        },
        {
          optionId: 'white',
          title: 'White',
        },
      ],
      title: 'Color',
    },
  };

  return (
    <DemoPreviewer json={appliedFilters}>
      <FilterLayoutContextProvider appliedFilters={appliedFilters}>
        <FiltersContainer<MyProductFilters>
          onChange={handleFilterChange}
          categories={categories}
        />
      </FilterLayoutContextProvider>
    </DemoPreviewer>
  );
};

export default Demo;
