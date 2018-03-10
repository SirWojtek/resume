import * as React from 'react';
import { Avatar, Card, Icon, Typography } from 'material-ui';
import { CardHeader, CardContent } from 'material-ui/Card';
import {
  WithTheme, withStyles, WithStyles, StyleRulesCallback
} from 'material-ui/styles';
import { green, pink } from 'material-ui/colors';

import { IWorkExperienceItem } from '../model/types';

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

interface IProps {
  workExperience: IWorkExperienceItem[];
}


class WorkExperience extends React.Component<WithTheme & WithStyles<ClassNames> & IProps> {
  events: IEvent[];

  constructor(props: any) {
    super(props);

    this.events = this.props.workExperience.map(item => ({
      time: item.startDate + ' - ' + item.endDate,
      title: item.companyName + ' - ' + item.position,
      description: item.description,
      icon:
          <Avatar className={this.props.classes.avatar}>
            <Icon className={this.props.classes.icon}>work</Icon>
          </Avatar>
    }));
  }

  render() {
    return (
      <Card>
        <CardHeader title="Work Experience"/>
        <CardContent>
          <Timeline events={this.events}/>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)<IProps>(WorkExperience);
