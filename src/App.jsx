import CourseInput from "./components/CourseInput";
import CourseList from "./components/CourseList";
import { useState } from "react";
import "./App.css";

function App() {
    const [courses, setCourses] = useState([]);
    const [courseToEdit, setCourseToEdit] = useState(null);
    // {
    //     id: 1,
    //     name: "",
    //     credit: 0,
    //     grade: 0.0,
    // }

    const calculateGpa = () => {
        let total_credits = 0;
        let creditXgrade = 0.0;

        courses.forEach((course) => {
            total_credits += course.credit;
            creditXgrade += course.credit * course.grade;
        });

        return creditXgrade / total_credits || 0;
    };

    const handleAddCourse = (new_course) => {
        setCourses((prev) => [...prev, new_course]);
    };

    const handleEditCourse = (editedCourse) => {
        let temp_courses = [...courses];
        temp_courses[editedCourse.id - 1] = editedCourse;
        setCourses(temp_courses);
    };

    const handleDeleteCourse = (id) => {
        setCourses((prev) => prev.filter((course) => course.id !== id));
    };

    return (
        <div className="app-container">
            <h1>GPA Calculator</h1>

            <CourseInput
                handleAddCourse={handleAddCourse}
                handleEditCourse={handleEditCourse}
                courseToEdit={courseToEdit}
                courses={courses}
            />
            <CourseList
                courses={courses}
                deleteCourse={handleDeleteCourse}
                setCourseToEdit={setCourseToEdit}
                calculateGpa={calculateGpa}
            />
        </div>
    );
}

export default App;
