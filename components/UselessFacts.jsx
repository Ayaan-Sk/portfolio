"use client";
import { useEffect } from "react";
import { useState } from "react";

const UselessFacts = () => {
  const [fact, setFact] = useState({});

  useEffect(() => {
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
      .then((res) => res.text())
      .then((data) => {
        const parsedData = JSON.parse(data);
        setFact(parsedData);
      });
  }, []);

  return (
    <p className={``}>
      {fact.text ? fact.text : <i className="text-gray-400">loading...</i>}
    </p>
  );
};

export default UselessFacts;
