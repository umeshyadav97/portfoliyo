import * as React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { useMediaQuery } from "@mui/material"
import { useRouter } from "next/router"

export default function PublicLayout({ children }) {
  const router = useRouter()
  const tabResolution = useMediaQuery("(max-width:768px")


  React.useEffect(() => {
  
      router.replace("/home")
    
  }, [ router])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid sx={{ flexWrap: "nowrap" }} container spacing={2} justifyContent="center">
        <Grid item xs={tabResolution ? 12 : 7}>
          {children}
        </Grid>
      </Grid>
    </Box>
  )
}
