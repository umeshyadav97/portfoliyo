import React, { useEffect, useState } from "react"
import styles from "./Loader.module.css"
import { useSelector } from "react-redux"
import { Box, Typography } from "@mui/material"

function AppLoader({ visible: isVisible = false }) {
  const [showLoader, setLoader] = useState(false)
  const { visible, message } = useSelector((store) => store.loader)

  useEffect(() => {
    if (!!visible || !!isVisible) {
      setLoader(true)
    } else {
      setLoader(false)
    }
  }, [visible, isVisible])

  if (!showLoader) return null

  return (
    <div className={styles.loader}>
      <Box className={styles.loaderShell}>
        <Box className={styles.brandRow}>
          <Box className={styles.brandMark}>U</Box>
          <Typography className={styles.brandText}>
            umesh<span>.dev</span>
          </Typography>
        </Box>

        <Box className={styles.preview}>
          <Box className={styles.previewHeader}>
            <Box className={styles.previewDot} />
            <Box className={styles.previewLineShort} />
          </Box>
          <Box className={styles.previewGrid}>
            <Box className={styles.copyBlock}>
              <Box className={styles.eyebrow} />
              <Box className={styles.titleLine} />
              <Box className={styles.titleLineSmall} />
              <Box className={styles.bodyLine} />
              <Box className={styles.bodyLineShort} />
            </Box>
            <Box className={styles.mediaBlock}>
              <Box className={styles.mediaOrb} />
              <Box className={styles.mediaCard} />
            </Box>
          </Box>
          <Box className={styles.progressTrack}>
            <Box className={styles.progressBar} />
          </Box>
        </Box>

        <Typography className={styles.message}>
          {message || "Preparing the next section"}
        </Typography>
      </Box>
    </div>
  )
}

export default AppLoader
