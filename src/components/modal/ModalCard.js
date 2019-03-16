import { Modal } from 'antd';
export default class ModalCard extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { title, text } = this.props;
    const { visible } = this.state;
    return (
      <div>
        <button className="modal-button-card" type="primary" onClick={this.showModal}>
          {title}
        </button>
        <Modal
          title={title}
          visible={visible}
          onCancel={this.handleCancel}
          footer={null}
          wrapClassName="modal-card-dialog"
          className="modal-card-container"
        >
          <p>{text}</p>
        </Modal>
      </div>
    );
  }
}
