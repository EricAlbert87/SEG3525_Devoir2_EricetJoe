import React, { useState } from 'react';
import './ReservationForm.css';

function ReservationForm() {
  const [name, setName] = useState('');
  const [service, setService] = useState('Fitting de bâtons');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Merci ${name}, votre rendez-vous pour un(e) ${service} est enregistré pour le ${date}.`);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Nom complet</label>
        <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} required />
      </div>

      <div className="mb-3">
        <label htmlFor="service" className="form-label">Service désiré</label>
        <select className="form-select" id="service" value={service} onChange={e => setService(e.target.value)}>
          <option>Fitting de bâtons</option>
          <option>Réparation d’équipement</option>
          <option>Analyse de swing</option>
          <option>Conseil d’achat personnalisé</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="date" className="form-label">Date de rendez-vous</label>
        <input type="date" className="form-control" id="date" value={date} onChange={e => setDate(e.target.value)} required />
      </div>

      <button type="submit" className="btn btn-custom">Réserver</button>
    </form>
  );
}

export default ReservationForm;
