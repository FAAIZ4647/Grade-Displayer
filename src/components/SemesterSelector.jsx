import "./SemesterSelector.css";

/**
 * Renders a horizontal list of semester quick-select buttons.
 *
 * @param {{ semesters: Array<{semester: number, status: string}>, activeSemester: number|null, onSelect: (sem: number) => void }} props
 */
export default function SemesterSelector({ semesters, activeSemester, onSelect }) {
  return (
    <div className="semester-selector">
      {semesters.map((s) => (
        <button
          key={s.semester}
          className={`semester-selector__btn ${
            activeSemester === s.semester ? "semester-selector__btn--active" : ""
          } ${
            s.status === "not_yet_available" ? "semester-selector__btn--disabled" : ""
          }`}
          onClick={() => onSelect(s.semester)}
          disabled={s.status === "not_yet_available"}
        >
          Sem {s.semester}
        </button>
      ))}
    </div>
  );
}
