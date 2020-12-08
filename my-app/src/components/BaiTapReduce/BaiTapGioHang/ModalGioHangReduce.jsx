import React, { Component } from 'react'
import {connect} from 'react-redux'


class ModalGioHangReduce extends Component {
    renderGioHang = () => {
        return this.props.gioHang.map((item, index)=>{
            return (
                <tr key={index}>
                    <td>{item.maSP}</td>
                    <td>{item.tenSP}</td>
                    <td><img src={item.hinhAnh} alt="adsasd" width={85} height={125}/></td>
                    <td>{item.giaBan}</td>
                    <td>{item.soLuong}</td>
                    <td>{(item.soLuong*item.giaBan).toLocaleString()}</td>
                </tr>
            )
        })
    }
    render() {
        //goi thu props moi

        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Prods Code</th>
                            <th>Prods Name</th>
                            <th>Image</th>
                            <th>Units</th>
                            <th>Number</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                        
                    </tbody>
                </table>
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