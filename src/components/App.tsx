import React from "react";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul className={"main-nav"}>
            <li>
              <div className="logo">nunc UI</div>
            </li>
            <li>
              <ul className={"flex"}>
                <li>Pages</li>
                <li>Account</li>
                <li>Blocks</li>
                <li>Docks</li>
              </ul>
            </li>
            <li>Buy Now</li>
          </ul>
        </nav>
        <div className={"hero"}>
          <h1>nunc UI</h1>
          <h2>Design System Pro</h2>
          <p>Simple and innovative</p>
        </div>
        <div className="description">
          <section>
            <h1>300+</h1>
            <h2>Coded elements</h2>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </section>
          <section>
            <h1>100+</h1>
            <h2>Design Blocks</h2>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </section>{" "}
          <section>
            <h1>10+</h1>
            <h2>Pages</h2>
            <p>Lorem ipsum dolor sit amet, consectetur </p>
          </section>
        </div>
      </header>
      <main>
        <div className={"lg:flex m-auto w-80"}>
          <section className={"p-30 bg-blue-300"}>1</section>
          <section className={"p-30 bg-green-300"}>
              <h1>Feel the Next UI System</h1>
              <a href="">Start with headers</a>
          </section>
        </div>
        {/*<div>*/}

        {/*</div>*/}
      </main>
    </div>
  );
}

export default App;
