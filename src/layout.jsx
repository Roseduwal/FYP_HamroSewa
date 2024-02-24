import Footer from "./components/footer";
import Navbar from "./components/navbar";
import AppGuard from "./guard/app.guard";

// eslint-disable-next-line react/prop-types
export default function AppLayout({ children }) {
  return (
    <AppGuard>
      <Navbar />
      {children}
      <Footer />
    </AppGuard>
  );
}
