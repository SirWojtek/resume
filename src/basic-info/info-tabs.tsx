import * as React from 'react';

import {
  AppBar, Paper, Tabs, Tab
} from 'material-ui';
import { CardContent } from 'material-ui/Card';
import { withStyles, StyleRulesCallback } from 'material-ui/styles';

import { IContactInfo, IWebsites } from '../model/types';

import Informations from './informations';
import Websites from './websites';

interface IProps {
  contact: IContactInfo;
  websites: IWebsites;
}

export default class InfoTabs extends React.Component<IProps> {
  state = {
    currentTab: 0,
  };

  constructor(props: IProps) {
    super(props);
  }

  handleChange = (event: any, value: number) => {
    this.setState({ currentTab: value });
  };

  render() {
    const state = this.state;

    return (
      <Paper>
        <AppBar position="static">
          <Tabs
            value={state.currentTab} onChange={this.handleChange}>
            <Tab label="Informations"/>
            <Tab label="Websites"/>
          </Tabs>
        </AppBar>
        { state.currentTab === 0 && <Informations contact={this.props.contact}/> }
        { state.currentTab === 1 && <Websites websites={this.props.websites}/> }
      </Paper>
    );
  }
}

