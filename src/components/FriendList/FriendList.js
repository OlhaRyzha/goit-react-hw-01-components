import PropTypes from "prop-types";
import { Card, List, Item } from './FriendList.styled';
export function FriendList({ friends }) {
  return (
    <Card>
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
    </Card>
  );
}
FriendList.propTypes = {
  transactions: PropTypes.array,
};