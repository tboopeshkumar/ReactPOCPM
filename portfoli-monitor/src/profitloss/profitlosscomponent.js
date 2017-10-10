import React, {Component} from "react";
import {AgGridReact, numberParser} from "ag-grid-react";
// pull in the ag-grid styles we're interested in
import "ag-grid-root/dist/styles/ag-grid.css";
import "ag-grid-root/dist/styles/theme-dark.css";
import './gridstyles.css';

export default class ProfitLoss extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: this.createColumnDefs(),
            rowData: this.createRowData()
        }
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
        this.gridApi.domLayout ='autoHeight';
        this.gridApi.sizeColumnsToFit();
    }

    createColumnDefs() {
        var negvaluecells ={                
            'neg-value-red': 'x < 0'
        }
        return [
            {headerName: "Symbol", field: "symbol", cellClass : 'yellow-color-text'},
            {headerName: "Financial Type", field: "fintype" , cellClass : 'yellow-color-text'},
            {headerName: "Market Value Local", field: "marketvaluelocal",valueParser : numberParser, cellClassRules: negvaluecells},
            {headerName: "Market Value", field: "marketvalue",valueParser : numberParser, cellClassRules: negvaluecells},
            {headerName: "Total PL Today(Est)", field: "pltotaltodayest",valueParser : numberParser, cellClassRules: negvaluecells},
            {headerName: "PL Today Local", field: "pltotaytotal",valueParser : numberParser, cellClassRules: negvaluecells},
            {headerName: "Cost", field: "cost",valueParser : numberParser, cellClassRules: negvaluecells},
            {headerName: "Symbol Last Price", field: "symbollastprice",cellClass : 'yellow-color-text'},
            {headerName: "Symbol Description", field: "sysmboldesc",cellClass : 'yellow-color-text'},
            {headerName: "Quantity", field: "quantity", cellClass : 'yellow-color-text'},

            
        ];
    }

    createRowData() {
        return [
            {symbol: "Toyota", fintype: "Celica", marketvaluelocal: 35000,marketvalue: 35000,pltotaltodayest: 35000,pltotaytotal: 35000,cost: 35000,symbollastprice: 35000,sysmboldesc: 35000,quantity: 35000},
            {symbol: "Toyota", fintype: "Celica", marketvaluelocal: 35000,marketvalue: 35000,pltotaltodayest: 35000,pltotaytotal: 35000,cost: 35000,symbollastprice: -35000,sysmboldesc: 35000,quantity: 35000},
            {symbol: "Toyota", fintype: "Celica", marketvaluelocal: 35000,marketvalue: 35000,pltotaltodayest: 35000,pltotaytotal: 35000,cost: 35000,symbollastprice: 35000,sysmboldesc: 35000,quantity: 35000},
            {symbol: "Toyota", fintype: "Celica", marketvaluelocal: 35000,marketvalue: 35000,pltotaltodayest: 35000,pltotaytotal: 35000,cost: 35000,symbollastprice: 35000,sysmboldesc: 35000,quantity: 35000},
            {symbol: "Toyota", fintype: "Celica", marketvaluelocal: 35000,marketvalue: 35000,pltotaltodayest: -35000,pltotaytotal: 35000,cost: 35000,symbollastprice: 35000,sysmboldesc: 35000,quantity: 35000},
            {symbol: "Toyota", fintype: "Celica", marketvaluelocal: 35000,marketvalue: 35000,pltotaltodayest: 35000,pltotaytotal: 35000,cost: 35000,symbollastprice: 35000,sysmboldesc: 35000,quantity: 35000},
            {symbol: "Toyota", fintype: "Celica", marketvaluelocal: 35000,marketvalue: 35000,pltotaltodayest: 35000,pltotaytotal: 35000,cost: 35000,symbollastprice: 35000,sysmboldesc: 35000,quantity: 35000},
            {symbol: "Toyota", fintype: "Celica", marketvaluelocal: 35000,marketvalue: 35000,pltotaltodayest: 35000,pltotaytotal: 35000,cost: 35000,symbollastprice: 35000,sysmboldesc: 35000,quantity: 35000},
            {symbol: "Toyota", fintype: "Celica", marketvaluelocal: 35000,marketvalue: 35000,pltotaltodayest: 35000,pltotaytotal: -35000,cost: 35000,symbollastprice: 35000,sysmboldesc: 35000,quantity: 35000},
            {symbol: "Toyota", fintype: "Celica", marketvaluelocal: 35000,marketvalue: 35000,pltotaltodayest: 35000,pltotaytotal: 35000,cost: 35000,symbollastprice: 35000,sysmboldesc: 35000,quantity: 35000},
            {symbol: "Toyota", fintype: "Celica", marketvaluelocal: 35000,marketvalue: 35000,pltotaltodayest: 35000,pltotaytotal: 35000,cost: 35000,symbollastprice: 35000,sysmboldesc: 35000,quantity: 35000},
            {symbol: "Toyota", fintype: "Celica", marketvaluelocal: 35000,marketvalue: 35000,pltotaltodayest: 35000,pltotaytotal: 35000,cost: 35000,symbollastprice: 35000,sysmboldesc: 35000,quantity: 35000},
            {symbol: "Toyota", fintype: "Celica", marketvaluelocal: 35000,marketvalue: 35000,pltotaltodayest: 35000,pltotaytotal: 35000,cost: 35000,symbollastprice: 35000,sysmboldesc: 35000,quantity: 35000},
            {symbol: "Toyota", fintype: "Celica", marketvaluelocal: 35000,marketvalue: 35000,pltotaltodayest: 35000,pltotaytotal: 35000,cost: 35000,symbollastprice: 35000,sysmboldesc: 35000,quantity: 35000},
            {symbol: "Toyota", fintype: "Celica", marketvaluelocal: 35000,marketvalue: 35000,pltotaltodayest: -35000,pltotaytotal: 35000,cost: 35000,symbollastprice: 35000,sysmboldesc: 35000,quantity: 35000},
            {symbol: "Toyota", fintype: "Celica", marketvaluelocal: 35000,marketvalue: 35000,pltotaltodayest: 35000,pltotaytotal: 35000,cost: 35000,symbollastprice: 35000,sysmboldesc: 35000,quantity: 35000},
        ];
    }

    render() {
        let containerStyle = {
            height: '600px',
            width: '500px'
        };

        return (
            <div style={containerStyle} className="ag-dark">
              
                <AgGridReact
                    // properties
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}

                    // events
                    onGridReady={this.onGridReady}>
                </AgGridReact>
            </div>
        )
    }
};
