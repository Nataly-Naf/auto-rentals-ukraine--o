import React from 'react';
import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import {
  setBrandFilter,
  setPriceFilter,
  setFromMileage,
  setToMileage,
} from 'redux/autosSlice';
import arrData from './makes.json';
import {
  FiltersWrapper,
  FilterLabel,
  SearchButton,
  FilterWrapper,
  PriceOption,
  AddWrapper,
} from './FormikForm.styled';

export const FilterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(setBrandFilter(values.brand));
    dispatch(setPriceFilter(values.price));
    dispatch(setFromMileage(values.minMileage));
    dispatch(setToMileage(values.maxMileage));

    setSubmitting(false);
    resetForm();
  };
  const BrandFieldstyles = {
    width: '224px',
    height: '48px',
    backgroundColor: '#f7f7fb',
    borderRadius: '14px',
    border: 'none',
    paddingLeft: '14px',
  };

  const PriceFieldstyles = {
    width: '125px',
    height: '48px',
    backgroundColor: '#f7f7fb',
    borderRadius: '14px',
    border: 'none',
    paddingLeft: '14px',
    paddingRight: '14px',
  };

  const MinMileageFiledstyles = {
    width: '160px',
    height: '48px',
    backgroundColor: '#f7f7fb',
    borderTopLeftRadius: '14px',
    borderBottomLeftRadius: '14px',
    border: 'none',
    paddingLeft: '14px',
    paddingRight: '14px',
  };

  const MaxMileageFiledstyles = {
    width: '160px',
    height: '48px',
    backgroundColor: '#f7f7fb',
    borderTopRightRadius: '14px',
    borderBottomRightRadius: '14px',
    border: 'none',
    paddingLeft: '14px',
    paddingRight: '14px',
    borderLeft: '1px solid rgba(138, 138, 137, 0.2)',
  };

  const prices = [];
  for (let i = 10; i <= 100; i += 10) {
    prices.push(i);
  }
  return (
    <Formik
      initialValues={{
        brand: '',
        price: '',
        minMileage: '',
        maxMileage: '',
      }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FiltersWrapper>
          <FilterWrapper>
            <FilterLabel htmlFor="brand">Car brand:</FilterLabel>
            <Field
              style={BrandFieldstyles}
              as="select"
              name="brand"
              placeholder="Enter the text"
            >
              <option value="">Enter the text</option>
              {arrData.map((brand, index) => (
                <PriceOption key={index} value={brand}>
                  {brand}
                </PriceOption>
              ))}
            </Field>
          </FilterWrapper>
          <FilterWrapper>
            <FilterLabel htmlFor="price">Price/1 hour:</FilterLabel>
            <Field style={PriceFieldstyles} as="select" name="price">
              <option value="">To $</option>
              {prices.map((price, index) => (
                <PriceOption key={index} value={price}>
                  {price}
                </PriceOption>
              ))}
            </Field>
          </FilterWrapper>
          <FilterWrapper>
            <FilterLabel htmlFor="minMileage">Car mileage/km:</FilterLabel>
            <AddWrapper>
              <Field
                style={MinMileageFiledstyles}
                type="text"
                name="minMileage"
                placeholder="From"
              />
              <Field
                style={MaxMileageFiledstyles}
                type="text"
                name="maxMileage"
                placeholder="To"
              />
            </AddWrapper>
          </FilterWrapper>
          <SearchButton type="submit" disabled={isSubmitting}>
            Search
          </SearchButton>
        </FiltersWrapper>
      )}
    </Formik>
  );
};
