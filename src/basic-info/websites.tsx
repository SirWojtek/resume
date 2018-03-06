import * as React from 'react';

import { IWebsites } from '../model/types';

interface IProps {
  websites: IWebsites;
}

export default class Websites extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return 'Websites';
  }
}
