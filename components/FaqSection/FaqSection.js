import React, { useState } from "react";

const FAQSection = () => {
  const [activeAccordion, setActiveAccordion] = useState("collapse_1");

  const toggleAccordion = (accordionId) => {
    setActiveAccordion(accordionId === activeAccordion ? "" : accordionId);
  };

  const faqQuestions = [
    {
      question: "What is Rasters?",
      answer: (
        <p>
          Rasters is an AI-native trading platform built specifically for the
          memecoin and DeFi space. It uses four intelligent agents—Risk,
          Strategy, Sentiment, and Liquidity—to analyze markets and execute
          trades autonomously, 24/7.
        </p>
      ),
    },
    {
      question: "How is Rasters different from a trading bot?",
      answer: (
        <p>
          Rasters is not just a script-based bot—it’s a coordinated network of
          AI agents. Each agent specializes in a specific function and works
          together in real-time. Bots react to triggers; Rasters thinks ahead
          and adapts continuously.
        </p>
      ),
    },
    {
      question: "What tokens can I trade with Rasters?",
      answer: (
        <p>
          Rasters is optimized for high-volatility tokens like memecoins and
          low-cap assets. You’ll be able to trade any token available on
          supported DEXs (like Uniswap, PancakeSwap, Jupiter) across supported
          chains.
        </p>
      ),
    },
    {
      question: "Which chains does Rasters support?",
      answer: (
        <p>
          At launch, Rasters will support Ethereum, Solana, and Base.
          Multi-chain functionality is part of the roadmap, including Polygon,
          Arbitrum, and more.
        </p>
      ),
    },
    {
      question: "Is Rasters safe to use?",
      answer: (
        <p>
          Yes. Rasters is designed with built-in risk detection. The Risk Agent
          scans contracts, liquidity pools, and on-chain behaviors to avoid
          scams like honeypots, rug pulls, and blacklisted trading.
        </p>
      ),
    },
    {
      question: "Do I need to be a pro trader to use Rasters?",
      answer: (
        <p>
          No! Rasters is built to be beginner-friendly. You can use default AI
          settings or tweak agent behavior to match your risk appetite. Pro
          users can also customize strategies for more control.
        </p>
      ),
    },
    {
      question: "How does the Sentiment Agent work?",
      answer: (
        <p>
          It monitors platforms like Twitter, Reddit, Discord, and Telegram
          using natural language processing (NLP) and machine learning to track
          hype, fear, and community engagement. This helps Rasters time entries
          and exits based on social momentum.
        </p>
      ),
    },
    {
      question: "What fees does Rasters charge?",
      answer: (
        <p>
          Rasters itself charges no additional trading fees. However, standard
          network gas fees apply, and the $RASTR token includes a 2% sell tax to
          support ecosystem development and liquidity.
        </p>
      ),
    },
    {
      question: "What is the $RASTR token used for?",
      answer: (
        <p>
          $RASTR is the native utility token of the Rasters ecosystem. It
          provides access to premium features, governance rights, trading
          boosts, and potential fee discounts in future versions of the dApp.
        </p>
      ),
    },
  ];

  return (
    <section className="faq_section section_space">
      <div className="container">
        <div
          className="ico_heading_block text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="heading_text mb-0">FAQ</h2>
        </div>

        <div
          className="tab_block"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              role="tabpanel"
              id="tab_general_question"
            >
              <div className="ico_accordion" id="accordion_1">
                {faqQuestions.map((item, index) => {
                  const collapseId = `collapse_${index + 1}`;
                  return (
                    <div
                      className="accordion-item"
                      key={collapseId}
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay={200 + index * 100}
                    >
                      <div
                        className={`icon_arrow ${
                          activeAccordion === collapseId ? "collapsed" : ""
                        }`}
                        role="button"
                        onClick={() => toggleAccordion(collapseId)}
                      >
                        <svg
                          viewBox="0 0 23 27"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10 14.597L10 2.56731C10 1.56579 10.8115 0.753906 11.8125 0.753906C12.8134 0.753906 13.6249 1.56579 13.6249 2.56731L13.6249 14.597C13.6249 15.5985 12.8134 16.4104 11.8125 16.4104C10.8115 16.4104 10 15.5985 10 14.597Z" />
                          <path d="M9.71371 25.8348L1.59744 17.7909C1.49009 17.6845 1.42969 17.5396 1.42969 17.3884L1.42969 14.2693C1.42969 13.7658 2.03695 13.5125 2.39443 13.8668L10.5108 21.9106C10.6181 22.017 10.6785 22.1619 10.6785 22.3131L10.6785 25.4323C10.6785 25.9358 10.0712 26.1891 9.71371 25.8348Z" />
                          <path d="M21.2273 13.8668L13.1111 21.9106C13.0037 22.017 12.9434 22.1619 12.9434 22.3131L12.9434 25.4323C12.9434 25.9358 13.5506 26.1891 13.9081 25.8348L22.0243 17.7909C22.1317 17.6845 22.1921 17.5396 22.1921 17.3884L22.1921 14.2693C22.1921 13.7658 21.5849 13.5125 21.2273 13.8668Z" />
                        </svg>
                      </div>
                      <div
                        className={`accordion-button ${
                          activeAccordion === collapseId ? "" : "collapsed"
                        }`}
                        role="button"
                        onClick={() => toggleAccordion(collapseId)}
                      >
                        {`${index + 1}- ${item.question}`}
                      </div>
                      <div
                        id={collapseId}
                        className={`accordion-collapse collapse ${
                          activeAccordion === collapseId ? "show" : ""
                        }`}
                        data-bs-parent="#accordion_1"
                      >
                        <div className="accordion-body">{item.answer}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
