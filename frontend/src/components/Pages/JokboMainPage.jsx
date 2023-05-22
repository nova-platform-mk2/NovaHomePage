import React, { useState } from "react";
import JokboList from "./JokboList";
import JokboSelect from "./JokboSelect";
import JokboTitle from "./JokboTitle";

export default function JokboMainPage() {
  const [selectedJokbo, setSelectedJokbo] = useState("1학년");

  return (
    <>
      <div className="App">
        <main className="content">
          <JokboTitle />
          <JokboSelect
            selectedJokbo={selectedJokbo}
            setSelectedJokbo={setSelectedJokbo}
          />
          <JokboList selectedJokbo={selectedJokbo} />
        </main>
      </div>
    </>
  );
}
