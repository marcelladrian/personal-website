import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "PT Bank Sinarmas, Tbk.",
      title: "Application Developer",
      img: "assets/work2.png",
      icon: "assets/twitter.png",
      desc: "Developing Company Software, Testing Application and also do Training with Mentors",
      role: "Internship",
      date: "March 2021 - March 2022",
      featured: true,
    },
    {
      id: 2,
      name: "PT Bank Sinarmas, Tbk.",
      title: "Digital Solution Developer",
      img: "assets/work2.png",
      icon: "assets/youtube.png",
      desc: "Develop and evaluate the company’s software application to ensure that it is valid, is properly structured, meets industry standards, and is well integrated with each other.",
      role: "Permanent Employee",
      date: "December 2021 - Now",
      featured: true,
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Work Experience</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="topContent">
              <div className="top">
                <img className="user" src={d.img} alt="" />
              </div>
              <div className="bottom">
                <h3>{d.name}</h3>
                <h5>{d.role}</h5>
                <h4>{d.title}</h4>
              </div>
            </div>
            <div className="center">{d.desc}</div>
            <div className="date">
              <h4>{d.date}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
