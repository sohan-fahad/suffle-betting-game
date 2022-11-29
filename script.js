let totalCoin = 1000000;
let leftTotalAmount = 0;
let winingCoin = 0;

let bettingAmount1 = 0;
let bettingAmount2 = 0;
let bettingAmount3 = 0;

let activeAmounBox = "";
let bettingAmountList = [
  {
    amount: 0,
    counValue: 10,
  },
  {
    amount: 0,
    counValue: 15,
  },
  {
    amount: 0,
    counValue: 25,
  },
  {
    amount: 0,
    counValue: 45,
  },
  {
    amount: 0,
    counValue: 5,
  },
  {
    amount: 0,
    counValue: 5,
  },
  {
    amount: 0,
    counValue: 5,
  },
  {
    amount: 0,
    counValue: 5,
  },
];

let bettingAmountBox1 = document.getElementById("amount-box-1");
let bettingAmountBox2 = document.getElementById("amount-box-2");
let bettingAmountBox3 = document.getElementById("amount-box-3");

let bettingItems1 = document.getElementById("betting-items-1");
let bettingItems2 = document.getElementById("betting-items-2");
let bettingItems3 = document.getElementById("betting-items-3");
let bettingItems4 = document.getElementById("betting-items-4");
let bettingItems5 = document.getElementById("betting-items-5");
let bettingItems6 = document.getElementById("betting-items-6");
let bettingItems7 = document.getElementById("betting-items-7");
let bettingItems8 = document.getElementById("betting-items-8");

let spenBettingAmount1 = document.getElementById("spenBettingAmount1");
let spenBettingAmount2 = document.getElementById("spenBettingAmount2");
let spenBettingAmount3 = document.getElementById("spenBettingAmount3");
let spenBettingAmount4 = document.getElementById("spenBettingAmount4");
let spenBettingAmount5 = document.getElementById("spenBettingAmount5");
let spenBettingAmount6 = document.getElementById("spenBettingAmount6");
let spenBettingAmount7 = document.getElementById("spenBettingAmount7");
let spenBettingAmount8 = document.getElementById("spenBettingAmount8");

let totalCoinBox = document.getElementById("total-coin-box");

totalCoinBox.textContent = `available coin ${totalCoin}`;

bettingAmountBox1.addEventListener("click", () => {
  bettingAmount1 = 100;
  activeAmounBox = "bettingAmountBox1";
  bettingAmountBox1.classList.add("amount-box-active");
  bettingAmountBox2.classList.remove("amount-box-active");
  bettingAmountBox3.classList.remove("amount-box-active");
});

bettingAmountBox2.addEventListener("click", () => {
  bettingAmount2 = 500;
  activeAmounBox = "bettingAmountBox2";
  bettingAmountBox2.classList.add("amount-box-active");
  bettingAmountBox1.classList.remove("amount-box-active");
  bettingAmountBox3.classList.remove("amount-box-active");
});

bettingAmountBox3.addEventListener("click", () => {
  bettingAmount3 = 1000;
  activeAmounBox = "bettingAmountBox3";
  bettingAmountBox3.classList.add("amount-box-active");
  bettingAmountBox1.classList.remove("amount-box-active");
  bettingAmountBox2.classList.remove("amount-box-active");
});

let bettingItems1ClickCount = 0;
bettingItems1.addEventListener("click", () => {
  if (activeAmounBox) {
    bettingItems1ClickCount += 1;
    const amount = bettingAmountCal(bettingItems1ClickCount);
    spenBettingAmount1.textContent = `${amount} coin`;
    bettingAmountList[0].amount = amount;
    calTotalSpendingAmount();
  } else {
    alert("please selec an betting amount");
  }
});

let bettingItems2ClickCount = 0;
bettingItems2.addEventListener("click", () => {
  if (activeAmounBox) {
    bettingItems2ClickCount += 1;
    const amount = bettingAmountCal(bettingItems2ClickCount);
    spenBettingAmount2.textContent = `${amount} coin`;
    bettingAmountList[1].amount = amount;
    calTotalSpendingAmount();
  } else {
    alert("please selec an betting amount");
  }
});

let bettingItems3ClickCount = 0;
bettingItems3.addEventListener("click", () => {
  if (activeAmounBox) {
    bettingItems3ClickCount += 1;
    const amount = bettingAmountCal(bettingItems3ClickCount);
    spenBettingAmount3.textContent = `${amount} coin`;
    bettingAmountList[2].amount = amount;
    calTotalSpendingAmount();
  } else {
    alert("please selec an betting amount");
  }
});

let bettingItems4ClickCount = 0;
bettingItems4.addEventListener("click", () => {
  if (activeAmounBox) {
    bettingItems4ClickCount += 1;
    const amount = bettingAmountCal(bettingItems4ClickCount);
    spenBettingAmount4.textContent = `${amount} coin`;
    bettingAmountList[3].amount = amount;
    calTotalSpendingAmount();
  } else {
    alert("please selec an betting amount");
  }
});

let bettingItems5ClickCount = 0;
bettingItems5.addEventListener("click", () => {
  if (activeAmounBox) {
    bettingItems5ClickCount += 1;
    const amount = bettingAmountCal(bettingItems5ClickCount);
    spenBettingAmount5.textContent = `${amount} coin`;
    bettingAmountList[4].amount = amount;
    calTotalSpendingAmount();
  } else {
    alert("please selec an betting amount");
  }
});

const bettingAmountCal = (count) => {
  if (activeAmounBox == "bettingAmountBox1") {
    const amount = bettingAmount1 * count;
    return amount;
  } else if (activeAmounBox == "bettingAmountBox2") {
    const amount = bettingAmount2 * count;
    return amount;
  } else {
    const amount = bettingAmount3 * count;
    return amount;
  }
};

const calTotalSpendingAmount = () => {
  let spendTotalCoin = 0;
  bettingAmountList.forEach((element) => {
    spendTotalCoin = spendTotalCoin + element.amount;
  });
  totalCoinBox.textContent = `available coin ${totalCoin - spendTotalCoin}`;
};
