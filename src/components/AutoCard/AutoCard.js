import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AutoItem,
  Img,
  ImgWrapper,
  InfoWrapper,
  NameWrapper,
  TagWrapper,
  LearnMoreButton,
  Year,
  Make,
  Model,
  Price,
  HeartButton,
  HeartIcon,
  Divider,
} from './AutoCard.styled';
import {
  addToFavorites,
  removeFromFavorites,
  setFavorites,
} from 'redux/autosSlice';
import { selectFavorites } from 'redux/selectors';
import { ModalAutoCard } from 'components/ModalAutoCard/ModalAutoCard';

const customStyles = {
  overlay: {
    backgroundColor: '#12141780',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    maxHeight: '95%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
  },
};

Modal.setAppElement('#root');

export const AutoCard = ({ onCard }) => {
  const dispatch = useDispatch();
  const favoritesAutos = useSelector(selectFavorites);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const favoritesFromStorage =
      JSON.parse(localStorage.getItem('favorites')) || [];
    dispatch(setFavorites(favoritesFromStorage));
  }, [dispatch]);

  const isFavorite = favoritesAutos.some(favorite => favorite.id === onCard.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(onCard));
    } else {
      dispatch(addToFavorites(onCard));
    }

    const updatedFavorites = isFavorite
      ? favoritesAutos.filter(favorite => favorite.id !== onCard.id)
      : [...favoritesAutos, onCard];
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const address = onCard.address;
  const parts = address.split(',');
  const city = parts[1].trim();
  const country = parts[2].trim();

  return (
    <AutoItem>
      <ImgWrapper>
        <HeartButton onClick={handleToggleFavorite}>
          <HeartIcon
            width="18"
            height="18"
            fill={isFavorite ? '#3470FF' : 'none'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.6301 2.45753C15.247 2.07428 14.7922 1.77026 14.2916 1.56284C13.791 1.35542 13.2545 1.24866 12.7126 1.24866C12.1707 1.24866 11.6342 1.35542 11.1336 1.56284C10.633 1.77026 10.1782 2.07428 9.79509 2.45753L9.00009 3.25253L8.20509 2.45753C7.43132 1.68376 6.38186 1.24906 5.28759 1.24906C4.19331 1.24906 3.14386 1.68376 2.37009 2.45753C1.59632 3.2313 1.16162 4.28075 1.16162 5.37503C1.16162 6.4693 1.59632 7.51876 2.37009 8.29253L3.16509 9.08753L9.00009 14.9225L14.8351 9.08753L15.6301 8.29253C16.0133 7.90946 16.3174 7.45464 16.5248 6.95404C16.7322 6.45345 16.839 5.91689 16.839 5.37503C16.839 4.83316 16.7322 4.2966 16.5248 3.79601C16.3174 3.29542 16.0133 2.84059 15.6301 2.45753Z"
              stroke="white"
              strokeOpacity="0.8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </HeartIcon>
        </HeartButton>{' '}
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
        {city} <Divider /> {country} <Divider /> {onCard.rentalCompany}{' '}
        <Divider /> {onCard.type} <Divider /> {onCard.model} <Divider />{' '}
        {onCard.id} <Divider />{' '}
        {onCard.functionalities[1].split(' ').slice(0, 2).join(' ')}
      </TagWrapper>
      <LearnMoreButton onClick={openModal}>Learn more</LearnMoreButton>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <ModalAutoCard
          onCard={onCard}
          closeModal={closeModal}
          isModalOpen={isModalOpen}
        />
      </Modal>
    </AutoItem>
  );
};
