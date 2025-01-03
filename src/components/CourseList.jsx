import React from "react";
import "./CourseList.css";

export default function CourseList({ courses, delete_course, calculateGpa }) {
    return (
        <div className="course-list">
            <div className="course-headers">
                <h3>Course Name</h3>
                <h3>Credit</h3>
                <h3>Grade</h3>
                <h3>Action</h3>
            </div>
            {courses.map((course) => (
                <div className="course-row" key={course.id}>
                    <p>{course.name}</p>
                    <p>{course.credit}</p>
                    <p>{course.grade}</p>
                    <button onClick={() => delete_course(course.id)}>
                        Delete
                    </button>
                </div>
            ))}

            <div className="total-gpa">
                <p>Total GPA: {calculateGpa().toFixed(2)}</p>
            </div>
        </div>
    );
}
