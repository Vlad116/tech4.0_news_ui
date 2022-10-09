import { useEffect, useMemo, useState } from "react";
import { useAsyncFn } from "react-use";

import { getNews } from "@/services/news";

import s from "./Digest.module.scss";

enum SourceType {
  trusted = "Достоверный источник 🌱",
  untrusted = "Недостоверный источник 🧟",
  unchecked = "Непроверенный источник 🍁",
}

type DigestType = {
  filter?: string;
  query?: string;
  offset?: number;
  limit?: number;
};

const Digest = ({ query, filter, limit, offset }: DigestType) => {
  const [news, setNews] = useState([]);

  const [{ error, loading, value }, fetchNews] = useAsyncFn(
    () => getNews(limit, offset),
    [limit, offset]
  );
  console.log(error);
  console.log(loading);
  console.log(value);

  useEffect(() => {
    console.log("news");
    fetchNews();
  }, [fetchNews, limit, offset]);
  return <div className={s.root}>{}</div>;
};

Digest.defaultProps = {
  limit: 5,
  offset: 1,
};

export default Digest;
