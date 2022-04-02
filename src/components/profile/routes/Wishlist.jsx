import { useSelector, useDispatch } from "react-redux";
import WishItem from "../../ui/WishItem";
import { useEffect } from "react";
import { getItemById } from "../../../helpers/auth";
import NetworkErr from "../../ui/NetworkErr";
import Loading from "../../ui/Loading";
import { emptyWish } from "../../ui/WishModal";
import { useState } from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */
function ProfileWishlist() {
  const dispatch = useDispatch();
  const wish = useSelector((state) => state.shop.wish);
  const [wishItems, updateWishItems] = useState([]);

  useEffect(() => {
    if (wish) {
      async function fillWish() {
        let wishes = [];
        const promises = [];
        for (let i = 0; i < wish.items.length; i++) {
          const id = wish.items[i];
          promises.push(getItemById(id));
        }
        wishes = await Promise.all(promises);

        return wishes;
      }
      fillWish().then((res) => {
        //console.log(res);
        updateWishItems(res);
      });
    }
  }, [wish, dispatch]);

  return (
    <div className="col-lg-8 col-xl-9">
      <div className="cart mb-5 mb-lg-0">
        <div className="cart-body">
          {!wish ? (
            emptyWish
          ) : wish ? (
            wish.items.length === 0 ? (
              emptyWish
            ) : (
              <div className="cart-item">
                {wishItems.map((item, index) => (
                  <WishItem key={index} index={index} item={item} />
                ))}
              </div>
            )
          ) : wish === "Network Error" ? (
            <NetworkErr />
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileWishlist;
