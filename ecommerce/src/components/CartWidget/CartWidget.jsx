

const CartWidget = () => {
  return (
    <div>
      <a className="nav-link" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-cart"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .485.379L3.89 7H14.5a.5.5 0 0 1 0 1h-11l-.405 2.432A.5.5 0 0 1 2.5 11H1a.5.5 0 0 1 0-1h1.5a.5.5 0 0 1 .49-.598L3.14 8H1.5a.5.5 0 0 1-.49-.598L1.89 2H.5a.5.5 0 0 1-.5-.5z" />
        </svg>
      </a><span>0</span>
    </div>
  );
};

export default CartWidget;
