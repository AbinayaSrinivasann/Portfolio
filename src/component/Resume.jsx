import React from "react";
// Make sure you create this file or add styles to App.css

const Resume = () => {
  const openPDF = (fileName) => {
   window.open("/files/Resume.pdf", "_blank");

  };

  const cards = [
    {
      name: "Resume",
      img: "https://static.vecteezy.com/system/resources/previews/018/973/531/non_2x/paper-for-filling-out-a-resume-for-job-applications-and-pens-free-photo.jpg",
      description: "Click below to view my Resume.",
      file: "Resume.pdf",
    },
    {
      name: "CV",
      img: "https://tse4.mm.bing.net/th/id/OIP.W8P469JLZ45XFaowZ2sdyAHaE8?pid=Api&P=0&h=180",
      description: "Click below to view my CV.",
      file: "CV.pdf",
    },
  ];

  return (
    <section className="resume-container">
      {cards.map((card, index) => (
        <div className="resume-card" key={index} onClick={() => openPDF(card.file)}>
          <img src={card.img} alt={card.name} />
          <div className="resume-overlay">
            <h2>{card.name}</h2>
            <p>{card.description}</p>
            <button>View {card.name}</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Resume;
