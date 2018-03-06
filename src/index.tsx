import { render } from 'react-dom';
import * as React from 'react';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { withStyles, WithStyles, StyleRulesCallback } from 'material-ui/styles';
import { blue, pink } from 'material-ui/colors';
import { Grid } from 'material-ui';

import { model } from './model/model';

import Image from './basic-info/image';
import InfoTabs from './basic-info/info-tabs';
import { Education } from './education/education';
import { Languages } from './languages/languages';
import { Projects } from './projects/projects';
import { TechnicalSkills } from './technical-skills/technical-skills';
import { WorkExperience } from './work-experience/work-experience';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink
  }
});

type ClassNames = 'grid' | 'container';

const styles: StyleRulesCallback<ClassNames> = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  grid: {
    maxWidth: theme.breakpoints.values.md,
  }
});


class App extends React.Component<WithStyles<ClassNames>> {
  render() {
    const props = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={props.classes.container}>
          <Grid container className={props.classes.grid}>
            <Grid item md={3}>
              <Image/>
            </Grid>
            <Grid item md={9}>
              <InfoTabs contact={model.contact} websites={model.websites}/>
            </Grid>
            <Grid item md={12}>
              <Education/>
            </Grid>
            <Grid item md={12}>
              <Languages/>
            </Grid>
            <Grid item md={12}>
              <Projects/>
            </Grid>
            <Grid item md={12}>
              <TechnicalSkills/>
            </Grid>
            <Grid item md={12}>
              <WorkExperience/>
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

const AppWithStyles = withStyles(styles)<{}>(App);

render(<AppWithStyles />, document.getElementById('root'));
