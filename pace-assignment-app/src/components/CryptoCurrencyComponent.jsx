import React, { Component } from 'react';
import DataGridTable from '../common/TableComponent/DataGridTable';
import CryptoService from './CryptoService';

class CryptoCurrencyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            Col: [
                {
                  dataField: "Name",
                  text: "Name",
                },
                {
                  dataField: "Price",
                  text: "Price",
                },
                {
                  dataField: "_1h",
                  text: "1h %",
                },
                {
                  dataField: "_24h",
                  text: "24h %",
                },
                {
                  dataField: "_7d",
                  text: "Rating",
                },
                {
                    dataField: "_7d",
                    text: "7d %",
                },
                {
                    dataField: "market_cap",
                    text: "Market Cap",
                },
                {
                    dataField: "volume",
                    text: "Volume(24h)",
                },
                {
                    dataField: "circulating_supply",
                    text: "Circulating Supply",
                },
              ],
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        setInterval(() => {
            this.getData()
          }, 3000);
    }

    getData=async()=>{
        await CryptoService.getAllCryptoCurrencyList().then((res) => {
        console.log(res);
        if (res.status === "success") {
            this.setState({
                data: res.data,
            })
        }
        this.getData()
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <DataGridTable
                    list={this.state.data}
                    columns={this.state.Col}>
                </DataGridTable>  
            </div>
        );
    }
}

export default CryptoCurrencyComponent;