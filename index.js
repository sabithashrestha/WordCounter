let inputData = document.querySelectorAll("#mainTextArea")[0];
function handleChange(e) {
  //characters counter logic
  var characters = inputData.value; //.replace(/\s/gi, "");
  document.querySelector("#ttlCharacters").innerHTML = characters.length;
  // word counter logic
  var words = inputData.value.match(/\b[-?(\w+)?]+\b/gi);
  document.querySelector("#ttlWords").innerHTML = words.length;
  // sentence count logic
  var sentences = inputData.value.split(/[.|!|?]+/g);
  document.querySelector("#ttlSentences").innerHTML = sentences.length;

  // paragraph counter logic
  var paragraphs = inputData.value.replace(/\n$/gm, "");
  document.querySelector("#ttlParagraphs").innerHTML =
    paragraphs.split(/\n/).length;
}

inputData.addEventListener("keyup", handleChange);
