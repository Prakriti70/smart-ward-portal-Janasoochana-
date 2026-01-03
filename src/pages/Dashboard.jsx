import "./Dashboard.css";

function Dashboard({ selectedWard }) {
  return (
    <div className="dashboard-page">
      {/* Header */}
      <h1 className="dashboard-title">
        📊 Citizen Dashboard – {selectedWard}
      </h1>

      <p className="dashboard-intro">
        This dashboard provides updates on ward-level programs, training
        initiatives, and community activities conducted by the local government
        for citizen empowerment and development.
      </p>

      {/* Announcements */}
      <section className="dashboard-section">
        <h2>📢 Latest Announcements</h2>

        <div className="dashboard-card">
          <h3>Ward Office Digital Service Training</h3>
          <p>
            Free hands-on training to help citizens understand and use online
            ward services, digital forms, and document guidelines.
          </p>
          <div className="card-footer">
            <span className="tag upcoming">Upcoming</span>
            <span className="date">📅 Jan 15 – Jan 17</span>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Senior Citizen Health Camp</h3>
          <p>
            A free health check-up camp for senior citizens, organized in
            collaboration with the local health post.
          </p>
          <div className="card-footer">
            <span className="tag ongoing">Ongoing</span>
            <span className="date">📅 Jan 10 – Jan 12</span>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="dashboard-section">
        <h2>🧑‍🏫 Skill & Training Programs</h2>

        <div className="dashboard-card">
          <h3>Women Entrepreneurship Training</h3>
          <p>
            Skill development program focused on small business management,
            basic accounting, and financial literacy for women.
          </p>
          <div className="card-footer">
            <span className="tag upcoming">Upcoming</span>
            <span className="date">📅 Feb 1 – Feb 15</span>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Youth Computer Literacy Program</h3>
          <p>
            Basic computer and internet usage training designed for youth and
            students to improve digital literacy.
          </p>
          <div className="card-footer">
            <span className="tag completed">Completed</span>
            <span className="date">📅 Dec 5 – Dec 20</span>
          </div>
        </div>
      </section>

      {/* Community Activities */}
      <section className="dashboard-section">
        <h2>🤝 Community & Empowerment Activities</h2>

        <div className="dashboard-card">
          <h3>Community Clean-Up Campaign</h3>
          <p>
            A joint initiative by the ward office and local residents to promote
            cleanliness, waste management, and environmental awareness.
          </p>
          <div className="card-footer">
            <span className="tag ongoing">Ongoing</span>
            <span className="date">📅 Every Saturday</span>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Local Farmer Support Program</h3>
          <p>
            A support program providing seeds, agricultural tools, and guidance
            to local farmers to encourage sustainable farming practices.
          </p>
          <div className="card-footer">
            <span className="tag upcoming">Upcoming</span>
            <span className="date">📅 March 2026</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
