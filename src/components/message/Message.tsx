import s from "./Message.module.scss";

type MessageProps = {
  text: string;
};

const Message = ({ text }: MessageProps) => {
  return <>{text && <div className={s.root}>{text}</div>}</>;
};

export default Message;
