import React, { Component } from 'react'
import {connect} from 'react-redux'

class ModalGioHangReduce extends Component {
    render() {
        //goi thu props moi
    console.log(this.props.gioHang);

        return (
            <div>
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {// chuyen state tren store thanh this.props.gioHang
    return {
        gioHang: state.CartReducer.gioHang
    }
}
export default connect(mapStateToProps,null)(ModalGioHangReduce)