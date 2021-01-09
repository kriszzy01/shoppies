import React from "react";
import { useSelector } from "react-redux";
import { getNominations } from "../selectors";
import { getStoredNominations } from "../utils";

export const Banner: React.FC = () => {
  const { movies } = useSelector(getNominations);

  const { previousNominations } = getStoredNominations(); //Get previously stored nominations

  //Use either previously stored nominations or new ones
  const nominations =
    previousNominations.length !== 0
      ? previousNominations
      : Object.values(movies);

  return (
    <div
      role="banner"
      data-banner={nominations.length === 5 ? "open" : "closed"}
    >
      <p>All done! You have successfully made your five nominations</p>
    </div>
  );
};
