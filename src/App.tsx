/* eslint-disable no-promise-executor-return */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {AutoSizer, InfiniteLoader, Table, Column} from 'react-virtualized';
import { generateFakeData } from './utils';

function App() {
  const [rows,setRows]=useState(generateFakeData(200));
  const handleIsRowLoaded = ({ index }: { index: number }) => !!rows[index]

  const handleLoadMoreRows=()=>new Promise((resolve)=>resolve([1,2,3]))

  return (
    <div>
      <InfiniteLoader
        isRowLoaded={handleIsRowLoaded}
        loadMoreRows={handleLoadMoreRows}
        rowCount={rows.length}
      >
        {({ onRowsRendered, registerChild }) => (
          <AutoSizer>
            {({ width }) => (
              <Table
                ref={registerChild}
                onRowsRendered={onRowsRendered}
                rowClassName="table-row"
                headerHeight={40}
                width={width}
                rowHeight={40}
                height={400}
                rowCount={rows.length}
                rowGetter={({ index }) => rows[index]}
              >
                <Column label="Id" dataKey="id" width={width * 0.2} />
                <Column dataKey="name" label="Name" width={width * 0.2} />
                <Column
                  label="Last Name"
                  dataKey="lastName"
                  width={width * 0.2}
                />
              </Table>
            )}
          </AutoSizer>
        )}
      </InfiniteLoader>
    </div>
  )
}

export default App;