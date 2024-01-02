import TraviesoChristmasTree from "./components/TraviesoChristmasTree";

const App = () => {
  const TEXT =
    "El componente es el árbol. Su función es simple, hay que darle click. (Desktop only)";

  return (
    <>
      <h1>Árbol de navidad travieso</h1>
      <p>{TEXT}</p>
      <TraviesoChristmasTree />
    </>
  );
};

export default App;
