import {
  AppliedFiltersType,
  FilterCategoriesType,
  FilterLayoutContextProvider,
  FiltersContainer,
} from 'filterbee';
import React, { useState } from 'react';
import { DemoPreviewer } from '../../components/DemoPreviewer';

type MyProductFilters = 'filter-custom-search';

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
    'filter-custom-search': {
      type: 'input',
      ui: {
        inputType: 'text',
        label: 'Search items',
      },
      title: 'My custom search  ',
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
