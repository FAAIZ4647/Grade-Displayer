import { useNavigate } from "react-router-dom";
import ResultTable from "../components/ResultTable";
import PerformanceSummary from "../components/PerformanceSummary";
import SemesterSelector from "../components/SemesterSelector";
import StatusBadge from "../components/StatusBadge";
import { semester2Subjects, semestersMeta, GRADE_POINT_MAP, GRADE_POINT_DISCLAIMER } from "../data/academicData";
import { calculateSGPA, getSemesterStatistics } from "../utils/gradeCalculations";
import "./SemesterPage.css";

export default function Semester2() {
  const navigate = useNavigate();
  const meta = semestersMeta.find(m => m.semester === 2);
  const stats = getSemesterStatistics(semester2Subjects);
  const { sgpa, creditsComplete, passedAll } = calculateSGPA(semester2Subjects, GRADE_POINT_MAP);

  const summaryCards = [
    { label: "Total Subjects", value: stats.total, icon: "📚" },
    { label: "Subjects Passed", value: stats.passed, icon: "✅" },
    { 
      label: "Total Credits", 
      value: stats.totalCredits !== null ? stats.totalCredits : "Unknown", 
      icon: "🔢"
    },
    { 
      label: "SGPA", 
      value: creditsComplete && sgpa !== null ? sgpa.toFixed(2) : "N/A", 
      icon: "🎯",
      note: passedAll ? "Pass" : "Contains arrears"
    }
  ];

  return (
    <div className="semester-page fade-in">
      <div className="semester-page__header">
        <div>
          <h2 className="page-title">EXAMWISE PERFORMANCE</h2>
          <p className="page-subtitle">Examination Session: <strong>{meta.examSession}</strong></p>
        </div>
        <SemesterSelector 
          semesters={semestersMeta.map(m => ({ semester: m.semester, status: m.status }))}
          activeSemester={2}
          onSelect={(sem) => {
            if (sem === 1) navigate("/semester-1");
            if (sem === 2) navigate("/semester-2");
          }}
        />
      </div>

      <div className="semester-page__meta-bar">
        <div className="meta-info">
          <span className="meta-label">Semester:</span>
          <span className="meta-value">02</span>
        </div>
        <div className="meta-info">
          <span className="meta-label">Status:</span>
          <StatusBadge status={passedAll ? "pass" : "fail"} customLabel={passedAll ? "ALL CLEAR" : "ARREARS PRESENT"} />
        </div>
      </div>

      <PerformanceSummary cards={summaryCards} />

      <div className="table-container">
        <ResultTable subjects={semester2Subjects} showCredits={true} />
      </div>

      <div className="disclaimer-text">
        * {GRADE_POINT_DISCLAIMER}
      </div>
    </div>
  );
}
