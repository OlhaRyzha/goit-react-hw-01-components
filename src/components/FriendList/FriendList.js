import { Card } from './FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import friends from 'data/friends.json';

export function FriendList() {
  return (
    <Card>
      <FriendListItem friends={friends} />
    </Card>
  );
}
