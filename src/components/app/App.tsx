import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Icon, { IconCode } from "../icon";
import Avatar from "../avatar";
import Message from "../message";
import SelectTag from "../select-tag";
import SelectTagGroup from "../select-tag-group";
import DigestCard from "../digest-card";
import Digest from "../digest";
// import About from "./About";
// import Home from "./Home";

const App: React.FC = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    <p className="yard">YARD</p>
    <p className="lg">light</p>
    <p className="reg">regular</p>
    <p className="d">medium</p>
    <p className="bold">bold</p>
    <Icon icon={IconCode.bookmark} />
    <Icon icon={IconCode.mail} />
    <Icon icon={IconCode.pair} />
    <Icon icon={IconCode.search} />
    <Icon icon={IconCode.star} />
    <Icon icon={IconCode.back} />
    <p className="yard">...</p>
    <Avatar />
    <Avatar
      img={
        "https://crypto.ru/wp-content/plugins/q-auth/assets/img/default-user.png"
      }
    />
    <Message text="Привет, я Ватабэ - персональный помощник в приложении Yard. Я помогу Вам подобрать идеальную ленту новостей, но придётся ответить на пару вопросов." />
    <Message text="Выберите, какая роль вам ближе всего?" />
    <SelectTag
      value="dir"
      label="Директор"
      onClick={(e: any) => {
        console.log(e);
        console.log(this);
      }}
    />
    <SelectTag value="buh" label="Бухгалтер" checked />
    <SelectTagGroup onChange={(value: string) => console.log(value)}>
      <SelectTag value="dir" label="Директор" />
      <SelectTag value="buh" label="Бухгалтер" />
    </SelectTagGroup>
    <SelectTagGroup
      isMultiSelect
      onChange={(value: string) => console.log(value)}
      onApply={(value: string[]) => console.log(value)}
    >
      <SelectTag value="busines" label="Бизнес" />
      <SelectTag value="tech" label="Технологии и медиа" />
      <SelectTag value="invest" label="Инвестиции" />
      <SelectTag value="home" label="Недвижимость" />
      <SelectTag value="finance" label="Экономика и финанцы" />
      <SelectTag value="politic" label="Политика и закон" />
    </SelectTagGroup>
    <DigestCard
      title="От предпринимательского одиночества к созданию своего окружения и социального проекта для детей инвалидов "
      content="Как и зачем я создаю новый стартап — сообщество для предпринимателей и руководителей."
      author={"Ivan Zamyatin"}
      tags={[
        { link: "#tribuna", value: "tribuna" },
        { link: "#startup", value: "startup" },
      ]}
      source={"tribuna.ru"}
      is_trusted={null}
      date={"2022/10/07"}
    />
    <Digest limit={6} />
    <Routes>
      <Route path="/about">{/* <About /> */}</Route>
      <Route path="/">{/* <Home /> */}</Route>
    </Routes>
  </Router>
);

export default App;
