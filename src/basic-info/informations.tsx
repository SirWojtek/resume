import * as React from 'react';

import { IContactInfo } from '../model/types';

interface IProps {
  contact: IContactInfo;
}

export default class Informations extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return 'Informations';
  }
}
