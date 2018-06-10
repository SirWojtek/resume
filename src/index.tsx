import { render } from 'react-dom';
import * as React from 'react';

import {
  MuiThemeProvider,
  createMuiTheme,
  Grid,
  withStyles,
  WithStyles,
  StyleRulesCallback
} from '@material-ui/core';
import { blue, pink } from '@material-ui/core/colors';

import { model } from './model/model';

import Image from './basic-info/image';
import InfoTabs from './basic-info/info-tabs';
import Education from './education/education';
import Languages from './languages/languages';
import { Projects } from './projects/projects';
import { TechnicalSkills } from './technical-skills/technical-skills';
import WorkExperience from './work-experience/work-experience';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink
  }
});

type ClassNames = 'grid' | 'container' | 'imageItem' | 'infoItem';

const styles: StyleRulesCallback<ClassNames> = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  grid: {
    maxWidth: theme.breakpoints.values.md,
  },
  imageItem: {
    height: '350px',
  },
  infoItem: {
    height: '350px',
  }
});


class App extends React.Component<WithStyles<ClassNames>> {
  render() {
    const props = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={props.classes.container}>
          <Grid container className={props.classes.grid}>
            <Grid item md={4} className={props.classes.imageItem}>
              <Image data={model.basic}/>
            </Grid>
            <Grid item md={8} className={props.classes.infoItem}>
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
              <WorkExperience workExperience={model.workExperience}/>
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

const AppWithStyles = withStyles(styles)<{}>(App);

render(<AppWithStyles />, document.getElementById('root'));
