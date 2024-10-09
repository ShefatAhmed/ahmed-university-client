import React from "react";
import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TAUSelectProps = {
    label: string;
    name: string;
    options: { value: string; label: string; disabled?: boolean }[]
}

const AUSelect = ({ label, name, options }: TAUSelectProps) => {
    return (
        <Controller name={name} render={({ field, fieldState: {error} }) => <Form.Item label={label}>
            <Select
                style={{ width: "100%" }}
                {...field}
                options={options}
                size="large"
            />
            {error && <span style={{color: "red"}}>{error.message}</span>}
        </Form.Item>} />
    );
};

export default AUSelect;