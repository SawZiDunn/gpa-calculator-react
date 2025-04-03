import React, { useEffect, useState } from "react";
import { gradeToScore, scoreToGrade } from "../helpers";
import "./CourseInput.css";

export default function CourseInput({
    handleAddCourse,
    handleEditCourse,
    courseToEdit,
    courses,
}) {
    const [name, setName] = useState("");
    const [grade, setGrade] = useState("A");
    const [credit, setCredit] = useState("1");

    // renders everytime courseToEdit changes
    useEffect(() => {
        if (courseToEdit) {
            const { name, credit, grade } = courseToEdit;
            setName(name);
            setCredit(credit);
            setGrade(scoreToGrade(grade));
        }
    }, [courseToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim()) {
            alert("Course name cannot be empty!");
            return;
        }

        // checks if the use is adding or editing a new course
        const toEdit = courses.find((course) => course.id === courseToEdit?.id);
        // console.log(courses);
        // console.log(toEdit);

        const new_course = {
            id: toEdit ? courseToEdit.id : courses.length + 1,
            name,
            credit: parseInt(credit),
            grade: gradeToScore(grade),
        };

        toEdit ? handleEditCourse(new_course) : handleAddCourse(new_course);
        setName("");
        setGrade("A");
        setCredit("1");
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
