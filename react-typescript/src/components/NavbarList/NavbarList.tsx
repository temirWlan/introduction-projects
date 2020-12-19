import React from 'react';

import NavbarListItem from '../NavbarListItem';

type Props = {
  listItems: object[];
};

type ListItem = {
  id: number;
  label: string;
};

const NavbarList: React.FC<Props> = ({ listItems }) => {
  debugger;
  return (
    <ul className="right hide-on-med-and-down">
      {/* {
        listItems.map((item): React.FC<ListItem> => {
          // const { id, label } = listItem;
          return <NavbarListItem key={id} label={label} />
        })
      } */}
    </ul>
  );
};

export default NavbarList;