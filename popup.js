// Restaurar configurações salvas
chrome.storage.sync.get(["newColor", "lightMode"], (data) => {
  if (data.newColor) {
    document.getElementById("colorPicker").value = data.newColor;
  }
  document.getElementById("lightModeToggle").checked = !!data.lightMode;
});

// Salvar cor + modo claro
document.getElementById('saveBtn').addEventListener('click', () => {
  const selectedColor = document.getElementById('colorPicker').value;
  const lightMode = document.getElementById('lightModeToggle').checked;

  chrome.storage.sync.set({ newColor: selectedColor, lightMode: lightMode }, () => {
    chrome.tabs.reload();
  });
});

