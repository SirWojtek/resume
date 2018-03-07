import * as React from 'react';
import { Paper, Icon, Typography } from 'material-ui';
import {
  WithTheme, withStyles, WithStyles, StyleRulesCallback
} from 'material-ui/styles';
import * as timeline  from 'react-event-timeline';

const Timeline = timeline.Timeline;
const TimelineEvent = timeline.TimelineEvent;

type ClassNames = 'icon';

const styles: StyleRulesCallback<ClassNames> = theme => ({
  icon: {
    fontSize: 32,
  }
});

class WorkExperience extends React.Component<WithTheme & WithStyles<ClassNames>> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const theme = this.props.theme;
    const classes = this.props.classes;
    const cardHeaderStyles = {
      backgroundColor: theme.palette.primary.main
    };
    const bubbleStyles = {
      width: 64,
      height: 64
    };

    return (
      <Paper>
        <Timeline>
          <TimelineEvent
            title={this.getTitle("John Doe sent a SMS", new Date())}
            container="card" cardHeaderStyle={cardHeaderStyles}
            bubbleStyle={bubbleStyles}
            icon={<Icon className={classes.icon}>textsms</Icon>}>
              <Typography>
                I received the payment for $543. Should be shipping the item within a couple of hours.
              </Typography>
          </TimelineEvent>
        </Timeline>
      </Paper>
    );
  }

  getTitle(text: string, date: Date) {
    return (
      <Typography variant="subheading" color="inherit">{date.toDateString()} - {text}</Typography>
    );
  }
}

export default withStyles(styles, { withTheme: true })<{}>(WorkExperience);
