import { Component } from 'react';
import axios from 'axios';
import { notification } from 'antd';
import 'antd/dist/antd.css';
import { CloseCircleTwoTone } from '@ant-design/icons';

// e2b8dec8420d4763913f56e45692667b

class CaraSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: ''
        };
    }

    componentDidMount() {
        axios.get('https://api.spoonacular.com/food/jokes/random', {
            params: {
                apiKey: 'https://api.spoonacular.com/food/jokes/random'
            }
        }).then(({ text }) => this.setState({
            joke: text
        })).catch(error => notification.open({
            message: 'Error in loading joke',
            description: error.message,
            icon: <CloseCircleTwoTone twoToneColor="#eb2f96" />,
            placement: 'bottomRight',
            type: 'error'
        }));
        axios.get();
    }
}

export default CaraSlide;