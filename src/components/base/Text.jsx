function Text({ value, customClass = "" }) {
  return <p className={`text ${customClass}`}>{value}</p>;
}

export default Text;
