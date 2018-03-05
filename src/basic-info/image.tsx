import * as React from 'react';

import {
  Avatar, Card
} from 'material-ui';
import { CardContent } from 'material-ui/Card';
import { withStyles, WithStyles, StyleRulesCallback } from 'material-ui/styles';

type ClassNames = 'avatar' | 'cardContent';

const styles: StyleRulesCallback<ClassNames> = theme => ({
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    width: 128,
    height: 128,
  }
});

class Image extends React.Component<WithStyles<ClassNames>> {
  render() {
    const props = this.props;

    return (
      <Card>
        <CardContent className={props.classes.cardContent}>
          <Avatar className={props.classes.avatar}
            alt="Mateusz Okulewicz"
            src="assets/images/avatar.jpg" />
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)<{}>(Image);
