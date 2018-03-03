import * as React from 'react';

import Card, { CardHeader } from 'material-ui/Card';
import CardContent from 'material-ui/Card';

import withStyles from 'material-ui/styles/withStyles';
import { WithStyles, StyleRulesCallback } from 'material-ui/styles/withStyles';

type ClassNames = 'cardContent';

const styles: StyleRulesCallback<ClassNames> = theme => ({
  cardContent: {
    height: 300,
  }
});

class BasicInfo extends React.Component<WithStyles<ClassNames>> {
  render() {
    const props = this.props;
    return (
      <Card>
        <CardHeader title="Basic Informations"></CardHeader>
        <CardContent className={props.classes.cardContent}>
          Basic information content
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)<{}>(BasicInfo);
