const randomColors = [
    { primary: "#231f20", secondary: "#362f31" },
    { primary: "#434242", secondary: "#615f5f" },
    { primary: "#664747", secondary: "#855b5b" },
    { primary: "#8d7559", secondary: "#ad8f6d" },
    { primary: "#1e2c35", secondary: "#2a3e4a" },
    { primary: "#506063", secondary: "#62777a" },
  ];

function getRandomColor(){
    const randomIndex = Math.floor(Math.random() * randomColors.length);
    return randomColors[randomIndex];
}

export default getRandomColor;