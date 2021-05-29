import "./App.css";

import Nav from "./component/nav/Nav";
import Clock from "./component/clock/Clock";
import Gallery from "./container/gallery/Gallery";
import RedCarpet from "./component/gallery-image/RedCarpet";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Clock />
      <Gallery />
      <RedCarpet />
    </div>
  );
};

export default App;
