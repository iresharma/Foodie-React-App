import { Tabs } from 'antd';
import 'antd/dist/antd.css'

const { TabPane } = Tabs;

const Tabss = (props) => {
    return (
        <Tabs style={{
            marginLeft: '20px',
        }} defaultActiveKey="1">
            <TabPane tab="NearBy" key="1">
                NearBy
            </TabPane>
            <TabPane tab="Best Rated" key="2">
                Best Rated
            </TabPane>
            <TabPane tab="Cuisines" key="3">
                Cuisines
            </TabPane>
            <TabPane tab="Recipes" key="3">
                Recipes
            </TabPane>
        </Tabs>
    );
}

export default Tabss;