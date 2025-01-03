import React, { useState } from "react";
import "./CourseInput.css";

export default function CourseInput({ handleAddCourse, courses }) {
    const gradeToScore = {
        A: 4,
        "B+": 3.5,
        B: 3,
        "C+": 2.5,
        C: 2,
        "D+": 1.5,
        D: 1,
        F: 0.5,
    };

    const [name, setName] = useState("");
    const [grade, setGrade] = useState("A");
    const [credit, setCredit] = useState("0");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim()) {
            alert("Course name cannot be empty!");
            return;
        }
        const new_course = {
            id: courses.length + 1,
            name,
            credit: parseInt(credit),
            grade: gradeToScore[grade],
        };
        handleAddCourse(new_course);
        setName("");
        setGrade("A");
        setCredit("0");
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="course-name">Course Name</label>
                <input
                    id="course-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="credit">Credit</label>
                <select
                    id="credit"
                    value={credit}
                    onChange={(e) => setCredit(e.target.value)}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <label htmlFor="grade">Grade</label>
                <select
                    id="grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                >
                    <option value="A">A</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="D+">D+</option>
                    <option value="D">D</option>
                    <option value="F">F</option>
                </select>
                <br />
                <input type="submit" className="add-btn" value="Add" />
            </form>
        </div>
    );
}
