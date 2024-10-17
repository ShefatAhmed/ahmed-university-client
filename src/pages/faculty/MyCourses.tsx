import { Button, Col, Flex } from "antd";
import AUForm from "../../components/form/AUForm";
import AUSelect from "../../components/form/AUSelect";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useGetAllFacultyCoursesQuery } from "../../redux/features/faculty/facultyCourseApi";

const MyCourses = () => {
    const { data: facultyCoursesData } = useGetAllFacultyCoursesQuery(undefined);
    const navigate = useNavigate();

    console.log(facultyCoursesData);

    const semesterOptions = facultyCoursesData?.data?.map((item: any) => ({
        label: `${item.academicSemester.name} ${item.academicSemester.year}`,
        value: item.semesterRegistration._id,
    }));

    const courseOptions = facultyCoursesData?.data?.map((item: any) => ({
        label: item.course.title,
        value: item.course._id,
    }));

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        navigate(`/faculty/courses/${data.semesterRegistration}/${data.course}`);
    };
    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <AUForm onSubmit={onSubmit}>
                    <AUSelect
                        options={semesterOptions}
                        name="semesterRegistration"
                        label="Semester"
                    />
                    <AUSelect options={courseOptions} name="course" label="Course" />
                    <Button htmlType="submit">Submit</Button>
                </AUForm>
            </Col>
        </Flex>
    );
};

export default MyCourses;