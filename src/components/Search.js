import { mapboxToken } from "../../Constant";
import React, { useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { uuid } from "uuidv4";

const generateSuggestUrl = (query, sessionToken) => {
  // without locality
  // return `https://api.mapbox.com/search/v1/suggest/${query}?access_token=${mapboxToken}&session_token=${sessionToken}&limit=10&&country=jp&language=ja&types=region,prefecture,district,place,city`;
  // with locality
  return `https://api.mapbox.com/search/v1/suggest/${query}?access_token=${mapboxToken}&session_token=${sessionToken}&limit=10&&country=jp&language=ja&types=region,prefecture,district,place,city,locality,postcode`;
};

const generateRetrieveUrl = (sessionToken) => {
  return `https://api.mapbox.com/search/v1/retrieve?access_token=${mapboxToken}&session_token=${sessionToken}`;
};

export const Search = ({ onSelectFeature }) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [sessionToken, setSessionToken] = useState(null);

  // set search session uuid
  useEffect(() => {
    setSessionToken(uuid());
  }, []);

  const callAndSetSuggestions = (query) => {
    const newUrl = generateSuggestUrl(query, sessionToken);
    fetch(newUrl)
      .then((resp) => resp.json())
      .then((result) => {
        console.log("result", result);
        setSuggestions(result.suggestions);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const retrieveResult = (suggestId) => {
    const newUrl = generateRetrieveUrl(sessionToken);
    fetch(newUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: suggestId
      })
    })
      .then((resp) => resp.json())
      .then((result) => onSelectFeature(result.features[0]))
      .catch((err) => console.error("retrieveResult ERROR", err));
  };

  const handler = useCallback(debounce(callAndSetSuggestions, 200), []);
  const onChange = (e) => {
    const value = e.target.value;
    if (showResult === false) {
      setShowResult(true);
    }
    setInput(value);
    handler(value);
  };
  const onClickResult = (feature) => {
    setShowResult(false);
    retrieveResult(feature.action.body.id);
  };
  return (
    <form className="search">
      <input
        type="text"
        name="name"
        value={input}
        onChange={onChange}
        autoComplete="off"
      />
      <div>
        {showResult === true &&
          suggestions.map((v) => {
            return (
              <p key={v.action.body.id} onClick={() => onClickResult(v)}>
                {v.feature_name}
              </p>
            );
          })}
      </div>
    </form>
  );
};
