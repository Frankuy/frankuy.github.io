const btnAdd = document.getElementById('btn-add-home')
let deferredPrompt
window.addEventListener('beforeinstallprompt', event => {
    console.log("before install prompt")
    event.preventDefault()
    deferredPrompt = event
    btnAdd.removeAttribute("hidden");
})

btnAdd.addEventListener('click', _ => {
    if (!deferredPrompt) {
        return;
    }
    deferredPrompt.prompt()
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome == "accepted") {
            console.log("User accepted the AH2S prompt")
        }
        deferredPrompt = null;
    })
})