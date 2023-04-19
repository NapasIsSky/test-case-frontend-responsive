import React from "react";
import { IBaseComponent } from "../../utils";

export interface ICard extends IBaseComponent {
  number: string;
  title: string;
  content: string;
  contrast?: boolean;
  theme?: "dark";
}

const Card: React.FC<ICard> = (props) => {
  const { number, title, content, contrast, theme, className } = props;

  const isDarkContrast = contrast && theme === "dark";
  const isNormalContrast = contrast && !theme;

  return (
    <div className={`flex flex-col justify-center ${className} ${contrast ? "text-white" : ""}`}>
      <div className="flex items-center">
        <div className="mr-4">
          <p
            className={`text-lg ${isDarkContrast ? "purple-text" : ""} ${
              isNormalContrast ? "dark-purple-text" : ""
            }`}
          >
            {number}
          </p>
          <div className={`flex rounded-sm h-1 ${contrast ? " bg-white" : "purple-bg"}`} />
        </div>
        <h2 className="text-grey-2-text">{title}</h2>
      </div>
      <p className="text-xl pt-5">{content}</p>
    </div>
  );
};

export default Card;
