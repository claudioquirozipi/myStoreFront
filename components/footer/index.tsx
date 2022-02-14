import Image from "next/image";

import { Container, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { socialMedia } from "../../config/variables";
import { FooterProps } from "./interface";

import imgInstagram from "../../public/instagram.png";
import imgLinkedin from "../../public/linkedin.png";
import imgFacebook from "../../public/facebook.png";
import imgYoutube from "../../public/youtube.png";
import imgTwitter from "../../public/twitter.png";
import imgTikTok from "../../public/tik-tok.png";

const image = {
  facebook: imgFacebook.src,
  linkedin: imgLinkedin.src,
  instagram: imgInstagram.src,
  youtube: imgYoutube.src,
  twitter: imgTwitter.src,
  "tik-tok": imgTikTok.src,
};

const Footer = (props: FooterProps) => {
  const { type } = props;

  return (
    <footer>
      <Box
        sx={(theme) => ({
          background: theme.palette.secondary.main,
          padding: theme.spacing(2, 4, 16),
        })}
      >
        <Container maxWidth="sm">
          <Grid container spacing={4} direction="column">
            <Grid item xs={12}>
              <Typography
                color={(theme) => ({
                  color: theme.palette.secondary.contrastText,
                })}
                align="center"
                variant="h5"
              >
                {type === "client" ? "Contactanos" : "Desarrollado por: "}
              </Typography>
            </Grid>

            {type === "client" && (
              <Grid container item xs={12} spacing={1} justifyContent="center">
                {socialMedia.map((sM) => (
                  <Grid item xs={2}>
                    <Link href={sM.link}>
                      <Image
                        src={image[sM.socialMedia]}
                        alt={sM.socialMedia}
                        width={30}
                        height={30}
                      />
                    </Link>
                  </Grid>
                ))}
              </Grid>
            )}
            {type !== "client" && (
              <Grid container item xs={12} spacing={1} justifyContent="center">
                <Link href="https://cquirozipi.firebaseapp.com/" color="#fff">
                  Claudo Quiroz
                </Link>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
