import React from 'react';
import { UPLOAD_FILE, UPLOAD_FILE_STREAM } from '../../../graphql/Queries';
import { ApolloProvider, Mutation } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { ApolloClient } from 'apollo-client';
const uploadLink = createUploadLink({
  uri: 'http://localhost:4000/graphql', // Apollo Server is served from port 4000
  headers: {
    'keep-alive': 'true',
  },
});
const apolloCache = new InMemoryCache();
const client = new ApolloClient({
  cache: apolloCache,
  link: uploadLink,
});

const Upload = () => {
  return (
    <div>
      <ApolloProvider client={client}>
        <header className='App-header'>
          <h2>Save Local</h2>
          <Mutation mutation={UPLOAD_FILE}>
            {(singleUpload, { data, loading }) => {
              return (
                <form
                  onSubmit={() => {
                    console.log('Submitted');
                  }}
                  encType={'multipart/form-data'}
                >
                  <input
                    name={'document'}
                    type={'file'}
                    onChange={({ target: { files } }) => {
                      const file = files[0];
                      file && singleUpload({ variables: { file: file } });
                    }}
                  />
                  {loading && <p>Loading.....</p>}
                </form>
              );
            }}
          </Mutation>
          <h2>Stream to Server</h2>
          <Mutation mutation={UPLOAD_FILE_STREAM}>
            {(singleUploadStream, { data, loading }) => {
              console.log(data);

              return (
                <form
                  onSubmit={() => {
                    console.log('Submitted');
                  }}
                  encType={'multipart/form-data'}
                >
                  <input
                    name={'document'}
                    type={'file'}
                    onChange={({ target: { files } }) => {
                      const file = files[0];
                      file && singleUploadStream({ variables: { file: file } });
                    }}
                  />
                  {loading && <p>Loading.....</p>}
                </form>
              );
            }}
          </Mutation>
        </header>
      </ApolloProvider>
    </div>
  );
};

export default Upload;
