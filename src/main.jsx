// Librairies
import React from "react";
import ReactDOM from "react-dom/client";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";

// Stylesheets
import "./sass/application.scss";

// Assets

// Components
import cutomTheme from "./theme";
import Sidebar from "./components/sidebar";

// Pages
import MobileVersionNotAvailalePage from "./pages/mobileNotAvailable.jsx";
import LoginPage from "./pages/login.jsx";

// Application Management
import DeployedApplicationDetailPage from "./pages/deployed_application/detail.jsx";
import DeployedApplicationListPage from "./pages/deployed_application/list.jsx";
import DeployedApplicationNewPage from "./pages/deployed_application/new.jsx";

// Domain Management
import ConfiguredDomainListPage from "./pages/domain/list";
import ConfiguredNewDomainPage from "./pages/domain/new";

// Ingress Rules Management
import IngressRuleListPage from "./pages/ingress/rules/list";
import IngressRuleNewPage from "./pages/ingress/rules/new";

// Redirect Rules Management
import RedirectRuleListPage from "./pages/ingress/redirect_rules/list";
import RedirectRuleNewPage from "./pages/ingress/redirect_rules/new";
import { Layout } from "./layout";

// Import context state
import ConfigState from "./context/config/configState";
import AuthState from "./context/auth/authState";

window.addEventListener("resize", () => {
  window.location.reload();
});

const isLoggedIn = false;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigState>
      <AuthState>
        <BrowserView>
          <ChakraProvider theme={cutomTheme}>
            <Layout>
              <BrowserRouter>
                {!isLoggedIn && (
                  <Routes>
                    <Route path="/login" element={<LoginPage />} />
                  </Routes>
                )}
                {isLoggedIn && (
                  <Box display="grid" gridTemplateColumns="1fr 4fr">
                    <Sidebar />
                    <Routes>
                      <Route
                        path="/application/deploy/list"
                        element={<DeployedApplicationListPage />}
                      />
                      <Route
                        path="/application/deploy/detail"
                        element={<DeployedApplicationDetailPage />}
                      />
                      <Route
                        path="/application/deploy/new"
                        element={<DeployedApplicationNewPage />}
                      />
                      <Route
                        path="/domain/list"
                        element={<ConfiguredDomainListPage />}
                      />
                      <Route
                        path="/domain/new"
                        element={<ConfiguredNewDomainPage />}
                      />
                      <Route
                        path="/ingress/rules/list"
                        element={<IngressRuleListPage />}
                      />
                      <Route
                        path="/ingress/rules/new"
                        element={<IngressRuleNewPage />}
                      />
                      <Route
                        path="/ingress/redirect_rules/list"
                        element={<RedirectRuleListPage />}
                      />
                      <Route
                        path="/ingress/redirect_rules/new"
                        element={<RedirectRuleNewPage />}
                      />
                    </Routes>
                  </Box>
                )}
              </BrowserRouter>
            </Layout>
          </ChakraProvider>
        </BrowserView>
        <MobileView>
          <ChakraProvider theme={cutomTheme}>
            <MobileVersionNotAvailalePage />
          </ChakraProvider>
        </MobileView>
      </AuthState>
    </ConfigState>
  </React.StrictMode>
);
