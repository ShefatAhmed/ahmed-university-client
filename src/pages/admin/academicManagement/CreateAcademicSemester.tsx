import { FieldValues, SubmitHandler } from "react-hook-form";
import AUForm from "../../../components/form/AUForm";
import { Button, Col, Flex } from "antd";
import AUSelect from "../../../components/form/AUSelect";
import { semesterOptions } from "../../../constants/semester";
import { monthOptions } from "../../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicMangement.Schema";


const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
    value: String(currentYear + number),
    label: String(currentYear + number),
}))

const CreateAcademicSemester = () => {
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const name = semesterOptions[Number(data?.name) - 1]?.label
        const semesterData = {
            name,
            code: data.name,
            year: data.year,
            startMonth: data.startMonth,
            endMonth: data.endMonth
        }
        console.log(semesterData);
    }

    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <AUForm onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)}>
                    <AUSelect label="Name" name="name" options={semesterOptions} />
                    <AUSelect label="Year" name="year" options={yearOptions} />
                    <AUSelect label="Start Month" name="startMonth" options={monthOptions} />
                    <AUSelect label="End Month" name="endMonth" options={monthOptions} />
                    <Button htmlType="submit">Submit</Button>
                </AUForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;