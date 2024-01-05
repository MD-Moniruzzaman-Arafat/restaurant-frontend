import OrderOnlineSlider from "./OrderOnlineSlider";
import ShareTitle from "./ShareTitle";


const OrderOnline = () => {
      return (
            <>
                  <div className="my-20">
                        <ShareTitle smallTitle={"From 11:00am to 10:00pm"} largeTitle={"ORDER ONLINE"}></ShareTitle>
                        <OrderOnlineSlider></OrderOnlineSlider>
                  </div>
            </>
      );
};

export default OrderOnline;