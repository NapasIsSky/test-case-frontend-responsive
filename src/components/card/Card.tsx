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

  return (
    <div className={className}>
      <div className="flex">
        <div>
          <p className="text-lg">{number}</p>
          <div className={`flex rounded-sm h-1 ${contrast ? " bg-white" : "purple-bg"}`} />
        </div>
        <h2>{title}</h2>
      </div>
      <p className="text-xl">{content}</p>
    </div>
  );
};

export default Card;
