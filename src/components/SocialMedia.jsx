import React from 'react';
import { BsTwitter} from 'react-icons/bs';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div><a target="_blank" rel='noreferrer' href='https://twitter.com/aakhib_'>
      <BsTwitter />
    </a></div>
    <div><a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/syed-aakhib-74110295' >
      <FaLinkedinIn/>
    </a></div>
    <div><a target="_blank" rel='noreferrer' href='https://github.com/aakhib7'>
      <FaGithub/>
    </a></div>
  </div>
);

export default SocialMedia;