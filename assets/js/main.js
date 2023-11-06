document.addEventListener("DOMContentLoaded", function() {
  const h4Elements = document.querySelectorAll("body > section > div.col-2 > h4");

  h4Elements.forEach(function(h4) {
    h4.addEventListener("click", function() {
      alert("You clicked on " + h4.textContent);
      console.log(h4.textContent);
    });
  });
});
