import style from './Button.module.css';

export default function Button({ children, variant }) {
  return (
    <button className={`${style.btn} ${style[variant]}`}>{children}</button>
  );
}
