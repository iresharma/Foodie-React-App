import { Menu, Row, Col, notification, PageHeader, Button } from 'antd';
import { CloseCircleTwoTone } from '@ant-design/icons';
import Axios from 'axios';
import React from 'react'

class Cuisines extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: [
                {
                    "R": {
                        "res_id": 18715809,
                        "is_grocery_store": false,
                        "has_menu_status": {
                            "delivery": -1,
                            "takeaway": -1
                        }
                    },
                    "apikey": "655ca06ce2e6d6fb55be4f02dffa7f9a",
                    "id": "18715809",
                    "name": "Classic Fast Food Centre",
                    "url": "https://www.zomato.com/kolkata/classic-fast-food-centre-1-baranagar?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                    "location": {
                        "address": "290, Gopal Lal Thakur Road, Near Ramkrishna Mission School, Jai Shree Cinema Building, Baranagar, Kolkata",
                        "locality": "Baranagar",
                        "city": "Kolkata",
                        "city_id": 2,
                        "latitude": "22.6349564692",
                        "longitude": "88.3718726411",
                        "zipcode": "",
                        "country_id": 1,
                        "locality_verbose": "Baranagar, Kolkata"
                    },
                    "switch_to_order_menu": 0,
                    "cuisines": "Chinese, Biryani, North Indian, Seafood, Mughlai, Rolls, Fast Food",
                    "timings": "12 Noon to 11 PM",
                    "average_cost_for_two": 200,
                    "price_range": 1,
                    "currency": "Rs.",
                    "highlights": [
                        "Takeaway Available",
                        "Delivery",
                        "Lunch",
                        "Cash",
                        "Dinner",
                        "Indoor Seating"
                    ],
                    "offers": [],
                    "zomato_events": [
                        {
                            "event": {
                                "event_id": 473705,
                                "friendly_start_date": "31 October",
                                "friendly_end_date": "31 March, 2021",
                                "friendly_timing_str": "Saturday, 31st October - Wednesday, 31st March",
                                "start_date": "2020-10-31",
                                "end_date": "2021-03-31",
                                "end_time": "15:00:00",
                                "start_time": "12:00:00",
                                "is_active": 1,
                                "date_added": "2020-10-31 13:29:30",
                                "photos": [],
                                "restaurants": [],
                                "is_valid": 1,
                                "share_url": "http://www.zoma.to/r/0",
                                "show_share_url": 0,
                                "title": "Zomato Pro",
                                "description": "Get Discount on Dining with Zomato Pro",
                                "display_time": "12:00 pm - 03:00 pm",
                                "display_date": "31 October - 31 March",
                                "is_end_time_set": 1,
                                "disclaimer": "Restaurants are solely responsible for the service; availability and quality of the events including all or any cancellations/ modifications/ complaints.",
                                "event_category": 0,
                                "event_category_name": "",
                                "book_link": "",
                                "types": [],
                                "share_data": {
                                    "should_show": 0
                                }
                            }
                        }
                    ],
                    "opentable_support": 0,
                    "is_zomato_book_res": 0,
                    "mezzo_provider": "OTHER",
                    "is_book_form_web_view": 0,
                    "book_form_web_view_url": "",
                    "book_again_url": "",
                    "thumb": "https://b.zmtcdn.com/data/pictures/9/18715809/c5a77240abe345b1e99e47c3828ed878.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                    "user_rating": {
                        "aggregate_rating": "4.0",
                        "rating_text": "Very Good",
                        "rating_color": "5BA829",
                        "rating_obj": {
                            "title": {
                                "text": "4.0"
                            },
                            "bg_color": {
                                "type": "lime",
                                "tint": "600"
                            }
                        },
                        "votes": 23943
                    },
                    "all_reviews_count": 177,
                    "photos_url": "https://www.zomato.com/kolkata/classic-fast-food-centre-1-baranagar/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
                    "photo_count": 30,
                    "menu_url": "https://www.zomato.com/kolkata/classic-fast-food-centre-1-baranagar/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
                    "featured_image": "https://b.zmtcdn.com/data/pictures/9/18715809/c5a77240abe345b1e99e47c3828ed878.jpg?output-format=webp",
                    "medio_provider": false,
                    "has_online_delivery": 1,
                    "is_delivering_now": 0,
                    "store_type": "",
                    "include_bogo_offers": true,
                    "deeplink": "zomato://restaurant/18715809",
                    "is_table_reservation_supported": 0,
                    "has_table_booking": 0,
                    "events_url": "https://www.zomato.com/kolkata/classic-fast-food-centre-1-baranagar/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
                    "phone_numbers": "+91 9830353890, +91 9875375561",
                    "all_reviews": {
                        "reviews": [
                            {
                                "review": []
                            },
                            {
                                "review": []
                            },
                            {
                                "review": []
                            },
                            {
                                "review": []
                            },
                            {
                                "review": []
                            }
                        ]
                    },
                    "establishment": [
                        "Quick Bites"
                    ],
                    "establishment_types": []
                }
            ]
        };
        console.log(props.cuisines)
    }

    componentDidMount() {
        var temp = []
        for(var i = 0; i<15; i++){
            temp.push(this.state.show[0])
        }
        this.setState({
            show: temp
        })
        Axios.get('https://developers.zomato.com/api/v2.1/search', {
            headers: {
                'user-key': '655ca06ce2e6d6fb55be4f02dffa7f9a',
                'Access-Control-Allow-Origin': '*'
            },
            params: {
                entity_id: localStorage.getItem('entity_id'),
                entity_type: localStorage.getItem('entity_type'),
                cuisunes: this.props.cuisines[0]
            }
        }).then(({ data }) => {
            this.setState({
                show: data['restaurants']
            })
        }).catch(error => notification.open({
            message: 'Error in loading restaurant',
            description: error.message,
            icon: <CloseCircleTwoTone twoToneColor="#eb2f96" />,
            placement: 'bottomRight',
            type: 'error'
        }))
    }

    handleClick = e => {
        console.log(e)
        Axios.get('https://developers.zomato.com/api/v2.1/search', {
            headers: {
                'user-key': '655ca06ce2e6d6fb55be4f02dffa7f9a',
                'Access-Control-Allow-Origin': '*'
            },
            params: {
                entity_id: localStorage.getItem('entity_id'),
                entity_type: localStorage.getItem('entity_type'),
                cuisunes: this.props.cuisines[e.key]
            }
        }).then(({ data }) => {
            this.setState({
                show: data['restaurants']
            })
        }).catch(error => notification.open({
            message: 'Error in loading restaurant',
            description: error.message,
            icon: <CloseCircleTwoTone twoToneColor="#eb2f96" />,
            placement: 'bottomRight',
            type: 'error'
        }))
    };

    render() {
        return (
            <div>
                <h1>Famous Cuisines around you</h1>
                <Row>
                    <Col span={4}>
                        <Menu
                            onClick={this.handleClick}
                            defaultSelectedKeys={['0']}
                            mode="inline">
                            {this.props.cuisines.map((value, index) => <Menu.Item key={index}>{value}</Menu.Item>)}
                        </Menu>
                    </Col>
                    <Col span={20} style={{
                        padding: 10,
                        height: '70vh',
                        overflowY: 'scroll'
                    }}>
                        {this.state.show.map((value, ind) => <PageHeader key={ind}
                            ghost={false}
                            title={value.name}
                            subTitle={`Rating: ${value['user_rating']['aggregate_rating']}`}
                            extra={[
                            <Button key="2">Price for 2:  ₹{ value['average_cost_for_two'] }</Button>,
                                <Button href={value.url} key="1" type="primary">
                                    More
                                </Button>,
                            ]}
                        ></PageHeader>)}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Cuisines;