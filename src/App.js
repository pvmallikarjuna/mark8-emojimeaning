import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "π₯°": "Smiling face while in Love",
  "π΄": "Sleepy",
  "π ": "Angry",
  "π»": "Ghost",
  "π": "Neutral face ",
  "π": "Pizza",
  "π": "French Fries",
  "πΊ": "Beer",
  "π": "Kissing Face",
  "π€": "Robo Rajini",
  "πΏ": "Angry Face",
  "βοΈ": "Victory"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our Database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>EMOJIPEDIAπ</h1>

      <input
        placeholder="Search your emoji or Click below to know the meaning"
        onChange={emojiInputHandler}
      ></input>
      <h2> Meaning : {meaning}</h2>

      <h3>Emojis We Know </h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "3rem",
              backgroundColor: "#00ffgg",
              padding: "2rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
