import { FieldValues, SubmitHandler } from "react-hook-form";
import AUForm from "../../../components/form/AUForm";
import AUInput from "../../../components/form/AUInput";
import { Button, Col, Flex } from "antd";
import AUSelect from "../../../components/form/AUSelect";

const CreateAcademicSemester = () => {
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
    }
    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <AUForm onSubmit={onSubmit}>
                    <AUInput type="text" name="name" label="name" />
                    <AUInput type="text" name="name" label="year" />
                    <AUSelect label="name" />
                    <Button htmlType="submit">Submit</Button>
                </AUForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;