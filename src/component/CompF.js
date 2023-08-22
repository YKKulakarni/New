import React from "react";
import { UserContext, cityContext } from "../App";

export default function CompF() {
  return (
    <div>
      <h1>This is Component F</h1>
      <UserContext.Consumer>
        {(user) => {
          return (
            <cityContext.Consumer>
              {(city) => {
                // return console.log(`User name is ${user} from ${city}`)
                return (
                  <div>
                    User name is {user} from {city}
                  </div>
                );
              }}
            </cityContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}
