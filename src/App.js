import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Counter from "./components/counter";
import LoginForm from "./components/loginForm";
import ChargeCalculator from "./components/phoneChargeCalculator";
import TodoApp from "./components/todoApp";
import NavigationBar from "./components/navbar";
import JumboTron from "./components/jumbotron";
import MyToastComponent from "./components/toast";
import Alerts from "./components/alerts";
import Popovers from "./components/popovers";
import Spinners from "./components/spinners";

function App() {
  return (
    <div className="App">
      <Carousel>
        <Carousel.Item interval={5000} className="carousel-padding">
          <Counter />
          <Carousel.Caption>
            <h3>Counter</h3>
            <p>Increase or Decrease the value</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000} className="carousel-padding">
          <LoginForm />
          <Carousel.Caption>
            <h3>Form</h3>
            <p>
              A Basic Register Form and Modal (it will display when you submit)
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000} className="carousel-padding">
          <TodoApp />
          <Carousel.Caption>
            <h3>Todo List</h3>
            <p>Storage your tasks</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000} className="carousel-padding">
          <ChargeCalculator />
          <Carousel.Caption>
            <h3>Phone Charge Calculator</h3>
            <p>ProgressBar Implementation</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000} className="carousel-padding">
          <NavigationBar />
          <Carousel.Caption>
            <h3>Navbar</h3>
            <p>A navbar design that may be usable in websites.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000} className="carousel-padding">
          <JumboTron />
          <Carousel.Caption>
            <h3>Jumbotron</h3>
            <p>A Jumbotron design that may be usable in websites.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000} className="carousel-padding">
          <MyToastComponent />
          <Carousel.Caption>
            <h3>Toast</h3>
            <p>A Toast Message (Elapsed Minute refreshes in every minute)</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000} className="carousel-padding">
          <Alerts />
          <Carousel.Caption>
            <h3>Alerts</h3>
            <p>Alert Messages</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000} className="carousel-padding">
          <Popovers />
          <Carousel.Caption>
            <h3>Popovers</h3>
            <p>
              It is similar to a tooltip but it is more detailed. <br /> The
              text above is taken from{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.sciencedirect.com/science/article/abs/pii/S0047248404000521?casa_token=1iHJA8JCjPoAAAAA:zA7JUlzKThmiTrZI1SQhwUxtBi8L-QdJWmg8EZB6OeoYyH2V93FNFihXuFVqaU-NBst0g8xvyQ"
              >
                <span style={{ color: "#3ca1c3" }}>here</span>
              </a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000} className="carousel-padding">
          <Spinners />
          <Carousel.Caption>
            <h3>Spinners</h3>
            <p>Animated Loading Icons</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
