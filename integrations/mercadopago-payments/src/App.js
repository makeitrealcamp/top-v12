import MercadoPagoForm from "./components/MercadoPagoForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>pagar con mercado pago</div>
        <div class="cho-container"></div>
        <MercadoPagoForm />
      </header>
    </div>
  );
}

export default App;
