import Image from 'next/image';
import React, { FunctionComponent, ReactElement } from 'react';

export const GraphView: FunctionComponent = (): ReactElement => (
  <div className='m-2'>
    <Image src={`/assets/images/graph.svg`} width={836} height={368} alt='graph img' />
  </div>
);
