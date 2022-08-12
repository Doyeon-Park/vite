import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Card title="Text">Hello, world!</Card>
        <Card title="Card within the card">
          <p>This is a card within a card.</p>
          <Card title="Inner card">
            <p>This is an inner card.</p>
          </Card>
        </Card>
        <Card title="Including image">
          <img
            src="https://loremflickr.com/1234/2345/cats?56789"
            alt="Random cat"
          />
        </Card>
      </div>
    </div>
  );
}

export default App;
