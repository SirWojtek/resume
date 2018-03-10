import * as React from 'react';
import { Avatar, Card, Icon, Typography } from 'material-ui';
import { CardContent } from 'material-ui/Card';
import {
  WithTheme, withStyles, WithStyles, StyleRulesCallback
} from 'material-ui/styles';
import { green, pink } from 'material-ui/colors';

import Timeline, { IEvent } from '../timeline/timeline';

type ClassNames = 'avatar' | 'icon';

const styles: StyleRulesCallback<ClassNames> = theme => ({
  avatar: {
    width: 64,
    height: 64,
    backgroundColor: green[500]
  },
  icon: {
    fontSize: 32,
  }
});


class WorkExperience extends React.Component<WithTheme & WithStyles<ClassNames>> {
  events: IEvent[];

  constructor(props: any) {
    super(props);

    this.events = [
      {
        time: new Date(),
        title: 'New event',
        description: 'Super description',
        icon:
          <Avatar className={this.props.classes.avatar}>
            <Icon className={this.props.classes.icon}>work</Icon>
          </Avatar>
      },
      {
        time: new Date(),
        title: 'New event 2',
        description: 'Super description 87',
        icon:
          <Avatar className={this.props.classes.avatar}>
            <Icon className={this.props.classes.icon}>work</Icon>
          </Avatar>
      },
      {
        time: new Date(),
        title: 'New event 2',
        description: 'Super description 87',
        icon:
          <Avatar className={this.props.classes.avatar}>
            <Icon className={this.props.classes.icon}>work</Icon>
          </Avatar>
      },
    ];

  }

  render() {
    return (
      <Card>
        <CardContent>
          <Timeline events={this.events}/>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)<{}>(WorkExperience);
