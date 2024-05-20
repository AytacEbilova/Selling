import { Grid } from "@mui/material";
import { useGetProductQuery } from "../../service/productApi";
import styles from "../Home/home.module.scss";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
const Home = () => {
  const { data: products, refetch } = useGetProductQuery();
  return (
    <div>
      <div className={styles.homePage}>
        <div className={styles.container}>
          <div className={styles.all}>
            <h1>Shop With Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam <br />
              assumenda ea quo cupiditate facere deleniti fuga officia.
            </p>
          </div>
          <button className={styles.btn1}>Shop Now</button>
          <button className={styles.btn1}>Club MemberShip</button>
        </div>
      </div>

      <div className={styles.sect2}>
        <div className={styles.container}>
          <div className={styles.all}>
            <h3>Our Products</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae <br /> nostrum natus excepturi fuga ullam accusantium
              vel ut eveniet aut <br /> consequatur laboriosam ipsam.
            </p>
          </div>
          <Grid container spacing={2}>
            <div className={styles.cards}>
            {products &&
              products.data.map((product) => (
                <Grid item xs={8} sm={8} md={6} lg={4} key={product._id}>
                       <div className={styles.card}>
                  <img src={product.image} alt="" style={{width:'400px'}}/>
                  <h5>{product.title}</h5>
                  <p>{product.bio}</p>
                  <Link
                        to={`/detail/${product._id}`}
                        style={{ textDecoration: "none", color: "green" }}
                      >
                        Detail
                      </Link>
                </div>
                </Grid>
              ))}
       
          </div>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Home;
