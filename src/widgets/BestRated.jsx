import React from 'react';
import { Row, Col } from 'antd';
import { ResCard } from '../components/restCard.jsx'

class BestRated extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bestRes: []
        };
    }
    
    componentDidMount() {
        let i = 1;
        var temp = [];
        console.log(this.props.BestRated);
        this.props.BestRated.forEach(el => {
            temp.push(el.restaurant)
            if(i%4 == 0) {
                this.state.bestRes.push(temp)
                temp = []
            }
            i++;
        })
    }

    render() {
        return (
            <div>
                <h1>Here are the best rated restaurants, close to you ✨✨✨</h1>
                { this.state.bestRes.map((value, index) => {
                    return(
                        <Row key={`${index} bestRow`}>
                            { value.map((res, ind) => (<Col span={6}>
                                <ResCard key={`${ind} + ${index} + resCard BesatRated`} data={res}/>
                            </Col>)) }
                        </Row>
                    );
                }) }
            </div>
        );
    }
}

export default BestRated;