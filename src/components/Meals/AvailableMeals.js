import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const LISTA_BURGERA = [
  {
    id: "m1",
    name: "Burger Classic",
    description: "krastavac, luk, kečap, senf",
    price: 550,
  },
  {
    id: "m2",
    name: "Burger Original",
    description: "iceberg, luk, krastavac, burger sos",
    price: 600,
  },
];

const AvailableMeals = () => {
  const mealsList = LISTA_BURGERA.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
