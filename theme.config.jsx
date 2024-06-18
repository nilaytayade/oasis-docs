export default {
  logo: (
    <>
      <img
        width="50"
        height="50"
        viewBox="0 0 24 24"
        src="https://res.cloudinary.com/dzhpx2alw/image/upload/v1718634994/20240617_200413_lq8ly4.png"
      ></img>
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>OASIS</span>
    </>
  ),
  project: {
    link: "https://github.com/nilaytayade/oasis-docs",
  },
  docsRepositoryBase: "https://github.com/nilaytayade/oasis-docs",
  banner: {
    key: "2.0-release",
    text: <a>🎉 OASIS 2.0 is LIVE🚀</a>,
  },

  footer: {
    text: (
      <span>
        OASIS {new Date().getFullYear()} ©{" "}
        <a href="" target="_blank">
          Oasis🌴
        </a>
        .
      </span>
    ),
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Docs-Oasis🌴-" />
      <meta property="og:description" content="Policy and articles 🚀" />

      <meta
        property="og:image"
        content="https://res.cloudinary.com/dzhpx2alw/image/upload/v1718634994/20240617_200413_lq8ly4.png"
      />
    </>
  ),
  
  
};
