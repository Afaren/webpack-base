import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResultList extends Component {
  render() {
    let {result} = this.props;
    
    return (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>name</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
          {
            result.map((v, k)=> {
              return (
                  <tr key={k}>
                    <td>{k+1}</td>
                    <td>{v.name}</td>
                    <td>{v.price}</td>
                  </tr>
              )
            })
          }
          </tbody>
        </table>
    )
  }
}

const mapStateToProps = (state)=> ({
  result: state.result
});

const mapDispatchToProps = (dispatch)=> ({
  selectLine: (id)=> {
    dispatch({
      type: "SELECT_LINE",
      id
    })
  }
});

ResultList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultList);

export default ResultList