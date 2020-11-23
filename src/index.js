import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Row, Col, Breadcrumb, Menu, notification, Button, PageHeader, Tag, Result } from 'antd';
import 'antd/dist/antd.css';
import { LinkedinOutlined, InstagramOutlined, GithubOutlined, CloseCircleTwoTone, CodeOutlined } from '@ant-design/icons';
import Tabss from './widgets/Tabss.jsx'

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

    getLocationData() {
        axios.get('https://developers.zomato.com/api/v2.1/location_details', {
            headers: {
                'user-key': '655ca06ce2e6d6fb55be4f02dffa7f9a'
            },
            params: {
                entity_id: localStorage.getItem('entity_id'),
                entity_type: localStorage.getItem('entity_type')
            }
        }).then(({ data }) => this.setState({
            bestRatedRes: data.best_rated_restaurant,
            nearByRes: data.nearby_res,
            nightlifeInd: data.nightlife_index,
            numRes: data.num_restaurant,
            popularity: data.popularity,
            cuisines: data.top_cuisines,
        })).catch(error => this.openNotification(
            'Error in getting location info',
            'error',
            error.message,
            <CloseCircleTwoTone twoToneColor="#eb2f96" />
        ));
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                if (localStorage.getItem('city')) {
                    this.getLocationData();
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
                        this.getLocationData();
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
                    <a target="_blank" rel="noreferrer" style={{
                        color: 'red'
                    }} rel="noopener" href="https://developers.zomato.com/api">
                        Zomato API
                </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noreferrer" style={{
                        color: 'green'
                    }} rel="noopener" href="https://spoonacular.com/food-api/">
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
                            <img src="static/logo.svg" alt="Logo" height='60px' width='60px' /> &nbsp;
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
                                    <a target="_blank" rel="noreferrer" href="https://iresharma.me">Iresharma</a>
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </Col>
                </Row>
                <div style={{
                    height: '90vh',
                }}>
                    <img src="./static/food1.jpg" height="100%" width="100%" alt="Food" />
                    <div style={{
                        position: 'absolute',
                        top: '30vh',
                        marginLeft: '30px',
                    }}>
                        <p style={{
                            fontSize: 45,
                            fontWeight: 800,
                            width: '40%',
                            height: '30vh',
                            color: '#D41F00'
                        }}>
                            Here's a collection of restaurants around you and a few recipes as well <br />
                            <span style={{
                                fontSize: 30,
                                fontWeight: 300
                            }}>Made with <img src="./logo192.png" height="40" alt="React Logo" /> React</span> <br />
                            <Button onClick={() => window.open('https://iresharma.me', '_blank')} type="dashed" icon={<CodeOutlined />}>Iresharma -&gt;</Button>
                        </p>
                    </div>
                </div>
                <PageHeader
                    ghost={false}
                    title="NearBy"
                    subTitle={localStorage.getItem('title')}
                    extra={[
                        <Tag color="magenta">Nightlife: {this.state.nightlifeInd}</Tag>,
                        <Tag color="green">Popularity: {this.state.popularity}</Tag>,
                    ]}
                />
                { this.state.nearByRes && <Tabss data={this.state} />}
                <Result
                    icon={<img src="./static/imgimg.jpg" alt="Foodie" width="50%" />}
                    title="Here's a random foodie thought"
                    subTitle="Sorry, you are not authorized to access this page."
                    extra={<Button type="primary">New thought</Button>}
                />
            </div>
        );
    }

}

export default App;


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)