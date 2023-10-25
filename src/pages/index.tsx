import { Box } from "@mui/material";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import ComponentNavDrawer from "src/components/ComponentNavDrawer";
import ErrorBoundary from "src/components/ErrorBoundary";
import Header from "src/components/Header";
import Layout from "src/components/Layout";
import MainWindow from "src/components/MainWindow";
import SmallScreenWarning from "src/components/SmallScreenWarning";
import ThemeConfigDrawer from "src/components/ThemeConfigDrawer";
import Tutorial from "src/components/Tutorial";

const IndexPage = () => {
  return (
    <HelmetProvider>
      <Layout>
        <Box sx={{
          display: "flex",
          height: "100vh",
        }}>
          <ErrorBoundary>
            <Box sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
            }}>
              <Header sx={{
                backgroundColor: "#000000",
                position: {
                  md: 'static'
                }
              }} />

              <Box sx={{
                flex: 1,
                display: "flex",
                minHeight: 0,
              }}>
                <ComponentNavDrawer />

                <Box component="main" sx={{
                  minWidth: 0,
                  minHeight: 0,
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}>
                  <MainWindow />
                </Box>
              </Box>
            </Box>

            <ThemeConfigDrawer />
          </ErrorBoundary>
        </Box>
        <SmallScreenWarning />
        <Tutorial />
      </Layout>
    </HelmetProvider>
  )
}

export default IndexPage
