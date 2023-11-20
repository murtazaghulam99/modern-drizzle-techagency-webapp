import styles from "./style";

import {
  Navbar,
  Business,
  Clients,
  CTA,
  Footer,
  Testimonials,
  Hero,
  Scroller,
} from "./components";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.flexStart} bg-cover bgComponent bg-center`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <Scroller />
    <Clients />
    <Portfolio />
    <Business />
    <Testimonials />
    <div
      className={`bg-primary ${styles.flexStart} bg-cover bgComponent bg-right-center`}
    >
      <div className={`${styles.boxWidth}`}>
        <Blog />
      </div>
    </div>

    <CTA />
    <div
      className={`bg-primary ${styles.paddingX} ${styles.flexStart} bg-cover bgComponent bg-left-bottom`}
    >
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
