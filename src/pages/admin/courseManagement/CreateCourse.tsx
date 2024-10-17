import { Button, Col, Flex } from "antd";
import AUForm from "../../../components/form/AUForm";
import AUInput from "../../../components/form/AUInput";
import AUSelect from "../../../components/form/AUSelect";
import { toast } from "sonner";
import { TResponse } from "../../../types";
import { useAddCourseMutation, useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement";
import { FieldValues, SubmitHandler } from "react-hook-form";

const CreateCourse = () => {
  const [createCourse] = useAddCourseMutation();
  const { data: courses } = useGetAllCoursesQuery(undefined);

  const preRequisiteCoursesOptions = courses?.data?.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Creating...');

    const courseData = {
      ...data,
      code: Number(data.code),
      credits: Number(data.credits),
      isDeleted: false,
      preRequisiteCourses: data.preRequisiteCourses
        ? data.preRequisiteCourses?.map((item: any) => ({
          course: item,
          isDeleted: false,
        }))
        : [],
    };

    console.log(courseData);

    try {
      const res = (await createCourse(courseData)) as TResponse<any>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success('Course created', { id: toastId });
      }
    } catch {
      toast.error('Something went wrong', { id: toastId });
    }
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <AUForm onSubmit={onSubmit}>
          <AUInput type="text" name="title" label="Title" />
          <AUInput type="text" name="prefix" label="Prefix" />
          <AUInput type="text" name="code" label="Code" />
          <AUInput type="text" name="credits" label="Credits" />
          <AUSelect
            mode="multiple"
            options={preRequisiteCoursesOptions}
            name="preRequisiteCourses"
            label="preRequisiteCourses"
          />
          <Button htmlType="submit">Submit</Button>
        </AUForm>
      </Col>
    </Flex>
  );
};

export default CreateCourse;