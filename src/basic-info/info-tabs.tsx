import * as React from 'react';

import {
  AppBar, Card, Tabs, Tab
} from 'material-ui';
import { CardContent } from 'material-ui/Card';
import { withStyles, StyleRulesCallback } from 'material-ui/styles';

import Informations from './informations';
import Websites from './websites';


export default class InfoTabs extends React.Component {
  state = {
    currentTab: 0,
  };

  handleChange = (event: any, value: number) => {
    this.setState({ currentTab: value });
  };

  render() {
    const state = this.state;

    return (
      <Card>
        <CardContent>
        <AppBar position="static">
          <Tabs
            value={state.currentTab} onChange={this.handleChange}>
            <Tab label="Informations"/>
            <Tab label="Websites"/>
          </Tabs>
        </AppBar>
        { state.currentTab === 0 && <Informations/> }
        { state.currentTab === 1 && <Websites/> }
        </CardContent>
      </Card>
    );
  }
}

