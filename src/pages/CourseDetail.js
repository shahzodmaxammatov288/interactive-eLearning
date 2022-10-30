import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { CourseState } from "../CourseState";

const CourseDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [courses, setCourses] = useState(CourseState);
  const [course, setCourse] = useState(null);

  //! useEffect
  useEffect(() => {
    const currentCourse = courses.filter(
      (stateCourse) => stateCourse.url === url
    );
    setCourse(currentCourse[0]);
  }, [courses, url]);

  return (
    <>
      {course && (
        <Details>
          <Header>
            <h2>{course.title}</h2>
            <img src={course.mainImg} alt="laptop" />
          </Header>
          <Awards>
            {course.awards.map((award) => (
              <Award
                key={award.title}
                title={award.title}
                description={award.description}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={course.secondaryImg} alt="Developer" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled.div`
  color: #fff;
`;
const Header = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: space-around;
  margin: 5rem 10rem;
`;

const StyledAward = styled.div`
  padding: 5rem;
  h3 {
    font-family: 2rem;
  }
  .line {
    width: 100%;
    height: 0.5rem;
    background: #30bee1;
    margin: 1rem 0;
  }
  p {
    padding: 2rem 0;
  }
`;

const ImageDisplay = styled.div`
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

//! Award Component
const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  );
};

export default CourseDetail;
