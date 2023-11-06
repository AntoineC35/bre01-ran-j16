let typeOfMission = document.getElementsByClassName("mission");
const tableOfMission = [];
for (let i=0; i < typeOfMission.length; i++) {
  typeOfMission[i].textContent.push(tableOfMission)
}

document.addEventListener("DOMContentLoaded", function() {
  const h4Elements = document.getElementsByClassName("unroll");

  for (let i = 0; i < h4Elements.length; i++) {
    h4Elements[i].addEventListener("click", function() {
      switch (h4Elements[i].textContent) {
          case "Lead Développeuse":
              let lorem = document.createElement("p");
              lorem.textContent = "Je suis trop le meilleur dev de cette planete bla bla bla";
              h4Elements[i].appendChild(lorem);
              break;
          case "Développeuse Symphony":
              let lorem2 = document.createElement("p");
              lorem2.textContent = "Je suis trop le meilleur dev Symphony de cette planete bla bla bla";
              h4Elements[i].appendChild(lorem2);
              break;
          case "Développeuse PHP":
              let lorem3 = document.createElement("p");
              lorem3.textContent = "Language inconnu inventé par les Maya en 1378 grace a l'electricité généré par les Pyramides";
              h4Elements[i].appendChild(lorem3);
              break;
          case "Master Ingénieur Informatique":
              let lorem4 = document.createElement("p");
              lorem4.textContent = "Diplôme volé dans le bureau de Mari";
              h4Elements[i].appendChild(lorem4);
              break;
            case "Bac ES":
              let lorem5 = document.createElement("p");
              lorem5.textContent = "Une formalité - passé avec une main derrière le dos ";
              h4Elements[i].appendChild(lorem5);
              break;
            case "Voile":
              let lorem6 = document.createElement("p");
              lorem6.textContent = "Je fend le vent comme Link dans Wind waker";
              h4Elements[i].appendChild(lorem6);
              break;
            case "Jeux Vidéos":
              let lorem7 = document.createElement("p");
              lorem7.textContent = "Top 1 speedrunner Cyperpunk 2077";
              h4Elements[i].appendChild(lorem7);
              break;
            case "Echecs":
              let lorem8 = document.createElement("p");
              lorem8.textContent = "Je bats Manus Carlsen au petit dej";
              h4Elements[i].appendChild(lorem8);
              break;
      };
    });
  }
});