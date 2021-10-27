import { randomColor } from "../../function";
import s from "../Statistics/Statistics.module.css";
import PropTypes from "prop-types";
const StatisticsListItem = ({ label, percentage }) => {
  const style = {
    backgroundColor: randomColor(),
  };
  return (
    <li className={s.item} style={style}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticsListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsListItem;
