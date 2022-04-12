import ShopGrid from "../components/shop/ShopGrid";
//import ShopSide from "../components/shop/ShopSide";
import { useEffect, useState } from "react";
import { getAllItems } from "../helpers/auth";
import Loading from "../components/ui/Loading";
import NetworkErr from "../components/ui/NetworkErr";
import { useSelector } from "react-redux";
import ShopNav from "../components/shop/ShopNav";

/* eslint-disable jsx-a11y/anchor-is-valid */
function ShopAll() {
  const adminHasUpdatedItem = useSelector(
    (state) => state.shop.adminHasUpdatedItem
  );
  const [allItems, setAllItems] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  //setAdminHasUpdatedItem
  useEffect(() => {
    if (allItems === null) {
      console.log(`is getting ${pageNumber} items`);
      getAllItems(pageNumber + 1)
        .then((res) => {
          console.log(res);
          setAllItems(res);
          setPageNumber(1);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [allItems, pageNumber]);

  useEffect(() => {
    if (pageNumber !== 0) {
      console.log(`is getting ${pageNumber} items`);
      getAllItems(pageNumber)
        .then((res) => {
          console.log(res);
          setAllItems(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [pageNumber, adminHasUpdatedItem]);

  const pagePrevious = () => {
    setPageNumber(pageNumber - 1);
  };
  const pageNext = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <div className="container-fluid container-fluid-px py-6">
      <div className="row">
        {allItems === null ? (
          <Loading />
        ) : allItems === "Network Error" ? (
          <NetworkErr />
        ) : allItems.length > 0 ? (
          <ShopGrid allItems={allItems} />
        ) : null}
        {allItems && (
          <ShopNav
            allItems={allItems}
            pageNumber={pageNumber}
            pagePrevious={pagePrevious}
            pageNext={pageNext}
          />
        )}
        {/*<ShopSide />*/}
      </div>
    </div>
  );
}

export default ShopAll;
