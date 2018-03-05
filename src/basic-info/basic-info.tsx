import * as React from 'react';

import {
  AppBar, Avatar, Card, Grid, Tabs, Tab
} from 'material-ui';
import { CardHeader, CardContent } from 'material-ui/Card';
import { withStyles, WithStyles, StyleRulesCallback } from 'material-ui/styles';

import Image from './image';
import Informations from './informations';
import Websites from './websites';

type ClassNames = 'cardContent' |
  'tabsContainer';

const styles: StyleRulesCallback<ClassNames> = theme => ({
  cardContent: {
    minWidth: 400,
    padding: '0px',
  },
  tabsContainer: {
    paddingTop: '0px !important',
  },
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
      <Grid container>
        <Grid item xs={3}>
          <Image/>
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
    );
  }
}

export default withStyles(styles)<{}>(BasicInfo);
