import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  const coreConcepts = CORE_CONCEPTS.map((concept) => (
    <CoreConcept key={concept.title} {...concept} />
  ));

  const tabButtons = Object.values(EXAMPLES).map((topic) => (
    <TabButton
      key={topic.title.toLowerCase()}
      isSelected={selectedTopic === topic.title.toLowerCase()}
      onSelect={() => handleClick(topic.title.toLowerCase())}
    >
      {topic.title}
    </TabButton>
  ));

  const tabContent = selectedTopic ? (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  ) : (
    <p>Please select a topic.</p>
  );

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>{coreConcepts}</ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>{tabButtons}</menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
