import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {pizzaData.length > 0 ? (
        <ul className="pizzas">
          {pizzaData.map(({ name, ingredients, photoName, price }) => (
            <Pizza
              name={name}
              ingredient={ingredients}
              photoName={photoName}
              price={
                <>
                  $<strong>{price}</strong>
                </>
              }
              key={name}
            />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later 😉</p>
      )}
    </main>
  );
}

function Pizza({ name, ingredient, photoName, price }) {
  return (
    <li className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredient}</p>
        <span>{price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const dteNow = new Date().getTime();
  const openHour = new Date().setHours(2, 30, 0);
  const closeHour = new Date().setHours(23, 30, 0);

  const isOpen = dteNow >= openHour && dteNow <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We're open until&nbsp;
            <strong>
              {new Date(closeHour).toLocaleTimeString().slice(0, 5)}
            </strong>
            . Come visit us or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p className="closed">
          We're happy to welcome you between&nbsp;
          <strong>
            {new Date(openHour).toLocaleTimeString().slice(0, 5)}
          </strong>{" "}
          and{" "}
          <strong>
            {new Date(closeHour).toLocaleTimeString().slice(0, 5)}
          </strong>{" "}
          😊
        </p>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
