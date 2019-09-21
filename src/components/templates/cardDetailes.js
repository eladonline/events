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
    <li>זמן אספקה: {supplyTime} ימי עסקים </li>
    <li>שנות אחריות: {warranty}</li>
    <li> מחיר כולל מע''מ: {priceFormatter(price)}</li>
  </div>
);

export default CardDetailesTemplate;
