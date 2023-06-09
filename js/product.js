async function getProduct() {
  var response = await fetch(
    "https://my-json-server.typicode.com/Lugus-Shopify/hiring/product",
    {
      method: "GET",
    }
  );
  return response.json();
}

async function init() {
  var product = await getProduct();

  //Contenu

  document.getElementById("price").innerHTML = product.price + " €";
  document.getElementById("description").innerHTML = product.description;
  document.getElementById("container").remove();
  document.getElementById("blue").innerHTML = product.variants[0].color;
  document.getElementById("yellow").innerHTML = product.variants[2].color;
  document.getElementById("M").innerHTML = product.variants[0].size;
  document.getElementById("L").innerHTML = product.variants[1].size;


  

    function toggleVariantsImage() {
      var bluebuttonIsButton = bluebutton.classList.contains("button");
      var MbuttonIsButton = Mbutton.classList.contains("button");
      var MbuttonIsLightButton = Mbutton.classList.contains("lightbutton");
      var bluebuttonIsLightButton = bluebutton.classList.contains("lightbutton");
      var imageHTML = document.getElementById("imagesnow");

    var variant = product.variants[0];  
    if (bluebuttonIsButton && MbuttonIsButton) {
      imageHTML.setAttribute("src", product.variants[0].image)
      variant = product.variants[0];
    } else if (bluebuttonIsButton && MbuttonIsLightButton) {
      imageHTML.setAttribute("src", product.variants[1].image)
      variant = product.variants[1];;
    } else if (bluebuttonIsLightButton && MbuttonIsButton) {
      imageHTML.setAttribute("src", product.variants[2].image)
      variant = product.variants[2];;
    } else {
      imageHTML.setAttribute("src", product.variants[3].image)
      variant = product.variants[3];;
    }

    //Use this variant in cart process


  }

  const bluebutton = document.getElementById("blue");
  const yellowbutton = document.getElementById("yellow");
  const Mbutton = document.getElementById("M");
  const Lbutton = document.getElementById("L");

  toggleVariantsImage();

  document.getElementById("blue").onclick = function () {
    if (bluebutton.classList.contains("button")) {
      bluebutton.classList.add("lightbutton");
      bluebutton.classList.remove("button");
      yellowbutton.classList.add("button");
      yellowbutton.classList.remove("lightbutton");
      toggleVariantsImage();
    } else {
      bluebutton.classList.add("button");
      bluebutton.classList.remove("lightbutton");
      yellowbutton.classList.remove("button");
      yellowbutton.classList.add("lightbutton");
      toggleVariantsImage();
    }
  };

  document.getElementById("yellow").onclick = function () {
    if (bluebutton.classList.contains("button")) {
      bluebutton.classList.add("lightbutton");
      bluebutton.classList.remove("button");
      yellowbutton.classList.add("button");
      yellowbutton.classList.remove("lightbutton");
      toggleVariantsImage();
    } else {
      bluebutton.classList.add("button");
      bluebutton.classList.remove("lightbutton");
      yellowbutton.classList.remove("button");
      yellowbutton.classList.add("lightbutton");
      toggleVariantsImage();
    }
  };

  document.getElementById("M").onclick = function () {
    if (Mbutton.classList.contains("button")) {
      Mbutton.classList.add("lightbutton");
      Mbutton.classList.remove("button");
      Lbutton.classList.add("button");
      Lbutton.classList.remove("lightbutton");
      toggleVariantsImage();
    } else {
      Mbutton.classList.add("button");
      Mbutton.classList.remove("lightbutton");
      Lbutton.classList.remove("button");
      Lbutton.classList.add("lightbutton");
      toggleVariantsImage();
    }
  };

  document.getElementById("L").onclick = function () {
    if (Lbutton.classList.contains("button")) {
      Lbutton.classList.add("lightbutton");
      Lbutton.classList.remove("button");
      Mbutton.classList.add("button");
      Mbutton.classList.remove("lightbutton");
      toggleVariantsImage();
    } else {
      Lbutton.classList.add("button");
      Lbutton.classList.remove("lightbutton");
      Mbutton.classList.remove("button");
      Mbutton.classList.add("lightbutton");
      toggleVariantsImage();
    }
  };

  var plus = document.getElementById("+");
  var moins = document.getElementById("-");
  var quantite = 1;
  document.getElementById("quantite").innerHTML = quantite;

  document.getElementById("+").onclick = function () {
    quantite += 1;
    document.getElementById("quantite").innerHTML = quantite;
  };
  document.getElementById("-").onclick = function () {
    if (quantite > 1) {
      quantite -= 1;
    } else {
      quantite = 1;
    }
    document.getElementById("quantite").innerHTML = quantite;
  };

  initRating(product.reviews);
  function initRating(reviews) {
    var sum = 0;
    for (var review of reviews) {
      sum += review.rate;
      var reviewHTML =
        '<div id="div_comment"><div><p id="comment">' +
        review.comment +
        '</p><p id="rate">' +
        review.rate +
        '/5</p></div><p id="author">John Doe</p></div>';
      document.getElementById("commentContainer").innerHTML += reviewHTML;
    }
    document.getElementById('mean').innerText = Math.round(sum/reviews.length*10)/10;
    


  }

}

init();


