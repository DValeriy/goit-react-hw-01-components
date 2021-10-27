import s from "./FriendList.module.css";
import FriendListItem from "../shared/FriendListItem";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  const list = friends.map(({ id, ...props }) => {
    return <FriendListItem key={id} {...props} />;
  });
  return <ul className={s.friend_list}>{list}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};

export default FriendList;
