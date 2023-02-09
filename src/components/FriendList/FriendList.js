import { Card } from './FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export function FriendList({ friends }) {
  return (
    <Card>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </Card>
  );
}
