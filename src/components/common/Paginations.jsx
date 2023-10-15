import React, { useState } from 'react';
import { Pagination } from 'rsuite';

function Paginations() {

  
  const [activePage, setActivePage] = React.useState(1);

  return (
    <div >
        <Pagination
        prev
        last
        next
        first
        size="md"
        total={100}
        limit={10}
        activePage={activePage}
        onChangePage={setActivePage}
      />
    </div>
  )
}

export default Paginations
