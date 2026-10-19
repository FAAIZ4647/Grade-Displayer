import { useNavigate } from "react-router-dom";
import StatusBadge from "../components/StatusBadge";
import PerformanceSummary from "../components/PerformanceSummary";
import { semestersMeta, GRADE_POINT_MAP, GRADE_POINT_DISCLAIMER } from "../data/academicData";
import { calculateSGPA, calculateTotalCredits, calculateCGPA } from "../utils/gradeCalculations";
import "./OverallPerformance.css";

export default function OverallPerformance() {
  const navigate = useNavigate();
  
  // Get completed semesters (ones with results available)
  const completedSemesters = semestersMeta.filter(m => m.status === "results_available");
  
  // Calculate total completed credits (only for semesters where all subjects have credits)
  let totalKnownCredits = 0;
  completedSemesters.forEach(sem => {
    const credits = calculateTotalCredits(sem.subjects);
    if (credits !== null) {
      totalKnownCredits += credits;
    }
  });

  // Calculate CGPA
  const cgpaResult = calculateCGPA(completedSemesters, GRADE_POINT_MAP);

  const summaryCards = [
    { label: "Completed Semesters", value: completedSemesters.length, icon: "📅" },
    { label: "Total Earned Credits", value: totalKnownCredits > 0 ? totalKnownCredits : "Unknown", icon: "⭐" },
    { 
      label: "CGPA", 
      value: cgpaResult.cgpa !== null ? cgpaResult.cgpa.toFixed(2) : "N/A", 
      icon: "🏆",
      note: !cgpaResult.complete ? "Excludes semesters with missing credits" : ""
    }
  ];

  return (
    <div className="overall-page fade-in">
      <div className="overall-page__header">
        <div>
          <h2 className="page-title">OVERALL ACADEMIC PERFORMANCE</h2>
          <p className="page-subtitle">Cumulative record across all semesters</p>
        </div>
        <button className="btn-secondary" onClick={() => navigate("/")}>
          ← Back to Profile
        </button>
      </div>

      <PerformanceSummary cards={summaryCards} />

      <div className="overall-table__wrapper">
        <div className="overall-table__scroll">
          <table className="overall-table">
            <thead>
              <tr>
                <th>Semester</th>
                <th>Examination Session</th>
                <th>Subjects</th>
                <th>Credits</th>
                <th>SGPA</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {semestersMeta.map((sem, idx) => {
                const isCompleted = sem.status === "results_available";
                let sgpaData = { sgpa: null, totalCredits: null };
                
                if (isCompleted) {
                  sgpaData = calculateSGPA(sem.subjects, GRADE_POINT_MAP);
                }

                return (
                  <tr key={sem.semester} className={idx % 2 === 0 ? "row-even" : ""}>
                    <td className="text-center font-bold">0{sem.semester}</td>
                    <td>{sem.examSession}</td>
                    <td className="text-center">{isCompleted ? sem.subjects.length : "—"}</td>
                    <td className="text-center">
                      {isCompleted && sgpaData.totalCredits !== null ? sgpaData.totalCredits : "—"}
                    </td>
                    <td className="text-center font-bold sgpa-text">
                      {isCompleted && sgpaData.sgpa !== null ? sgpaData.sgpa.toFixed(2) : "—"}
                    </td>
                    <td className="text-center">
                      <StatusBadge status={sem.status} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="disclaimer-text">
        * {GRADE_POINT_DISCLAIMER}
      </div>
    </div>
  );
}
