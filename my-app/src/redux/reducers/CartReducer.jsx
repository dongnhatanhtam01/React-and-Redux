const stateGioHang = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
      soLuong: 1,
    },
  ],
};

export const CartReducer = (state = stateGioHang, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case "TANG_GIAM_SL": {
      const { index, tangGiam } = action;
      console.log(tangGiam);
      let gioHangCapNhat = [...state.gioHang];
      if (tangGiam) {
        gioHangCapNhat[index].soLuong += 1;
      } else {
        if (gioHangCapNhat[index].soLuong > 1) {
          gioHangCapNhat[index].soLuong -= 1;
        }
      }
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
    case "XOA_GIO_HANG_SP": {
      let gioHangCapNhat = [...state.gioHang];
      let index = gioHangCapNhat.findIndex((item) => item.maSP === action.maSP);
      if (index !== -1) {
        gioHangCapNhat.splice(index, 1);
      }

      // render lai giao dien
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
    case "XOA_GIO_HANG": {
      let gioHangCapNhat = [...state.gioHang];
      gioHangCapNhat.splice(action.index, 1);
      // render lai giao dien
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
    case "ADD_TO_CART": {
      let gioHangCapNhat = [...state.gioHang];
      let index = gioHangCapNhat.findIndex(
        (item) => item.maSP === action.nhanspGioHang.maSP
      );
      if (index !== -1) {
        gioHangCapNhat[index].soLuong += 1;
      } else {
        gioHangCapNhat.push(action.nhanspGioHang);
      }
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
  }
  return { ...state };
};
