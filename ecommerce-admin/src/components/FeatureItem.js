import React from "react";
import Typewriter from "typewriter-effect";
import "./FeatureItem.css";

const FeatureItem = ({ stuff, feature2 }) => {
  return (
    <div className="feature-item">
      {stuff?.map((item) => (
        <div className="feature" key={item.id}>
          <span className="feature-title"></span>
          <div className="feature-Container">
            <span className="feature-title">{item.title}</span>
            <div className="money-feature">
              <span className="feature-money">
                <Typewriter
                  options={{
                    strings: [`₹ ${item.money}`],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
              <span className="feature-moneyRate">
                {item.moneyRate}{" "}
                <span
                  className={
                    item.moneyRate < 0
                      ? "feature-Icon negative"
                      : "feature-Icon"
                  }
                >
                  {item.icon}
                </span>
              </span>
            </div>
          </div>
          <span className="feature-more">{feature2}</span>
        </div>
      ))}
    </div>
  );
};

export default FeatureItem;
