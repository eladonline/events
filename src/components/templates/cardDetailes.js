import { priceFormatter } from "../helpers";
const CardDetailesTemplate = ({
  manufacture,
  mfctrUrl,
  supplyTime,
  warranty,
  price,
  warrning
}) => (
  <div className="card-detailes">
    {warrning && (
      <div className="card-detailes__warrning">חשוב! {warrning}</div>
    )}
    <li>
      יצרן ומידע נוסף:{" "}
      <a href={mfctrUrl} target="_blank">
        {manufacture}
      </a>{" "}
    </li>
    {typeof supplyTime === "number" ? (
      <NumberSupply supplyTime={supplyTime} />
    ) : (
      <StringSupply supplyTime={supplyTime} />
    )}
    <li>שנות אחריות: {warranty}</li>
    <li> מחיר כולל מע''מ: {priceFormatter(price)}</li>
  </div>
);

export default CardDetailesTemplate;

const NumberSupply = ({ supplyTime }) => (
  <li>זמן אספקה: עד {supplyTime} ימי עסקים (לרוב מגיע לפני) </li>
);

const StringSupply = ({ supplyTime }) => <li>זמן אספקה: {supplyTime}</li>;
