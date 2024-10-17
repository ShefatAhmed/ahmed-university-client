import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import { TResponse } from "../types";
import { logout } from "../redux/features/auth/authSlice";
import { useChangePasswordMutation } from "../redux/features/admin/userManagement.api";
import AUInput from "../components/form/AUInput";
import AUForm from "../components/form/AUForm";
import { Button, Row } from "antd";

const ChangePassword = () => {
    const [changePassword] = useChangePasswordMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const res = (await changePassword(data)) as TResponse<any>;
        if (res?.data?.success) {
            dispatch(logout());
            navigate('/login');
        }
    };
    return (
        <Row justify="center" align="middle" style={{ height: '100vh' }}>
            <AUForm onSubmit={onSubmit}>
                <AUInput type="text" name="oldPassword" label="Old Password" />
                <AUInput type="text" name="newPassword" label="New Password" />
                <Button htmlType="submit">Login</Button>
            </AUForm>
        </Row>
    );
};

export default ChangePassword;