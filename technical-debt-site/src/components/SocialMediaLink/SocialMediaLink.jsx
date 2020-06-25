import React from 'react';
import './SocialMediaLink.scss';

export default function SocialMediaLink({ link, icon })
{
  return (
    <a className="social-media-link" href={link}>
      {icon}
    </a>
  )
}
