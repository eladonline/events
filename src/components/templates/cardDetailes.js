import { priceFormatter } from "../helpers";
const CardDetailesTemplate = ({
  manufacture,
  mfctrUrl,
  supplyTime,
  warranty,
  price
}) => (
  <div className="card-detailes">
    <li>
      יצרן:{" "}
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
