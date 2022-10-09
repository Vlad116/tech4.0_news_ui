import s from "./Avatar.module.scss";

type AvatarProps = {
  img?: string;
};

const Avatar = ({ img }: AvatarProps) => {
  return (
    <div className={s.root}>
      <img src={img} alt="" className={s.root__img} />
    </div>
  );
};

export default Avatar;
