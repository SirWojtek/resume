import * as React from 'react';

import { Avatar, Card, GridList, GridListTile } from 'material-ui';
import { CardHeader, CardContent } from 'material-ui/Card';
import { withStyles, WithStyles, StyleRulesCallback } from 'material-ui/styles';

type ClassNames = 'cardContent';

const styles: StyleRulesCallback<ClassNames> = theme => ({
  cardContent: {
    minWidth: 400
  }
});

class BasicInfo extends React.Component<WithStyles<ClassNames>> {
  render() {
    const props = this.props;
    return (
      <Card>
        <CardHeader title="Basic Informations"></CardHeader>
        <CardContent className={props.classes.cardContent}>
          <GridList cellHeight={200} cols={3}>
            <GridListTile cols={1}>
              <Avatar alt="Mateusz Okulewicz" src="assets/images/avatar.jpg" />
            </GridListTile>
            <GridListTile cols={2}>
            </GridListTile>
          </GridList>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)<{}>(BasicInfo);
