import React from "react";
import "./ChannelRow.css";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/CheckCircle";

function ChannelRow({
  image,
  channel,
  verfied,
  subs,
  noOfVideos,
  description,
}) {
  return (
    <div className="ChannelRow">
      <Avatar className="ChannelRow__logo" alt={channel} src={image} />
      <div className="ChannelRow__text">
        <h4>
          {channel} {verfied && <VerifiedIcon />}
        </h4>
        <p>
          {subs} subscription . {noOfVideos}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
