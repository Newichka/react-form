import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";

export default function App() {
  return (
    <main>
      <Header />
      <div className="container">
        <Form />
      </div>
    </main>
  );
}
