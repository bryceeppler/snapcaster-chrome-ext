function handleCheckoutClick(productIds) {
  if (chrome && chrome.runtime) {
    chrome.runtime.sendMessage({
      action: "startCartProcess",
      productIds: productIds,
    });
  }
}

const productIds = ["12345", "67890"]; 
handleCheckoutClick(productIds);
