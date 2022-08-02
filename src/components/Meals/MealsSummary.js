import classes from "./MealsSummary.module.css";
import AiOutlineArrowDown from "react-icons/ai"

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Najbolji Burgeri U Gradu Kucaju Na Vaša Vrata</h2>
      <p>
        Svi naši burgeri pripremljeni su sa najkvalitetnijim sastojcima, od strane
        iskusnih burger majstora sa višegodišnjim iskustvom!
      </p>
      <h1>OPASNO DOBRI</h1>
    </section>
  );
};

export default MealsSummary;
