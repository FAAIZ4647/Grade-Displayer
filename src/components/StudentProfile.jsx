import studentData from "../data/studentData";
import "./StudentProfile.css";

export default function StudentProfile() {
  const initials = studentData.name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <section className="student-profile">
      <div className="student-profile__avatar" title={studentData.name}>
        {initials}
      </div>
      <div className="student-profile__info">
        <p className="student-profile__welcome">Welcome back,</p>
        <h2 className="student-profile__name">{studentData.name}</h2>
        <p className="student-profile__reg">
          Reg No: <strong>{studentData.registrationNo}</strong>
        </p>
      </div>
    </section>
  );
}
