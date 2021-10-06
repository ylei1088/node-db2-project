// STRETCH
const cars = [
  {
    vin: "4Y1SL65848Z411439",
    make: "toyota",
    model: "prius",
    mileage: 215000,
    title: "clean",
    transmission: "manual",
  },
  {
    vin: "JH4DA3350GS005185",
    make: "toyota",
    model: "corolla",
    mileage: 115000,
    title: "salvage",
  },
  {
    vin: "4V4N99EH3CN554692",
    make: "ford",
    model: "fcous",
    mileage: 1500,
  },
];

exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(cars);
};
