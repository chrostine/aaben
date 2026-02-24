function setupControls() {
  seedControl = document.getElementById("seed");
  seedControl.value = seed;
  seedControl.addEventListener("sl-input", () => {
    seed = seedControl.value;
  });

  antalControl = document.getElementById("antal");
  antalControl.value = antal;
  antalControl.addEventListener("sl-input", () => {
    antal = antalControl.value;
    kolonner = rækker = antal;
  });

  sizeControl = document.getElementById("size");
  sizeControl.value = size;
  sizeControl.addEventListener("sl-input", () => {
    size = sizeControl.value;
  });

  breddeControl = document.getElementById("bredde");
  breddeControl.value = bredde;
  breddeControl.addEventListener("sl-input", () => {
    bredde = breddeControl.value;
  });
  
  hojdeControl = document.getElementById("hojde");
  hojdeControl.value = hojde;
  hojdeControl.addEventListener("sl-input", () => {
    hojde = hojdeControl.value;
  });

  roundedControl = document.getElementById("rounded");
  roundedControl.value = rounded;
  roundedControl.addEventListener("sl-input", () => {
    rounded = roundedControl.value;
  });

  effektControl = document.getElementById("effekt");
  effektControl.value = effekt;
  effektControl.addEventListener("sl-input", () => {
    effekt = effektControl.value;
  });
}

function randomizeParameters() {
  randomSeed(millis());
  seedControl.value = random(seedControl.min, seedControl.max);
  antalControl.value = random(antalControl.min, antalControl.max);
  roundedControl.value = random(roundedControl.min, roundedControl.max);
  effektControl.value = random(effektControl.min, effektControl.max);
  breddeControl.value = random(breddeControl.min, breddeControl.max)
  hojdeControl.value = random(hojdeControl.min, hojdeControl.max)

  if (antalControl.value < antalControl.max / 3) {
    sizeControl.value = random(sizeControl.min, sizeControl.max);
  } else if (antalControl.value > antalControl.max / 3) {
    sizeControl.value = random(sizeControl.min, sizeControl.max / 2);
  }

  seedControl.dispatchEvent(new CustomEvent("sl-input", { detail: { value: seedControl.value } }));
  antalControl.dispatchEvent(new CustomEvent("sl-input", { detail: { value: antalControl.value } }));
  sizeControl.dispatchEvent(new CustomEvent("sl-input", { detail: { value: sizeControl.value } }));
  breddeControl.dispatchEvent(new CustomEvent("sl-input", { detail: { value: breddeControl.value } }));
  hojdeControl.dispatchEvent(new CustomEvent("sl-input", { detail: { value: hojdeControl.value } }));
  roundedControl.dispatchEvent(new CustomEvent("sl-input", { detail: { value: roundedControl.value } }));
  effektControl.dispatchEvent(new CustomEvent("sl-input", { detail: { value: effektControl.value } }));
}