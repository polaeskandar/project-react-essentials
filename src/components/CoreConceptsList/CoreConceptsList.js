import CoreConcept from "../CoreConcept/CoreConcept";
import {CORE_CONCEPTS} from "../../data";

const CoreConceptsList = () => {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((coreConcept) => (
          <CoreConcept key={coreConcept.title} {...coreConcept} />
        ))}
      </ul>
    </section>
  )
}

export default CoreConceptsList;