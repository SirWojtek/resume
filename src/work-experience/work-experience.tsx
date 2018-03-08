import * as React from 'react';
import { Card, Icon, Typography } from 'material-ui';
import { CardContent } from 'material-ui/Card';
import {
  WithTheme, withStyles, WithStyles, StyleRulesCallback
} from 'material-ui/styles';

import Timeline from '../timeline/timeline';

type ClassNames = 'icon';

const styles: StyleRulesCallback<ClassNames> = theme => ({
  icon: {
    fontSize: 32,
  }
});

const events = [
  {
    time: new Date(),
    title: 'New event',
    description: 'Super description',
    icon: <Icon>work</Icon>
  },
  {
    time: new Date(),
    title: 'New event 2',
    description: 'Super description 87',
    icon: <Icon>work</Icon>
  },
  {
    time: new Date(),
    title: 'New event 2',
    description: 'Super description 87',
    icon: <Icon>work</Icon>
  },
];

class WorkExperience extends React.Component<WithTheme & WithStyles<ClassNames>> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Card>
        <CardContent>
          <Timeline events={events}/>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)<{}>(WorkExperience);
