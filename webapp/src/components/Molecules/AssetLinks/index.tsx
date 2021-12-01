import * as React from 'react';
import Image from 'next/image';
import { Link } from '@atoms';
import { PathsTypes, SocialMediaTypes } from '@interfaces';

export interface IAssetLinksProps {
  paths: PathsTypes<SocialMediaTypes>;
}

export const AssetLinks: React.FunctionComponent<IAssetLinksProps> = ({ paths }) => (
  <div className='flex justify-end flex-nowrap'>
    {Object.values(paths).map((path, i: number) => {
      if (path) {
        return (
          <Link href={path} key={i} classnames='mx-1'>
            <Image src={`/assets/images/icons/${Object.keys(paths)[i]}.svg`} width='16' height='16' alt={`${Object.keys(paths)[i]} icon`} key={i} />
          </Link>
        );
      }
      return;
    })}
  </div>
);
