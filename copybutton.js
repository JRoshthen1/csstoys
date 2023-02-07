  const textToCopy = document.querySelector("#gradientCssOutput")
  const copyButton = document.querySelector("#copy-button")

  copyButton.addEventListener("click", function() {
    const textArea = document.createElement("textarea")
    textArea.value = textToCopy.innerHTML
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand("copy")
    textArea.remove()
  });