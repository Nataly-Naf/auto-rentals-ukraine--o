import styled from 'styled-components';

export const AutoItem = styled.div`
  position: relative;
  z-index: 1000;
  background-color: blue;
  width: 541px;
  min-height: 752px;
  border-radius: 24px;
`;
export const ImgWrapper = styled.div`
  width: 461;
  height: 248;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 14px;
`;
export const Img = styled.img`
  width: 100%;
  min-height: 268px;
  display: block;
  object-fit: cover;
  overflow: hidden;
  object-fit: cover;
`;

export const InfoWrapper = styled.div`
  width: 274px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const NameWrapper = styled.div`
  display: flex;
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
  color: #12141780;
`;

export const LearnMoreButton = styled.button`
  background-color: #3470ff;
  color: #ffffff;
  width: 274px;
  height: 44px;

  padding: 12px, 99px, 12px, 99px;
  border-radius: 12px;
  border: none;

  &:hover {
    background-color: #0b44cd;
  }
`;

export const Year = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 2px;
`;

export const Make = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0em;
`;
export const Model = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  margin-left: 4px;
  color: #3470ff;
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

export const HeartButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;
