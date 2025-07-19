import React from "react";
import check from "../../icons/icon_check.svg";
import sIcon1 from "../../icons/icon_man_question.svg";
import sIcon2 from "../../icons/icon_bulb.svg";
import Image from "next/image";

const SolutionSection = () => {
  return (
    <section className="problem_solution_section section_space pb-0">
      <div className="container">
        <div
          className="ico_heading_block text-center"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <h2 className="heading_text mb-0">
            Traditional Trading Problem & Rasters Solution
          </h2>
        </div>

        <div
          className="ico_problem_solution_table"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
        >
          <div className="column_wrapper">
            {/* ICO Problem Section */}
            <div className="column_problem">
              <h3 className="heading_text">
                <span className="icon">
                  <Image src={sIcon1} alt="Icon Man With Question" />
                </span>
                <span className="text">❌ Traditional Trading Problem</span>
              </h3>
              <ul className="iconlist_block unordered_list_block">
                {[
                  {
                    label: "Lack of Real-Time Insight",
                    info: "Manual traders and basic bots can't react fast enough to sudden market changes, news, or sentiment shifts.",
                  },
                  {
                    label: "High Risk Exposure",
                    info: "No automatic protection against scams, honeypots, or liquidity traps—leading to costly losses.",
                  },
                  {
                    label: "Emotion-Based Decisions",
                    info: "Fear, greed, and FOMO drive most retail trading behavior—leading to poor timing and missed exits.",
                  },
                  {
                    label: "Fragmented Tools",
                    info: "Risk, sentiment, liquidity, and execution are handled separately—if at all—making strategies inefficient.",
                  },
                ].map((item, index) => (
                  <li key={index}>
                    <span className="iconlist_icon">
                      <Image src={check} alt="Icon Check" />
                    </span>
                    <span className="iconlist_label">
                      {item.label}
                      <small className="iconlist_info">{item.info}</small>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ICO Solution Section */}
            <div className="column_solution">
              <h3 className="heading_text">
                <span className="icon">
                  <Image src={sIcon2} alt="Icon Bulb" />
                </span>
                <span className="text">✅ Rasters Solution</span>
              </h3>
              <ul className="iconlist_block unordered_list_block">
                {[
                  {
                    label: "AI-Native Autonomous Platform",
                    info: "Rasters uses a network of AI agents that operate in sync—covering risk, strategy, sentiment, and liquidity in real time.",
                  },
                  {
                    label: "Built-In Protection",
                    info: "The Risk Agent auto-detects threats before you trade, protecting users from dangerous contracts and exploitative pools.",
                  },
                  {
                    label: "Emotionless, Data-Driven Execution",
                    info: "No panic. No FOMO. Trades are executed only when conditions align across AI-driven sentiment and strategy signals.",
                  },
                  {
                    label: "All-in-One Intelligence Mesh",
                    info: "All four agents—Risk, Strategy, Sentiment, and Liquidity—work as one coordinated system, so you're never out of sync with the market.",
                  },
                ].map((item, index) => (
                  <li key={index}>
                    <span className="iconlist_icon">
                      <Image src={check} alt="Icon Check" />
                    </span>
                    <span className="iconlist_label">
                      {item.label}
                      <small className="iconlist_info">{item.info}</small>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
