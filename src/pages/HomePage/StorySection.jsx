import React from "react";
import StoryCard from "../../components/StoryCard";

const StorySection = () => {
  return (
    <div className="story-section grid  grid-flow-col-dense auto-cols-min gap-4  md:p-6 p-4 rounded-lg shadow-md bg-white    overflow-auto ">
      <StoryCard isCreateStory={true} />
      <StoryCard />
      <StoryCard />
      <StoryCard />
      <StoryCard />
    </div>
  );
};

export default StorySection;
