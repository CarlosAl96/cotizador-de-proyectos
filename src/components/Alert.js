const Alert = ({ message }) => {
  return (
    <div className="bg-red-100 border border-red-300 text-red-500 px-4 py-3 rounded relative mb-2 text-center">
      <span className="sm:inline block">{message}</span>
    </div>
  );
};

export default Alert;
