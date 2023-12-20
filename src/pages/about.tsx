import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const About: React.FC = () => {
  return (
    <div className="text-center p-12">
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="text-xl mt-4 mb-8">Software developer / Backend / B3</p>
      <div className="flex justify-center space-x-6">
        <a href="mailto:yamasakisyukatsu3141@gmail.com" className="hover:scale-110 transform transition-transform">
          <FontAwesomeIcon icon={faEnvelope} size="3x" />
        </a>
        <a href="https://twitter.com/Seipann11" className="hover:scale-110 transform transition-transform">
          <FontAwesomeIcon icon={faTwitter} size="3x" />
        </a>
        <a href="https://github.com/seipan" className="hover:scale-110 transform transition-transform">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
      </div>
    </div>
  );
};

export default About;