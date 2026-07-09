const orderList = document.getElementById("orderList");
const addOrderBtn = document.getElementById("addOrderBtn");

let orderId = 1; 

addOrderBtn.addEventListener("click", () => {
  const order = { id: orderId++, status: "En Proceso" };
  addOrder(order);
  processOrder(order);
});

function addOrder(order) {
  const listItem = document.createElement("li");
  listItem.id = `order-${order.id}`;
  listItem.textContent = `Pedido #${order.id}: ${order.status}`;
  orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
  const listItem = document.getElementById(`order-${order.id}`);
  if (listItem) {
    listItem.textContent = `Pedido #${order.id}: ${status}`;
  }
}

async function processOrder(order) {
  const preparationTime = new Promise((resolve) => {
    const randomTime = Math.floor(Math.random() * 3000) + 2000;
    setTimeout(() => {
      resolve();
    }, randomTime);

  });
  await preparationTime;
  updateOrderStatus(order, "Completado");
}
