import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import {
  setBrandFilter,
  setPriceFilter,
  setFromMileage,
  setToMileage,
} from 'redux/autosSlice';
import arrData from './makes.json';

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
        <Form>
          <label htmlFor="brand">Find brand:</label>
          <Field as="select" name="brand">
            <option value="">Select a brand</option>
            {arrData.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </Field>
          <label htmlFor="price">Price/1 hour:</label>
          <Field as="select" name="price">
            <option value="">Select a price</option>
            {prices.map((price, index) => (
              <option key={index} value={price}>
                {price}
              </option>
            ))}
          </Field>
          <label htmlFor="minMileage">Minimum mileage/km:</label>
          <Field type="text" name="minMileage" />
          <label htmlFor="maxMileage">Maximum mileage/km:</label>
          <Field type="text" name="maxMileage" />
          <button type="submit" disabled={isSubmitting}>
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};
