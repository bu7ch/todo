import React,{ FC } from "react";
import { ColumnContainer, ColumnTitle } from "../styles";
import Card from "./Card";
import { AddNewItem } from "./AddNewItem";

type ColumnProps = {
  text: string;
  children?: React.ReactNode
};

export const Column: FC<ColumnProps> = ({ text, children }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>
        <div>{text}</div>
      </ColumnTitle>
      {children}
      <AddNewItem toggleButtonText=" + Ajouter une autre tâche" onAdd={console.log} dark/>
    </ColumnContainer>
  );
};
