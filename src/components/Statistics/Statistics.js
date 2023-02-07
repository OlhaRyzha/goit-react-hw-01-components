import PropTypes from "prop-types";
import { Card, CardName, List, Item } from './Statistics.styled';

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
export function Statistics({ title, stats }) {
  return (
    <Card>
      <CardName>{title}</CardName>
      <List>
        {stats.map(stat => (
          <Item
            style={{
              backgroundColor: generateColor(),
            }}
            key={stat.id}
          >
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </Item>
        ))}
      </List>
    </Card>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};