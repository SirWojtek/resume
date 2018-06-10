import * as React from 'react';

import {
  Card, CardHeader, CardContent,
  Grid, Avatar, Typography,
  StyleRulesCallback, WithStyles, withStyles
} from '@material-ui/core';

type ClassNames = 'logoGridItem' | 'avatar';

const styles: StyleRulesCallback<ClassNames> = theme => ({
  logoGridItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  avatar: {
    width: 128,
    height: 128,
  },
});

class Education extends React.Component<WithStyles<ClassNames>> {
  render() {
    const props = this.props;

    return (
      <Card>
        <CardHeader title="Education"/>
        <CardContent>
          <Grid container>
            <Grid item xs={4} className={props.classes.logoGridItem}>
              <Avatar className={props.classes.avatar}
                alt="Wroclaw University of Technology"
                src="assets/images/pwr_logo.png"
              />
              <Typography align="center" variant="title">Wroclaw University of Technology</Typography>
              <Typography align="center" variant="subheading">Politechnika Wrocławska</Typography>
              <Typography align="center" variant="caption">2010 - 2015</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography gutterBottom variant="title">Computer Science</Typography>
              <Typography variant="body1">
                Master degree studies specialized in Internet Engineering. As a student, I was a
                member of many projects which makes me understand the need of working in group
                and managing resources. Beside of that, I gained strong theoretical knowledge of
                computer architecture (software and hardware), network protocol stack and
                cybersecurity.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Education);
