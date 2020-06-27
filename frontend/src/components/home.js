import React, {useState,  useEffect} from 'react';
import SearchResultForm from './search_results_form'
import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks';
const QUERY = gql`
query geniussearchresults($query: String){
  geniusSearchResults(query: $query){
    id 
    imgUrl
    text
    isYoutube
  }
}`
export default function Home() {
  //input of the form, passed to the form but declared here as required for checking if data needs to be fetched
  const [input, setInput] = useState('');


  const {data, loading} = useQuery(QUERY, {
    variables: {query: input},
    skip: input === ''
  });

  //forwarded to the text input
  const formRef = useRef(null)

  return (
    <SearchResultForm ref = {formRef} results={data ? data.geniusSearchResults : undefined} input={input} setInput={setInput} formText={"Search for an artist and/or song or enter YouTube URL"} loading={loading} />
  )
}
