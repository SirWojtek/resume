import * as React from 'react';
import { Link } from 'react-router-dom';

import { Avatar, Icon, List } from 'material-ui';
import { ListItem, ListItemText } from 'material-ui/List';
import { withStyles, WithStyles, StyleRulesCallback } from 'material-ui/styles';

import { IWebsites } from '../model/types';


type ClassNames = 'avatar';

const styles: StyleRulesCallback<ClassNames> = theme => ({
  avatar: {
    width: 64,
    height: 64,
  }
});

interface IProps {
  websites: IWebsites;
}

class Websites extends React.Component<IProps & WithStyles<ClassNames>> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const props = this.props;

    return (
      <List>
        <ListItem component="a" href={props.websites.linkedIn}>
          <Avatar className={props.classes.avatar}
            alt="LinkedIn"
            src="assets/images/linkedin.svg" />
          <ListItemText primary="LinkedIn" secondary={props.websites.linkedIn}/>
        </ListItem>
        <ListItem component="a" href={props.websites.github}>
          <Avatar className={props.classes.avatar}
            alt="GitHub"
            src="assets/images/github.svg" />
          <ListItemText primary="GitHub" secondary={props.websites.github}/>
        </ListItem>
        <ListItem component="a" href={props.websites.stackOverflow}>
          <Avatar className={props.classes.avatar}
            alt="Stack Overflow"
            src="assets/images/stack-overflow.svg" />
          <ListItemText primary="Stack Overflow" secondary={props.websites.stackOverflow}/>
        </ListItem>
      </List>
    );
  }
}

export default withStyles(styles)<IProps>(Websites);
