import { Tabs } from 'antd';
import 'antd/dist/antd.css'
import Nearby from './Nearby';

const { TabPane } = Tabs;

const Tabss = (props) => {
    return (
        <Tabs style={{
            margin: '20px',
        }} defaultActiveKey="1">
            <TabPane tab="NearBy" key="1">
                <Nearby nearby={props.data.nearByRes} />
            </TabPane>
            <TabPane tab="Best Rated" key="2">
                Best Rated
            </TabPane>
            <TabPane tab="Cuisines" key="3">
                Cuisines
            </TabPane>
            <TabPane tab="Recipes" key="4">
                Recipes
            </TabPane>
        </Tabs>
    );
}

export default Tabss;