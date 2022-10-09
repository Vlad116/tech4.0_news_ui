import { useMemo } from "react";
import Icon, { IconCode } from "../icon";

import s from "./DigestCard.module.scss";

enum SourceType {
  trusted = "Достоверный источник 🌱",
  untrusted = "Недостоверный источник 🧟",
  unchecked = "Непроверенный источник 🍁",
}

type TagType = {
  link: string;
  value: string;
};

type DigestCardType = {
  title: string;
  content: string;
  source: string;
  date: string;
  is_trusted: boolean | null;
  short?: string | null;
  tags?: Array<TagType>; // | Array<string>
  author?: string | null;
};

const shortTextLimit = 150;

const DigestCard = ({
  title,
  content,
  source,
  short,
  author,
  date,
  is_trusted,
  tags,
}: DigestCardType) => {
  const DigestCardSourceType = useMemo(
    () =>
      is_trusted === null
        ? SourceType.unchecked
        : is_trusted === true
        ? SourceType.trusted
        : SourceType.untrusted,
    [is_trusted]
  );

  const shortText = useMemo(() => {
    return short
      ? short
      : content.length > shortTextLimit
      ? `${content.substring(0, shortTextLimit)} ...`
      : content;
  }, [short, content]);

  return (
    <div className={s.root}>
      <div className={s.root__header}>
        <span className={s.root__header_label}>{DigestCardSourceType}</span>
        <div className={s.root__header_right}>
          <span>{date}</span>
          {author && <span className={s.root__author}>{author}</span>}
        </div>
      </div>
      <h2 className={s.root__title}>{title}</h2>
      <p className={s.root__short}>{shortText}</p>
      <div className={s.root__tags}>
        {tags?.map(({ link, value }) => (
          <a href={`/${link}`}>{`#${value}`}</a>
        ))}
      </div>
      <div className={s.root__footer}>
        <div className={s.root__footer_source}>
          Читать в источнике <a href={`https://${source}`}>{source}</a>
        </div>
        <div className={s.root__footer_controls}>
          {/* <span className={s.root__star_counter}>{star__count}</span> */}
          <Icon icon={IconCode.star} />
          <Icon icon={IconCode.bookmark} />
          <Icon icon={IconCode.pair} />
        </div>
      </div>
    </div>
  );
};

export default DigestCard;
