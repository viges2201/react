import React from 'react';
import { Link } from 'react-router-dom';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ContentSend from 'material-ui/svg-icons/content/send';
// import ListItemIcon from '@material-ui/core/ListItemIcon';


export default class ChatList extends React.Component {
  render() {
    return (
      <div>
      <ul>
      <li>
      <Link to="/chat/1/">Chat 1</Link>
      </li>
      <li>
      <Link to="/chat/2/">Chat 2</Link>
      </li>
      <li>
      <Link to="/chat/3/">Chat 3</Link>
      </li>
      </ul>
      </div>
      // <List>
      //     <Link to="/chat/1/">
      //         <ListItem text="Chat 1"  />
      //     </Link>
      //     <Link to="/chat/2/">
      //         <ListItem text="Chat 2"  />
      //     </Link>
      //     <Link to="/chat/3/">
      //         <ListItem text="Chat 3"  />
      //     </Link>
      // </List>
    )
  }
}
