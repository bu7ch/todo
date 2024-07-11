import { CardContainer } from "../styles";

type CardProps = {
  text: string;
};

function Card({ text }: CardProps) {
  return (
    <>
      <CardContainer>{text}</CardContainer>
    </>
  );
}

export default Card;
