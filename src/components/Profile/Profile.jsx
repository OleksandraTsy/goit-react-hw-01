import css from './Profile.module.css'

const Profile = ({name, tag, location, image, stats}) => {
    return (
        <div className={css.box}>
            <div className={css.post}>
                <img className={css.avatar} src={image} alt="User avatar" />
                <p className={css.name}>{name}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>
            <ul className={css.list}>
                <li>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
};

export default Profile