import React from "react";
import StoryDrawer from "./StoryDrawer";

function Story() {
  return (
    <div id="story" className="md:flex block justify-center p-5 text-justify md:p-16 md:gap-20">
      <div className="md:leading-10">
        <h2 className="text-4xl md:text-7xl font-bold">Our Story</h2>
        {/* <p>Know what's important</p> */}
      </div>
      <div className="md:w-8/12">
        <p>
          The Youth Action and Leadership Forum for Environment was inspired by
          Achintya, a young environmental advocate. His journey began at an
          international conference on emissions monitoring, where he connected
          with diverse individuals. He then attended multiple conferences on
          climate change, clean energy, and the circular economy, gaining
          knowledge and engaging with stakeholders. Observing the gap between
          discussions and real-world actions, Achintya realized the need for a
          youth-driven platform to facilitate serious deliberations and
          impactful dialogue on environmental issues. This led to the creation
          of the Youth Action and Leadership Forum for Environment.
        </p>
        <div className="py-5">
          <StoryDrawer />
        </div>
      </div>
    </div>
  );
}

export default Story;
