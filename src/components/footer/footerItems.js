import Link from "next/link";
import { Icon } from "antd";
import oData from "src/data/components/footer/data.json";

const parseItemsIcon = ({ items }) =>
  items.map(
    item => item.type === "link" && <Alink key={item.title} data={item} />
  );

const parseItemsItem = ({ items }) =>
  items.map(
    item => item.type === "innerlink" && <A key={item.title} data={item} />
  );

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

const A = ({ data }, i) => {
  return (
    <a
      title={data.title}
      key={`footerItem${data.title}`}
      href={data.url}
      target="_blank"
    >
      <Icon type={data.title} />
    </a>
  );
};
const Alink = ({ data }) => {
  return (
    <Link key={`footerItem${data.title}`} href={data.url}>
      <a title={data.title}>
        <div className="pointer">{data.title}</div>
      </a>
    </Link>
  );
};
