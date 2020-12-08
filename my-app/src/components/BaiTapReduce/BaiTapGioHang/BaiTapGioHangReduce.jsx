import React, { Component } from 'react'
import ModalGioHangReduce from './ModalGioHangReduce'
import DanhSachGioHangReduce from './DanhSachGioHangReduce'
export default class BaiTapGioHangReduce extends Component {
    render() {
        
        return (
            <div className="container">
                <h3 className="text-center text-info">Bài Tập Giỏ Hàng Redux {new Date().toLocaleString()}</h3>
                <ModalGioHangReduce></ModalGioHangReduce>
                <DanhSachGioHangReduce></DanhSachGioHangReduce>
            </div>
        )
    }
}
