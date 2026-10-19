/**
 * Academic data: semester results, grade-point mapping, and exam sessions.
 *
 * ⚠ GRADE-POINT MAPPING NOTICE:
 * The official grade-point mapping for Anna University is NOT supplied by a
 * verified source in this project.  The mapping below is a commonly referenced
 * scale and MUST be verified against the applicable Anna University
 * Regulations (e.g. Regulation 2024) before being treated as official.
 *
 * Until verified, any SGPA / CGPA values calculated with this mapping are
 * INDICATIVE ONLY and should NOT be submitted to official bodies.
 */

export const GRADE_POINT_MAP = {
  "S":  10,
  "A+": 9,
  "A":  8,
  "B+": 7,
  "B":  6,
  "C":  5,
  "U":  0,   // Fail / Re-appear
  "UA": 0,   // Absent
};

export const GRADE_POINT_DISCLAIMER =
  "The grade-point mapping used here is indicative and has NOT been verified " +
  "against the official Anna University regulations. Do not treat computed " +
  "SGPA/CGPA values as official.";

// ---------------------------------------------------------------------------
// Semester 1 — November/December 2025
// Credits are UNKNOWN for this semester (not shown in the source screenshot).
// They are stored as null so the UI can clearly communicate that credits are
// unavailable rather than silently inventing values.
// ---------------------------------------------------------------------------
export const semester1Subjects = [
  { code: "24TA101", name: "Heritage of Tamils",                     credits: null, grade: "A",  result: "P" },
  { code: "24BS151", name: "Physics and Chemistry Laboratory",       credits: null, grade: "A+", result: "P" },
  { code: "24CH101", name: "Engineering Chemistry",                  credits: null, grade: "A",  result: "P" },
  { code: "24PH101", name: "Engineering Physics",                    credits: null, grade: "A",  result: "P" },
  { code: "24AC101", name: "Indian Constitution and Freedom Movement", credits: null, grade: "B+", result: "P" },
  { code: "24EN101", name: "Technical English - I",                  credits: null, grade: "A+", result: "P" },
  { code: "24MA102", name: "Matrices and Differential Equations",    credits: null, grade: "A",  result: "P" },
  { code: "24CS192", name: "Design for Developers",                  credits: null, grade: "A",  result: "P" },
  { code: "24CS193", name: "Logic Building using Java",              credits: null, grade: "A",  result: "P" },
];

// ---------------------------------------------------------------------------
// Semester 2 — April/May 2026
// Credits are available for this semester.
// Expected total credits: 23
// ---------------------------------------------------------------------------
export const semester2Subjects = [
  { code: "24EN291", name: "Technical English - II",                                          credits: 3, grade: "S",  result: "P" },
  { code: "24TA201", name: "Tamils and Technology",                                           credits: 1, grade: "A+", result: "P" },
  { code: "24MA292", name: "Probability Distributions and Statistics",                        credits: 4, grade: "B+", result: "P" },
  { code: "24EE293", name: "Basics of Electrical and Electronics for Computer Engineers",     credits: 3, grade: "A",  result: "P" },
  { code: "24CS292", name: "Web Technology",                                                  credits: 4, grade: "A+", result: "P" },
  { code: "24CS293", name: "Problem Solving using Python for Computer Engineers",             credits: 4, grade: "A",  result: "P" },
  { code: "24CS294", name: "Object Oriented Programming using Java",                         credits: 4, grade: "A",  result: "P" },
];

// ---------------------------------------------------------------------------
// All semesters meta (for the Overall Performance view)
// ---------------------------------------------------------------------------
export const semestersMeta = [
  {
    semester: 1,
    examSession: "November/December 2025",
    status: "results_available",
    subjects: semester1Subjects,
  },
  {
    semester: 2,
    examSession: "April/May 2026",
    status: "results_available",
    subjects: semester2Subjects,
  },
  {
    semester: 3,
    examSession: "—",
    status: "results_processing",
    subjects: [],
  },
  { semester: 4, examSession: "—", status: "not_yet_available", subjects: [] },
  { semester: 5, examSession: "—", status: "not_yet_available", subjects: [] },
  { semester: 6, examSession: "—", status: "not_yet_available", subjects: [] },
  { semester: 7, examSession: "—", status: "not_yet_available", subjects: [] },
  { semester: 8, examSession: "—", status: "not_yet_available", subjects: [] },
];
