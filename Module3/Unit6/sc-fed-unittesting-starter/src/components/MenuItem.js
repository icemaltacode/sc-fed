function MenuItem({ href, label }) {
  return (
    <li>
      <a href={href} title={label}>
        <img src="/images/link.jpg" alt="" />
        {label}
      </a>
    </li>
  );
}

export default MenuItem;
