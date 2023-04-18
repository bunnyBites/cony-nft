import React from "react";
import Header from "./Header";
import Item from "./Item";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const CANISTER_ID = "rrkah-fqaaa-aaaaa-aaaaq-cai";

  return (
    <div className="App">
      <Header />
      <Item canisterId={CANISTER_ID} />
      {/* <img className="bottom-space" src={homeImage} /> */}
      <Footer />
    </div>
  );
}

export default App;
