import { Grid, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DetailLeft from "./DetailLeft";
import DetailRight from "./DetailRight";
import { getSingleProduct } from "../../features/product/productByIdSlicer";

const DetailWrapper = styled(Grid)`
  margin-top: 60px;
  padding: 10px;
`;

const DetailView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct, isLoading } = useSelector(
    (state) => state.singleproduct
  );
  useEffect(() => {
    if (isLoading === false) {
      dispatch(getSingleProduct(id));
    }
  }, [id, dispatch]);
  return (
    singleProduct && (
      <DetailWrapper container spacing={1}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <DetailRight product={singleProduct} />
        </Grid>
        <Grid item lg={8} md={8} sm={6} xs={12}>
          <DetailLeft product={singleProduct} />
        </Grid>
      </DetailWrapper>
    )
  );
};

export default DetailView;
