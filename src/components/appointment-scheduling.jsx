// components/AppointmentScheduling.js

import { useState } from 'react';

const AppointmentScheduling = () => {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [appointments, setAppointments] = useState([]);

  const handleSchedule = (e) => {
    e.preventDefault();
    const newAppointment = { date: appointmentDate, time: appointmentTime };
    setAppointments([...appointments, newAppointment]);
    setAppointmentDate('');
    setAppointmentTime('');
  };

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Schedule Appointments</h2>
      <form onSubmit={handleSchedule} className="space-y-4 mb-6">
        <div>
          <input
            type="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg w-full"
            required
          />
        </div>
        <div>
          <input
            type="time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg w-full"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Schedule Appointment
          </button>
        </div>
      </form>

      {/* Display Scheduled Appointments */}
      <div>
        <h3 className="text-lg font-semibold">Scheduled Appointments</h3>
        <ul className="space-y-2 mt-4">
          {appointments.map((app, index) => (
            <li key={index} className="bg-gray-100 p-2 rounded-lg">
              <span>{app.date} at {app.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AppointmentScheduling;
