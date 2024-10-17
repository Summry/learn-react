import React from "react";
import { useState } from "react";
import TabButton from "../TabButton/TabButton";
import { EXAMPLES } from "../../data";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

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
    <section id="examples">
      <h2>Examples</h2>
      <menu>{tabButtons}</menu>
      {tabContent}
    </section>
  );
}
