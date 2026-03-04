import "./App.css";

function BandList() {
  const bandNames = ["Dire Straits", "R.E.M.", "Collective Soul"];

  return (
    <>
      <h2>{bandNames[0]}</h2>
      <h2>{bandNames[1]}</h2>
      <h2>{bandNames[2]}</h2>
    </>
  );
}

function App() {
  return (
    <>
      <BandList />
    </>
  );
}

export default App;
