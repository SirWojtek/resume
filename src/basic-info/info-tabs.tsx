import * as React from 'react';

import {
  AppBar, Paper, Tabs, Tab
} from 'material-ui';
import { CardContent } from 'material-ui/Card';
import { withStyles, WithStyles, StyleRulesCallback } from 'material-ui/styles';

import { IContactInfo, IWebsites } from '../model/types';

import Informations from './informations';
import Websites from './websites';

type ClassNames = 'paper';

const styles: StyleRulesCallback<ClassNames> = theme => ({
  paper: {
    height: '100%',
  },
});

interface IProps {
  contact: IContactInfo;
  websites: IWebsites;
}

class InfoTabs extends React.Component<IProps & WithStyles<ClassNames>> {
  state = {
    currentTab: 0,
  };

  constructor(props: any) {
    super(props);
  }

  handleChange = (event: any, value: number) => {
    this.setState({ currentTab: value });
  };

  render() {
    const state = this.state;
    const props = this.props;

    return (
      <Paper className={props.classes.paper}>
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

export default withStyles(styles)<IProps>(InfoTabs);

