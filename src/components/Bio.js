import React from "react";
import Gravatar from "react-gravatar";

// Import typefaces
import "typeface-montserrat";
import "typeface-merriweather";

import { rhythm } from "../utils/typography";

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          marginBottom: rhythm(2.5),
        }}
      >
        <Gravatar
          email="$AUTHOR_EMAIL$"
          alt="$AUTHOR_NAME$"
          size={100}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: "50%",
          }}
        />
        <p>
          Written by <strong>$AUTHOR_NAME$</strong> who lives and works in San
          Francisco building useful things.{" "}
          <a href="https://twitter.com/kylemathews">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    );
  }
}

export default Bio;
