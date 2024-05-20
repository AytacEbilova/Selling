import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import {
  useDeleteProductsMutation,
  useGetProductQuery,
  usePostProductMutation,
} from "../../service/productApi";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { Space, Table } from "antd";
import DeleteIcon from "@mui/icons-material/Delete";
import { useParams } from "react-router-dom";

const Add = () => {
  const [deleteProducts] = useDeleteProductsMutation();

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: (img) => (
        <img src={img} alt="product image" height={80} width={100} />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Bio",
      dataIndex: "bio",
    },
    {
      title: "Action",
      render: (_, record) => {
      return  <Button
          onClick={() => {
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then(async (result) => {
              if (result.isConfirmed) {
                await deleteProducts(record._id);
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            });
          }}
        >
          <DeleteIcon />
        </Button>;
      },
    },
  ];
  const { data: products, refetch } = useGetProductQuery();
  const [postProduct] = usePostProductMutation();

  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      bio: "",
    },
    onSubmit: (values, { resetForm }) => {
      postProduct(values).then(() => {
        Swal.fire({
          title: "Added Succesfully!",
          text: "You clicked the button!",
          icon: "success",
        });
        resetForm();
        refetch();
      });
    },
  });
  return (
    <div style={{ width: "40%", margin: "50px auto", padding: "100px 0" }}>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        onSubmit={formik.handleSubmit}
      >
        <h3>Add Product</h3>
        <TextField
          name="image"
          id="outlined-basic"
          label="Image Url"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.image}
        />
        <TextField
          name="title"
          id="outlined-basic"
          label="Title"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <TextField
          name="bio"
          id="outlined-basic"
          label="Bio"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.bio}
        />
        <Button variant="contained" danger type="primary">
          Add
        </Button>
      </form>
      <Space
        style={{
          marginBottom: 16,
        }}
      ></Space>
      <Table columns={columns} dataSource={products?.data} />
    </div>
  );
};

export default Add;
