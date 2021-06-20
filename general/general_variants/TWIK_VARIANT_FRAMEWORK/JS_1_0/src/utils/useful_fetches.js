export const fetch_jQuery = async () => {
  const res = await fetch("https://code.jquery.com/jquery-3.6.0.min.js", {
    method: "GET",
    mode: "no-cors", // same-origin, no-cors
    integrity: "sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=", // a hash, like "sha256-abcdef1234567890"
  });
  return await res.json();
};

// #############################################################################################################
//
// GET SHOPIFY CART
//
// -------------------------------------------------------------------------------------------------------------
/**
 * Fetch Shopify Cart JSON
 * @returns {object}
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
 * @returns {object}
 */
export const getTwikJson_fetch = async () => {
  const { fingerprint } = JSON.parse(localStorage.getItem("twik_store"));
  let res = await fetch(
    `https://api.twik.io/twik?origin=${window.location.href}&snippet_id=${TWIK_ID}&fingerprint=${fingerprint}&ref=`
  );
  return await res.json();
};
