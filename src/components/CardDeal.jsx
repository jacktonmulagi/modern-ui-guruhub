import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Gateway to  <br className="sm:block hidden" /> Efficiency
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Effortlessly send SMSs with our gateway & API. Craft tailored apps collaboratively. Elevate your business with strategic IT consultancy.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
