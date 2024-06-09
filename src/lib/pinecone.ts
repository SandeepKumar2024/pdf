import { PineconeClient } from '@pinecone-database/pinecone'

export const getPineconeClient = async () => {
  const client = new PineconeClient()

  await client.init({
    apiKey: "b364b87d-5ee7-4400-8716-e950ed7798f6",
    environment: 'us-east1-gcp',
  })

  return client
}
