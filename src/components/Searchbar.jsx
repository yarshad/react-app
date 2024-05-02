const countries = [
  { name: "France", capital: "Paris" },
  { name: "Spain", capital: "Madrid" },
  { name: "Italy", capital: "Rome" },
];

var x = countries.map((c) => c.capital);

// console.log(x);

const Searchbar = () => {
  console.log("loading search");
  return <div>Searchbar</div>;
};

export default Searchbar;
