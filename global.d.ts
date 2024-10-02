export {};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;  // Declare the gtag function
  }
}
