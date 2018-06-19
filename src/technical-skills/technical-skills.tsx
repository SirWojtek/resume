import * as React from 'react';

import {
  Card, AppBar, Tabs, Tab, Typography, Paper, Icon, Grid, LinearProgress, StyleRulesCallback, WithStyles, withStyles, Tooltip
} from '@material-ui/core';
import { TechnicalSkillsMap, ITechnicalSkill, ITechnicalSkillGroup } from "../model/types";

type ClassNames = 'tabPaper';

const styles: StyleRulesCallback<ClassNames> = theme => ({
  tabPaper: theme.mixins.gutters({ padding: 16 }),
});

interface IProps {
  technicalSkills: TechnicalSkillsMap;
}

class TechnicalSkills extends React.Component<IProps & WithStyles<ClassNames>> {
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
    const classes = this.props.classes;

    const skillsGrid = skills.map(skill => [
      <Grid item xs={2} key={`skill-name-${skill.name}`}>
        { this.renderSkillName(skill) }
      </Grid>,
      <Grid item xs={4} key={`skill-level-${skill.level}`}>
        <LinearProgress
          variant="determinate"
          value={skill.level * 10}
        />
      </Grid>
    ]);

    return (
      <Paper className={classes.tabPaper}>
        <Grid container alignItems="center" spacing={16}>
          { skillsGrid }
        </Grid>
      </Paper>
    );
  }

  private renderSkillName(skill: ITechnicalSkill): JSX.Element {
    const text =
      <Typography variant="body2" align="right">{ skill.name }</Typography>;

    return skill.description ? (
      <Tooltip title={skill.description} placement="right">
        { text }
      </Tooltip>
    ) : text;
  }

  private createTabIcon(skillsGroup: ITechnicalSkillGroup): JSX.Element {
    return (
      <Icon>{ skillsGroup.logo }</Icon>
    );
  }
}

export default withStyles(styles)<IProps>(TechnicalSkills);
