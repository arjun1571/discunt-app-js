document.getElementById("totalpricebtn").addEventListener("click", function () {
  const priceList = document.getElementById("price");
  const priceString = priceList.value;
  const price = parseFloat(priceString);
  priceList.value = "";

  const discuntPrice = document.getElementById("discunt");
  const discuntString = discuntPrice.value;
  const discunt = parseFloat(discuntString);
  console.log(discunt, typeof price);
  const dis = discunt / 100;
  const discuntValue = price - price * dis;
  discuntPrice.value = "";

  const totalDiscuntPrice = document.getElementById("totalPrice");
  const diccuntPriceString = totalDiscuntPrice.innerText;
  console.log(diccuntPriceString);
  //   const discuntPriceNumber = parseFloat(diccuntPriceString);
  const subTotal = (totalDiscuntPrice.innerText = discuntValue);
});
