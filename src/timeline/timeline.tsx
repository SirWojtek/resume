import * as React from 'react';
import { Card, Grid, Icon, Typography } from 'material-ui';
import { CardHeader, CardContent } from 'material-ui/Card';
import {
  WithTheme, withStyles, WithStyles, StyleRulesCallback
} from 'material-ui/styles';

type ClassNames = 'container' | 'iconGrid';

const styles: StyleRulesCallback<ClassNames> = theme => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  iconGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

interface Event {
  time: Date;
  title: string;
  description: string | JSX.Element;
  icon: JSX.Element;
}

interface IProps {
  events: Event[];
};

class Timeline extends React.Component<IProps & WithStyles<ClassNames>> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const classes = this.props.classes;

    return (
      <Grid container>
        { this.getRows() }
      </Grid>
    );
  }

  private getRows(): JSX.Element[] {
    const classes = this.props.classes;
    return this.props.events.map((event, i) => ([
        <Grid item xs={5} key={'left-' + i}>
          { i % 2 === 0 && this.getTimelineElement(event) }
        </Grid>,
        <Grid item xs={2} key={'icon-' + i} className={classes.iconGrid}>
          { event.icon }
        </Grid>,
        <Grid item xs={5} key={'right-' + i}>
          { i % 2 !== 0 && this.getTimelineElement(event) }
        </Grid>
    ])).reduce((res, grid) => res = [ ...res, ...grid ], []);
  }

  private getTimelineElement(event: Event): JSX.Element {
    return (
      <Card>
        <CardHeader title={event.title}/>
        <CardContent>
          { event.description }
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)<IProps>(Timeline);
