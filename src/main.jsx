import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ServiceView from "./web/service/view/service-view.jsx";
import HomeView from "./web/home/view/home-view.jsx";
import LoginView from "./web/auth/login/login-view.jsx";
import AboutUs from "./web/about-us/view/about-us-view.jsx";
import Dashboard from "./dashboard/dashboard.jsx";
import ProfileView from "./dashboard/profile/view/profile-view.jsx";
import ErrorPage from "./error-page.jsx";
import RegisterView from "./web/auth/sign-up/register.jsx";
import BookServicesView from "./dashboard/book-services/view/book-services-view.jsx";
import MyReviewsView from "./dashboard/reviews/view/my-reviews.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import SnackbarProvider from "./components/snackbar-provider.jsx";
import { AuthContextProvider } from "./context/auth-context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeView />,
      },
      {
        path: "/service",
        element: <ServiceView />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/login",
        element: <LoginView />,
      },
      {
        path: "/register",
        element: <RegisterView />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "profile",
            element: <ProfileView />,
          },
          {
            path: "services",
            element: <BookServicesView />,
          },
          {
            path: "my-reviews",
            element: <MyReviewsView />,
          },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </QueryClientProvider>
    </SnackbarProvider>
  </React.StrictMode>
);
