import React from "react";
import { IBaseComponent } from "../../utils";

const PlusIcon: React.FC<IBaseComponent> = () => {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask
        id="path-1-outside-1_0_80"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="17"
        height="17"
        fill="black"
      >
        <rect fill="white" width="17" height="17" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.5 1C8.22386 1 8 1.22386 8 1.5V8H1.5C1.22386 8 1 8.22386 1 8.5C1 8.77614 1.22386 9 1.5 9H8V15.5C8 15.7761 8.22386 16 8.5 16C8.77614 16 9 15.7761 9 15.5V9H15.5C15.7761 9 16 8.77614 16 8.5C16 8.22386 15.7761 8 15.5 8H9V1.5C9 1.22386 8.77614 1 8.5 1Z"
        />
      </mask>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.5 1C8.22386 1 8 1.22386 8 1.5V8H1.5C1.22386 8 1 8.22386 1 8.5C1 8.77614 1.22386 9 1.5 9H8V15.5C8 15.7761 8.22386 16 8.5 16C8.77614 16 9 15.7761 9 15.5V9H15.5C15.7761 9 16 8.77614 16 8.5C16 8.22386 15.7761 8 15.5 8H9V1.5C9 1.22386 8.77614 1 8.5 1Z"
        fill="#5C37B7"
      />
      <path
        d="M8 8V9H9V8H8ZM8 9H9V8H8V9ZM9 9V8H8V9H9ZM9 8H8V9H9V8ZM9 1.5C9 1.77614 8.77614 2 8.5 2V0C7.67157 0 7 0.671575 7 1.5H9ZM9 8V1.5H7V8H9ZM1.5 9H8V7H1.5V9ZM2 8.5C2 8.77614 1.77614 9 1.5 9V7C0.671573 7 0 7.67157 0 8.5H2ZM1.5 8C1.77614 8 2 8.22386 2 8.5H0C0 9.32843 0.671575 10 1.5 10V8ZM8 8H1.5V10H8V8ZM9 15.5V9H7V15.5H9ZM8.5 15C8.77614 15 9 15.2239 9 15.5H7C7 16.3284 7.67157 17 8.5 17V15ZM8 15.5C8 15.2239 8.22386 15 8.5 15V17C9.32843 17 10 16.3284 10 15.5H8ZM8 9V15.5H10V9H8ZM15.5 8H9V10H15.5V8ZM15 8.5C15 8.22386 15.2239 8 15.5 8V10C16.3284 10 17 9.32843 17 8.5H15ZM15.5 9C15.2239 9 15 8.77614 15 8.5H17C17 7.67157 16.3284 7 15.5 7V9ZM9 9H15.5V7H9V9ZM8 1.5V8H10V1.5H8ZM8.5 2C8.22386 2 8 1.77614 8 1.5H10C10 0.671573 9.32843 0 8.5 0V2Z"
        fill="#9173E6"
        mask="url(#path-1-outside-1_0_80)"
      />
    </svg>
  );
};

export default PlusIcon;
