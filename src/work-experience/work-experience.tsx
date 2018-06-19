import * as React from 'react';
import moment from 'moment-es6';
import {
  Avatar, Card, Icon, Typography,
  CardHeader, CardContent,
  WithTheme, withStyles, WithStyles, StyleRulesCallback, Paper
} from '@material-ui/core';
import { green, pink } from '@material-ui/core/colors';

import { IWorkExperienceItem } from '../model/types';

import { Timeline, IEvent } from 'react-material-timeline';

type ClassNames = 'avatar' | 'icon';

const styles: StyleRulesCallback<ClassNames> = theme => ({
  avatar: {
    width: 64,
    height: 64,
    backgroundColor: theme.palette.primary.main,
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
      title:
        <Typography variant="title">
          { item.companyName + ' - ' + item.position }
        </Typography>,
      subheader:
        <Typography variant="subheading">
          { this.getEventDates(item) }
        </Typography>,
      description: <Paper elevation={0}>{ this.createDescription(item) }</Paper>,
      icon:
          <Avatar className={this.props.classes.avatar}>
            <Icon className={this.props.classes.icon}>work</Icon>
          </Avatar>
    }));
  }

  render() {
    return (
      <Card>
        <CardHeader subheader="Work Experience"/>
        <CardContent>
          <Timeline events={this.events}/>
        </CardContent>
      </Card>
    );
  }

  private getEventDates(item: IWorkExperienceItem): string {
    let endDate = 'Present';
    if (item.endDate) { endDate = moment(item.endDate).format('MM/YYYY'); }
    return `${moment(item.startDate).format('MM/YYYY')} - ${endDate}`;
  }

  private createDescription(item: IWorkExperienceItem): JSX.Element[] {
    return item.description.map((desc, i) =>
        <Typography
          variant="body1"
          gutterBottom
          key={`desc-${item.companyName}-${item.position}-${i}`}
        >{ desc }</Typography>
      );
  }
}

export default withStyles(styles)<IProps>(WorkExperience);
