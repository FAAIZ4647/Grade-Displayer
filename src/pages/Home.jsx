import { useNavigate } from "react-router-dom";
import StudentProfile from "../components/StudentProfile";
import SemesterCard from "../components/SemesterCard";
import { semestersMeta } from "../data/academicData";
import { getSemesterStatistics } from "../utils/gradeCalculations";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page fade-in">
      <div className="home-page__profile-section">
        <StudentProfile />
      </div>

      <div className="home-page__overview">
        <h3 className="section-title">Academic Overview</h3>
        <div className="semesters-grid">
          {semestersMeta.slice(0, 3).map((sem) => {
            const stats = getSemesterStatistics(sem.subjects);
            // Route mapping logic based on semester number
            let route = null;
            if (sem.semester === 1) route = "/semester-1";
            else if (sem.semester === 2) route = "/semester-2";
            // Semester 3 and above have no direct page in this MVP yet.

            return (
              <SemesterCard
                key={sem.semester}
                semester={sem.semester}
                examSession={sem.examSession}
                status={sem.status}
                subjectCount={stats.total}
                to={route}
              />
            );
          })}
        </div>

        <div className="home-page__overall-action">
          <button className="btn-primary" onClick={() => navigate("/overall")}>
            View Overall Performance
          </button>
        </div>
      </div>
    </div>
  );
}
