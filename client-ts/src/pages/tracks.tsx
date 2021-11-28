import React from 'react';
import Layout from '../components/layout';
import {useQuery, gql} from '@apollo/client';
import TrackCard from '../containers/track-card';
import { TrackForHome } from '../interfaces/tracks'

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
/** TRACKS query to retrieve all tracks */
export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        photo
      }
    }
  }
`;
function Tracks() {
  const {loading, error, data} = useQuery<TrackForHome>(TRACKS);
  if (loading) 
    return (<div>'Loading...'</div>);
  if (error) 
    return <div>Error! ${error.message}</div>;
  return ( 
    <Layout grid>
    {data?.tracksForHome?.map(track => (
    <TrackCard key={track.id} track={track} />
  ))}
  </Layout>);
};


export default Tracks;
