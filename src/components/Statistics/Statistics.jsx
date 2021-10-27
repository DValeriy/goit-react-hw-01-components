import s from "./Statistics.module.css";
import StatisticsListItem from "../shared/StatisticsListItem";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  const list = stats.map(({ id, ...props }) => {
    return <StatisticsListItem key={id} {...props} />;
  });
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.stat_list}>{list}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Statistics;
