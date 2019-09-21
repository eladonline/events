import { Modal } from "antd";
import { SwiperCube } from "../swiper/swiper";
import BuySellFooter from "./buySellfooter";
import CardDetailesTemplate from "../templates/cardDetailes";

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
    const {
      title,
      description,
      img,
      background,
      detailes,
      triggerAddCart,
      warrning
    } = this.props;
    const { visible } = this.state;
    return (
      <div>
        <button
          style={{ backgroundImage: `url(${background})` }}
          className="modal-button-card"
          type="primary"
          onClick={this.showModal}
        >
          {title}
          <span>לחץ לפרטים</span>
        </button>
        <Modal
          title={title}
          visible={visible}
          onCancel={this.handleCancel}
          footer={null}
          wrapClassName="modal-card-dialog"
          className="modal-card-container"
        >
          <p>{description.text}</p>
          <div className="m-t-b-2">{img && <SwiperCube list={img} />}</div>
          <CardDetailesTemplate warrning={warrning} {...detailes} />
          <BuySellFooter triggerAddCart={triggerAddCart} data={this.props} />
        </Modal>
      </div>
    );
  }
}
