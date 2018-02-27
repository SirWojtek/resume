import * as React from 'react';

import Card, { CardHeader } from 'material-ui/Card';
import CardContent from 'material-ui/Card';

export class BasicInfo extends React.Component {
  render() {
    return (
      <Card className="basic-info-card">
        <CardHeader title="Basic Informations"></CardHeader>
        <CardContent>
          Basic information content
        </CardContent>
      </Card>
    );
  }
}

