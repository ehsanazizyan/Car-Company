import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div style={{ minHeight: "700px"  , marginTop:"30px"}}>{children}</div>
      <Footer />
    </>
  );
}
export default Layout;
