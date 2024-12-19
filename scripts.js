// Анимация кнопки при клике
document.getElementById('animateBtn').addEventListener('click', () => {
    const btn = document.getElementById('animateBtn');
    btn.classList.add('clicked');
    setTimeout(() => {
        btn.classList.remove('clicked');
    }, 300);
});

// Вызов нативной функции через WebView
document.getElementById('nativeBtn').addEventListener('click', () => {
    if (window.AndroidInterface && typeof window.AndroidInterface.callNativeFunction === 'function') {
        window.AndroidInterface.callNativeFunction('Привет из WebView!');
    } else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.callNativeFunction) {
        window.webkit.messageHandlers.callNativeFunction.postMessage('Привет из WebView!');
    } else {
        alert('Нативный интерфейс не доступен.');
    }
});
