mport { useEffect, useState } from "react";
import "./Dashboard.css";

function Dashboard({ selectedWard }) {
  // State to store backend data
  const [announcements, setAnnouncements] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [community, setCommunity] = useState([]);

  useEffect(() => {
    // Fetch all dashboard data from backend
    fetch("http://localhost:5000/api/dashboard")
      .then((res) => res.json())  // parse JSON response
      .then((data) => {
        // Set state with backend data
        setAnnouncements(data.announcements);
        setTrainings(data.trainings);
        setCommunity(data.communityActivities);
      })
      .catch((err) => console.error("Error fetching dashboard data:", err));
  }, []); // empty array = run once when component mounts

  return (
    <div className="dashboard-page">
      <h1 className="dashboard-title">📊 Citizen Dashboard – {selectedWard}</h1>

      <section className="dashboard-section">
        <h2>📢 Latest Announcements</h2>
        {announcements.map((a) => (
          <div key={a.id} className="dashboard-card">
            <h3>{a.title}</h3>
            <p>{a.description}</p>
            <div className="card-footer">
              <span className={tag ${a.status}}>{a.status}</span>
              <span className="date">📅 {a.date}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="dashboard-section">
        <h2>🧑‍🏫 Skill & Training Programs</h2>
        {trainings.map((t) => (
          <div key={t.id} className="dashboard-card">
            <h3>{t.title}</h3>
            <p>{t.description}</p>
            <div className="card-footer">
              <span className={tag ${t.status}}>{t.status}</span>
              <span className="date">📅 {t.date}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="dashboard-section">
        <h2>🤝 Community & Empowerment Activities</h2>
        {community.map((c) => (
          <div key={c.id} className="dashboard-card">
            <h3>{c.title}</h3>
            <p>{c.description}</p>
            <div className="card-footer">
              <span className={tag ${c.status}}>{c.status}</span>
              <span className="date">📅 {c.date}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Dashboard;
