import styled from 'styled-components';
import { Form, Field } from 'formik';
import Select from 'react-select';

export const FiltersWrapper = styled(Form)`
  display: flex;
  width: 859px;
  gap: 18px;
  margin-left: auto;
  margin-right: auto;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FilterMileageWrapper = styled.div`
  display: flex;
`;
export const FilterLabel = styled.label`
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 8px;
`;
export const FilterBrandField = styled(Field)`
  width: 224px;
  height: 48px;
  background-color: #f7f7fb;
  border-radius: 14px;
  border: none;
`;
export const SearchButton = styled.button`
  width: 136px;
  height: 48px;
  background-color: #3470ff;
  padding: 14, 44;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  border-radius: 12px;
  border: none;
  align-self: flex-end;

  &:hover {
    background-color: #0b44cd;
  }
`;
export const PriceOption = styled.option`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #12141733;
  opacity: 0.2;
  //   margin-bottom: 8px;
  //   padding-left: 14px;
  //   margn-top: 8px;
`;

export const AddWrapper = styled.div`
  display: flex;
`;

export const PlaceholderText = styled.span`
  color: rgba(18, 20, 23, 1);
`;
export const BrandSelect = styled(Select)`
  .react-select__control {
    width: 224px;
    height: 48px;
    background-color: #f7f7fb;
    border-radius: 14px;
    border: none;
    padding-left: 14px;
  }

  .react-select__placeholder {
    color: #808080;
  }

  .react-select__menu {
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;
