let totalCoin = 1000000;
let leftTotalAmount = 0;
let totalWiningCoin = 0;
let isSuffleStart = true;

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

let suffleSecondsElement = document.getElementById("suffleSecondsElement");
let startSuffleSecondSpan = document.getElementById("startSuffleSecondSpan");
let startSuffleSecondElementBox = document.getElementById(
  "startSuffleSecondElementBox"
);

let totalCoinBox = document.getElementById("total-coin-box");
let winCoinEmelement = document.getElementById("winCoinEmelement");

let resultsContainer = document.getElementById("resultsContainer");

let iconsArray = ["🍅", "🥕", "🍉", "🍍", "🥭", "🍒", "🌽", "🥥"];

let resultIconElemenst = iconsArray.map((element) => {
  return `<p class="result-icon">${element}</p>`;
});

resultsContainer.innerHTML = resultIconElemenst.join("\n");

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
  if (activeAmounBox && isSuffleStart) {
    bettingItems1ClickCount += 1;
    const amount = bettingAmountCal(bettingItems1ClickCount);
    spenBettingAmount1.textContent = `${amount} coin`;
    bettingAmountList[0].amount = amount;
    calTotalSpendingAmount();
  } else {
    if (!isSuffleStart) {
      return;
    }
    alert("please selec an betting amount");
  }
});

let bettingItems2ClickCount = 0;
bettingItems2.addEventListener("click", () => {
  if (activeAmounBox && isSuffleStart) {
    bettingItems2ClickCount += 1;
    const amount = bettingAmountCal(bettingItems2ClickCount);
    spenBettingAmount2.textContent = `${amount} coin`;
    bettingAmountList[1].amount = amount;
    calTotalSpendingAmount();
  } else {
    if (!isSuffleStart) {
      return;
    }
    alert("please selec an betting amount");
  }
});

let bettingItems3ClickCount = 0;
bettingItems3.addEventListener("click", () => {
  if (activeAmounBox && isSuffleStart) {
    bettingItems3ClickCount += 1;
    const amount = bettingAmountCal(bettingItems3ClickCount);
    spenBettingAmount3.textContent = `${amount} coin`;
    bettingAmountList[2].amount = amount;
    calTotalSpendingAmount();
  } else {
    if (!isSuffleStart) {
      return;
    }
    alert("please selec an betting amount");
  }
});

let bettingItems4ClickCount = 0;
bettingItems4.addEventListener("click", () => {
  if (activeAmounBox && isSuffleStart) {
    bettingItems4ClickCount += 1;
    const amount = bettingAmountCal(bettingItems4ClickCount);
    spenBettingAmount4.textContent = `${amount} coin`;
    bettingAmountList[3].amount = amount;
    calTotalSpendingAmount();
  } else {
    if (!isSuffleStart) {
      return;
    }
    alert("please selec an betting amount");
  }
});

let bettingItems5ClickCount = 0;
bettingItems5.addEventListener("click", () => {
  if (activeAmounBox && isSuffleStart) {
    bettingItems5ClickCount += 1;
    const amount = bettingAmountCal(bettingItems5ClickCount);
    spenBettingAmount5.textContent = `${amount} coin`;
    bettingAmountList[4].amount = amount;
    calTotalSpendingAmount();
  } else {
    if (!isSuffleStart) {
      return;
    }
    alert("please selec an betting amount");
  }
});

let bettingItems6ClickCount = 0;
bettingItems6.addEventListener("click", () => {
  if (activeAmounBox && isSuffleStart) {
    bettingItems6ClickCount += 1;
    const amount = bettingAmountCal(bettingItems6ClickCount);
    spenBettingAmount6.textContent = `${amount} coin`;
    bettingAmountList[5].amount = amount;
    calTotalSpendingAmount();
  } else {
    if (!isSuffleStart) {
      return;
    }
    alert("please selec an betting amount");
  }
});

let bettingItems7ClickCount = 0;
bettingItems7.addEventListener("click", () => {
  if (activeAmounBox && isSuffleStart) {
    bettingItems7ClickCount += 1;
    const amount = bettingAmountCal(bettingItems7ClickCount);
    spenBettingAmount7.textContent = `${amount} coin`;
    bettingAmountList[6].amount = amount;
    calTotalSpendingAmount();
  } else {
    if (!isSuffleStart) {
      return;
    }
    alert("please selec an betting amount");
  }
});

