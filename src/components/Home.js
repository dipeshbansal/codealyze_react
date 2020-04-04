import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

    editHandler = (id) => {
        this.props.history.push({
            pathname: '/edit-product',
            id
        })
    }
    
    
    render() { 

        const {products} = this.props.productsInfo
        return ( 
            <table>
                <thead>
                    <tr>
                        <th className="table-head">Name</th>
                        <th className="table-head">Weight</th>
                        <th className="table-head">Avalability</th>
                        <th className="table-head">isEditable</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products ? products.map((product , index) => (
                            <tr key={index}>
                                <th >{product.name}</th>
                                <th>{ product.weight }</th>
                                <th>{product.availability}</th>
                                <th>{ product.isEditable  ? <p onClick={() => this.editHandler(index)}>Edit</p> : '' }</th>
                            </tr>
                        )): <tr><th>Loading</th></tr>
                    }
                </tbody>
            </table>
         );
    }
}

function mapStateToProps(state){
    return{
        productsInfo : state.productsInfo
    }
}
 
export default connect(mapStateToProps)(Home);



