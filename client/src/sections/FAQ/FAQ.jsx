import { useState } from "react";

import FAQCard from "@components/FaqCard/FaqCard";

import classes from "./FAQ.module.scss";

const faqs = [
  {
    question: "How do I create a form using the drag-and-drop builder?",
    answer:
      "Simply select the fields you need and drag them into place. It's quick, easy, and requires no coding.",
  },
  {
    question: "Can I customize the URL for my forms?",
    answer:
      "Yes, you can create custom URLs to make your forms more personal and easier to share.",
  },
  {
    question: "How do I invite users to fill out my form?",
    answer:
      "You can send personalized email invitations directly from the app with just a few clicks.",
  },
  {
    question: "Can I track which users have completed the form?",
    answer:
      "Yes, you can track all respondents and see who has completed the form through the dashboard.",
  },
  {
    question: "Will I receive notifications when someone submits a form?",
    answer:
      "Absolutely! You'll receive real-time notifications as soon as someone completes your form.",
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
    <section id="faq" className={classes.faq}>
      <div className={classes.header}>
        <span>FAQ</span>
        <h2>Got Questions? We’ve Got Answers!</h2>
        <p>
          Find answers to common questions about building forms, customizing
          layouts, managing submissions, and more. Our FAQ section is designed
          to help you get the most out of our drag-and-drop form builder with
          ease and efficiency.
        </p>
      </div>
      <div className={classes.questions}>
        {faqs.map((que, index) => (
          <FAQCard
            key={index}
            heading={que.question}
            body={que.answer}
            isActive={activeIndex === index}
            onClickHandler={onOpenQuestion.bind(this, index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
