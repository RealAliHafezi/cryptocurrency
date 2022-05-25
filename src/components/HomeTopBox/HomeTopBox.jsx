// icon
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";
// style
import "./HomeTopBox.css";
function HomeTopBox(props) {
  return (
    <div className="HomeTopBox col-12 col-lg-6 col-xl-4 offset-lg-0 p-2 mx-auto">
      <div className="HomeTopBoxBox pt-2 pb-1 px-2 px-sm-3 rounded-3">
        <h3 className="HomeTopBoxLable fw-normal d-flex align-items-center border-1 border-bottom border-dark pb-1">
          {props.data.lable}
          {props.data.lableIcon}
        </h3>
        <ul className="HomeTopBoxList p-0">
          {props.data.data &&
            props.data.data.map((item, index) => (
              <li
                className="HomeTopBoxItem d-flex align-items-center justify-content-between rounded-3 px-2 py-1"
                key={index}
              >
                <div className="HomeTopBoxLeft d-flex align-items-center">
                  <span className="HomeTopBoxItemID me-1 me-sm-3">
                    {index + 1}
                  </span>
                  <img
                    src={item.image}
                    className="HomeTopBoxItemImg"
                    alt={item.name}
                  />
                  <span className="fs-6 mx-2 d-none d-sm-block">
                    {item.name}
                  </span>
                  <span className="HomeTopBoxItemSynbol mx-1 mx-sm-0">
                    {item.symbol}
                  </span>
                </div>
                {props.data.price ? (
                  <span className="HomeTopBoxItemPercentage">
                    {props.data.percentage ? (
                      <MdOutlineArrowDropUp className="fs-3 ms-1 HomeTopBoxItemPercentage_green" />
                    ) : (
                      <MdOutlineArrowDropDown className="fs-3 ms-1 HomeTopBoxItemPercentage_red" />
                    )}
                    {item.price_change_percentage_24h.toFixed(1)}%
                  </span>
                ) : (
                  <span className="HomeTopBoxItemPrice">
                    $ {item.current_price}
                  </span>
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default HomeTopBox;
