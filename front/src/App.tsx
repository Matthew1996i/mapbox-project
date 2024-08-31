import { Navigate, Route, Routes } from "react-router-dom";
import { queryClient } from "./services/queryClient";
import { QueryClientProvider } from "react-query";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import { RequireAuth } from "react-auth-kit";

import Main from "./pages/Main";
import Login from "./pages/Login";

import "@mantine/notifications/styles.css";
import "@mantine/core/styles.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "mantine-datatable/styles.layer.css";

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <QueryClientProvider client={queryClient}>
        <ModalsProvider>
          <Routes>
            <Route
              path="/main"
              element={
                <RequireAuth loginPath="/login">
                  <Main />
                </RequireAuth>
              }
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </ModalsProvider>
        <Notifications limit={3} position="top-right" zIndex={1000} />
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
