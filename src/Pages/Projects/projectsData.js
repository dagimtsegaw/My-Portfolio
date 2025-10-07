import projectOne from "../../assets/fitab.png";
import projectTwo from "../../assets/unifresh.png";
import projectThree from "../../assets/amazon.png";

const projects = {
  1: {
    title: "Fitab Habesha Website",
    image: projectOne,
    description: (
      <>
        <p>
          A Fashion E-commerce website that allows users to browse clothing
          items online. The website features a user-friendly interface, Contuct
          us page and a variety of products to choose from.
        </p>
      </>
    ),
    // github: "https://github.com",
    demo: "https://fitab.site",
  },
  2: {
    title: "Uni Fresh Mobile App",
    image: projectTwo,
    description: (
      <>
        <p>
          Uni Fresh is a learning companion mobile app built for Ethiopian
          freshman students. It provides access to previous exam papers,
          Chapter-based practice questions, Study videos and study materials.
        </p>
      </>
    ),
    // github: "https://github.com",
    demo: "https://t.me/unifresh1/138",
  },
  3: {
    title: "Amazon Clone Website",
    image: projectThree,
    description: (
      <>
        <p>
          amazon clone is a web application that mimics the functionality and
          design of the popular e-commerce platform, Amazon. It allows users to
          browse and purchase products, manage their accounts, and track orders.
        </p>
      </>
    ),
    github: "https://github.com/dagimtsegaw/amazon-react",
    demo: "https://amazon-by-dagi.netlify.app/",
  },
};

export default projects;
