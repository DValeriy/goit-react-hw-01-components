import PropTypes from "prop-types";
import s from "../Profile/Profile.module.css";

const ProfileStatItem = ({ title, amount }) => (
  <li className={s.item}>
    <span className={s.label}>{title}</span>
    <span className={s.quantity}>{amount}</span>
  </li>
);

ProfileStatItem.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default ProfileStatItem;
