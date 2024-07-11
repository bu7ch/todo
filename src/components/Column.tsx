import { FC } from "react";
import { ColumnContainer, ColumnTitle } from "../styles";
import Card from "./Card";

type ColumnProps = {
  text: string;
};

export const Column: FC<ColumnProps> = ({ text }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>
        <div>{text}</div>
      </ColumnTitle>
      {/* {children} */}
      <Card text="je suis là" />
      <Card text="Learn Typescript" />
    </ColumnContainer>
  );
};
