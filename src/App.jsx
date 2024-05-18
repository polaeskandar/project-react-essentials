import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS } from "./data";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((coreConcept) => (
              <CoreConcept key={coreConcept.title} {...coreConcept} />
            ))}
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
};

export default App;
