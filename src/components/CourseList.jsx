import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { scoreToGrade } from "../helpers";
import "./CourseList.css";

export default function CourseList({
    courses,
    deleteCourse,
    setCourseToEdit,
    calculateGpa,
}) {
    return (
        <>
            {courses.length === 0 ? (
                <p className="empty-state">No Courses Yet! Try adding some!</p>
            ) : (
                <div className="course-list">
                    <div className="course-headers course-row">
                        <div>No.</div>
                        <div>Course Name</div>
                        <div>Credit</div>
                        <div>Grade</div>
                        <div>Action</div>
                    </div>

                    {courses.map((course) => (
                        <div className="course-row" key={course.id}>
                            <div>{course.id}</div>
                            <div>{course.name}</div>
                            <div>{course.credit}</div>
                            <div>
                                {scoreToGrade(course.grade)} (
                                {course.grade.toFixed(1)})
                            </div>

                            <div className="buttons">
                                <button
                                    onClick={() => deleteCourse(course.id)}
                                    aria-label={`Delete ${course.name}`}
                                >
                                    <FaTrash />
                                </button>

                                <button
                                    onClick={() => setCourseToEdit(course)}
                                    aria-label={`Edit ${course.name}`}
                                >
                                    <FaEdit />
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="total-gpa">
                        <p>Total GPA: {calculateGpa().toFixed(2)}</p>
                    </div>
                </div>
            )}
        </>
    );
}
