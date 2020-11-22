import { Card } from 'antd';
import 'antd/dist/antd.css'

const ResCard = (props) => {
    return (
        <Card title={props.name}>
            {props.more}
        </Card>
    );
}

const skelResCard = () => {
    return (
        <Card title='hey'>
            <h1>Hi</h1>
        </Card>
    );
}

const loadResCard = () => {
    return (
        <Card title='hey'>
            <h1>Hi</h1>
        </Card>
    );
}

export { ResCard, skelResCard, loadResCard };