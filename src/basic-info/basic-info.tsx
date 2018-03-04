import * as React from 'react';

import {
  AppBar, Avatar, Card, Grid, Tabs, Tab
} from 'material-ui';
import { CardHeader, CardContent } from 'material-ui/Card';
import { withStyles, WithStyles, StyleRulesCallback } from 'material-ui/styles';

import Informations from './informations';
import Websites from './websites';

type ClassNames = 'cardContent' |
  'avatarContainer' | 'avatar' |
  'tabsContainer';

const styles: StyleRulesCallback<ClassNames> = theme => ({
  cardContent: {
    minWidth: 400,
    padding: '0px',
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  tabsContainer: {
    paddingTop: '0px !important',
  },
  avatar: {
    width: 128,
    height: 128,
  }
});

class BasicInfo extends React.Component<WithStyles<ClassNames>> {
  state = {
    currentTab: 0,
  };

  handleChange = (event: any, value: number) => {
    this.setState({ currentTab: value });
  };

  render() {
    const props = this.props;
    const state = this.state;

    return (
      <Card>
        <CardContent className={props.classes.cardContent}>
          <Grid container>
            <Grid item xs={3} className={props.classes.avatarContainer}>
              <Avatar className={props.classes.avatar}
                alt="Mateusz Okulewicz"
                src="assets/images/avatar.jpg" />
            </Grid>
            <Grid item xs={9} className={props.classes.tabsContainer}>
              <AppBar position="static">
                <Tabs
                  value={state.currentTab} onChange={this.handleChange}>
                  <Tab label="Informations"/>
                  <Tab label="Websites"/>
                </Tabs>
              </AppBar>
              { state.currentTab === 0 && <Informations/> }
              { state.currentTab === 1 && <Websites/> }
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)<{}>(BasicInfo);
