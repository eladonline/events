import { withRouter } from "next/router";
import Footer from "src/components/footer/footer";

function Layout(props) {
  return (
    <div className="layout">
      {props.query.children}
      <Footer />
    </div>
  );
}
const Routed = withRouter(props => <Layout query={props} />);

export default Routed;
