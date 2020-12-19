import React from 'react';

type Props = {
  label: string;
}

const NavbarListItem: React.FC<Props> = ({ label }) => {
  return (
    <li>
      <a href="">
        {label}
      </a>
    </li>
  );
};

export default NavbarListItem;