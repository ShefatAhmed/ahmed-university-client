import { Button, Col, Flex } from "antd";
import AUForm from "../../../components/form/AUForm";
import AUSelect from "../../../components/form/AUSelect";
import AUDatePicker from "../../../components/form/AUDatePicker";
import AUInput from "../../../components/form/AUInput";
import { toast } from "sonner";
import { TResponse } from "../../../types";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddRegisteredSemesterMutation } from "../../../redux/features/admin/courseManagement";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { semesterStatusOptions } from "../../../constants/semester";

const SemesterRegistration = () => {
  const [addSemester] = useAddRegisteredSemesterMutation();
  const { data: academicSemester } = useGetAllSemestersQuery([
    { name: 'sort', value: 'year' },
  ]);

  const academicSemesterOptions = academicSemester?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Creating...');

    const semesterData = {
      ...data,
      minCredit: Number(data.minCredit),
      maxCredit: Number(data.maxCredit),
    };

    console.log(semesterData);

    try {
      const res = (await addSemester(semesterData)) as TResponse<any>;
      console.log(res);
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success('Semester created', { id: toastId });
      }
    } catch {
      toast.error('Something went wrong', { id: toastId });
    }
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <AUForm onSubmit={onSubmit}>
          <AUSelect
            label="Academic Semester"
            name="academicSemester"
            options={academicSemesterOptions}
          />

          <AUSelect
            name="status"
            label="Status"
            options={semesterStatusOptions}
          />
          <AUDatePicker name="startDate" label="Start Date" />
          <AUDatePicker name="endDate" label="End Date" />
          <AUInput type="text" name="minCredit" label="Min Credit" />
          <AUInput type="text" name="maxCredit" label="Max Credit" />

          <Button htmlType="submit">Submit</Button>
        </AUForm>
      </Col>
    </Flex>
  );
};

export default SemesterRegistration;