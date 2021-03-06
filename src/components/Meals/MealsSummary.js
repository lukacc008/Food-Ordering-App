import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Najbolji Burgeri U Gradu Kucaju Na Vaša Vrata</h2>
      <p>
        Izaberite vaš omiljeni burger iz naše ponude 
        i uzivajte u prelepom ručku ili večeri kod kuće!
      </p>
      <p>
        Svi naši burgeri pripremljeni su sa najkvalitetnijim sastojcima, od strane
        iskusnih burger majstora sa višegodišnjim iskustvom!
      </p>
    </section>
  );
};

export default MealsSummary;
