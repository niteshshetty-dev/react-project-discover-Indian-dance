function Footer() {
  return (
    <footer className="bg-black text-white text-center py-4 mt-10 border-t">
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
