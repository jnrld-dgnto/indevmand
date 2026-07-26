import { useEffect, useState } from "react";

const COMMAND = "indevmand find --stack=unity --city=cebu";

export default function TerminalHero() {
  const [typed, setTyped] = useState("");
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    let i = 0;
    let cancelled = false;

    function type() {
      if (cancelled) return;
      if (i <= COMMAND.length) {
        setTyped(COMMAND.slice(0, i));
        i += 1;
        setTimeout(type, 38);
      } else {
        setTimeout(() => !cancelled && setShowResult(true), 350);
      }
    }
    type();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="terminal">
      <div className="terminal-titlebar">
        <span className="terminal-dot red" />
        <span className="terminal-dot yellow" />
        <span className="terminal-dot green" />
        <span className="terminal-title">indevmand — zsh</span>
      </div>
      <div className="terminal-body">
        <div className="terminal-line">
          <span className="terminal-prompt">$</span>
          <span>
            {typed}
            <span className="terminal-cursor" />
          </span>
        </div>
        {showResult && (
          <div className="terminal-result">
            <div style={{ color: "var(--text-on-ink-dim)", marginBottom: 12, fontSize: 13 }}>
              1 match found in Cebu City
            </div>
            <div className="match-card">
              <div className="match-avatar" style={{ background: "#F4A93B" }}>
                MS
              </div>
              <div>
                <div className="match-name">Miguel Santos</div>
                <div className="match-meta">Senior Game Developer · Cebu City · ₱700–1,200/hr</div>
                <div className="match-tags">
                  <span className="tag tag-dark">Unity</span>
                  <span className="tag tag-dark">C#</span>
                  <span className="tag tag-dark">Multiplayer Netcode</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
