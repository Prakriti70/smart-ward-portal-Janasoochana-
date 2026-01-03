import { useState } from "react";
import "./Documents.css";


const documentsData = {
  Citizenship: {
    description:
      "Apply for Nepali citizenship by descent or request a duplicate citizenship certificate through the ward office.",
    requirements: [
      "Birth Certificate",
      "Citizenship Certificate of Father or Mother",
      "Proof of Permanent Residence (if applicable)",
      "Recent Passport Size Photographs",
      "Application Form (ward-issued)"
    ],
    processingTime: "2–3 working days",
    office: "Ward Office"
  },

  "Birth Certificate": {
    description:
      "Register a child's birth and receive an official birth registration certificate from the ward office.",
    requirements: [
      "Hospital or Health Institution Birth Record",
      "Citizenship Certificate of Father or Mother",
      "Marriage Registration Certificate (if available)",
      "Proof of Residence",
      
    ],
    processingTime: "1–2 working days",
    office: "Ward Office"
  },

  "Marriage Certificate": {
    description:
      "Register a marriage under ward administration to obtain official legal recognition.",
    requirements: [
      "Citizenship Certificates of Both Partners",
      "Birth Certificates of Both Partners",
      "Marriage Photographs",
      "Application Form",
      "Presence of Both Partners at Ward Office"
    ],
    processingTime: "3–5 working days",
    office: "Ward Office"
  }
};


export default function Documents() {
  const [selectedService, setSelectedService] = useState("");
  const [checkedDocs, setCheckedDocs] = useState([]);

  const handleCheckboxChange = (doc) => {
    setCheckedDocs((prev) =>
      prev.includes(doc) ? prev.filter((d) => d !== doc) : [...prev, doc]
    );
  };

  const currentService = documentsData[selectedService];
  const currentDocs = currentService ? currentService.requirements : [];
  const allReady =
    currentService && checkedDocs.length === currentService.requirements.length;

  return (
    
    <div className="documents-page">

      {/* 🔴 TOP BANNER */}
      <div className="documents-banner">
        <h2>Smart Ward Document Assistant</h2>
        <p>
          Prepare required documents in advance and save time at your ward office.
        </p>
      </div>

      <h1>📄 Document Guidelines</h1>
      <p className="documents-intro">
        This section helps citizens understand which documents are required
        before visiting the ward office for common government services.
      </p>

      {/* INFO CARD */}
      <div className="documents-info-card">
        <p>
          The Documents section provides clear, service-wise guidelines for
          essential ward services such as citizenship, birth registration,
          and marriage certification. This helps reduce delays and unnecessary visits.
        </p>
      </div>

      {/* FEATURE HIGHLIGHTS */}
      <div className="documents-features">
        <div className="feature">🗂️ View service-wise requirements</div>
        <div className="feature">✅ Prepare documents using checklist</div>
        <div className="feature">⏱️ Know processing time beforehand</div>
      </div>

      {/* SERVICE DROPDOWN */}
      <div className="service-dropdown">
        <select
          value={selectedService}
          onChange={(e) => {
            setSelectedService(e.target.value);
            setCheckedDocs([]);
          }}
        >
          <option value="">— Select a Government Service —</option>
          {Object.keys(documentsData).map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* DETAILS CARD */}
      {currentService && (
        <div className="documents-card">

          <h2>{selectedService}</h2>
          <p className="service-description">
            {currentService.description}
          </p>
          
   

          <div className="service-meta">
            <span>
              <strong>Office:</strong> {currentService.office}
            </span>
            <span>
              <strong>Processing Time:</strong> {currentService.processingTime}
            </span>
          </div>
          

          <h3>Required Documents</h3>
          <ul className="documents-list">
            {currentDocs.map((doc) => (
              <li key={doc}>
                <label>
                  <input
                    type="checkbox"
                    checked={checkedDocs.includes(doc)}
                    onChange={() => handleCheckboxChange(doc)}
                  />
                  {doc}
                </label>
              </li>
            ))}
          </ul>

          {allReady ? (
            <div className="status success">
              ✅ You have all required documents. You’re ready to apply!
            </div>
          ) : (
            <div className="status warning">
              ⚠️ Please ensure all documents are prepared before visiting the office.
            </div>
          )}

          <p className="note">
            *Requirements may vary slightly depending on the ward. Please confirm with your local ward office.
          </p>

          {/* 🖨️ PRINT BUTTON */}
          <button
            className="print-btn"
            onClick={() => window.print()}
          >
            🖨️ Print / Save Checklist
          </button>
        </div>
      )}
    </div>
  );
}


