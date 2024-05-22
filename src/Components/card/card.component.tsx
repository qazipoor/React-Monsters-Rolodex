import { Monster } from "../../App";

import "./card.styles.css";

type CardProps = {
  monster: Monster
};

const Card = ({ monster }: CardProps) => {
  const { id, name, email } = monster;

  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2`}
        alt={`Monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

// class Card extends Component {
//     render() {
//     const { id, name, email } = this.props.monster;
//     return (
//         <div className="card-container" key={id}>
//             <img
//                 src={`https://robohash.org/${id}?set=set2`}
//                 alt={`Monster ${name}`}
//             />
//             <h2>{name}</h2>
//             <p>{email}</p>
//         </div>
//     );
//     }
// }

export default Card;
