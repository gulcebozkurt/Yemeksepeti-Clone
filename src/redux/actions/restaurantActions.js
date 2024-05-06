import api from '../../utils/api';
import Actions from '../actionTypes';

//* Restoran verilerini alıp store'a aktaran bir aksiyon fonksiyonu yazıcaz
export const getRestaurants = () => (dispatch) => {
    dispatch({ type: Actions.REST_LOADING });

    api
        .get('/restaurants')
        .then((res) => dispatch({ type: Actions.REST_SUCCESS, payload: res.data }))
        .catch((err) =>
            dispatch({ type: Actions.REST_ERROR, payload: err.message })
        );
};
