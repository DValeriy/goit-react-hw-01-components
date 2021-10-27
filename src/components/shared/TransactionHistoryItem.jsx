import PropTypes from "prop-types";
import s from "../TransactionHistory/TransactionHistory.module.css";

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr className={s.row}>
      <td className={s.cell}>{type}</td>
      <td className={s.cell}>{amount}</td>
      <td className={s.cell}>{currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
export default TransactionHistoryItem;
