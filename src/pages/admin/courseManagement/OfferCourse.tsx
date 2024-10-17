import { Button, Col, Flex } from "antd";
import AUForm from "../../../components/form/AUForm";
import AUSelect from "../../../components/form/AUSelect";
import AUInput from "../../../components/form/AUInput";
import moment from "moment";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useCreateOfferedCourseMutation, useGetAllCoursesQuery, useGetAllRegisteredSemestersQuery, useGetCourseFacultiesQuery } from "../../../redux/features/admin/courseManagement";
import { useGetAcademicDepartmentsQuery, useGetAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagement.api";
import { useState } from "react";
import AUTimePicker from "../../../components/form/PHTimePicker";
import AUSelectWithWatch from "../../../components/form/PHSelectWithWatch";
import { weekDaysOptions } from "../../../constants/global";

const OfferCourse = () => {
  const [courseId, setCourseId] = useState('');

  const [addOfferedCourse] = useCreateOfferedCourseMutation();

  const { data: semesterRegistrationData } = useGetAllRegisteredSemestersQuery([
    { name: 'sort', value: 'year' },
    { name: 'status', value: 'UPCOMING' },
  ]);

  const { data: academicFacultyData } = useGetAcademicFacultiesQuery(undefined);

  const { data: academicDepartmentData } =
    useGetAcademicDepartmentsQuery(undefined);

  const { data: coursesData } = useGetAllCoursesQuery(undefined);

  const { data: facultiesData, isFetching: fetchingFaculties } =
    useGetCourseFacultiesQuery(courseId, { skip: !courseId });

  const semesterRegistrationOptions = semesterRegistrationData?.data?.map(
    (item) => ({
      value: item._id,
      label: `${item.academicSemester.name} ${item.academicSemester.year}`,
    })
  );

  const academicFacultyOptions = academicFacultyData?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const academicDepartmentOptions = academicDepartmentData?.data?.map(
    (item) => ({
      value: item._id,
      label: item.name,
    })
  );

  const courseOptions = coursesData?.data?.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  const facultiesOptions = facultiesData?.data?.faculties?.map((item: { _id: string; fullName: string; }) => ({
    value: item._id,
    label: item.fullName,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const offeredCourseData = {
      ...data,
      maxCapacity: Number(data.maxCapacity),
      section: Number(data.section),
      startTime: moment(new Date(data.startTime)).format('HH:mm'),
      endTime: moment(new Date(data.endTime)).format('HH:mm'),
    };

    const res = await addOfferedCourse(offeredCourseData);
    console.log(res);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <AUForm onSubmit={onSubmit}>
          <AUSelect
            name="semesterRegistration"
            label="Semester Registrations"
            options={semesterRegistrationOptions}
          />
          <AUSelect
            name="academicFaculty"
            label="Academic Faculty"
            options={academicFacultyOptions}
          />
          <AUSelect
            name="academicDepartment"
            label="Academic Department"
            options={academicDepartmentOptions}
          />
          <AUSelectWithWatch
            onValueChange={setCourseId}
            options={courseOptions}
            name="course"
            label="Course"
          />
          <AUSelect
            disabled={!courseId || fetchingFaculties}
            name="faculty"
            label="Faculty"
            options={facultiesOptions}
          />
          <AUInput type="text" name="section" label="Section" />
          <AUInput type="text" name="maxCapacity" label="Max Capacity" />
          <AUSelect
            mode="multiple"
            options={weekDaysOptions}
            name="days"
            label="Days"
          />
          <AUTimePicker name="startTime" label="Start Time" />
          <AUTimePicker name="endTime" label="End Time" />

          <Button htmlType="submit">Submit</Button>
        </AUForm>
      </Col>
    </Flex>
  );
};

export default OfferCourse;