import { Grid, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DetailLeft from "./DetailLeft";
import DetailRight from "./DetailRight";
import { getSingleProduct } from "../../features/product/productByIdSlicer";

const DetailWrapper = styled(Grid)`
  margin-top: 60px;
`;

const DetailView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleproduct } = useSelector((state) => state.singleproduct);
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id, dispatch]);
  return (
    <DetailWrapper container>
      <Grid item lg={4} md={4} sm={5} xs={12} sx={{ background: "red" }}>
        <DetailRight product={singleproduct} />
      </Grid>
      <Grid item lg={8} md={8} sm={7} xs={12} sx={{ background: "grey" }}>
        <DetailLeft product={singleproduct} />
      </Grid>
    </DetailWrapper>
  );
};

export default DetailView;
