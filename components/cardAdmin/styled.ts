import { styled } from "@mui/material/styles";

export const CardContainerSC = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ImgSC = styled("img")`
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
`;

export const WrapperDescriptionSC = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "space-between",
  padding: theme.spacing(1, 2),
}));
