import StudentDashboard from "../pages/student/StudentDashboard";
import MySchedule from "../pages/student/MySchedule";
import OfferedCourses from "../pages/student/OfferedCourses";
export const studentPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <StudentDashboard />,
    },
    {
        name: 'Offered Course',
        path: 'offered-course',
        element: <OfferedCourses />,
    },
    {
        name: 'My Schedule',
        path: 'schedule',
        element: <MySchedule />,
    },
]
