import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';

export const AutoItem = styled.div`
  position: relative;
  z-index: 1000;
  width: 541px;
  border-radius: 24px;
  padding: 40px;
  content-box: border-box;
`;
export const ImgWrapper = styled.div`
  width: 461px;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  height: 248px;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 14px;
`;
export const Img = styled.img`
  width: 461px;
  min-height: 268px;
  display: block;
  object-fit: cover;
  overflow: hidden;
  object-fit: cover;
`;

export const InfoWrapper = styled.div`
  // width: 274px;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // margin-bottom: 8px;
`;

export const NameWrapper = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

export const TagWrapper = styled.div`
  display: flex;
  margin-bottom: 28px;
  font-family: Manrope;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--main-dark-font-color);
  opacity: 0.5;
  flex-direction: column;
  margin-bottom: 14px;
`;

export const Divider = styled.div`
  width: 0px;
  height: 16px;
  border: 1px solid rgba(18, 20, 23, 0.1);
`;
export const Line1 = styled.div`
  display: flex;
  margin-bottom: 4px;
  gap: 6px;
`;
export const Line2 = styled.div`
  display: flex;
  margin-bottom: 4px;
  gap: 6px;
`;

export const Year = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 2px;
`;

export const Make = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0em;
`;
export const Model = styled.p`
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
  letter-spacing: 0em;
  margin-left: 4px;
  color: var(--accent-color);
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 24px;
`;

export const Subtitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`;
export const FunctionalitiesLine1 = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 6px;
  row-gap: 4px;
  flex-wrap: wrap;
`;
export const FunctionalitiesLine2 = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 24px;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 4px;
`;
export const Function = styled.span`
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
`;

export const RentalCondWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

export const Condition = styled.p`
  font-size: 12px;
  border: 1px solid rgba(249, 249, 249, 1);
  padding: 7px 14px;
  border-radius: 25px;

  background-color: rgba(249, 249, 249, 1);
`;
export const CloseBtn = styled.button`
  position: absolute;

  z-index: 10000;
  width: 24px;
  height: 24px;
  top: 16px;
  right: 20px;
  border: none;
  background: none;
  cursor: pointer;
  &:hover {
    fill: var(--accent-color);
  }
`;

export const RentalButton = styled.button`
  background-color: var(--accent-color);
  color: white;
  border: none;

  padding: 12px 50px;
  border-radius: 12px;
  transition: var(--transition-main);

  &:hover {
    background-color: var(--hover-color);
  }
`;

export const CloseIcon = styled(IoClose)`
  stroke: var(--main-dark-font-color);
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;

  transition: all var(--transition-main);

  &:hover {
    transform: rotate(90deg);
    color: var(--accent-color);
  }
`;
