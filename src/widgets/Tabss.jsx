import { Tabs } from 'antd';
import 'antd/dist/antd.css'

const { TabPane } = Tabs;

const Tabss = (props) => {
    return (
        <Tabs style={{
            marginLeft: '20px',
        }} defaultActiveKey="1">
            <TabPane tab="NearBy" key="1">
                Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Best Rated" key="2">
                Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Cuisines" key="3">
                Content of Tab Pane 3
            </TabPane>
        </Tabs>
    );
}

export default Tabss;