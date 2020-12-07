import React, { Component } from 'react'
import ModalGioHangReduce from './ModalGioHangReduce'

export default class BaiTapGioHangReduce extends Component {
    render() {
        
        return (
            <div className="container">
                <button className="btn btn-success m-3">Hi</button>
                <h3 className="text-center text-info">Bài Tập Giỏ Hàng Redux</h3>
                <ModalGioHangReduce></ModalGioHangReduce>
            </div>
        )
    }
}
