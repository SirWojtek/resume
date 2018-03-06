import * as React from 'react';

import { Avatar, Icon } from 'material-ui';
import PhoneAndroid from 'material-ui-icons/PhoneAndroid';
import { withStyles, WithStyles, StyleRulesCallback } from 'material-ui/styles';
import { green, pink } from 'material-ui/colors';

import { IContactInfo } from '../model/types';

type ClassNames = 'phoneAvatar' | 'phoneIcon' |
  'emailAvatar' | 'emailIcon';

const styles: StyleRulesCallback<ClassNames> = themre => ({
  phoneAvatar: {
    width: 64,
    height: 64,
    backgroundColor: green[500]
  },
  phoneIcon: {
    fontSize: 32
  },
  emailAvatar: {
    width: 64,
    height: 64,
    backgroundColor: pink[500]
  },
  emailIcon: {
    fontSize: 32
  }
});

interface IProps {
  contact: IContactInfo;
}

class Informations extends React.Component<IProps & WithStyles<ClassNames>> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const props = this.props;

    return (
      <div>
        <Avatar className={props.classes.phoneAvatar}>
          <Icon className={props.classes.phoneIcon}>phone_android</Icon>
        </Avatar>
        <Avatar className={props.classes.emailAvatar}>
          <Icon className={props.classes.emailIcon}>email</Icon>
        </Avatar>
      </div>
    );
  }
}

export default withStyles(styles)<IProps>(Informations);
