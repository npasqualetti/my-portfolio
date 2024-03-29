const YEAR = new Date().getFullYear()

export default {
  darkMode: true,
  footer: (
    <footer>
      <small>
        {YEAR} © Nicholas Pasqualetti.
        <a href="/feed.xml">RSS</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
  navs: [
    {
      url: "/resume.pdf",
      name: "Resume",
      newWindow: true,
    },
    {
      url: "https://github.com/npasqualetti",
      name: "Github",
      newWindow: true,
    },
  ],
};
