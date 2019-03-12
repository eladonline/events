import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'next/router';
import Footer from 'src/components/footer/Footer';
class Layout extends PureComponent {
  render() {
    return (
      <Fragment>
        {this.props.query.children}
        <Footer />
      </Fragment>
    );
  }
}
const Routed = withRouter(props => <Layout query={props} />);

export default Routed;
