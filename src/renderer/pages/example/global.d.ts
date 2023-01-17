// Without this, renderer will not know about window.preload
interface Window {
  preload: import('./preload').IPreload
}
