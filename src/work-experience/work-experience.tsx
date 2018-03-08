import * as React from 'react';
import { Paper, Icon, Typography } from 'material-ui';
import {
  WithTheme, withStyles, WithStyles, StyleRulesCallback
} from 'material-ui/styles';

type ClassNames = 'icon';

const styles: StyleRulesCallback<ClassNames> = theme => ({
  icon: {
    fontSize: 32,
  }
});

class WorkExperience extends React.Component<WithTheme & WithStyles<ClassNames>> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Paper>
      </Paper>
    );
  }
}

export default withStyles(styles)<{}>(WorkExperience);
