import Modal from 'react-modal';
import React from 'react';

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
  Divider,
  Line1,
  Line2,
  Description,
  Subtitle,
  FunctionalitiesLine1,
  FunctionalitiesLine2,
  Function,
  RentalCondWrapper,
  Condition,
  RentalButton,
  CloseIcon,
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
        {/* <Price>{onCard.rentalPrice}</Price> */}
      </InfoWrapper>
      <TagWrapper>
        <Line1>
          {city} <Divider /> {country}
          <Divider /> {`Id:${onCard.id}`}
          <Divider /> {`Year:${onCard.year}`} <Divider />
          {`Type: ${
            onCard.type.charAt(0).toUpperCase() +
            onCard.type.slice(1).toLowerCase()
          }`}{' '}
        </Line1>
        <Line2>
          {' '}
          {`Fuel Consumption: ${onCard.fuelConsumption}`} <Divider />
          {`Engine Size: ${onCard.engineSize}`}
        </Line2>
      </TagWrapper>
      <Description>{onCard.description}</Description>
      <Subtitle>Accessories and functionalities:</Subtitle>
      <FunctionalitiesLine1>
        {' '}
        {onCard.accessories.map((item, index) => (
          <React.Fragment key={item}>
            <Function>{item}</Function>
            {index !== onCard.accessories.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </FunctionalitiesLine1>
      <FunctionalitiesLine2>
        {' '}
        {onCard.functionalities.map((item, index) => (
          <React.Fragment key={item}>
            <Function>{item}</Function>
            {index !== onCard.functionalities.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </FunctionalitiesLine2>
      <Subtitle>Rental Conditions: </Subtitle>
      <RentalCondWrapper>
        {onCard.rentalConditions.split('\n').map((item, index) => {
          const parts = item.split(/(\d+)/g).filter(Boolean);

          return (
            <Condition key={index}>
              {parts.map((part, i) => {
                if (/\d+/.test(part)) {
                  return (
                    <span
                      key={i}
                      style={{
                        color: 'rgba(52, 112, 255, 1)',
                        fontWeight: 600,
                      }}
                    >
                      {part}
                    </span>
                  );
                } else {
                  return part;
                }
              })}
            </Condition>
          );
        })}
        <Condition>
          Mileage:{' '}
          <span style={{ color: 'rgba(52, 112, 255, 1)', fontWeight: 600 }}>
            {onCard.mileage.toLocaleString('en-US')}
          </span>
        </Condition>
        <Condition>
          Price:{' '}
          <span style={{ color: 'rgba(52, 112, 255, 1)', fontWeight: 600 }}>
            {onCard.rentalPrice}
          </span>
        </Condition>
      </RentalCondWrapper>

      <CloseIcon onClick={closeModal} />
      <RentalButton>
        <a
          href="tel:+380730000000"
          style={{ textDecoration: 'none', color: 'white' }}
        >
          Rental car
        </a>
      </RentalButton>
    </AutoItem>
  );
};
