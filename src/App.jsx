import CourseInput from "./components/CourseInput";
import CourseList from "./components/CourseList";
import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
    // const [courses, setCourses] = useState(() => {
    //     const fetchedCourses = localStorage.getItem("courses");
    //     return fetchedCourses ? JSON.parse(fetchedCourses) : [];
    // });

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
        setCourses((prev) =>
            prev.map((course) =>
                course.id === editedCourse.id ? editedCourse : course
            )
        );

        setCourseToEdit(null);
    };

    const handleDeleteCourse = (id) => {
        setCourses((prev) => prev.filter((course) => course.id !== id));
    };

    useEffect(() => {
        // if no key 'courses' in localStorage, it returns null
        // parse null results in null, so courses become null instead of []

        const fetchedCourses = localStorage.getItem("courses");
        // if fetchedCourses is ""
        if (!fetchedCourses) {
            setCourses([]);
            return;
        }

        const parsed = JSON.parse(fetchedCourses);
        if (parsed.length) {
            setCourses(parsed);
        }
    }, []);

    // renders everytime courses get a new reference
    useEffect(() => {
        localStorage.setItem("courses", JSON.stringify(courses));
    }, [courses]);

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
