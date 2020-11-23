import { Card, Rate, Tag, Button } from 'antd';
import 'antd/dist/antd.css'

const { Meta } = Card;

const colors = [
    "magenta",
    "red",
    "volcano",
    "orange",
    "gold",
    "lime",
    "green",
    "cyan",
    "blue",
    "geekblue",
    "purple"
];

const ope = (link) => window.open(link, '_blank');

const ResCard = (props) => {
    return (
        <Card style={{
            height: '100%'
        }} title={<h3>{props.data.name}</h3>} cover={<img src={props.data.featured_image == '' ? props.data.thumb == '' ? './static/food2.jpg' : props.data.thumb : props.data.featured_image} alt="Featured" height="200" />}
            size="small"
            extra={<a href={props.data.url}>More</a>}
        >
            <Meta description={props.data.timings} />
            <Rate allowHalf disabled defaultValue={props.data.user_rating.aggregate_rating} />&nbsp;
            {props.data.user_rating.aggregate_rating} (Total: {props.data.all_reviews_count}) <br />
            Cost for two: {props.data.currency} {props.data.average_cost_for_two} <br />
            Highlights: <br />
            {props.data.highlights.map((value, index) => {
                return (
                    <Tag color={index > colors.length ? colors[index % colors.length] : colors[index]}>{value}</Tag>
                );
            })}
            <br />
        </Card>
    );
}

const skelResCard = () => {
    return (
        <Card size="small" title='hey'>
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



// apikey
// id
// name
// url
// location
// switch_to_order_menu
// cuisines
// timings
// average_cost_for_two
// price_range
// currency
// highlights
// offers
// opentable_support
// is_zomato_book_res
// mezzo_provider
// is_book_form_web_view
// book_form_web_view_url
// book_again_url
// thumb
// user_rating
// all_reviews_count
// photos_url
// photo_count
// menu_url
// featured_image
// has_online_delivery
// is_delivering_now
// store_type
// include_bogo_offers
// deeplink
// order_url
// order_deeplink
// is_table_reservation_supported
// has_table_booking
// events_url
// phone_numbers
// all_reviews
// establishment