let bettingItems8ClickCount = 0;
bettingItems8.addEventListener("click", () => {
  if (activeAmounBox && isSuffleStart) {
    bettingItems8ClickCount += 1;
    const amount = bettingAmountCal(bettingItems8ClickCount);
    spenBettingAmount8.textContent = `${amount} coin`;
    bettingAmountList[7].amount = amount;
    calTotalSpendingAmount();
  } else {
    if (!isSuffleStart) {
      return;
    }
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

let willStartSuffleingSeconds = 30;

const startGameCountDown = () => {
  startSuffleSecondElementBox.style.display = "none";
  handleOverlay("none");
  const startSecondCountDown = setInterval(() => {
    willStartSuffleingSeconds = willStartSuffleingSeconds - 1;
    if (willStartSuffleingSeconds == 0) {
      startSuffleSecondElementBox.style.display = "flex";
      clearInterval(startSecondCountDown);
      startSuffleSecond();
    } else {
      suffleSecondsElement.textContent = `${willStartSuffleingSeconds}s`;
    }
  }, 1000);
};

let suffleingSecond = 5;
let winningCoinAmount = 0;
const startSuffleSecond = () => {
  let randomIndex = Math.floor(Math.random() * 8 + 1);

  suffleItems(randomIndex);
  const suffleing = setInterval(() => {
    suffleingSecond = suffleingSecond - 1;
    if (suffleingSecond < 0) {
      clearInterval(suffleing);
      Swal.fire({
        icon: "success",
        title: `The winner is ${iconsArray[randomIndex - 1]}`,
        text: `You earned ${winningCoinAmount} coin`,
      }).then((result) => {
        restartProcess();
      });
    } else {
      startSuffleSecondSpan.textContent = `${suffleingSecond}s`;
    }
  }, 1000);
};

const suffleItems = (randomIndex) => {
  isSuffleStart = false;
  let activeCount = 0;
  // let randomItem = Math.floor(Math.random() * 8 + 1);
  const suffleing = setInterval(() => {
    activeCount += 1;
    if (suffleingSecond == 0) {
      clearInterval(suffleing);
      calculateWinCoin(bettingAmountList[randomIndex - 1]);
      handleOverlay("block");
      const overlayActive = document.getElementById(`overlay${randomIndex}`);
      handleResultArray(randomIndex - 1, 0);
      overlayActive.style.display = "none";
    } else {
      handleOverlay("block");
      if (activeCount > 0 && activeCount <= 8) {
        const overlayActive = document.getElementById(`overlay${activeCount}`);
        overlayActive.style.display = "none";
      } else {
        activeCount = 0;
      }
    }
  }, 200);
};

const handleOverlay = (value) => {
  const overlays = document.querySelectorAll(".overlay");
  overlays.forEach((overlay) => {
    overlay.style.display = value;
  });
};

const calculateWinCoin = (winIndexObje) => {
  winningCoinAmount = winIndexObje.amount * winIndexObje.counValue;
  totalWiningCoin += winningCoinAmount;
  winCoinEmelement.textContent = totalWiningCoin;
};

const restartProcess = () => {
  isSuffleStart = true;
  activeAmounBox = "";
  suffleingSecond = 5;
  willStartSuffleingSeconds = 30;

  startSuffleSecondSpan.textContent = `${suffleingSecond}s`;
  suffleSecondsElement.textContent = `${willStartSuffleingSeconds}s`;

  bettingItems1ClickCount = 0;
  bettingItems2ClickCount = 0;
  bettingItems3ClickCount = 0;
  bettingItems4ClickCount = 0;
  bettingItems5ClickCount = 0;
  bettingItems6ClickCount = 0;
  bettingItems7ClickCount = 0;
  bettingItems8ClickCount = 0;

  bettingAmountList = [
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

  spenBettingAmount1.textContent = "";
  spenBettingAmount2.textContent = "";
  spenBettingAmount3.textContent = "";
  spenBettingAmount4.textContent = "";
  spenBettingAmount5.textContent = "";
  spenBettingAmount6.textContent = "";
  spenBettingAmount7.textContent = "";
  spenBettingAmount8.textContent = "";

  document.querySelectorAll(".amount-box").forEach((element) => {
    element.classList.remove("amount-box-active");
  });
  startGameCountDown();
};

function handleResultArray(old_index, new_index) {
  resultsContainer.innerHTML = "";
  if (new_index >= iconsArray.length) {
    var k = new_index - iconsArray.length + 1;
    while (k--) {
      iconsArray.push(undefined);
    }
  }
  iconsArray.splice(new_index, 0, iconsArray.splice(old_index, 1)[0]);

  let resultIconElemenst = iconsArray.map((element) => {
    return `<p class="result-icon">${element}</p>`;
  });
  resultsContainer.innerHTML = resultIconElemenst.join("\n");
  iconsArray = ["🍅", "🥕", "🍉", "🍍", "🥭", "🍒", "🌽", "🥥"];
}

startGameCountDown();
