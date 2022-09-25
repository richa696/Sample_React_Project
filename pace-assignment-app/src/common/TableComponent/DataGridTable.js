import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  PaginationTotalStandalone,
  SizePerPageDropdownStandalone
} from "react-bootstrap-table2-paginator";
import "../TableComponent/DataGridTable.css";
class DataGridTable extends Component {
  
  
  render() {
    /*   DATA TABLE  const start   */
    const { SearchBar } = Search;
    const paginationOption = {
      custom: true,
      sizePerPageList:[ {
        text: '10', value: 10,
      }, 
      {
        text: '15', value: 15
      } ,
      {
        text: '20', value: 20
      } ,
      {
        text: '25', value: 25
      }, 
      {
        text: '30', value: 30
      }, 
      {
        text: 'All', value: 200
      } ,
      ]
    };
    const rowStyle = (cell, row, rowIndex, formatExtraData) => {
      const style = {};
        style.minHeight = "50px";
        style.fontSize= "14px"
        return style;
    };
    /*  DATA TABLE  const end */
    return (
      <div>
        {/* DATA TABLE START*/}
        <div className="card">
          <div className="card-body">
            <div align="center">
              <h5> {this.props.heading} </h5>
            </div>
            <ToolkitProvider
              keyField="questionId"
              data={this.props.list}
              columns={this.props.columns}
              fetchInfo={{dataTotalSize: 200}}
              search
            >
              {(props) => (
                <div>
                  <div className="table-responsive " style={{textAlign:"right"}}>
                    <PaginationProvider
                      pagination={paginationFactory(paginationOption)}
                    >
                      {
                        ({
                          paginationProps,
                          paginationTableProps
                        }) => (
                          <>
                            <div className="filterss-row">
                              <div className="col-m">
                           <span >
                              <SizePerPageDropdownStandalone
                                variation="dropdown"
                                btnContextual='btn-outline-primary'
                               {...paginationProps}
                              />
                            </span>
                            </div>
                              
                            {/* <div className="col-m datatb-search">
                                <SearchBar
                                  style={{ display: "block", marginLeft: "auto", marginRight: "auto", marginBottom: "10px" }}
                                  {...props.searchProps}
                                />
                              </div> */}
                              
                            </div>
                           <div className="">
                           <BootstrapTable
                              wrapperClasses="table-responsive "
                              selectRow={this.props.selectRow}
                              rowStyle={rowStyle}
                              {...paginationTableProps}
                              {...props.baseProps}
                              noDataIndication={"no results found"}
                            />
                            </div>
                            <div className="col mt-3">
                            <div>
                            <span >
                            <PaginationTotalStandalone
                              {...paginationProps}
                            /></span>
                            </div>
                            <div >
                            <span className="d-flex justify-content-end mt-3">
                              <PaginationListStandalone
                                {...paginationProps}
                              />
                            </span></div>
                            </div>
                          </>
                        )
                      }
                    </PaginationProvider>
                  </div>
                </div>
              )}
            </ToolkitProvider>
          </div>
        </div>
        {/* DATA TABLE END */}
      </div>
    );
  }
}
export default DataGridTable;