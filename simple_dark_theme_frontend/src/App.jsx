import React from "react";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import Button from "./components/Button.jsx";

export default function App() {
  return (
    <div className="appShell">
      <Header />

      <main className="main">
        <div className="container">
          <Card
            title="Theme-ready UI (Red & White)"
            right={
              <div className="buttonRow" style={{ marginTop: 0 }}>
                <Button variant="secondary">Secondary</Button>
                <Button variant="primary">Primary</Button>
              </div>
            }
          >
            <div className="cardBody">
              This layout is powered by CSS variables, so swapping themes later is
              just a matter of overriding <code>--color-*</code> tokens.
              <div className="cardHint">
                Current theme: red + white (header, card borders, and buttons).
              </div>
            </div>

            <div className="buttonRow">
              <Button variant="primary">Confirm</Button>
              <Button variant="secondary">Cancel</Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
