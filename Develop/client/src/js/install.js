const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default prompt
  event.preventDefault();
  // Store the event to use it later
  deferredPrompt = event;
  // Show the install button
  butInstall.style.display = 'block';
});


butInstall.addEventListener('click', async () => {
butInstall.style.display = 'none';
deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
const choiceResult = await deferredPrompt.userChoice;
  // Check if the user accepted the prompt
if (choiceResult.outcome === 'accepted') {
    console.log('User accepted the install prompt');
  } else {
    console.log('User dismissed the install prompt');
  }
  // Reset the deferredPrompt variable
deferredPrompt = null;
});


window.addEventListener('appinstalled', (event) => {
console.log('App installed successfully');
});
