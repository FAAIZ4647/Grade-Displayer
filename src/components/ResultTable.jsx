import "./ResultTable.css";

/**
 * Reusable marksheet table.
 *
 * @param {{ subjects: Array, showCredits: boolean, semesterLabel?: string }} props
 */
export default function ResultTable({ subjects, showCredits = false, semesterLabel }) {
  if (!subjects || subjects.length === 0) {
    return <p className="result-table__empty">No subject data available.</p>;
  }

  return (
    <div className="result-table__wrapper">
      <div className="result-table__scroll">
        <table className="result-table">
          <thead>
            <tr>
              <th className="result-table__th">#</th>
              {semesterLabel && <th className="result-table__th">Semester</th>}
              <th className="result-table__th">Course Code</th>
              <th className="result-table__th">Course Name</th>
              {showCredits && <th className="result-table__th">Credits</th>}
              <th className="result-table__th">Grade</th>
              <th className="result-table__th">Result</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subj, idx) => (
              <tr key={subj.code} className={idx % 2 === 0 ? "result-table__row--even" : ""}>
                <td className="result-table__td result-table__td--center">{idx + 1}</td>
                {semesterLabel && (
                  <td className="result-table__td result-table__td--center">{semesterLabel}</td>
                )}
                <td className="result-table__td result-table__td--code">{subj.code}</td>
                <td className="result-table__td">{subj.name}</td>
                {showCredits && (
                  <td className="result-table__td result-table__td--center">
                    {subj.credits !== null && subj.credits !== undefined ? subj.credits : "—"}
                  </td>
                )}
                <td className="result-table__td result-table__td--center">
                  <span className={`result-table__grade result-table__grade--${subj.grade.replace("+", "plus")}`}>
                    {subj.grade}
                  </span>
                </td>
                <td className="result-table__td result-table__td--center">
                  <span className={`result-table__result result-table__result--${subj.result === "P" ? "pass" : "fail"}`}>
                    {subj.result === "P" ? "Pass" : "Fail"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
