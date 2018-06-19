import * as React from 'react';

import {
  Card, AppBar, Tabs, Tab, Typography, Paper, Icon
} from '@material-ui/core';

import { TechnicalSkillsMap, ITechnicalSkill, ITechnicalSkillGroup } from "../model/types";

interface IProps {
  technicalSkills: TechnicalSkillsMap;
}

export class TechnicalSkills extends React.Component<IProps> {
  state: {
    currentTab: string
  };
  private tabs: JSX.Element[];

  constructor(props: any) {
    super(props);

    const keys = Object.keys(this.props.technicalSkills);
    if (!keys || !keys.length) {
      return;
    }

    this.state = {
      currentTab: keys[0]
    };

    this.tabs = keys.map(key =>
      <Tab label={key} value={key} key={`tab-${key}`}
        icon={this.createTabIcon(this.props.technicalSkills[key])}
      />
    );
  }

  render() {
    const props = this.props;
    const state = this.state;

    return (
      <Paper>
        <AppBar position="static">
          <Tabs value={state.currentTab} onChange={this.handleChange}>
            { this.tabs }
          </Tabs>
        </AppBar>
        { this.renderSkills(
          props.technicalSkills[state.currentTab].skills) }
      </Paper>
    );
  }

  private handleChange = (event, value: number) => {
    this.setState({ currentTab: value });
  };

  private renderSkills = (skills: ITechnicalSkill[]) => {
    return skills.map(skill =>
      <Typography variant="body1" key={`name-${skill.name}`}>
        { skill.name }
      </Typography>
    );
  }

  private createTabIcon(skillsGroup: ITechnicalSkillGroup): JSX.Element {
    return (
      <Icon>{ skillsGroup.logo }</Icon>
    );
  }
}
