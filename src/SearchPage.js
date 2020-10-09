import React from "react";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneIcon from "@material-ui/icons/Tune";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="SearchPage">
      <div className="SearchPage__filter">
        <TuneIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://i.pinimg.com/originals/7f/9c/e6/7f9ce6bbda76209fd145784b6b8f302c.png"
        channel="MrBeast"
        verfied
        subs="44.5M subscribers"
        noOfVideos={690}
        description="Accomplishments - Counting to 100k - Counting to 200k"
      />
      <hr />
      <VideoRow
        views="22M views"
        subs="44.5M subscribers"
        description="Would You Rather Have A Giant Diamond or $100,000?"
        timestamp="1 week ago"
        channel="MrBeast"
        title="Would You Rather Have A Giant Diamond or $100,000?"
        image="https://i.ytimg.com/vi/Vl3swga-Xrk/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBG2vkHEeHmW_m7WlXBBzwcvVYfIw"
      />
      <VideoRow
        views="28M views"
        subs="44.5M subscribers"
        description="Would YOU Rather Have A Lamborghini or This House?"
        timestamp="1 month ago"
        channel="MrBeast"
        title="Would YOU Rather Have A Lamborghini or This House?"
        image="https://i.ytimg.com/vi/s1ax8Tx_Jz0/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAe9WaIQemHMJk5Vgn44hxXNOLRhg"
      />
      <VideoRow
        views="40M views"
        subs="44.5M subscribers"
        description="I can't believe I gave away a private island"
        timestamp="1 month ago"
        channel="MrBeast"
        title="Last To Leave $800,000 Island Keeps It"
        image="https://i.ytimg.com/vi/NkE0AMGzpJY/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBXjzRPirGGnElY54OYfrUQVubhSg"
      />
      <VideoRow
        views="74M views"
        subs="44.5M subscribers"
        description="I WENT INTO A STORE AND BOUGHT LITERALLY 15000 ITEMS!"
        timestamp="1 year ago"
        channel="MrBeast"
        title="I Bought Everything In A Store"
        image="https://i.ytimg.com/vi/ha4tRQwKIUg/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC8ISlCzmqduyeJ2xl5s4pUt38Fww"
      />
      <VideoRow
        views="30M views"
        subs="44.5M subscribers"
        description="YOU WON'T BELIEVE HOW PEOPLE REACTED TO THIS LOL"
        timestamp="1 year ago"
        channel="MrBeast"
        title="Surprising Strangers With 100 Zombies "
        image="https://i.ytimg.com/vi/iUzi5JmJNWc/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLASrjSHRFOKOE1fCxvGz6htE9vS5w"
      />
      <VideoRow
        views="48M views"
        subs="44.5M subscribers"
        description="The bunker gets crazier as the video goes on!"
        timestamp="5 months ago"
        channel="MrBeast"
        title="I Spent 24 Hours In A Doomsday Bunker"
        image="https://i.ytimg.com/vi/HBMmK1c44sE/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD_bCINwSh0wVDfmG7QLItw31Vtig"
      />
      <VideoRow
        views="61M views"
        subs="44.5M subscribers"
        description="I cant believe we actually did this..."
        timestamp="7 months ago"
        channel="MrBeast"
        title="I Ate A $70,000 Golden Pizza"
        image="https://i.ytimg.com/vi/F4Y3Pkn95GI/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDqG3hlNdmdX76X2vDDBQXEg6CqkA"
      />
      <VideoRow
        views="38M views"
        subs="44.5M subscribers"
        description="This is my favorite video i have ever made"
        timestamp="2 months ago"
        channel="MrBeast"
        title="I Adopted EVERY Dog In A Dog Shelter"
        image="https://i.ytimg.com/vi/YQDDm9HLkV4/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB6fCXm2fYKDDiLm0apyifVIDNTiA"
      />
      <VideoRow
        views="58M views"
        subs="44.5M subscribers"
        description="YOU WON'T BELIEVE HOW BIG IT WAS LOL New Merch"
        timestamp="1 year ago"
        channel="MrBeast"
        title="World's Largest Bowl Of Cereal"
        image="https://i.ytimg.com/vi/xRwy_rKc7gI/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDtSwIovv9yjok6V0AidxJRNwVHtg"
      />
      <VideoRow
        views="47M views"
        subs="44.5M subscribers"
        description="BUY MY MERCH!! - https://shopmrbeast.com/"
        timestamp="10 months ago"
        channel="MrBeast"
        title="Last To Fall Wins $1,000,000"
        image="https://i.ytimg.com/vi/tQ4m4zD7BBA/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA4za2h8LWcWRGwHEUgHiEwQb807A"
      />
    </div>
  );
}

export default SearchPage;
