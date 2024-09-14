import React from "react";
import "./styles.css";
import Event from "./Component/Event";
import EventBinds from "./Component/EventBinding";
import ParentComponent from "./Component/ParentComponents";
import Form from "./Component/Form";
import LifeCycleA from "./Component/LifeCycleA";
import PureComp from "./Component/PureComp";
import ParentComp from "./Component/ParentCom";
import RefDemo from "./Component/RefDemo";
import FocusInput from "./Component/FocusInput";
import FRParentinput from "./Component/FRParentInput";
import Portal from "./Component/Portal";
import Hero from "./Component/Hero";
import ErrorBoundry from "./Component/ErrorBoundry";
import ClickCounter from "./Component/ClickCounter";
import HoverCounter from "./Component/HoverCounter";
import ClickCOunterTwo from "./Component/ClickCounterTwo";
import HoverCounterTwo from "./Component/HoverCounterTwo";
import Counter from "./Component/Counter";
import ComponentC from "./Component/ComponentC";
import { UserProvider } from "./Component/userContext";
import PostList from "./Component/PostList";
import Shape from "./Component/Shape";
import TileGrid from "./Shape1";
import Practice from "./Component/Practice";
import Rating from "./Component/Rating";
import { Parent } from "./Component/Parent";
import { Search } from "./Component/Search";
export const ChannelContext = React.createContext();

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello React Study</h1> */}
      {/* <Event /> */}
      {/* <EventBinds /> */}
      {/* <ParentComponent /> */}
      {/* <Form /> */}
      {/* <LifeCycleA /> */}
      {/* <PureComp /> */}
      {/* <ParentComp /> */}
      {/* <RefDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRParentinput /> */}
      {/* <Portal /> */}
      {/* <ErrorBoundry>
        <Hero hero="SuperMan" />
        <Hero hero="BatMan" />
        <Hero hero="joker" />
      </ErrorBoundry> */}
      {/* <ClickCounter name="Satish" />
      <HoverCounter /> */}
      {/* <ClickCOunterTwo />
      <HoverCounterTwo /> */}
      {/* <Counter
        render={(count, clickHandler) => (
          <ClickCOunterTwo count={count} clickHandler={clickHandler} />
        )}
      />
      <Counter
        render={(count, clickHandler) => (
          <HoverCounterTwo count={count} clickHandler={clickHandler} />
        )}
      /> */}
      {/* <UserProvider value="Satish">
        <ChannelContext.Provider value={"CodeEveluation"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserProvider> */}
      {/* <PostList /> */}
      {/* <Shape /> */}
      {/* <TileGrid /> */}
      {/* <Practice /> */}
      {/* <Rating /> */}
      {/* <Parent /> */}
      <Search />
    </div>
  );
}
