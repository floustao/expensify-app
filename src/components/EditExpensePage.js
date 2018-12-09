import React from 'react';

const EditExpensePage = (props) => (
  <div>
    Editing expense #{props.match.params.id}
  </div>
);

export default EditExpensePage;