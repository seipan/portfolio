// about.tsx

import React from 'react';

const About: React.FC = () => {
  return (
    <div className="text-center p-12">
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="text-xl mt-4 mb-8">Software developer / Backend / B3</p>
      <div className="flex justify-center space-x-6">
        <a href="mailto:yamasakipann0218@gmail.com">
          <img src="https://i.pinimg.com/originals/84/6a/03/846a03c6760f83f3a0e92609bca9cebf.jpg" alt="Email" className="w-12 h-12 hover:scale-110 transform transition-transform" />
        </a>
        <a href="https://twitter.com/Seipann11">
          <img src="https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png" alt="Twitter" className="w-12 h-12 hover:scale-110 transform transition-transform" />
        </a>
        <a href="https://github.com/seipan">
          <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="github" className="w-12 h-12 hover:scale-110 transform transition-transform" />
        </a>
        <a href="https://bento.me/yadon3141">
          <img src="https://as1.ftcdn.net/v2/jpg/03/96/27/98/1000_F_396279804_AeQYqrtOjGDgK17QPh5rZB2bYNcu0mg1.jpg" alt="bento" className="w-12 h-12 hover:scale-110 transform transition-transform" />
        </a>
      </div>
    </div>
  );
}

export default About;
