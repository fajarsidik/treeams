import { CardItem } from "../types/card";

interface CardProps {
  cardData: CardItem[];
}
const Card = ({ cardData = [] }: CardProps) => {
  return (
    <div className="container-fluid mb-4">
      <div className="row">
        {cardData && cardData.map((item) => (
           <div className="col-md-3">
           <div className="white-box p-4">
              <h4 className="mb-3">{item.title}</h4>
              <h4 className="mb-1">{item.total}</h4>
           </div>
         </div>
        ))}
              
      </div>
    </div>
  );
};

export default Card;
