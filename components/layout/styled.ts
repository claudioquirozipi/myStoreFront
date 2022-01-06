import { styled } from "@mui/material/styles";

export const WrapperSC = styled("div")(({ theme }) => ({
  padding: theme.spacing(2, 1, 4),
}));

export const WrapperLoginSC = styled("div")(({ theme }) => ({
  padding: theme.spacing(2, 1, 4),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
}));

export const WrapperClientSC = styled("div")(({ theme }) => ({
  padding: theme.spacing(2, 1, 4),
}));
