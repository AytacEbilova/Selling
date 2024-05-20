import * as yup from 'Yup';
const ProductSchema = yup.object().shape({
    image: yup
      .string()
      .required(),
      title: yup.string()
      .min(3, 'Must be 3 characters or less')
      .required('Required'),
      bio: yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),

})
export default ProductSchema