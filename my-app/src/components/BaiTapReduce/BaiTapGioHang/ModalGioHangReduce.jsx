import React, { Component } from "react";
import { connect } from "react-redux";

class ModalGioHangReduce extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maSP}</td>
          <td>{item.tenSP}</td>
          <td>
            <img src={item.hinhAnh} alt="adsasd" width={85} height={125} />
          </td>
          <td>{item.giaBan}</td>
          <td>
            <button
              onClick={() => this.props.UpDown(index, false)}
              className="btn btn-success"
            >
              -
            </button>
            {item.soLuong}
            <button
              onClick={() => this.props.UpDown(index, true)}
              className="btn btn-success"
            >
              +
            </button>
          </td>
          <td>{(item.soLuong * item.giaBan).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.props.DeleteCartFunc(index)}
            >
              Xóa
            </button>
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.props.DeleteCodeFunc(item.maSP)}
            >
              Xóa = Mã
            </button>
          </td>
        </tr>
      );
    });
  };
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
          <tbody>{this.renderGioHang()}</tbody>
          <tfoot>
            <tr>
              <td colSpan="5"></td>
              <td>Tổng tiền: </td>
              <td>
                {this.props.gioHang.reduce((tongTien, item, index) => {
                  return (tongTien += item.soLuong * item.giaBan);
                }, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // chuyen state tren store thanh this.props.gioHang
  return {
    gioHang: state.CartReducer.gioHang,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    UpDown: (index, tangGiam) => {
      const action = {
        type: "TANG_GIAM_SL",
        index,
        tangGiam,
      };
      dispatch(action);
    },
    DeleteCartFunc: (index) => {
      const action = {
        type: "XOA_GIO_HANG",
        index,
      };
      dispatch(action);
    },
    DeleteCodeFunc: (maSP) => {
      const action = {
        type: "XOA_GIO_HANG_SP",
        maSP,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalGioHangReduce);
