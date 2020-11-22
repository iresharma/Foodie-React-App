import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Row, Col, Breadcrumb, Menu, notification, Carousel } from 'antd';
import 'antd/dist/antd.css';
import { LinkedinOutlined, InstagramOutlined, GithubOutlined, CloseCircleTwoTone } from '@ant-design/icons';
import { getLocationDetails } from './functions/axiosFunc'


// 655ca06ce2e6d6fb55be4f02dffa7f9a

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    openNotification = (title, type, message, icon) => {
        notification.open({
            message: title,
            description: message,
            icon: icon,
            placement: 'bottomRight',
            type: type
        });
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                console.log(coords)
                if (localStorage.getItem('city')) {
                    getLocationDetails().then(data => console.log(data)).catch(error => this.openNotification(
                        'Error in getting location info',
                        'error',
                        error.message,
                        <CloseCircleTwoTone twoToneColor="#eb2f96" />
                    ));
                } else {
                    axios.get('https://developers.zomato.com/api/v2.1/locations', {
                        headers: {
                            'user-key': '655ca06ce2e6d6fb55be4f02dffa7f9a'
                        },
                        params: {
                            query: '',
                            lat: coords.latitude,
                            lon: coords.longitude
                        }
                    }).then((response) => {
                        let location_suggestions = response.data.location_suggestions[0];
                        localStorage.setItem('city', location_suggestions.city_name);
                        localStorage.setItem('entity_id', location_suggestions.entity_id);
                        localStorage.setItem('entity_type', location_suggestions.entity_type);
                        localStorage.setItem('title', location_suggestions.title);
                        this.setState({
                            title: location_suggestions.title
                        })
                        getLocationDetails().then(response => console.log(response)).catch(error => this.openNotification(
                            'Error in getting location info',
                            'error',
                            error.message,
                            <CloseCircleTwoTone twoToneColor="#eb2f96" />
                        ));
                    }).catch(error => this.openNotification(
                        'Error in getting location info',
                        'error',
                        error.message,
                        <CloseCircleTwoTone twoToneColor="#eb2f96" />
                    ))
                }
            },
            error => this.openNotification(
                'Error in getting location',
                'error',
                error.message,
                <CloseCircleTwoTone twoToneColor="#eb2f96" />
            )
        )
    }

    render() {

        const connect = (
            <Menu>
                <Menu.Item icon={<GithubOutlined />}>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/iresharma">
                        Github
                </a>
                </Menu.Item>
                <Menu.Item icon={<InstagramOutlined />}>
                    <a target="_blank" rel="noopener noreferrer" href="https://istagram.com/iresharma.py">
                        <code>@iresharma.py</code>
                    </a>
                </Menu.Item>
                <Menu.Item icon={<InstagramOutlined />}>
                    <a target="_blank" rel="noopener noreferrer" href="https://istagram.com/watchireshstruggle">
                        <code>@watchireshstruggle</code>
                    </a>
                </Menu.Item>
                <Menu.Item icon={<LinkedinOutlined />}>
                    <a target="_blank" rel="noopener noreferrer" href="www.linkedin.com/in/iresharma">
                        LinkedIn
                </a>
                </Menu.Item>
            </Menu>
        );

        const APIs = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" style={{
                        color: 'red'
                    }} rel="noopener noreferrer" href="https://developers.zomato.com/api">
                        Zomato API
                </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" style={{
                        color: 'green'
                    }} rel="noopener noreferrer" href="https://spoonacular.com/food-api/">
                        Spoonacular API
                </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/developers">
                        Unsplash API
                </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="https://ant.design">
                        Antdesign
                </a>
                </Menu.Item>
            </Menu>
        );

        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }} span={20}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <img src="static/logo.svg" height='60px' width='60px' /> &nbsp;
                            <h1 style={{ color: '#00849F' }}>Foodie</h1>
                        </div>
                        <div>
                            <Breadcrumb>
                                <Breadcrumb.Item>Foodie - A react App</Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    {localStorage.getItem('title')}
                                </Breadcrumb.Item>
                                <Breadcrumb.Item overlay={APIs}>
                                    <a href="">APIs</a>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item overlay={connect}>
                                    <a href="">Connect</a>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    <a target="_blank" href="https://iresharma.me">Iresharma</a>
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }

}

export default App;


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)