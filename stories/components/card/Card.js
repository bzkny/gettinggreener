import './card.css';

export const createCard = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
}) => {
  const btn = document.createElement('card');
  btn.type = 'card';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  const mode = primary ? 'storybook-card--primary' : 'storybook-card--secondary';
  btn.className = ['storybook-card', `storybook-card--${size}`, mode].join(' ');

  btn.style.backgroundColor = backgroundColor;

  return btn;
};


