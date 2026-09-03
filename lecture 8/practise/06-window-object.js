// Window object (only in browsers)
if (typeof window !== 'undefined') {
  console.log('Window width:', window.innerWidth);
  console.log('Location href:', window.location.href);
  console.log('Document title:', document.title);
} else {
  console.log('No window object here (likely running in Node.js)');
}
