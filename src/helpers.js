const gradeXScore = {
    A: 4,
    "B+": 3.5,
    B: 3,
    "C+": 2.5,
    C: 2,
    "D+": 1.5,
    D: 1,
    F: 0.5,
};

const gradeToScore = (grade) => {
    return gradeXScore[grade];
};

const scoreToGrade = (score) => {
    for (const [k, v] of Object.entries(gradeXScore)) {
        if (v === +score) {
            return k;
        }
    }
};

export { gradeToScore, scoreToGrade };
