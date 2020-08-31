import React from 'react';
import { useQuery, gql } from '@apollo/client';
import CustomNavbar from 'components/universal/custom_navbar';
import Row from 'react-bootstrap/Row';
import Loading from 'components/universal/loading';
import { useParams } from 'react-router-dom';
import CustomCard from 'components/universal/custom_card';

const SIGNED_IN_USER = gql`
  query userdata($userName: String) {
    userData(userName: $userName) {
      userName
      existsInDB
      synchronizations {
        geniusID
        searchResult {
          topText
          bottomText
          imgUrl
          forwardingUrl
        }
      }
    }
  }
`;
export default function Profile() {
  const { userName } = useParams();
  const { data: { userData } = {}, loading } = useQuery(SIGNED_IN_USER, {
    variables: { userName },
  });

  if (loading) {
    return <Loading centered />;
  }
  if (userData && !userData.existsInDB) {
    return <p>Couldn't find user</p>;
  }
  return (
    <>
      <CustomNavbar />
      <CustomCard>
        <Row style={{ justifyContent: 'center' }}>
          <p> {userName} </p>
        </Row>
        <Row style={{ justifyContent: 'center' }}>{userData && userData.synchronizationData.length ? <p>This user has not created any synchronizations</p> : <p>Synchronizations</p>}</Row>
      </CustomCard>
    </>
  );
}
