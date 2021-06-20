// #############################################################################################################
//
// GET SHOPIFY CART
//
// -------------------------------------------------------------------------------------------------------------
/**
 * Fetch Shopify Cart JSON
 */
export const getShopifyCart_fetch = async () => {
  const res = await fetch("/cart.json");
  return await res.json();
};

//
//
//
//
// #############################################################################################################
//
// GET TWIK JSON
//
// -------------------------------------------------------------------------------------------------------------
/**
 * Fetch Twik JSON
 */
export const getTwikJson_fetch = async () => {
  const { fingerprint } = JSON.parse(localStorage.getItem("twik_store") || "");
  let res = await fetch(
    `https://api.twik.io/twik?origin=${window.location.href}&snippet_id=${window.TWIK_ID}&fingerprint=${fingerprint}&ref=`
  );
  return await res.json();
};
