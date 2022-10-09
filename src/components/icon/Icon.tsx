import { useMemo } from "react";

import { ReactComponent as Bookmark } from "@/assets/icons/bookmark.svg";
import { ReactComponent as Mail } from "@/assets/icons/mail.svg";
import { ReactComponent as Pair } from "@/assets/icons/pair.svg";
import { ReactComponent as Search } from "@/assets/icons/search.svg";
import { ReactComponent as Star } from "@/assets/icons/star.svg";
import { ReactComponent as BackArrow } from "@/assets/icons/back-arrow.svg";
import { ReactComponent as Chevron } from "@/assets/icons/chevron.svg";

import s from "./Icon.module.scss";

export enum IconCode {
  bookmark = "bookmark",
  star = "star",
  pair = "pair",
  search = "search",
  back = "back",
  mail = "mail",
  chevron = "chevron",
}

type IconProps = {
  icon: IconCode;
};

const Icon = ({ icon }: IconProps) => {
  const getIconByCode = useMemo(() => {
    switch (icon) {
      case "bookmark":
        return <Bookmark className={s.bookmark} />;
      case "star":
        return <Star />;
      case "pair":
        return <Pair />;
      case "search":
        return <Search />;
      case "back":
        return <BackArrow />;
      case "chevron":
        return <Chevron />;
      case "mail":
        return <Mail />;
      default:
        return;
    }
  }, [icon]);

  return <>{getIconByCode}</>;
};

export default Icon;
