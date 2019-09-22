import Link from "next/link";
import { Icon } from "antd";
import oData from "src/data/components/footer/data.json";

const parseItemsIcon = ({ items }) =>
  items.map(item => item.type === "link" && <Alink data={item} />);

const parseItemsItem = ({ items }) =>
  items.map(item => item.type === "innerlink" && <A data={item} />);

const FooterItems = () => {
  return (
    <div className="footer-items">
        חפשו אותנו ב-
      <div className="footer-items__links">{parseItemsItem(oData)}</div>
      <div className="footer-items__innerlink">{parseItemsIcon(oData)}</div>
    </div>
  );
};

export default FooterItems;

const A = ({ data }) => {
  return (
    <a href={data.url} target="_blank">
      <Icon type={data.title} />
    </a>
  );
};
const Alink = ({ data }) => {
  return (
    <Link href={data.url}>
      <div className="pointer">{data.title}</div>
    </Link>
  );
};
