import { data } from "jquery";
import React, { Component } from "react";
import dataPhone from "../../../data/dataPhone.json";
import SanPhamReduce from "./SanPhamReduce";

export default class DanhSachGioHangReduce extends Component {
  renderProductHandler() {
    return dataPhone.map((item, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPhamReduce sanPham={item}></SanPhamReduce>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderProductHandler()}</div>
      </div>
    );
  }
}
