import { Button, Modal, Table } from "antd";
import { useAddMarkMutation, useGetAllFacultyCoursesQuery } from "../../redux/features/faculty/facultyCourseApi";
import { useState } from "react";
import { useParams } from "react-router-dom";
import AUForm from "../../components/form/AUForm";
import AUInput from "../../components/form/AUInput";

const MyStudents = () => {
    const { registerSemesterId, courseId } = useParams();
    const { data: facultyCoursesData } = useGetAllFacultyCoursesQuery([
        { name: 'semesterRegistration', value: registerSemesterId },
        { name: 'course', value: courseId },
    ]);

    console.log(facultyCoursesData);

    const tableData = facultyCoursesData?.data?.map(
        ({ _id, student, semesterRegistration, offeredCourse }: any) => ({
            key: _id,
            name: student.fullName,
            roll: student.id,
            semesterRegistration: semesterRegistration._id,
            student: student._id,
            offeredCourse: offeredCourse._id,
        })
    );

    const columns = [
        {
            title: 'Name',
            key: 'name',
            dataIndex: 'name',
        },
        {
            title: 'Roll',
            key: 'roll',
            dataIndex: 'roll',
        },
        {
            title: 'Action',
            key: 'x',
            render: (item: string) => {
                return (
                    <div>
                        <AddMarksModal studentInfo={item} />
                    </div>
                );
            },
        },
    ];

    return <Table columns={columns} dataSource={tableData} />;
};

const AddMarksModal = ({ studentInfo } : any) => {
    console.log(studentInfo);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addMark] = useAddMarkMutation();

    const handleSubmit = async (data: any) => {
        const studentMark = {
            semesterRegistration: studentInfo.semesterRegistration,
            offeredCourse: studentInfo.offeredCourse,
            student: studentInfo.student,
            courseMarks: {
                classTest1: Number(data.classTest1),
                midTerm: Number(data.midTerm),
                classTest2: Number(data.classTest2),
                finalTerm: Number(data.finalTerm),
            },
        };

        console.log(studentMark);
        const res = await addMark(studentMark);

        console.log(res);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button onClick={showModal}>Add Faculty</Button>
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <AUForm onSubmit={handleSubmit}>
                    <AUInput type="text" name="classTest1" label="Class Test 1" />
                    <AUInput type="text" name="classTest2" label="Class Test 2" />
                    <AUInput type="text" name="midTerm" label="Midterm" />
                    <AUInput type="text" name="finalTerm" label="Final" />
                    <Button htmlType="submit">Submit</Button>
                </AUForm>
            </Modal>
        </>
    );
};

export default MyStudents;