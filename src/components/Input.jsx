function Input(props) {
  return (
    <input
      className="border border-white outline-white-400 px-4 py-2 rounded-md text-white bg-slate-100 dark:bg-slate-700 border-white-300 dark:border-slate-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-300 dark:focus:ring-sky-500 text-white transition-colors"
      {...props}
    />
  );
}

export default Input;
