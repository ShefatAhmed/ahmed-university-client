import { Form } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
    type: string;
    name: string;
    label?: string;
}

const AUInput = ({ type, name, label }: TInputProps) => {
    return (
        <div style={{ marginBottom: "20px" }}>
            <Controller
                name={name}
                render={({ field }) => <Form.Item label={label}><input {...field} type={type} id={name} /></Form.Item>}
            />
        </div>
    );
};

export default AUInput;