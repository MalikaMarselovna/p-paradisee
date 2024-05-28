import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout(props) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="Layout flex">
          {/* <aside>
            <CategoryList />
          </aside> */}
          <main>{props.children}</main>
          {showButton && (
          <button className="back-to-top " onClick={scrollToTop}>
            ↑
          </button>
        )}
        </div>
      
      </div>

      <Footer />
    </>
  );
}
