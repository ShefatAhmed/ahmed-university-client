import { Layout } from 'antd';
import Sidebar from './Sidebar';
const MainLayout = () => {
    return (
        <Layout style={{ height: "100%" }}>
            <Sidebar />
        </Layout>
    )
};

export default MainLayout;