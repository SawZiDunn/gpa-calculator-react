import CourseInput from "./components/CourseInput";
import CourseList from "./components/CourseList";
import { useState } from "react";
import "./App.css";

function App() {
    const [courses, setCourses] = useState([]);
    // {
    //     id: ,
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

    const handleDeleteCourse = (id) => {
        setCourses((prev) => prev.filter((course) => course.id !== id));
    };

    return (
        <div className="app-container">
            <h1>GPA Calculator</h1>

            <CourseInput handleAddCourse={handleAddCourse} courses={courses} />
            {!!courses.length && (
                <CourseList
                    courses={courses}
                    delete_course={handleDeleteCourse}
                    calculateGpa={calculateGpa}
                />
            )}
        </div>
    );
}

export default App;
