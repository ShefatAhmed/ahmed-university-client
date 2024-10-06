import { NavLink } from "react-router-dom";
import { TSiderbarItems } from "../types";
import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferedCourse from "../pages/faculty/OfferedCourse";

export const facultyPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <FacultyDashboard />
    },
    {
        name: "Offered Course",
        path: "offered-course",
        element: <OfferedCourse />
    },
]

export const facultySidberItems = facultyPaths.reduce((acc: TSiderbarItems[], item) => {
    if (item.path && item.element) {
        acc.push({
            key: item.name,
            label: <NavLink to={`/faculty/${item.path}`}>{item.name}</NavLink>
        });
    }
    return acc
}, [])