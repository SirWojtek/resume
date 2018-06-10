import * as React from 'react';

import {
  Card, CardHeader, CardContent,
  Grid, Avatar, Typography,
  StyleRulesCallback, WithStyles, withStyles
} from '@material-ui/core';

type ClassNames = 'gridItem';

const styles: StyleRulesCallback<ClassNames> = theme => ({
  gridItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
});

class Languages extends React.Component<WithStyles<ClassNames>> {
  render() {
    const props = this.props;

    return (
      <Card>
        <CardHeader title="Languages"/>
        <CardContent>
          <Grid container>
            <Grid item xs={4} className={props.classes.gridItem}>
              <Avatar
                alt="English"
                src="assets/images/uk_flag.png"
              />
              <Typography variant="title">English</Typography>
              <Typography variant="subheading">Advanced</Typography>
            </Grid>
            <Grid item xs={4} className={props.classes.gridItem}>
              <Avatar
                alt="Polish"
                src="assets/images/poland_flag.png"
              />
              <Typography variant="title">Polish</Typography>
              <Typography variant="subheading">Native proficiency</Typography>
            </Grid>
            <Grid item xs={4} className={props.classes.gridItem}>
              <Avatar
                alt="German"
                src="assets/images/germany_flag.png"
              />
              <Typography variant="title">German</Typography>
              <Typography variant="subheading">Elementary</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Languages);
