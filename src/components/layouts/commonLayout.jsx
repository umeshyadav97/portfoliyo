import React from "react"
import { Box, Grid } from "@mui/material"
import { useStyles } from "./commonLayoutStyles"
import NavBar from "../navBar"
// import Footer from "@local/components/footer"

function CommonLayout({ children }) {
  const styles = useStyles()

  // const goBack = () => {
  //   router.back()
  // }

  return (
    <Box sx={styles.main}>
      <NavBar></NavBar>
      <Grid container sx={{ marginTop: "64px" }}>
        {
          <Grid item xs={12}>
            {children}
          </Grid>
        }
      </Grid>
      {/* <Footer></Footer> */}
    </Box>
  )
}

export default CommonLayout
