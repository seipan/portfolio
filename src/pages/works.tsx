import React from 'react';
import styled from '@emotion/styled';

const experiences = [
  {
    date: 'April 2016 - September 2020',
    title: 'Position at Company A',
    content: 'Description of work and achievements at Company A.',
    link: '#', // Replace with actual link if available
    color: 'primary', // Replace with actual color if needed
  },
  {
    date: 'September 2018',
    title: 'Project Manager at Company B',
    content: 'Description of project management duties and accomplishments.',
    link: '#', // Replace with actual link if available
    color: 'info', // Replace with actual color if needed
  },
  // ... Add more experiences as needed
];

const Content = styled.p`
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const Experiences: React.FC = () => {
  return (
    <section id="experiences" className="section">
      <h1 className="title has-text-centered">
        Experiences
      </h1>
      <div className="timeline is-centered">
        {experiences.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className={`timeline-marker is-${item.color}`} />
            <div className="timeline-content">
              <p className="heading">{item.date}</p>
              <a
                className="is-size-5 has-text-grey-dark has-text-weight-semibold"
                href={item.link}
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Prevents potential security issues
              >
                {item.title}
              </a>
              <Content>{item.content}</Content>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;