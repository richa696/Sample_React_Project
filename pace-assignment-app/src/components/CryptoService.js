import { Component } from 'react';
import { request } from "../utils/ApiUtils";
import { API_BASE_URL } from '../constants';

class CryptoService extends Component {
    getAllCryptoCurrencyList() {
        return request({
            url: `${API_BASE_URL}/api/getData`,
            method: 'GET',
        });
    }
}
export default new CryptoService();