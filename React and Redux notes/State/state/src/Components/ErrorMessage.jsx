const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h3>Iam Still Hungry...!</h3>}</>;
};

export default ErrorMessage;
