import * as React from 'react';

import {
  Avatar, Card, Typography,
  CardContent,
  withStyles, WithStyles, StyleRulesCallback
} from '@material-ui/core';

import { IBasicData } from '../model/types';

type ClassNames = 'avatar' | 'card' | 'cardContent';

const styles: StyleRulesCallback<ClassNames> = theme => ({
  card: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  avatar: {
    width: 128,
    height: 128,
  }
});

interface IProps {
  data: IBasicData;
}

class Image extends React.Component<IProps & WithStyles<ClassNames>> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const props = this.props;

    return (
      <Card className={props.classes.card}>
        <CardContent className={props.classes.cardContent}>
          <Avatar className={props.classes.avatar}
            alt={props.data.name}
            src="assets/images/avatar.jpg" />
          <Typography variant="headline">{props.data.name}</Typography>
          <Typography gutterBottom variant="title">{props.data.title}</Typography>
          <Typography variant="subheading">{props.data.subtitle}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)<IProps>(Image);
