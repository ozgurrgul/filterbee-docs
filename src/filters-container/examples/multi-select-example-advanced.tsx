import {
  AppliedFiltersType,
  FilterCategoriesType,
  FilterLayoutContextProvider,
  FiltersContainer,
} from 'filterbee';
import React, { useState } from 'react';
import { DemoPreviewer } from '../../components/DemoPreviewer';

type MyProductFilters = 'filter-style-types' | 'filter-condition';

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
    'filter-style-types': {
      type: 'multi-select',
      options: [
        {
          optionId: 'victorian',
          title: 'Victorian',
        },
        {
          optionId: 'retro',
          title: 'Retro',
        },
        {
          optionId: 'plastic',
          title: 'Plastic',
        },
        {
          optionId: 'rustic',
          title: 'Rustic',
        },
        {
          optionId: 'wooden',
          title: 'Wood',
        },
        {
          optionId: 'other',
          title: 'Other',
        },
      ],
      title: 'Style of product',
      ui: {
        filterable: true,
        showAll: {
          hideText: 'Hide',
          showAlltext: 'Show more',
          threshold: 3,
        },
      },
    },
    'filter-condition': {
      type: 'multi-select',
      options: [
        {
          optionId: 'all',
          title: 'All',
        },
        {
          optionId: 'used',
          title: 'Used',
        },
        {
          optionId: 'new',
          title: 'Brand new',
        },
      ],
      title: 'Condition',
      ui: {
        columns: 2,
      },
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
