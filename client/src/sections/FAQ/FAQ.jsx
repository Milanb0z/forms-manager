import { useState } from "react";

import { Button } from "@ui";

import FAQCard from "@components/FaqCard/FaqCard";

import classes from "./FAQ.module.scss";

const videoSectionOptions = [
  {
    header: "Our Video Showcase",
    body: "Explore our collection of high-quality videos, crafted with precision and creativity. Each project highlights our commitment to excellence and our ability to bring unique visions to life. See the impact of our work.",
  },
  {
    header: "Featured Projects",
    body: "Dive into our portfolio of videos showcasing a variety of styles and formats. From corporate films to creative storytelling, our projects demonstrate our versatility and dedication to delivering outstanding results.",
  },
  {
    header: "Our Work in Action",
    body: "Watch our videos to see how we transform ideas into engaging visual stories. Each video reflects our expertise and passion for producing compelling content that resonates with audiences.",
  },
  {
    header: "Video Portfolio",
    body: "Browse through our video portfolio to witness the diverse range of projects we've completed. Our work speaks for itself, illustrating our skill in creating impactful and memorable videos for various clients.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(false);

  const onOpenQuestion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(false);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className={classes.faq}>
      <h2>Need Help? We've Got Answers</h2>
      <div className={classes.questions}>
        {videoSectionOptions.map((que, index) => (
          <FAQCard
            key={index}
            heading={que.header}
            body={que.body}
            isActive={activeIndex === index}
            onClickHandler={onOpenQuestion.bind(this, index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
