export default function Footer() {
  const author = (
    <span className="ml-2 text-cyan-700 dark:text-cyan-300 tracking-widest">
      Zdravko Delić
    </span>
  );

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="flex justify-center items-center flex-wrap mx-auto px-4 bg-white dark:bg-neutral-900"
      aria-label="Page credits"
    >
      <p className="py-4 text-xs md:text-sm text-gray-600 dark:text-gray-500 text-center tracking-widest leading border-t border-gray-200 dark:border-gray-700">
        © <time dateTime={currentYear.toString()}>{currentYear}</time> {author}.
        All rights reserved.
        <br />
        Designed &amp; Coded by: {author}
      </p>
    </footer>
  );
}
