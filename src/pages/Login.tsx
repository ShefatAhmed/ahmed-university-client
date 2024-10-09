import { Button, Row } from "antd";
import { FieldValues} from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import AUInput from "../components/form/AUInput";
import AUForm from "../components/form/AUForm";

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const defaultValues = {
    userId: "A-0002",
    password: "admin12345"
  }


  const [login] = useLoginMutation()

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("logging in")
    try {
      const userInfo = {
        id: data.userId,
        password: data.password
      }
      const res = await login(userInfo).unwrap()
      const user = verifyToken(res.data.accessToken) as TUser
      dispatch(setUser({ user: user, token: res.data.accessToken }))
      toast.success("logged in", { id: toastId, duration: 2000 })
      navigate(`/${user.role}/dashboard`)
    } catch {
      toast.error("something went wrong", { id: toastId, duration: 2000 })
    }
  }
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <AUForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <AUInput type="text" name="userId" label="ID:" />
        <AUInput type="text" name="password" label="Password:" />
        <Button htmlType="submit">Login</Button>
      </AUForm>
    </Row>
  );
};

export default Login;