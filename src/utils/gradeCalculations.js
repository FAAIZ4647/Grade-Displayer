/**
 * Grade-calculation utility functions.
 *
 * All functions are pure and deterministic.  They never invent data: when
 * credits are missing (null) they return clearly-labelled "incomplete" results
 * so the UI can display an appropriate message.
 */

/**
 * Calculate SGPA for a set of subjects.
 *
 * Weighted SGPA = Σ(credits × gradePoint) / Σ(eligible credits)
 *
 * @param {Array}  subjects      – [{ credits, grade, result }]
 * @param {Object} gradePointMap – { "S": 10, "A+": 9, … }
 * @returns {{ sgpa: number|null, totalCredits: number|null, creditsComplete: boolean, passedAll: boolean }}
 */
export function calculateSGPA(subjects, gradePointMap) {
  if (!subjects || subjects.length === 0) {
    return { sgpa: null, totalCredits: null, creditsComplete: false, passedAll: false };
  }

  const hasIncompleteCredits = subjects.some((s) => s.credits === null || s.credits === undefined);
  const passedAll = subjects.every((s) => s.result === "P");

  if (hasIncompleteCredits) {
    return { sgpa: null, totalCredits: null, creditsComplete: false, passedAll };
  }

  let weightedSum = 0;
  let creditSum = 0;

  for (const subj of subjects) {
    const gp = gradePointMap[subj.grade];
    if (gp === undefined) {
      // Unknown grade encountered — cannot calculate
      return { sgpa: null, totalCredits: creditSum, creditsComplete: true, passedAll };
    }
    weightedSum += subj.credits * gp;
    creditSum += subj.credits;
  }

  if (creditSum === 0) {
    return { sgpa: null, totalCredits: 0, creditsComplete: true, passedAll };
  }

  const sgpa = parseFloat((weightedSum / creditSum).toFixed(2));
  return { sgpa, totalCredits: creditSum, creditsComplete: true, passedAll };
}

/**
 * Sum the credits for a list of subjects.
 * Returns null when any subject has null/undefined credits.
 *
 * @param {Array} subjects – [{ credits }]
 * @returns {number|null}
 */
export function calculateTotalCredits(subjects) {
  if (!subjects || subjects.length === 0) return 0;
  if (subjects.some((s) => s.credits === null || s.credits === undefined)) return null;
  return subjects.reduce((sum, s) => sum + s.credits, 0);
}

/**
 * Calculate CGPA across completed semesters.
 *
 * Weighted CGPA = Σ(semesterSGPA × semesterCredits) / Σ(completed-semester credits)
 *
 * Only semesters with BOTH a valid SGPA AND valid total credits are included.
 *
 * @param {Array}  completedSemesters – [{ subjects }]
 * @param {Object} gradePointMap
 * @returns {{ cgpa: number|null, includedSemesters: number, totalCredits: number|null, complete: boolean }}
 */
export function calculateCGPA(completedSemesters, gradePointMap) {
  let weightedSum = 0;
  let creditSum = 0;
  let included = 0;

  for (const sem of completedSemesters) {
    const { sgpa, totalCredits, creditsComplete } = calculateSGPA(sem.subjects, gradePointMap);
    if (sgpa === null || !creditsComplete || totalCredits === null || totalCredits === 0) {
      // Skip semesters with incomplete data
      continue;
    }
    weightedSum += sgpa * totalCredits;
    creditSum += totalCredits;
    included++;
  }

  if (included === 0 || creditSum === 0) {
    return { cgpa: null, includedSemesters: 0, totalCredits: null, complete: false };
  }

  const allIncluded = included === completedSemesters.length;
  const cgpa = parseFloat((weightedSum / creditSum).toFixed(2));
  return { cgpa, includedSemesters: included, totalCredits: creditSum, complete: allIncluded };
}

/**
 * Derive quick statistics for a list of subjects.
 *
 * @param {Array} subjects
 * @returns {{ total: number, passed: number, failed: number, totalCredits: number|null }}
 */
export function getSemesterStatistics(subjects) {
  if (!subjects || subjects.length === 0) {
    return { total: 0, passed: 0, failed: 0, totalCredits: null };
  }

  const passed = subjects.filter((s) => s.result === "P").length;
  const totalCredits = calculateTotalCredits(subjects);

  return {
    total: subjects.length,
    passed,
    failed: subjects.length - passed,
    totalCredits,
  };
}
