import axios from 'axios';

const getLocationDetails = async () => {
    let res = await axios.get('https://developers.zomato.com/api/v2.1/location_details', {
        headers: {
            'user-key': '655ca06ce2e6d6fb55be4f02dffa7f9a'
        },
        params: {
            entity_id: localStorage.getItem('entity_id'),
            entity_type: localStorage.getItem('entity_type')
        }
    });
    let data = res.data;
    return {
        bestRatedRes: data.best_rated_restaurant,
        nearByRes: data.nearby_res,
        nightlifeInd: data.nightlife_index,
        numRes: data.num_restaurant,
        popularity: data.popularity,
        cuisines: data.top_cuisines,
    };
}

export { getLocationDetails }