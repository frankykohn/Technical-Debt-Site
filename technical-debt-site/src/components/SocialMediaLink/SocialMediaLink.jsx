import React from 'react';
import './SocialMediaLink.scss';

export default function SocialMediaLink({ link, icon })
{
  return (
    <a href={link}>
      {icon}
    </a>
  )
}
