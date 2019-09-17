import React, { PureComponent } from 'react';
import { withRouter } from 'next/router';
import Footer from 'src/components/footer/footer';
class Layout extends PureComponent {
  render() {
    return (
      <div className='layout'>
        {this.props.query.children}
        <Footer />
      </div>
    );
  }
}
const Routed = withRouter(props => <Layout query={props} />);

export default Routed;
