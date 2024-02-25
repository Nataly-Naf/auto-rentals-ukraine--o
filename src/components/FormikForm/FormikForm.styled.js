import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FiltersWrapper = styled(Form)`
  display: flex;
  width: 859px;
  gap: 18px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  margin-top: 50px;
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
  background-color: var(--accent-color);
  padding: 14, 44;
  font-size: 14px;
  font-weight: 600;
  color: var(--main-light-font-color);
  border-radius: 12px;
  border: none;
  align-self: flex-end;
  transition: all var(--transition-main);

  &:hover {
    background-color: var(--hover-color);
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
`;

export const AddWrapper = styled.div`
  display: flex;
`;

export const PlaceholderText = styled.option`
  color: rgba(18, 20, 23, 1);
  font-size: 18px;
  font-weight: 500;
`;
