function getRandomPosition(cloudWidth, cloudHeight) {
  const formRect = document.querySelector(".container").getBoundingClientRect();
  const margin = 40; 

  const maxX = window.innerWidth - cloudWidth;
  const maxY = window.innerHeight - cloudHeight;

  let x, y;
  let intentos = 0;
  const maxIntentos = 30;

  do {
    x = Math.random() * maxX;
    y = Math.random() * maxY;
    intentos++;
  } while (
    x < formRect.right + margin &&
    x + cloudWidth > formRect.left - margin &&
    y < formRect.bottom + margin &&
    y + cloudHeight > formRect.top - margin &&
    intentos < maxIntentos
  );

  return { x, y };
}

function comentarios() {
  let name = document.getElementById("userName").value.trim();
  let coment = document.getElementById("userComent").value.trim();

  if (name === "" || coment === "") {
    alert("Por favor escribe tu nombre y un comentario antes de enviar.");
    return;
  }

  let cloud = document.createElement("div");
  cloud.className = "comment__cloud";
  cloud.innerHTML = "<strong class='comment__name'>" + name + "</strong>" + coment;

  document.querySelector(".imgBackround").appendChild(cloud);

  let cloudWidth = cloud.offsetWidth;
  let cloudHeight = cloud.offsetHeight;
  let pos = getRandomPosition(cloudWidth, cloudHeight);

  cloud.style.left = pos.x + "px";
  cloud.style.top = pos.y + "px";

  document.getElementById("myForm").reset();
}
