import "./Budget.css";

function Budget({ selectedWard }) {
  return (
    <div className="budget-page">
      <h1 className="budget-title">
        💰 Budget Transparency – {selectedWard}
      </h1>

      <p className="budget-subtitle">
        Transparent overview of ward-level budget allocation and utilization
        for the current fiscal year.
      </p>

      {/* Budget Summary */}
      <div className="budget-summary">
        <h2>Total Ward Budget (FY 2080/81)</h2>
        <p className="amount">NPR 50,00,000</p>
        <p className="summary-note">
          Allocated for development, social welfare, and essential public
          services.
        </p>
      </div>

      {/* Budget Utilization Chart */}
      <div className="budget-chart">
        <h2>📊 Budget Utilization Breakdown</h2>

        <div className="bar-item">
          <span className="label">🛣️ Roads & Infrastructure</span>
          <div className="bar">
            <div className="fill" style={{ width: "40%" }}></div>
          </div>
          <span className="percent">40%</span>
        </div>

        <div className="bar-item">
          <span className="label">🏫 Education</span>
          <div className="bar">
            <div className="fill" style={{ width: "20%" }}></div>
          </div>
          <span className="percent">20%</span>
        </div>

        <div className="bar-item">
          <span className="label">🏥 Health Services</span>
          <div className="bar">
            <div className="fill" style={{ width: "15%" }}></div>
          </div>
          <span className="percent">15%</span>
        </div>

        <div className="bar-item">
          <span className="label">👩‍💼 Women & Youth Training</span>
          <div className="bar">
            <div className="fill" style={{ width: "15%" }}></div>
          </div>
          <span className="percent">15%</span>
        </div>

        <div className="bar-item">
          <span className="label">🚰 Sanitation & Cleanliness</span>
          <div className="bar">
            <div className="fill" style={{ width: "10%" }}></div>
          </div>
          <span className="percent">10%</span>
        </div>
      </div>

      {/* Transparency Note */}
      <p className="note">
        *Budget figures shown are indicative and for public transparency.
        Final allocations may vary based on ward meetings and policy decisions.
      </p>
    </div>
  );
}

export default Budget;
