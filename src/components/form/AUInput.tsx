import { Controller } from "react-hook-form";

type TInputProps = {
    type: string;
    name: string;
    label?: string;
}

const AUInput = ({ type, name, label } : TInputProps) => {
    return (
        <div style={{ marginBottom: "20px" }}>
            <div>
                {label ? label : null}
            </div>
            <Controller
                name={name}
                render={({ field }) => (<input {...field} type={type} id={name} />)}
            />
        </div>
    );
};

export default AUInput;