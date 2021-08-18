module.exports = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/member/1",
        destination:
          "/api/image?fileType=png&layoutName=Page&Theme=Dark&Title=Henry+Trianta&Subtitle=Swipe+Share+%231",
        permanent: true,
      },
      {
        source: "/member/2",
        destination:
          "/api/image?fileType=png&layoutName=Page&Theme=Dark&Title=Gus+Darma&Subtitle=Swipe+Share+%232",
        permanent: true,
      },
      {
        source: "/member/3",
        destination:
          "/api/image?fileType=png&layoutName=Page&Theme=Dark&Title=Galanggg&Subtitle=Swipe+Share+%233",
        permanent: true,
      },
      {
        source: "/member/4",
        destination:
          "/api/image?fileType=png&layoutName=Page&Theme=Dark&Title=Jayak&Subtitle=Swipe+Share+%234",
        permanent: true,
      },
    ];
  },
};
