import "./Header.css";
import reactLogo from "../assets/react.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1>React Starter</h1>
    </header>
  );
}
