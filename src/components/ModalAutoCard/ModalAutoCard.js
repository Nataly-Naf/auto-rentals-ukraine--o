import Modal from 'react-modal';

import {
  AutoItem,
  Img,
  ImgWrapper,
  InfoWrapper,
  NameWrapper,
  TagWrapper,
  Year,
  Make,
  Model,
  Price,
} from './ModalAutoCard.styled';

Modal.setAppElement('#root');

export const ModalAutoCard = ({ onCard, closeModal, isModalOpen }) => {
  const address = onCard.address;
  const parts = address.split(',');
  const city = parts[1].trim();
  const country = parts[2].trim();

  return (
    <AutoItem onClick={e => e.stopPropagation()}>
      <ImgWrapper>
        <Img src={onCard.img} alt={onCard.tags} />
      </ImgWrapper>
      <InfoWrapper>
        <NameWrapper>
          <Make>{onCard.make} </Make>
          <Model>{onCard.model}, </Model>
          <Year>{onCard.year}</Year>
        </NameWrapper>
        <Price>{onCard.rentalPrice}</Price>
      </InfoWrapper>
      <TagWrapper>
        {city} | {country} | {onCard.rentalCompany} | {onCard.rentalCompany} |
        {onCard.rentalCompany} | {onCard.model} | {onCard.id} |{' '}
        {onCard.functionalities[0]}
      </TagWrapper>
      <p>Accessories and functionalities {onCard.functionalities}</p>
      <p>Rental Conditions: {onCard.rentalConditions}</p>
      <p>Mileage: {onCard.mileage}</p>
      <p>Rental Price: {onCard.rentalPrice}</p>
      <button onClick={closeModal}>Close Modal</button>
    </AutoItem>
  );
};
