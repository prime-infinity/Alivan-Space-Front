import ShopGrid from "../components/shop/ShopGrid";
import ShopSide from "../components/shop/ShopSide";
import { useEffect, useState } from "react";
import { getAllItems } from "../helpers/auth";
import Loading from "../components/ui/Loading";
import NetworkErr from "../components/ui/NetworkErr";

/* eslint-disable jsx-a11y/anchor-is-valid */
function ShopAll() {
  const [allItems, setAllItems] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    if (allItems === null) {
      console.log("is getting all items");
      getAllItems(pageNumber)
        .then((res) => {
          console.log(res);
          setAllItems(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [allItems, pageNumber]);

  const pagePrevious = () => {
    console.log("is going prev");
    setPageNumber(pageNumber - 1);
    console.log(pageNumber);
  };
  const pageNext = () => {
    setPageNumber(pageNumber + 1);
    console.log("is going next");
    console.log(pageNumber);
  };

  return (
    <div className="container-fluid container-fluid-px py-6">
      <div className="row">
        {allItems === null ? (
          <Loading />
        ) : allItems === "Network Error" ? (
          <NetworkErr />
        ) : allItems.length > 0 ? (
          <ShopGrid
            allItems={allItems}
            pageNumber={pageNumber}
            pagePrevious={pagePrevious}
            pageNext={pageNext}
          />
        ) : null}

        <ShopSide />
      </div>
    </div>
  );
}

export default ShopAll;
