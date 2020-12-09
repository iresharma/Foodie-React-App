import { Tabs } from 'antd';
import 'antd/dist/antd.css'
import Nearby from './Nearby';
import BestRated from './BestRated'
import Cuisines from './Cuisines'

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
                <BestRated BestRated={props.data.bestRatedRes}/>
            </TabPane>
            <TabPane tab="Cuisines" key="3">
                <Cuisines cuisines={props.data.cuisines} />
            </TabPane>
            <TabPane tab="Recipes" key="4">
                Recipes
            </TabPane>
        </Tabs>
    );
}

export default Tabss;