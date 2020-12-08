import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamReduce extends Component {
  render() {
    const { sanPham } = this.props;

    return (
      <div className="card text-white bg-primary">
        <img
          className="card-img-top"
          src={sanPham.hinhAnh}
          alt={sanPham.hinhAnh}
          width={150}
          height={350}
        />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">
            {sanPham.giaBan.toLocaleString() + ` VND`}
          </p>
          <button className="btn btn-danger" onClick={()=>this.props.addToCart(sanPham)}>Add to cart</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => { // dispatch an action
    return {
        // create props = function = action then push to Store
        addToCart: (prods) =>{
            const spGioHang = {
                maSP: prods.maSP,
                tenSP: prods.tenSP,
                giaBan: prods.giaBan,
                soLuong: 1,
                hinhAnh: prods.hinhAnh
            } 
            const action= { // content ready
                type: 'ADD_TO_CART',
                nhanspGioHang: spGioHang
            }
            console.log(action);
            dispatch(action);
        }
    }
    
}
export default connect(null, mapDispatchToProps)(SanPhamReduce)