import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { deleteProduct } from '../../services/productsService';

function DeleteProduct(props) {
    const { item, onReload } = props;

    const deleteItem = async () => {
       const result = await deleteProduct(item.id);
        if(result){
            onReload();
        Swal.fire({
            title: "Đã xóa",
            text: "Bạn đã xóa sản phẩm thành công!",
            icon: "success"
          });
        }
    }

    const handleDelete = () => {
        // console.log(item.id) 
        Swal.fire({
          title: "Bạn có chắc chắn muốn XÓA sản phẩm này không?",
          text: "Nếu bạn xóa thì bạn sẽ không thể khôi phục lại được!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Vâng, vẫn xóa sản phẩm!",
          cancelButtonText: "Hủy",
        }).then((result) => {
          if (result.isConfirmed) {
                deleteItem();
          }
        });
    }

    return(
        <>
            <button onClick={handleDelete}>Xóa</button>
        </>
    )
}
export default DeleteProduct;