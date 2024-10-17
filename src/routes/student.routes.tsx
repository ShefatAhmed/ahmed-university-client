import { NavLink } from "react-router-dom";
import { TSiderbarItems } from "../types";
import OfferedCourses from "../pages/admin/courseManagement/OfferedCourses";

export const studentPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <h1>Dashboard</h1>
    },
    {
        name: "Offered Courses",
        children: [
            {
                name: 'Offered Courses',
                path: 'offered-courses',
                element: <OfferedCourses />,
            },
        ]
    }
]

export const studentSidberItems = studentPaths.reduce((acc: TSiderbarItems[], item) => {
    if (item.path && item.element) {
        acc.push({
            key: item.name,
            label: <NavLink to={`/student/${item.path}`}>{item.name}</NavLink>
        });
    }
    if (item.children) {
        acc.push({
            key: item.name,
            label: item.name,
            children: item.children.map((child) => ({
                key: child.name,
                label: <NavLink to={`/student/${child.path}`}>{child.name}</NavLink>
            }))
        })
    }
    return acc
}, [])