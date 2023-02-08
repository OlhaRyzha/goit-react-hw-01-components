import PropTypes from 'prop-types';
import { List, Item } from './FriendListItem.styled';

export function FriendListItem({ friends }) {
  return (
    <List>
      {friends.map(friend => (
        <Item key={friend.id}>
          <span
            style={
              friend.isOnline
                ? {
                    width: '10px',
                    height: '10px',
                    backgroundColor: 'green',
                    borderRadius: '50%',
                  }
                : {
                    width: '10px',
                    height: '10px',
                    backgroundColor: 'red',
                    borderRadius: '50%',
                  }
            }
          ></span>
          <img src={friend.avatar} alt="User avatar" width="48" />
          <p>{friend.name}</p>
        </Item>
      ))}
    </List>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
