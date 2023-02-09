import PropTypes from 'prop-types';
import { Item } from './FriendListItem.styled';

export function FriendListItem({ friend }) {
  const { isOnline, name, avatar } = friend;

  return (
    <Item>
      <span
        style={{
          width: '10px',
          height: '10px',
          backgroundColor: isOnline ? 'green' : 'red',
          borderRadius: '50%',
        }}
      ></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Item>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
