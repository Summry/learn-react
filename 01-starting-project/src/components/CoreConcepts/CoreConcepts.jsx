import React from "react";
import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "../CoreConcept/CoreConcept";

export default function CoreConcepts() {
  const coreConcepts = CORE_CONCEPTS.map((concept) => (
    <CoreConcept key={concept.title} {...concept} />
  ));

  return (
    <section id="core-concepts">
      <h2>Core concepts</h2>
      <ul>{coreConcepts}</ul>
    </section>
  );
}
