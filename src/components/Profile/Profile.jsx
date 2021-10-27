import s from "./Profile.module.css";
import ProfileStatItem from "../shared/ProfileStatItem";
import PropTypes from "prop-types";

const Profile = ({ name, tag, location, avatar, stats }) => {
  const list = Object.entries(stats).map(([key, value]) => {
    return <ProfileStatItem key={key} title={key} amount={value} />;
  });
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={name} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>{list}</ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    Followers: PropTypes.number.isRequired,
    Views: PropTypes.number.isRequired,
    Likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
