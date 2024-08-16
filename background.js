chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "startCartProcess") {
      const productIds = request.productIds;
      const website = request.website
  
      fetch(`${website}/cart/clear`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(() => {
        const addPromises = productIds.map(productId => {
          return fetch('https://www.site.com/cart/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `id=${productId}&quantity=1`
          });
        });
  
        return Promise.all(addPromises);
      })
      .then(() => {
        chrome.tabs.create({ url: 'https://www.site.com/cart/' });
      })
      .catch(error => {
        console.error('Error during cart process:', error);
      });
    }
  });
  