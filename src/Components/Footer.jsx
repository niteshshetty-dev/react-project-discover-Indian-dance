function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black text-white text-center py-4 ">
      <p className="text-sm">
        © 2025 • Built by
        <span className="font-semibold text-yellow-600">
          {" "}
          Nithesh Shetty{" "}
        </span>{" "}
        •
        <a
          href="https://github.com/niteshshetty-dev/react-project-discover-Indian-dance"
          className="text-yellow-500 hover:underline ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          View Source{" "}
        </a>
      </p>
    </footer>
  );
}

export default Footer;
