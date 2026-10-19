import { useNavigate } from "react-router-dom";
import StatusBadge from "./StatusBadge";
import "./SemesterCard.css";

/**
 * A card representing a single semester on the home page.
 *
 * @param {{ semester: number, examSession: string, status: string, subjectCount: number, to?: string }} props
 */
export default function SemesterCard({ semester, examSession, status, subjectCount, to }) {
  const navigate = useNavigate();
  const clickable = !!to;

  return (
    <div
      className={`semester-card ${clickable ? "semester-card--clickable" : ""}`}
      onClick={clickable ? () => navigate(to) : undefined}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={clickable ? (e) => e.key === "Enter" && navigate(to) : undefined}
    >
      <div className="semester-card__header">
        <span className="semester-card__label">Semester {semester}</span>
        <StatusBadge status={status} />
      </div>
      <p className="semester-card__session">{examSession}</p>
      {subjectCount > 0 && (
        <p className="semester-card__subjects">{subjectCount} Subjects</p>
      )}
      {clickable && (
        <span className="semester-card__cta">View Results →</span>
      )}
    </div>
  );
}
