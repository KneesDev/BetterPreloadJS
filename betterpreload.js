const loadingScreen = document.createElement("div");

loadingScreen.style.position = "fixed";
loadingScreen.style.top = "0";
loadingScreen.style.left = "0";
loadingScreen.style.width = "100%";
loadingScreen.style.height = "100%";
loadingScreen.style.backgroundColor = "#fafaff";
loadingScreen.style.opacity = 1;
loadingScreen.style.zIndex = 9999;
loadingScreen.style.display = "flex";
loadingScreen.style.justifyContent = "center";
loadingScreen.style.alignItems = "center";
loadingScreen.style.transition = "opacity 0.1s ease-out";

const spinner = document.createElement("div");
spinner.style.transform = "translate(-50%, -50%)";
spinner.style.width = "46px";
spinner.style.height = "46px";
spinner.style.borderRadius = "50%";
spinner.style.border = "5px solid #bfc5ff";
spinner.style.borderTopColor = "#4759ff";
spinner.style.animation = "spin 1s linear infinite";
loadingScreen.appendChild(spinner);

document.body.appendChild(loadingScreen);

setTimeout(() => {
    loadingScreen.style.opacity = 0;

    setTimeout(() => {
        document.body.removeChild(loadingScreen);
    }, 100);
}, 3000);

const spinnerStyles = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const styleElement = document.createElement("style");
styleElement.appendChild(document.createTextNode(spinnerStyles));
document.head.appendChild(styleElement);