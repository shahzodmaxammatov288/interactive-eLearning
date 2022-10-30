//Import Images
import react from "./images/react1.jpg";
import react2 from "./images/react2.jpg";
import js from "./images/js1.jpg";
import js2 from "./images/js2.jpg";
import soon from "./images/soon1.jpg";
import soon2 from "./images/soon2.jpg";

export const CourseState = () => {
  return [
    {
      title: "Interaktiv React va Redux",
      mainImg: react,
      secondaryImg: react2,
      url: "/courses/react",
      awards: [
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Tez kunda",
      mainImg: soon,
      url: "/courses/soon",
      secondaryImg: soon2,
      awards: [
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Interaktiv JavaScript",
      mainImg: js,
      url: "/courses/javascript",
      secondaryImg: js2,
      awards: [
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Lorem ipsum si",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
