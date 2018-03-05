import * as React from 'react';

import { Grid } from 'material-ui';
import { withStyles, WithStyles, StyleRulesCallback } from 'material-ui/styles';

import Image from './image';
import InfoTabs from './info-tabs';

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

    return (
      <Grid container>
        <Grid item xs={3}>
          <Image/>
        </Grid>
        <Grid item xs={9} className={props.classes.tabsContainer}>
          <InfoTabs></InfoTabs>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)<{}>(BasicInfo);
