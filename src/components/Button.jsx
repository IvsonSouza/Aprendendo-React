function Button(props) {
  return (
    <button {...props} className="bg-blue-700 dark:bg-sky-500 hover:bg-blue-800 dark:hover:bg-sky-700 transition-colors text-white p-2 rounded-md">
      {props.children}
    </button>
  );
}
 
export default Button;
