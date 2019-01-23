var inputElements = document.querySelectorAll('input');

for (var i = 0; i < inputElements.length; i++) {
    var className = inputElements[i].className;
    let targetElement = document.querySelector('.'+className);

    inputElements[i].addEventListener('keyup', function (e) {
        targetElement.textContent = e.target.value;
    });
}


/*
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
<div class="big">Hello</div>
<h1 class="hello"></h1>
<div class="big">Yello</div>
<h2 class="yello"></h2>
<div class="big">Jello</div>
<h3 class="jello"></h3>

<div class="big">Hello</div>
<input type="text" class="hello">
<div class="big">Yello</div>
<input type="text" class="yello">
<div class="big">Jello</div>
<input type="text" class="jello">
</body>
</html>
*/ 