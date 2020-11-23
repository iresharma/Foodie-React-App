import React from 'react';
import { Row, Col, notification } from 'antd';
import 'antd/dist/antd.css';
import Axios from 'axios';
import { CloseCircleTwoTone } from '@ant-design/icons';
import { ResCard } from '../components/restCard.jsx'

class Nearby extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            res: []
        }
    }

    componentDidMount() {
        let i = 1;
        let temper = [];
        this.props.nearby.forEach(el => {
            Axios.get('https://developers.zomato.com/api/v2.1/restaurant', {
                headers: {
                    'user-key': '655ca06ce2e6d6fb55be4f02dffa7f9a'
                },
                params: {
                    res_id: el
                }
            }).then(({ data }) => {
                console.log(data);
                temper.push(data);
                if (i % 4 == 0) {
                    let temp = this.state.res;
                    temp.push(temper);
                    temper = [];
                    this.setState({
                        res: temp
                    });
                }
                i++;
            }).catch(error => notification.open({
                message: 'Error in loading restaurant',
                description: error.message,
                icon: <CloseCircleTwoTone twoToneColor="#eb2f96" />,
                placement: 'bottomRight',
                type: 'error'
            }))
        })
    }

    render() {
        return (
            <div>
                <h1>Bringing you resturants near you ♥️</h1>
                { this.state.res.map((value, index) => {
                    return (
                        <Row>
                            { value.map((value, index) => {
                                return (
                                    <Col span={6}>
                                        <ResCard data={value} />
                                    </Col>
                                );
                            })}
                        </Row>
                    )
                })}
            </div>
        );
    }
}

export default Nearby;