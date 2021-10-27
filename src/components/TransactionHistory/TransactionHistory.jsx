import s from "./TransactionHistory.module.css";
import TransactionHistoryItem from "../shared/TransactionHistoryItem";
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => {
  const list = items.map(({ id, ...props }) => {
    return <TransactionHistoryItem key={id} {...props} />;
  });
  return (
    <table className={s.transaction_history}>
      <thead className={s.head}>
        <tr className={s.row}>
          <th className={s.cell}>Type</th>
          <th className={s.cell}>Amount</th>
          <th className={s.cell}>Currency</th>
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default TransactionHistory;
