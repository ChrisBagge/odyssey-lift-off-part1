import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Layout from '../components/layout';
import QueryResult from '../components/query-result';
import { useParams } from 'react-router-dom';
import TrackDetail from '../components/track-detail'

type RouteParams = {
  trackId?: string,
}

export const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      numberOfViews
      modules {
        id
        title
        length
      }
      description
    }
  }
`;

const Track = () => {
  const params: RouteParams = useParams();
  //const { trackId } = useParams<{ trackId: string }>();
  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: { trackId: params.trackId }
  });

  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};
export default Track;