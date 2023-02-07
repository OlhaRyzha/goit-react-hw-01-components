import PropTypes from "prop-types";
import {
  Card,
  CardContainer,
  CardImg,
  CardName,
  List,
  Item,
} from './Profile.styled';

export function Profile({
  username,
  tag,
  location,
  avatar,
  stats,
}) {
  return (
<Card >
  <CardContainer >
    <CardImg
      src={avatar}
      alt={username}
    />
    <CardName>{username}</CardName>
    <p>@{tag}</p>
    <p>{location}</p>
  </CardContainer>

  <List >
    <Item>
      <span >Followers</span>
      <span >{stats.followers}</span>
    </Item>
    <Item>
      <span >Views</span>
      <span >{stats.views}</span>
    </Item>
    <Item>
      <span >Likes</span>
      <span >{stats.likes}</span>
    </Item>
  </List>
</Card>
  );
}

Profile.propTypes = {
 username: PropTypes.string,
 tag: PropTypes.string.isRequired,
 location: PropTypes.string.isRequired,
 avatar: PropTypes.string.isRequired,
 stats: PropTypes.object.isRequired,
};