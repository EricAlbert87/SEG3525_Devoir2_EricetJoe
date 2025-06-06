import './App.css';
import ReservationForm from './components/ReservationForm';

function App() {
  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Réserver un service GolfPro</h1>
      <p className="text-center">Réservez un fitting, une analyse de swing ou toute autre consultation spécialisée.</p>
      <ReservationForm />
    </div>
  );
}

export default App;
