function likePost(btn) {
  const icon = btn.querySelector('i');
  if (icon.style.color === 'red') {
    icon.style.color = '';
  } else {
    icon.style.color = 'red';
  }
}

